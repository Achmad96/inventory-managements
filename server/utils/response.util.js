const response = (res, statusCode, message, data = undefined) => {
  res.status(statusCode).json({
    data,
    success: statusCode >= 200 && statusCode < 300,
    status: statusCode,
    message
  });
};

module.exports = { response };
