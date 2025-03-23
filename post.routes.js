const express = require('express');
const router = express.Router();
const postController = require('./post.controller');

router.post('/', postController.createPost);
router.get('/', postController.getPostsByUser);

module.exports = router;
