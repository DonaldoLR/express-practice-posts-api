const express = require('express');
const { getPosts, getPost } = require('../controllers/postController');
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
module.exports = router;
