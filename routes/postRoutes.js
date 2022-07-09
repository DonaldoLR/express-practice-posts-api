const express = require('express');
const {
	getPosts,
	getPost,
	createPost,
	updatePost,
} = require('../controllers/postController');
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
module.exports = router;
