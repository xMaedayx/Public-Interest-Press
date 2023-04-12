const router = require('express').Router();
const { NewArticle } = require('../../models');
const withAuth = require('../../utils/auth');

router.post("/", async (req, res) => {
    try {
        const dbPostData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            author_id: req.body.author_id,
        });
        return res.status(200).json(dbPostData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

