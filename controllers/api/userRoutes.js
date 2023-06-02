const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
      
      console.log(req.body)
      const userData = await User.create(req.body);

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { name: req.body.name } });
    
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const realUser = userData.get({ plain: true })
    console.log(realUser)
    console.log(req.body.password)

    const validPassword = await userData.checkPassword(req.body.password);

    console.log(validPassword)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// destroys the session
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
  