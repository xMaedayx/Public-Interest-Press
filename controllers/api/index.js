const router = require('express').Router();
const userRoutes = require('./userRoutes');
const articleRoutes = reqruire('./articleRoutes.js');
const tipsRoutes = reqruire('./tipsRoutes.js');

router.use('/Users', userRoutes);
router.use('/Article', articleRoutes);
router.use('/Tips', tipsRoutes);


module.exports = router;
