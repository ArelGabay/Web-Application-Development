const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');

router.post('/', postController.createPost);
router.get('/', postController.getPosts); // Supports filtering by query
router.get('/:id', postController.getPostById);

module.exports = router;



