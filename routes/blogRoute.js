const express = require('express');
const route = express.Router();
const blogapi = require('../controller/blogapi')

route.post('/createblog', blogapi.createBlog);
route.get('/takeblog', blogapi.takeBlog);

exports.route = route;