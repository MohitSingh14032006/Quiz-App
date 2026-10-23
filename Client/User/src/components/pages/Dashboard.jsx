import {
  BookOpen,
  Trophy,
  Target,
  ChartNoAxesCombined,
  ArrowRight,
  Flame,
  Clock3,
  Sparkles,
} from "lucide-react";
import Navbar from "../common/Navbar";
import { Link } from "react-router";

const stats = [
  {
    title: "Quizzes Played",
    value: "24",
    subtitle: "Keep the momentum going!",
    icon: BookOpen,
    color: "bg-indigo-50 text-indigo-600",
    bar: "bg-indigo-500",
    progress: "w-3/4",
  },
  {
    title: "Average Score",
    value: "86%",
    subtitle: "Across all your attempts",
    icon: ChartNoAxesCombined,
    color: "bg-blue-50 text-blue-600",
    bar: "bg-blue-500",
    progress: "w-[86%]",
  },
  {
    title: "Accuracy",
    value: "92%",
    subtitle: "You're doing great!",
    icon: Target,
    color: "bg-emerald-50 text-emerald-600",
    bar: "bg-emerald-500",
    progress: "w-[92%]",
  },
  {
    title: "Best Score",
    value: "98%",
    subtitle: "Your personal best",
    icon: Trophy,
    color: "bg-amber-50 text-amber-600",
    bar: "bg-amber-500",
    progress: "w-[98%]",
  },
];

export default function History() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        {/* Welcome Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-600 p-7 text-white shadow-xl shadow-indigo-100 sm:p-10">
          <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-24 right-1/3 h-48 w-48 rounded-full bg-violet-400/20 blur-2xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-indigo-50">
                <Sparkles size={16} />
                Your learning journey continues
              </div>

              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Welcome back, Mohit!
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
                Every quiz makes you better. Challenge yourself, improve your
                skills, and take another step towards your goals.
              </p>

              <Link
                to="/browse"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 font-bold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50"
              >
                Start a quiz <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hidden shrink-0 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm md:block">
              <Trophy size={54} className="text-amber-300" />
              <p className="mt-4 text-lg font-bold">Keep going!</p>
              <p className="mt-1 text-sm text-indigo-100">
                Your next best score awaits.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Heading */}
        <section className="mt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Your performance
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                A snapshot of your learning progress.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock3 size={16} />
              All-time overview
            </div>
          </div>

          {/* Four Stats Cards */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article
                  key={stat.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        {stat.title}
                      </p>
                      <p className="mt-3 text-3xl font-black tracking-tight">
                        {stat.value}
                      </p>
                    </div>

                    <div className={`rounded-xl p-3 ${stat.color}`}>
                      <Icon size={23} />
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-500">{stat.subtitle}</p>

                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${stat.bar} ${stat.progress}`}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Quick Start */}
        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
                <Flame size={25} />
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Build your learning streak
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Consistent practice helps you retain concepts and improve your
                  performance. Take a quiz today to keep progressing.
                </p>
                <Link
                  to="/browse"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800"
                >
                  Explore quizzes <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6">
            <p className="text-sm font-semibold text-indigo-700">
              Your next goal
            </p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">
              30 quizzes
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Complete 6 more quizzes to reach your next milestone.
            </p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-indigo-100">
              <div className="h-full w-4/5 rounded-full bg-indigo-600" />
            </div>
            <p className="mt-2 text-xs font-medium text-indigo-700">
              24 of 30 completed
            </p>
          </div>
        </section>

        {/* Recent Quizzes */}
        <section className="mt-10">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Recent quizzes
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Review your latest attempts and performance.
              </p>
            </div>
          </div>

          {/*
            Demo data: replace with API data later.
            questionsAttempted = questions answered during the quiz.
          */}
          {(() => {
            const recentQuizzes = [
              {
                id: 1,
                title: "React Fundamentals",
                category: "Web Development",
                questionsAttempted: 10,
                score: 90,
                duration: "12 min 40 sec",
                date: "Today",
              },
              {
                id: 2,
                title: "JavaScript Challenge",
                category: "Programming",
                questionsAttempted: 15,
                score: 86,
                duration: "18 min 15 sec",
                date: "Yesterday",
              },
              {
                id: 3,
                title: "Database Essentials",
                category: "Database Systems",
                questionsAttempted: 12,
                score: 75,
                duration: "14 min 05 sec",
                date: "20 Oct",
              },
              {
                id: 4,
                title: "Data Structures",
                category: "Computer Science",
                questionsAttempted: 20,
                score: 95,
                duration: "26 min 32 sec",
                date: "19 Oct",
              },
            ];

            return (
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {/* Table header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                  <h3 className="font-bold text-slate-900">Quiz history</h3>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {recentQuizzes.length} recent attempts
                  </span>
                </div>

                {/* Responsive table */}
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                      <tr>
                        <th className="px-6 py-4 font-semibold">Quiz title</th>
                        <th className="px-6 py-4 font-semibold">Questions</th>
                        <th className="px-6 py-4 font-semibold">Score</th>
                        <th className="px-6 py-4 font-semibold">Duration</th>
                        <th className="px-6 py-4 font-semibold">Completed</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                      {recentQuizzes.map((quiz) => (
                        <tr
                          key={quiz.id}
                          className="transition hover:bg-slate-50/80"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                <BookOpen size={19} />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-800">
                                  {quiz.title}
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                  {quiz.category}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                              <Target size={16} className="text-slate-400" />
                              {quiz.questionsAttempted}
                            </span>
                          </td>

                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                                quiz.score >= 90
                                  ? "bg-emerald-50 text-emerald-700"
                                  : quiz.score >= 75
                                    ? "bg-blue-50 text-blue-700"
                                    : "bg-amber-50 text-amber-700"
                              }`}
                            >
                              {quiz.score}%
                            </span>
                          </td>

                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                              <Clock3 size={16} className="text-slate-400" />
                              {quiz.duration}
                            </span>
                          </td>

                          <td className="px-6 py-4 text-sm text-slate-500">
                            {quiz.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="border-t border-slate-100 px-6 py-4">
                  <p className="text-xs text-slate-400">
                    Showing sample quiz history. Your actual attempts will
                    appear here after the quiz system is connected.
                  </p>
                </div>
              </div>
            );
          })()}
        </section>

        <footer className="mt-12 border-t border-slate-200 py-6 text-center text-sm text-slate-400">
          Keep learning, keep growing. &copy; {new Date().getFullYear()}{" "}
          QuizMaster
        </footer>
      </div>
    </main>
  );
}
