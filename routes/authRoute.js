const express = require('express');
const route = express.Router();
const authController = require('../controller/authapi');


route.post('/signup',authController.signupUser)
route.post('/login', authController.loginUser)

exports.route = route;