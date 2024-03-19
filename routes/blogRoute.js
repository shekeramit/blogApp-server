const express = require('express');
const route = express.Router();
const blogapi = require('../controller/blogapi')

route.post('/creteblog', blogapi.createBlog);

exports.route = route;