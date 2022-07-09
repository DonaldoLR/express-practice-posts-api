const Post = require('../models/post');
const mongoose = require('mongoose');

// CREATE
const createPost = async (req, res) => {
	const { title, body } = req.body;

	const newPost = await Post.create({ title, body });

	if (!newPost) {
		return res.status(500).json({ error: 'Unable to create new post' });
	}

	res.status(200).json(newPost);
};
// GET ALL
const getPosts = async (req, res) => {
	const posts = await Post.find({}).sort({ createdAt: -1 });
	res.status(200).json(posts);
};
// GET SINGLE
const getPost = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Post ID is not valid' });
	}

	const singlePost = await Post.findById(id);

	if (!singlePost) {
		return res.status(500).json({ error: 'Unable to find post' });
	}

	res.status(200).json(singlePost);
};
// UPDATE
const updatePost = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Post ID is not valid' });
	}

	const updatedPost = await Post.findByIdAndUpdate(id, { ...req.body });

	if (!updatedPost) {
		return res.status(500).json({ error: 'Unable to update post' });
	}

	res.status(200).json({ message: 'Post updated', updatedPost });
};
// DELETE
const deletePost = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Post ID is not valid' });
	}

	const deletedPost = await Post.findByIdAndDelete(id);

	if (!deletedPost) {
		return res.status(500).json({ error: 'Unable to delete post' });
	}

	res.status(200).json({ message: 'Post deleted', deletedPost });
};

module.exports = {
	createPost,
	getPosts,
	getPost,
	updatePost,
	deletePost,
};
