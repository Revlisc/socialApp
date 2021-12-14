import express from "express";
const router = express.Router();

import { signin, signup, updateBio } from "../controllers/users.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/bio", updateBio)

export default router;