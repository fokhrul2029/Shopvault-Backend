/**
 * Sends a standardized response to the client.
 *
 * @param {Object} res - Express response object.
 * @param {number} statusCode - HTTP status code (e.g., 200, 400, 500).
 * @param {string} message - Message to describe the response.
 * @param {Object} [data] - Optional data to include in the response.
 * @param {Object} [error] - Optional error information to include in the response.
 */
const sendResponse = (res, statusCode, message, data = null, error = null) => {
  const response = {
    status: statusCode >= 200 && statusCode < 300 ? "success" : "error",
    message,
    ...(data && { data }),
    ...(error && { error }),
  };

  res.status(statusCode).json(response);
};

module.exports = sendResponse;

// ---- res, statusCode , message , data , error.message ---
