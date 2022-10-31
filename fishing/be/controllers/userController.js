const { registerUser, authUser } = require('../services/auth');

const userLogin = async (req, res, next) => {
  const { user, password } = req.body;
  next(await authUser({ user, password }).catch(next));
};

const createUser = async (req, res, next) => {
  const { user, password } = req.body;
  next(await registerUser({ user, password }).catch(next));
};

module.exports = { userLogin, createUser };
