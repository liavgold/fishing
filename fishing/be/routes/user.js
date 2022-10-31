const express = require('express');

const router = express.Router();
const { userLogin, createUser } = require('../controllers/userController');
const { linkGenerator } = require('../controllers/linkController');

router.post('/login', userLogin);

router.post('/signup', createUser);

router.get('/link', linkGenerator);

module.exports = router;
