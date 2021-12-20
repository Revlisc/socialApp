import express from 'express';

import { updateBio } from '../controllers/profile.js';

const router = express.Router();

router.patch('/:id', updateBio);


//router.get('/profile', getUserPosts)getUserPosts, 

export default router;