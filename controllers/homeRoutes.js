const router = require('express').Router();
const { Post, User } = require('../models');
//const withAuth = require('../utils/auth');










router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    //res.render('login');
  });

  module.exports = router;