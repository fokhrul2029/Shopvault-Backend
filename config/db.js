const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB Atlas connection URI from environment variables
const uri = process.env.MONGO_URI;

// Options for Mongoose connection
const options = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // serverApi: {
  //   version: "1", // Stable API version
  //   strict: true,
  //   deprecationErrors: true,
  // },
};

// Connect to MongoDB using Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(uri, options);
    // console.log('Connected to MongoDB successfully using Mongoose!');
  } catch (error) {
    // console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
