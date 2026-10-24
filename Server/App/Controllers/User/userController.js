export const getUserHome = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to QuizMaster user API",
    features: [
      "Browse quizzes",
      "Attempt quizzes",
      "View quiz history",
    ],
  });
};