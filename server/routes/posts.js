import express from 'express';

import { getUserPosts, addComment, getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.get('/:id', getPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/addComment', auth, addComment)

router.get('/profile', getUserPosts)

export default router;