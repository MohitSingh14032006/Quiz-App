import { useState } from "react";
import { ArrowLeft, Trophy, Target, Clock3, CheckCircle2, XCircle, ChevronDown, ChevronUp, RotateCcw, BookOpen, CalendarDays} from "lucide-react";
import { Link } from "react-router";
import Navbar from "../common/Navbar";

const quizResult = {
  title: "JavaScript Fundamentals",
  category: "Web Development",
  date: "22 Oct 2026",
  duration: "12 min 40 sec",
  totalQuestions: 5,
  correct: 3,
  incorrect: 2,
  unanswered: 0,
  score: 60,
};

const questions = [
  {
    id: 1,
    question: "Which keyword declares a block-scoped variable in JavaScript?",
    options: ["var", "let", "define", "dim"],
    selectedAnswer: "let",
    correctAnswer: "let",
    explanation:
      "The let keyword declares a variable with block scope. It can be reassigned but cannot be redeclared in the same scope.",
  },
  {
    id: 2,
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.parse()",
      "JSON.object()",
    ],
    selectedAnswer: "JSON.stringify()",
    correctAnswer: "JSON.parse()",
    explanation:
      "JSON.parse() converts a valid JSON string into a JavaScript value or object. JSON.stringify() performs the opposite conversion.",
  },
  {
    id: 3,
    question: "What is the result of typeof null in JavaScript?",
    options: ["null", "undefined", "object", "boolean"],
    selectedAnswer: "object",
    correctAnswer: "object",
    explanation:
      "typeof null returns 'object' because of a historical behavior in JavaScript. This is a well-known language quirk.",
  },
  {
    id: 4,
    question: "Which array method adds an element to the end of an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    selectedAnswer: "push()",
    correctAnswer: "push()",
    explanation:
      "push() appends one or more elements to the end of an array and returns the new array length.",
  },
  {
    id: 5,
    question: "Which symbol is used for strict equality?",
    options: ["=", "==", "===", "!="],
    selectedAnswer: "==",
    correctAnswer: "===",
    explanation:
      "The === operator compares both value and type without performing type coercion.",
  },
];

