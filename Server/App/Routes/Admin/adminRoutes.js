import express from "express";
import { getAdminHome } from "../../Controllers/Admin/adminController.js";
import { adminOnly, protect } from "../../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, adminOnly, getAdminHome);

export default router;