const express = require('express');
const {
	getPosts,
	getPost,
	createPost,
} = require('../controllers/postController');
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
module.exports = router;
