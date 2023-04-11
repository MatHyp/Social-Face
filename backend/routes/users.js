import express from "express";
import { getUser, getUsers, followUser } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//  READ
router.get("/:id", getUser);
router.get("/", getUsers);
router.patch("/follow", followUser);

export default router;
