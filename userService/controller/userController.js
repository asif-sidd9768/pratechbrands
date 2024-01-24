const jwt = require("jsonwebtoken")
const User = require("../model/User");
const ExpressError = require("../utils/expressError");
const { connectToRabbitMQ } = require("../utils/messageBroker");
let userWithOrders

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new ExpressError("username, email, and password are required", 404)
  }
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existingUser) {
    throw new ExpressError("username or email already exists", 409)
  }
  const newUser = new User({ username, email, password });
  await newUser.save();

  const userResponse = newUser.toObject();
  delete userResponse.password;

  res.status(201).json({ message: 'Signup successful', user: userResponse });
}

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await user.comparePassword(password))) {
    throw new ExpressError("Invalid username or password", 404)
  }

  const token = jwt.sign({ userId: user._id, username: user.username }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });

  const userResponse = user.toObject();
  delete userResponse.password;

  res.json({ token, user: userResponse });
}

const getUserById = async (req, res) => {
  const {userId} = req.params
  const user = await User.findById(userId);

  if (!user) {
    throw new ExpressError("User not found", 404)
  }

  const userResponse = user.toObject();
  delete userResponse.password;

  res.json({message: "Found user", user: userResponse})
}

const retrieveUserOrders = async (req, res) => {
  const { userId } = req.user
  let orders
  const channel = await connectToRabbitMQ()

  await channel.sendToQueue("checkout_detail_queue", Buffer.from(JSON.stringify(userId)));
  await channel.consume("user_orders_detail_queue", (data) => {
    const orderList = JSON.parse(data.content)
    orders = orderList
    userWithOrders = orderList
    channel.ack(data)
  })

  while (!orders) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 1 second before checking status again
    orders = userWithOrders
  }

  return res.json({message: "Successfully retrieved the orders", orders })
}

module.exports = {
  signup,
  login,
  getUserById,
  retrieveUserOrders
}