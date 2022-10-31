const express = require('express');

const router = express.Router();

const userRoute = require('./user');

// v1 routes
router.use('/', userRoute);
router.use((result, req, res, next) => {
  if (result instanceof Error) {
    return next(result);
  }
  return res.json(result);
});

module.exports = router;