export default function History() {
  const [expanded, setExpanded] = useState([2]);

  const toggleQuestion = (id) => {
    setExpanded((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const percentage = Math.round(
    (quizResult.correct / quizResult.totalQuestions) * 100
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar/>
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-600">
            <CalendarDays size={16} />
            Quiz activity
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Quiz History
          </h1>
          <p className="mt-2 text-slate-500">
            Review your performance, answers, and areas for improvement.
          </p>
        </div>

        {/* Quiz title card */}
        <section className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 p-6 text-white shadow-lg shadow-indigo-100 sm:p-8">
          <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 right-32 h-48 w-48 rounded-full bg-white/10" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold">
              {quizResult.category}
            </span>

            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              {quizResult.title}
            </h2>

            <p className="mt-2 text-sm text-indigo-100">
              Completed on {quizResult.date}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-indigo-50">
              <span className="flex items-center gap-2">
                <Clock3 size={17} />
                {quizResult.duration}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen size={17} />
                {quizResult.totalQuestions} questions
              </span>
            </div>
          </div>
        </section>

        {/* Score and performance */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">Final Score</p>
              <Trophy className="text-amber-500" size={21} />
            </div>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-3xl font-extrabold">{quizResult.score}%</span>
              <span className="pb-1 text-sm text-slate-400">score</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-indigo-600 transition-all"
                style={{ width: `${quizResult.score}%` }}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">Correct</p>
              <CheckCircle2 className="text-emerald-500" size={21} />
            </div>
            <p className="mt-3 text-3xl font-extrabold">
              {quizResult.correct}
              <span className="ml-1 text-base font-medium text-slate-400">
                / {quizResult.totalQuestions}
              </span>
            </p>
            <p className="mt-2 text-sm text-emerald-600">Correct answers</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">Incorrect</p>
              <XCircle className="text-rose-500" size={21} />
            </div>
            <p className="mt-3 text-3xl font-extrabold">
              {quizResult.incorrect}
            </p>
            <p className="mt-2 text-sm text-rose-600">Needs revision</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">Accuracy</p>
              <Target className="text-violet-500" size={21} />
            </div>
            <p className="mt-3 text-3xl font-extrabold">{percentage}%</p>
            <p className="mt-2 text-sm text-slate-500">
              Correct out of attempted
            </p>
          </div>
        </section>

        {/* Detailed summary */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold">Performance Summary</h2>
          <p className="mt-1 text-sm text-slate-500">
            A quick breakdown of your quiz attempt.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700">Correct answers</span>
                <span className="font-bold text-emerald-600">
                  {quizResult.correct}
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100">
                <div
                  className="h-2.5 rounded-full bg-emerald-500"
                  style={{
                    width: `${(quizResult.correct / quizResult.totalQuestions) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700">Incorrect answers</span>
                <span className="font-bold text-rose-600">
                  {quizResult.incorrect}
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100">
                <div
                  className="h-2.5 rounded-full bg-rose-500"
                  style={{
                    width: `${(quizResult.incorrect / quizResult.totalQuestions) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700">Unanswered</span>
                <span className="font-bold text-slate-500">
                  {quizResult.unanswered}
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100">
                <div
                  className="h-2.5 rounded-full bg-slate-400"
                  style={{
                    width: `${(quizResult.unanswered / quizResult.totalQuestions) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Question-by-question review */}
        <section>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-extrabold sm:text-2xl">
                Question Review
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Compare your answers with the correct answers and read explanations.
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-600">
              {questions.length} questions
            </span>
          </div>

          <div className="space-y-4">
            {questions.map((item, index) => {
              const isCorrect = item.selectedAnswer === item.correctAnswer;
              const isExpanded = expanded.includes(item.id);

              return (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleQuestion(item.id)}
                    aria-expanded={isExpanded}
                    className="flex w-full items-start gap-4 p-5 text-left transition hover:bg-slate-50 sm:p-6"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                        isCorrect
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-rose-50 text-rose-700"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                            isCorrect
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-rose-50 text-rose-700"
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle2 size={14} />
                          ) : (
                            <XCircle size={14} />
                          )}
                          {isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      </div>
                      <h3 className="font-semibold leading-6 text-slate-900">
                        {item.question}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500">
                        Your answer:{" "}
                        <span
                          className={
                            isCorrect
                              ? "font-semibold text-emerald-700"
                              : "font-semibold text-rose-700"
                          }
                        >
                          {item.selectedAnswer || "Not answered"}
                        </span>
                      </p>
                    </div>

                    <div className="shrink-0 pt-1 text-slate-400">
                      {isExpanded ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                      <p className="mb-3 text-sm font-bold text-slate-700">
                        Answer options
                      </p>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {item.options.map((option) => {
                          const isAnswer = option === item.correctAnswer;
                          const isSelected = option === item.selectedAnswer;

                          return (
                            <div
                              key={option}
                              className={`flex items-center justify-between gap-3 rounded-xl border p-3 text-sm ${
                                isAnswer
                                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                                  : isSelected
                                  ? "border-rose-200 bg-rose-50 text-rose-800"
                                  : "border-slate-200 bg-white text-slate-600"
                              }`}
                            >
                              <span>{option}</span>
                              {isAnswer ? (
                                <CheckCircle2
                                  size={17}
                                  className="shrink-0 text-emerald-600"
                                />
                              ) : isSelected ? (
                                <XCircle
                                  size={17}
                                  className="shrink-0 text-rose-600"
                                />
                              ) : null}
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/70 p-4">
                        <p className="text-sm font-bold text-indigo-900">
                          Correct answer
                        </p>
                        <p className="mt-1 text-sm font-semibold text-indigo-700">
                          {item.correctAnswer}
                        </p>
                        <p className="mt-4 text-sm font-bold text-slate-800">
                          Explanation
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* Bottom actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/browse"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            <RotateCcw size={18} />
            Try Another Quiz
          </Link>

          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
