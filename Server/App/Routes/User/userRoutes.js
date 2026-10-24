import express from "express";
import { getUserHome } from "../../Controllers/User/userController.js";
import { protect } from "../../Middleware/authMiddleware.js";

const router = express.Router();
router.get("/", protect, getUserHome);

export default router;