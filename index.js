const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const productRouter = require("./routes/productRouter");
const sendResponse = require("./utilities/sendResponse");
const errorHandler = require("./middleware/errorHandler");

// Database Connection
connectDB();

// Middleware
app.use(cors());

// Test Router
app.use("/api/products", productRouter);

// 404 Error Handling Middleware for undefined routes
app.use((req, res) => {
  sendResponse(res, 404, "Resource Not Found");
});

// Global Error Handling Middleware
app.use(errorHandler);

app.listen(port, () => console.log("App is Running on " + port));
