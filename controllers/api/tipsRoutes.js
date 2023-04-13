const router = require('express').Router();
const { Tips } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newTips = await Tips.create({
        title: req.body.title,
        content: req.body.content,
        author_id: req.body.author_id,
      });
  
      res.status(200).json(newTips);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // router.post("/", withAuth, async (req, res) => {
  //   try {
  //     // Get the post data from the request body
  //     const { title, content } = req.body;
  
  //     // Create a new post record in the database
  //     const newTips = await Tips.create({
  //       title,
  //       content,
  //       // Set the user ID to the currently logged in user
  //       author_id: req.session.author_id,
  //     });
  
  //     res.status(201).json(newTips);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const tipsData = await Tips.destroy({
        where: {
          id: req.params.id,
          author_id: req.session.author_id,
        },
      });
  
      if (!tipsData) {
        res.status(404).json({ message: 'No tip found with this id!' });
        return;
      }
  
      res.status(200).json(tipsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

 

  module.exports = router;