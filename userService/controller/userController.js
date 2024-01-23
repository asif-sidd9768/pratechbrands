const jwt = require("jsonwebtoken")
const User = require("../model/User");
const ExpressError = require("../utils/expressError")

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new ExpressError("username, email, and password are required", 404)
  }
  // Check if the user already exists
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existingUser) {
    throw new ExpressError("username or email already exists", 409)
  }
  // Create a new user
  const newUser = new User({ username, email, password });

  // Save the user to the database
  await newUser.save();

  // Exclude the password from the response
  const userResponse = newUser.toObject();
  console.log(newUser)
  delete userResponse.password;

  res.status(201).json({ message: 'Signup successful', user: userResponse });
}

const login = async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = await User.findOne({ username });

  // If the user does not exist, or if the password is incorrect, return an error
  if (!user || !(await user.comparePassword(password))) {
    throw new ExpressError("Invalid username or password", 404)
  }

  // If the username and password are correct, generate a JWT token
  const token = jwt.sign({ userId: user._id, username: user.username }, process.env.SECRET_KEY, {
    expiresIn: '1h', // Set the token expiration time
  });

  // Exclude the password from the response
  const userResponse = user.toObject();
  delete userResponse.password;

  // Return the token and user data in the response
  res.json({ token, user: userResponse });
}

const getUserById = async (req, res) => {
  const {userId} = req.params
  // Find the user by username
  const user = await User.findById(userId);

  if (!user) {
    throw new ExpressError("User not found", 404)
  }

  const userResponse = user.toObject();
  delete userResponse.password;

  res.json({message: "Found user", user: userResponse})
}

module.exports = {
  signup,
  login,
  getUserById
}