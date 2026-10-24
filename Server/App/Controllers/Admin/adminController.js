export const getAdminHome = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to QuizMaster admin API",
    features: [
      "Create quizzes",
      "Manage questions",
      "View quiz results",
    ],
  });
};