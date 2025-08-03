import express from 'express';
import { createPost, getAllPosts, getUserPosts } from '../controllers/post.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();
router.get('/', getAllPosts);
router.get('/user/:id', getUserPosts);
router.post('/', protect, createPost);

export default router;
