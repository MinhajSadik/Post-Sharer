import express from "express";
import { createPost, getPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPost);
router.get("/", createPost);

export default router;
