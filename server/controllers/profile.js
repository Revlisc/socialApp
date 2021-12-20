import express from 'express';
import mongoose from 'mongoose';

import UserModel from "../models/user.js";

const router = express.Router();

export const updateBio = async (req, res) => {
    const { id: _id } = req.params;
    const biography = req.body

    const updatedBio = await UserModel.findByIdAndUpdate(_id, biography, { new: true})

    res.json(updatedBio)
}

export default router