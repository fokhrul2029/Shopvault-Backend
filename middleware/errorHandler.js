// Global Error Handling Middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    // If you don't want to expose the error stack trace in production, remove it
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = errorHandler;
