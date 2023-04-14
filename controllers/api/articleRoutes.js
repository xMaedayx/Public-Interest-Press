const router = require('express').Router();
const { Article } = require('../../models');
const withAuth = require('../../utils/auth');

const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // specify the folder where the uploaded file will be stored
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + '-' + file.originalname; // generate a unique file name
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('fileUpload'), async (req, res) => {
  console.log(req.body);
  try {
    const newArticle = await Article.create({
      title: req.body["article-title"],
      content: req.body["article-content"],
      img: req.file.filename,
      user_id: req.session.user_id,
    });

    res.status(200).json(newArticle);
  } catch (err) {
    res.status(400).json(err);
  }
});


  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const articleData = await Article.destroy({
        where: {
          id: req.params.id,
          author_id: req.session.author_id,
        },
      });
  
      if (!articleData) {
        res.status(404).json({ message: 'No article found with this id!' });
        return;
      }
  
      res.status(200).json(articleData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  module.exports = router;