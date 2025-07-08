const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");

// Database Connection
// connectDB();

// Middleware
app.use(cors());

// Test Router

app.get("/", (req, res) => {
  res.json({ text: "Hello" });
});

app.listen(port, () => console.log("App is Running on " + port));
