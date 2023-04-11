const router = require('express').Router();
const { Article, User } = require('../models');
const withAuth = require('../utils/auth.js');

router.get('/', async (req, res) => {
  try {
    const articleData = await Article.findAll({
      include: [
        {
          model: Article,
          attributes: ['content'],
        },
      ],
    });

    const articles = articleData.map((article) => article.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      articles, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/article/:id', async (req, res) => {
  try {
    const articleData = await Article.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['content'],
        },
      ],
    });

    const article = articleData.get({ plain: true });

    res.render('article', {
      ...article,
      title: article.title,
      content: article.content,
      user: article.User,
      // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.author_id, {
      attributes: { exclude: ['password'] },
      // need to change the article model to article
      include: [{ model: Article }],
    });

    const user = userData.get({ plain: true });
    //need profile.handlebars in view folder
    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
