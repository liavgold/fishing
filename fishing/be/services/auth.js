const { v1: uuidv1 } = require('uuid');
const bcrypt = require('bcryptjs');
const createError = require('http-errors');
const generateToken = require('../generateToken');
const db = require('../models');

const User = db.user;
const salt = bcrypt.genSaltSync(10);

const registerUser = async ({ user, password }) => {
  if (!user || !password) {
    return createError(400, 'Please enter user and password');
  }

  const userExists = await User.find({ user_name: user }).first();

  if (userExists) {
    return createError(400, 'User already exists please login');
  }

  const hashPassword = await bcrypt.hash(`${password}`, salt);
  const accountId = uuidv1();
  const token = generateToken(accountId);

  await User.insert({ user_name: user, user_password: hashPassword, userId: accountId });

  return token;
};

const authUser = async ({ user, password }) => {
  if (!user || !password) {
    return createError(400, 'Please Enter user & password ');
  }

  const account = await User.find({ user_name: user });

  if (!account) {
    return createError(401, 'User not exist, please register');
  }
  if (!await bcrypt.compare(`${password}`, `${account.user_password}`)) {
    throw new Error('Password incorrect');
  }
  return generateToken(account.userId);
};

module.exports = { registerUser, authUser };
