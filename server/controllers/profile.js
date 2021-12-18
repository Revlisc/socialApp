import express from 'express';
import mongoose from 'mongoose';

import UserModel from "../models/user.js";

const router = express.Router();

export default updateBio = async (req, res) => {
    const { id: _id } = req.params;
    const bio = req.body
    
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`);

    //const updatedPost = { creator, title, message, tags, _id: id };

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedPost);
}

export default router