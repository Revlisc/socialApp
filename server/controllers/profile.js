import express from 'express';
import mongoose from 'mongoose';

import UserModel from "../models/user.js";

const router = express.Router();

export const updateBio = async (req, res) => {
    const { id: _id } = req.params;
    const biography = req.body
    console.log('the req.body is', req.body)

    


    const updatedBio = await UserModel.findByIdAndUpdate(_id, biography)
    console.log('the updated bio is')
    await UserModel.save()
    res.json(updatedBio)
}

export default router