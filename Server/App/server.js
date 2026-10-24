import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import adminRoutes from "./Routes/Admin/adminRoutes.js";
import userRoutes from "./Routes/User/userRoutes.js";
import dbConnection from "./Config/db.js";

import authRoutes from "./Routes/User/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json());

// Basic API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "QuizMaster API is running!",
  });
});

// Routes
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

// Unknown route handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

const startServer = async () => {
  try {
    await dbConnection();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();