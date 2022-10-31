const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  if (err.statusCode) {
    statusCode = err.statusCode;
  }

  res.status(statusCode);

  if (statusCode === 500) {
    res.json({ error: 'An unexpected error has occurred.', status: 'failed' });
  } else {
    res.json({ error: err.message, status: 'failed', ...err.custom_error });
  }

  next();
};

module.exports = errorHandler;
