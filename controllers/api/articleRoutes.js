const router = require('express').Router();
const { Article } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newArticle = await Article.create({
        ...req.body,
        author_id: req.session.author_id,
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

  $('#upload-button').on('click', function() {
    var fileInput = $('#file-input')[0];
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file', file);

    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data) {
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  });
});

  module.exports = router;