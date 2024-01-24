const products = [
  {
    id: "65ae249e51c61dcc4efb00d5",
    title: "Turquoise Beaded Bracelet",
    price: 35,
    description: "Add a pop of color to your wrist with this turquoise beaded bracelet. The bohemian-inspired design and natural stones make it a stylish accessory.",
    category: "Jewelry",
    createdAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    __v: 0
  },
  {
    id: "65ae249e51c61dcc4efb00d6",
    title: "Canvas Slip-On Sneakers",
    price: 35,
    description: "Step into comfort and style with these canvas slip-on sneakers. Easy to wear and versatile, they're a casual essential for any wardrobe.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    __v: 0
  },
  {
    id: "65ae249e51c61dcc4efb00d7",
    title: "Smart Thermostat",
    price: 100,
    description: "Upgrade your home with this smart thermostat. Control the temperature from your phone and save energy with intelligent climate management.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    __v: 0
  },
  {
    id: "65ae249e51c61dcc4efb00d8",
    title: "Vintage-Inspired Jumpsuit",
    price: 80,
    description: "Make a fashion statement with this vintage-inspired jumpsuit. The retro design and flattering silhouette make it a standout piece in your wardrobe.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    __v: 0
  },
  {
    id: "65ae249e51c61dcc4efb00d4",
    title: "Rustic Farmhouse Dining Table",
    price: 550,
    description: "Gather around this rustic farmhouse dining table. The distressed wood and robust construction add a touch of country charm to your dining space.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    __v: 0
  },
  {
    id: "65ae249e51c61dcc4efb00da",
    title: "Moonstone Drop Earrings",
    price: 45,
    description: "Add a touch of mystique with these moonstone drop earrings. The iridescent stones and delicate design make them a captivating accessory.",
    category: "Jewelry",
    createdAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    __v: 0
  },
  {
    id: "65ae249e51c61dcc4efb00dc",
    title: "Wireless Charging Dock",
    price: 45,
    description: "Simplify your charging setup with this wireless charging dock. Charge multiple devices simultaneously with convenience and style.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    __v: 0
  },
  {
    id: "65ae249e51c61dcc4efb00d9",
    title: "Contemporary Sectional Sofa",
    price: 850,
    description: "Transform your living space with this contemporary sectional sofa. The modular design and plush upholstery provide both style and comfort.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    __v: 0
  },
  {
    id: "65ae249e51c61dcc4efb00db",
    title: "Classic Leather Loafers",
    price: 70,
    description: "Step out in timeless sophistication with these classic leather loafers. The quality craftsmanship and versatile design make them a wardrobe staple.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:17:34.193Z"
    },
    __v: 0
  },
  {
    id: "65ae249e51c61dcc4efb00d3",
    title: "Bohemian Maxi Dress",
    price: 70,
    description: "Embrace bohemian vibes with this flowing maxi dress. The vibrant patterns and relaxed silhouette make it a perfect choice for summer days.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T08:17:34.192Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:17:34.192Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea450e",
    title: "Diamond Pendant Necklace",
    price: 350,
    description: "Elevate your look with this stunning diamond pendant necklace. A timeless piece that adds a touch of elegance to any ensemble.",
    category: "Jewelry",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea450f",
    title: "Running Shoes",
    price: 80,
    description: "Achieve your fitness goals with these comfortable and supportive running shoes. Designed for performance and style.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4510",
    title: "Smart LED TV",
    price: 500,
    description: "Bring entertainment to a new level with this smart LED TV. Enjoy vibrant colors and seamless streaming for an immersive viewing experience.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4511",
    title: "Leather Biker Jacket",
    price: 120,
    description: "Add a touch of edge to your wardrobe with this leather biker jacket. A timeless piece that exudes cool and rebellious style.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4512",
    title: "Modern Coffee Table",
    price: 120,
    description: "Transform your living room with this modern coffee table. The geometric design and ample storage make it a functional and stylish centerpiece.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea450c",
    title: "Denim Jacket",
    price: 55,
    description: "Stay stylish and casual with this classic denim jacket. Perfect for cool evenings and versatile enough to pair with any outfit.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea450d",
    title: "Mid-Century Modern Sofa",
    price: 650,
    description: "Upgrade your living room with this mid-century modern sofa. The tufted upholstery and sleek design add a touch of retro charm to your space.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4515",
    title: "Wireless Bluetooth Speaker",
    price: 70,
    description: "Enhance your music experience with this wireless Bluetooth speaker. Compact and powerful, it delivers clear and dynamic sound.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4517",
    title: "Mid-Century Nightstand",
    price: 85,
    description: "Complete your bedroom with this mid-century nightstand. The sleek design and ample storage make it a practical and stylish bedside companion.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4516",
    title: "Striped Sweater Dress",
    price: 65,
    description: "Stay cozy and chic with this striped sweater dress. A versatile piece that can be dressed up or down for various occasions.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4518",
    title: "Pearl Bracelet",
    price: 55,
    description: "Accessorize with elegance using this pearl bracelet. The timeless design and lustrous pearls make it a classic addition to your jewelry collection.",
    category: "Jewelry",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea451a",
    title: "4K UHD Smart TV",
    price: 800,
    description: "Immerse yourself in stunning visuals with this 4K UHD smart TV. Enjoy a cinematic experience from the comfort of your home.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4519",
    title: "High-Top Sneakers",
    price: 75,
    description: "Stay on-trend with these stylish high-top sneakers. The perfect blend of fashion and comfort for your casual outings.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea451b",
    title: "Quilted Puffer Jacket",
    price: 95,
    description: "Stay warm and fashionable in this quilted puffer jacket. The sleek design and insulation make it perfect for colder weather.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea451d",
    title: "Silver Hoop Earrings",
    price: 40,
    description: "Complete your look with these silver hoop earrings. A versatile and classic accessory that adds a touch of shine to any ensemble.",
    category: "Jewelry",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea451c",
    title: "Velvet Chaise Lounge",
    price: 320,
    description: "Create a luxurious space with this velvet chaise lounge. The elegant design and plush upholstery make it a statement piece in any room.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea451e",
    title: "Classic Loafers",
    price: 60,
    description: "Step out in timeless style with these classic loafers. The comfortable design and versatile look make them a wardrobe staple.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea451f",
    title: "Wireless Charging Pad",
    price: 30,
    description: "Simplify your charging routine with this wireless charging pad. Compatible with various devices for a hassle-free charging experience.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4520",
    title: "Cashmere Turtleneck Sweater",
    price: 110,
    description: "Stay cozy and stylish in this cashmere turtleneck sweater. A luxurious addition to your winter wardrobe.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4521",
    title: "Industrial Bookshelf",
    price: 180,
    description: "Organize your books and decor with this industrial bookshelf. The metal and wood combination adds an urban and modern touch to your space.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4513",
    title: "Emerald Stud Earrings",
    price: 180,
    description: "Make a statement with these emerald stud earrings. The vibrant green color and classic design make them a versatile addition to your jewelry collection.",
    category: "Jewelry",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4523",
    title: "Canvas Sneakers",
    price: 45,
    description: "Casual and comfortable, these canvas sneakers are perfect for your everyday adventures. A must-have for your footwear collection.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4524",
    title: "Smart Home Security Camera",
    price: 120,
    description: "Ensure the safety of your home with this smart home security camera. Stay connected and monitor your space with ease.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4525",
    title: "Wool Blend Coat",
    price: 150,
    description: "Stay warm in style with this wool blend coat. The classic silhouette and quality craftsmanship make it a timeless winter essential.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4514",
    title: "Suede Ankle Boots",
    price: 90,
    description: "Step out in style with these chic suede ankle boots. The perfect addition to your fall and winter wardrobe.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4528",
    title: "Athletic Running Shoes",
    price: 85,
    description: "Enhance your running experience with these athletic running shoes. Designed for performance and comfort, they're perfect for your active lifestyle.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4527",
    title: "Sapphire and Diamond Ring",
    price: 280,
    description: "Make a statement with this sapphire and diamond ring. The combination of vibrant gemstones and sparkling diamonds creates a stunning piece of jewelry.",
    category: "Jewelry",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4529",
    title: "Wireless Noise-Canceling Headphones",
    price: 150,
    description: "Immerse yourself in your favorite music with these wireless noise-canceling headphones. Enjoy a premium audio experience with enhanced clarity.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4526",
    title: "Modern Dining Chairs (Set of 4)",
    price: 220,
    description: "Upgrade your dining space with this set of modern dining chairs. The sleek design and comfortable seating make them perfect for gatherings.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae24603d6e7293a1ea4522",
    title: "Rose Gold Pendant Necklace",
    price: 90,
    description: "Add a touch of warmth with this rose gold pendant necklace. The delicate design and rosy hue make it a charming accessory.",
    category: "Jewelry",
    createdAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    updatedAt: {
      $date: "2024-01-22T08:16:32.392Z"
    },
    __v: 0
  },
  {
    id: "65ae1bd3006544633606255f",
    title: "Energy-Efficient Refrigerator",
    price: 599.99,
    description: "Modern refrigerator with energy-saving features.",
    category: "Appliances",
    createdAt: {
      $date: "2024-01-22T07:40:03.677Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:40:03.677Z"
    },
    __v: 0
  },
  {
    id: "65ae1bd30065446336062559",
    title: "Wireless Headphones",
    price: 149.99,
    description: "Premium wireless headphones with noise-cancellation.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    __v: 0
  },
  {
    id: "65ae1bd3006544633606255a",
    title: "Smartwatch",
    price: 199.99,
    description: "Feature-packed smartwatch with fitness tracking.",
    category: "Wearables",
    createdAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    __v: 0
  },
  {
    id: "65ae1bd3006544633606255b",
    title: "Professional DSLR Camera",
    price: 499.99,
    description: "High-quality DSLR camera for photography enthusiasts.",
    category: "Cameras",
    createdAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    __v: 0
  },
  {
    id: "65ae1bd3006544633606255c",
    title: "Smart TV",
    price: 799.99,
    description: "High-definition smart TV with built-in streaming apps.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    __v: 0
  },
  {
    id: "65ae1bd30065446336062557",
    title: "Smartphone",
    price: 599.99,
    description: "High-end smartphone with advanced features.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    __v: 0
  },
  {
    id: "65ae1bd30065446336062558",
    title: "Laptop",
    price: 999.99,
    description: "Powerful laptop for work and gaming.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    __v: 0
  },
  {
    id: "65ae1bd3006544633606255e",
    title: "Gaming Console",
    price: 399.99,
    description: "Next-gen gaming console for immersive gaming experiences.",
    category: "Gaming",
    createdAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    __v: 0
  },
  {
    id: "65ae1bd3006544633606255d",
    title: "Tablet",
    price: 299.99,
    description: "Compact tablet for productivity and entertainment.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:40:03.676Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041db",
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T07:34:34.534Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.534Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041dc",
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T07:34:34.534Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.534Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041dd",
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T07:34:34.534Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.534Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041de",
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T07:34:34.534Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.534Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041df",
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T07:34:34.534Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.534Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041e0",
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T07:34:34.534Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.534Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041d0",
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041d1",
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "Jewelery",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041d2",
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "Jewelery",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041d3",
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "Jewelery",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041d4",
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "Jewelery",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041ce",
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041cf",
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041d7",
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041d9",
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041d8",
    title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041da",
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041d6",
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65ae1a8a61f49cba100041d5",
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "Electronics",
    createdAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    updatedAt: {
      $date: "2024-01-22T07:34:34.533Z"
    },
    __v: 0
  },
  {
    id: "65a971d9ea13de8232a8caf0",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Clothing",
    createdAt: {
      $date: "2024-01-18T18:45:45.500Z"
    },
    updatedAt: {
      $date: "2024-01-18T18:45:45.500Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b4d",
    title: "Sleek Olive Green Hardshell Carry-On Luggage",
    price: 48,
    description: "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
    category: "Miscellaneous",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b4e",
    title: "Chic Transparent Fashion Handbag",
    price: 61,
    description: "Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.",
    category: "Miscellaneous",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b4f",
    title: "Trendy Pink-Tinted Sunglasses",
    price: 38,
    description: "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
    category: "Miscellaneous",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b50",
    title: "string",
    price: 123,
    description: "string",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b52",
    title: "asa",
    price: 50,
    description: "Six",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b54",
    title: "Producto nuevo",
    price: 100,
    description: "Descripción del producto",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b53",
    title: "asa",
    price: 50,
    description: "Six",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b56",
    title: "Producto nuevo",
    price: 100,
    description: "Descripción del producto",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b55",
    title: "Producto nuevo",
    price: 100,
    description: "Descripción del producto",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b57",
    title: "Producto nuevo",
    price: 100,
    description: "Descripción del producto",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b59",
    title: "taras",
    price: 12,
    description: "string",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b58",
    title: "Producto nuevo",
    price: 100,
    description: "Descripción del producto",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b5a",
    title: "popa",
    price: 110,
    description: "wqe",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b5d",
    title: "Jeans",
    price: 300,
    description: "Calça",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b5b",
    title: "Nuevo Prod",
    price: 34,
    description: "super classe produit pour tout le monde vraiment la nickel chrome qsdfkhqsdkf sdfdsf sdf s sdf hqsd",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b5c",
    title: "Nuevo Prod",
    price: 34,
    description: "super classe produit pour tout le monde vraiment la nickel chrome qsdfkhqsdkf sdfdsf sdf s sdf hqsd",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b5e",
    title: "Louis Vuitton Tee",
    price: 10,
    description: "A description",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b51",
    title: "asa",
    price: 50,
    description: "Sx",
    category: "Clothes",
    createdAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.351Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b3b",
    title: "Producto actualizado",
    price: 66,
    description: "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b3c",
    title: "Modern Elegance Teal Armchair",
    price: 25,
    description: "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b3d",
    title: "Elegant Solid Wood Dining Table",
    price: 67,
    description: "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b3e",
    title: "Modern Minimalist Workstation Setup",
    price: 49,
    description: "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b3f",
    title: "Modern Ergonomic Office Chair",
    price: 71,
    description: "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b40",
    title: "Producto actualizado",
    price: 39,
    description: "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b3a",
    title: "Mid-Century Modern Wooden Dining Table",
    price: 24,
    description: "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b39",
    title: "Sleek Modern Leather Sofa",
    price: 53,
    description: "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b45",
    title: "Futuristic Silver and Gold High-Top Sneaker",
    price: 68,
    description: "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b44",
    title: "Vibrant Pink Classic Sneakers",
    price: 84,
    description: "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b43",
    title: "Vibrant Runners: Bold Orange & Blue Sneakers",
    price: 27,
    description: "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b46",
    title: "Futuristic Chic High-Heel Boots",
    price: 36,
    description: "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b47",
    title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    price: 53,
    description: "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b48",
    title: "Elegant Purple Leather Loafers",
    price: 17,
    description: "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b49",
    title: "Classic Blue Suede Casual Shoes",
    price: 39,
    description: "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b4a",
    title: "Sleek Futuristic Electric Bicycle",
    price: 22,
    description: "This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
    category: "Miscellaneous",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b4b",
    title: "Sleek All-Terrain Go-Kart",
    price: 37,
    description: "Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.",
    category: "Miscellaneous",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b41",
    title: "Rainbow Glitter High Heels",
    price: 39,
    description: "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b42",
    title: "Chic Summer Denim Espadrille Sandals",
    price: 33,
    description: "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
    category: "Shoes",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96314d0bd10fa2b503b4c",
    title: "Radiant Citrus Eau de Parfum",
    price: 73,
    description: "Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, it's an olfactory delight that leaves a lasting, zesty impression.",
    category: "Miscellaneous",
    createdAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:44.350Z"
    },
    __v: 0
  },
  {
    id: "65a96307b838425d2e20892f",
    title: "Producto actualizado",
    price: 66,
    description: "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-18T17:42:31.095Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:31.095Z"
    },
    __v: 0
  },
  {
    id: "65a96307b838425d2e208930",
    title: "Modern Elegance Teal Armchair",
    price: 25,
    description: "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    category: "Furniture",
    createdAt: {
      $date: "2024-01-18T17:42:31.095Z"
    },
    updatedAt: {
      $date: "2024-01-18T17:42:31.095Z"
    },
    __v: 0
  }
]

module.exports = products