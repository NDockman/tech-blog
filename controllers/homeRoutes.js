const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
  // Upon entering the website, go to the homepage
  res.render("homepage");
  // On the homepage, show ALL existing blog posts
  res.render("post");
  // When on the homepage and a blog post is clicked, redirect using  res.redirect("/post/:id")
});

//how does this route work? Why is it in homeRoutes?
// router.get('/post/:id', async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         }
//       ]
//     });

//     const post = postData.get({ plain: true });

//     res.render('post', {
//       ...post,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });






router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

  module.exports = router;