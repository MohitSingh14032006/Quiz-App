
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, BookOpen, Clock3, CalendarDays, ArrowRight, ChevronLeft, ChevronRight, Sparkles, X} from "lucide-react";
import { Link } from "react-router";
import Navbar from "../common/Navbar";

const quizzes = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    category: "Web Development",
    difficulty: "Easy",
    questions: 15,
    duration: 20,
    date: "2026-10-23T10:00:00",
    description: "Test your knowledge of variables, functions, arrays and objects.",
    color: "bg-amber-50 text-amber-700",
    icon: "JS",
  },
  {
    id: 2,
    title: "React Mastery",
    category: "Web Development",
    difficulty: "Medium",
    questions: 20,
    duration: 30,
    date: "2026-10-23T14:00:00",
    description: "Explore components, props, hooks and state management.",
    color: "bg-sky-50 text-sky-700",
    icon: "RE",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    category: "Programming",
    difficulty: "Hard",
    questions: 25,
    duration: 45,
    date: "2026-10-24T11:00:00",
    description: "Challenge yourself with arrays, trees, graphs and complexity.",
    color: "bg-violet-50 text-violet-700",
    icon: "DS",
  },
  {
    id: 4,
    title: "SQL Essentials",
    category: "Database",
    difficulty: "Easy",
    questions: 12,
    duration: 15,
    date: "2026-10-24T16:00:00",
    description: "Practice queries, joins, filtering and aggregate functions.",
    color: "bg-emerald-50 text-emerald-700",
    icon: "DB",
  },
  {
    id: 5,
    title: "Computer Networks",
    category: "Computer Science",
    difficulty: "Medium",
    questions: 20,
    duration: 25,
    date: "2026-10-25T10:30:00",
    description: "Review networking layers, protocols, routing and TCP/IP.",
    color: "bg-rose-50 text-rose-700",
    icon: "CN",
  },
  {
    id: 6,
    title: "Python Programming",
    category: "Programming",
    difficulty: "Easy",
    questions: 15,
    duration: 20,
    date: "2026-10-25T13:00:00",
    description: "Check your understanding of Python syntax and core concepts.",
    color: "bg-blue-50 text-blue-700",
    icon: "PY",
  },
  {
    id: 7,
    title: "Cybersecurity Basics",
    category: "Cybersecurity",
    difficulty: "Medium",
    questions: 18,
    duration: 25,
    date: "2026-10-26T10:00:00",
    description: "Learn about common threats, encryption and secure practices.",
    color: "bg-orange-50 text-orange-700",
    icon: "CS",
  },
  {
    id: 8,
    title: "Operating Systems",
    category: "Computer Science",
    difficulty: "Hard",
    questions: 25,
    duration: 40,
    date: "2026-10-26T15:00:00",
    description: "Test processes, scheduling, memory and synchronization.",
    color: "bg-indigo-50 text-indigo-700",
    icon: "OS",
  },
  {
    id: 9,
    title: "MongoDB & NoSQL",
    category: "Database",
    difficulty: "Medium",
    questions: 15,
    duration: 20,
    date: "2026-10-27T11:00:00",
    description: "Practice documents, collections, queries and aggregation.",
    color: "bg-lime-50 text-lime-700",
    icon: "DB",
  },
  {
    id: 10,
    title: "Advanced JavaScript",
    category: "Web Development",
    difficulty: "Hard",
    questions: 25,
    duration: 35,
    date: "2026-10-27T14:00:00",
    description: "Dive into closures, promises, async code and the event loop.",
    color: "bg-fuchsia-50 text-fuchsia-700",
    icon: "JS",
  },
  {
    id: 11,
    title: "C++ OOP Challenge",
    category: "Programming",
    difficulty: "Medium",
    questions: 20,
    duration: 30,
    date: "2026-10-28T10:00:00",
    description: "Review classes, constructors, inheritance and polymorphism.",
    color: "bg-cyan-50 text-cyan-700",
    icon: "C++",
  },
  {
    id: 12,
    title: "Database Design",
    category: "Database",
    difficulty: "Hard",
    questions: 20,
    duration: 35,
    date: "2026-10-28T15:00:00",
    description: "Test normalization, relationships, keys and schema design.",
    color: "bg-teal-50 text-teal-700",
    icon: "DB",
  },
];

const PAGE_SIZE = 6;

const categories = [
  "All Categories",
  "Web Development",
  "Programming",
  "Database",
  "Computer Science",
  "Cybersecurity",
];

const difficulties = ["All Levels", "Easy", "Medium", "Hard"];

function formatDate(dateString) {
  return new Date(dateString).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function QuizCard({ quiz }) {
  const difficultyStyles = {
    Easy: "bg-emerald-50 text-emerald-700",
    Medium: "bg-amber-50 text-amber-700",
    Hard: "bg-rose-50 text-rose-700",
  };

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-extrabold ${quiz.color}`}
        >
          {quiz.icon}
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyStyles[quiz.difficulty]}`}
        >
          {quiz.difficulty}
        </span>
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-indigo-600">
        {quiz.category}
      </p>

      <h2 className="mt-2 text-lg font-bold leading-6 text-slate-900">
        {quiz.title}
      </h2>

      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
        {quiz.description}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <BookOpen size={16} className="shrink-0 text-slate-400" />
          {quiz.questions} questions
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Clock3 size={16} className="shrink-0 text-slate-400" />
          {quiz.duration} min
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 text-sm text-slate-500">
        <CalendarDays size={17} className="mt-0.5 shrink-0 text-indigo-500" />
        <div>
          <p className="font-semibold text-slate-700">Scheduled for</p>
          <p className="mt-1">{formatDate(quiz.date)}</p>
        </div>
      </div>

      <Link
        to={`/quiz/${quiz.id}`}
        className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
      >
        Start Quiz
        <ArrowRight size={17} />
      </Link>
    </article>
  );
}

export default function BrowseQuizzes() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [difficulty, setDifficulty] = useState("All Levels");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(true);

  const filteredQuizzes = useMemo(() => {
    return quizzes.filter((quiz) => {
      const matchesName = quiz.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesCategory =
        category === "All Categories" || quiz.category === category;

      const matchesDifficulty =
        difficulty === "All Levels" || quiz.difficulty === difficulty;

      return matchesName && matchesCategory && matchesDifficulty;
    });
  }, [search, category, difficulty]);

  const totalPages = Math.max(1, Math.ceil(filteredQuizzes.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleQuizzes = filteredQuizzes.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  const hasActiveFilters =
    search !== "" ||
    category !== "All Categories" ||
    difficulty !== "All Levels";

  function resetFilters() {
    setSearch("");
    setCategory("All Categories");
    setDifficulty("All Levels");
    setPage(1);
  }

  function changeSearch(value) {
    setSearch(value);
    setPage(1);
  }

  function changeCategory(value) {
    setCategory(value);
    setPage(1);
  }

  function changeDifficulty(value) {
    setDifficulty(value);
    setPage(1);
  }

  function goToPage(nextPage) {
    setPage(Math.max(1, Math.min(nextPage, totalPages)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar/> 
      

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Heading */}
        <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 p-6 text-white sm:p-9">
          <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="relative">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold">
              <Sparkles size={14} />
              Learn. Practice. Improve.
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              Browse Quizzes
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
              Discover upcoming quizzes across programming, web development,
              databases and computer science. Find your next challenge.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                <p className="text-2xl font-extrabold">{quizzes.length}</p>
                <p className="mt-1 text-xs text-indigo-100">Scheduled quizzes</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                <p className="text-2xl font-extrabold">
                  {new Set(quizzes.map((quiz) => quiz.category)).size}
                </p>
                <p className="mt-1 text-xs text-indigo-100">Categories</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                <p className="text-2xl font-extrabold">
                  {quizzes.reduce((sum, quiz) => sum + quiz.questions, 0)}
                </p>
                <p className="mt-1 text-xs text-indigo-100">Total questions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and filters */}
        <section className="mb-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => changeSearch(event.target.value)}
                placeholder="Search quiz by name..."
                aria-label="Search quizzes by name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />
            </div>

            <button
              type="button"
              onClick={() => setShowFilters((previous) => !previous)}
              aria-expanded={showFilters}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold transition hover:bg-slate-50"
            >
              <SlidersHorizontal size={17} />
              Filters
              {hasActiveFilters && (
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
              )}
            </button>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                <X size={16} />
                Clear
              </button>
            )}
          </div>

          {showFilters && (
            <div className="mt-4 grid gap-4 border-t border-slate-100 pt-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(event) => changeCategory(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="difficulty"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  value={difficulty}
                  onChange={(event) => changeDifficulty(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                >
                  {difficulties.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </section>

        {/* Results heading */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold">Upcoming Quizzes</h2>
            <p className="mt-1 text-sm text-slate-500">
              {filteredQuizzes.length === 0
                ? "No quizzes match your filters."
                : `Showing ${startIndex + 1}–${Math.min(
                    startIndex + PAGE_SIZE,
                    filteredQuizzes.length
                  )} of ${filteredQuizzes.length} quizzes`}
            </p>
          </div>

          <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700">
            Sorted by schedule
          </span>
        </div>

        {/* Quiz cards */}
        {visibleQuizzes.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <Search size={25} />
            </div>
            <h3 className="mt-4 text-lg font-bold">No quizzes found</h3>
            <p className="mt-2 text-sm text-slate-500">
              Try another search term or change your filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredQuizzes.length > 0 && (
          <nav
            aria-label="Quiz pagination"
            className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5"
          >
            <p className="text-sm text-slate-500">
              Page {currentPage} of {totalPages}
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={17} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    type="button"
                    key={pageNumber}
                    aria-current={currentPage === pageNumber ? "page" : undefined}
                    onClick={() => goToPage(pageNumber)}
                    className={`h-10 min-w-10 rounded-xl px-3 text-sm font-bold transition ${
                      currentPage === pageNumber
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-600 hover:bg-indigo-50"
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
                className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={17} />
              </button>
            </div>
          </nav>
        )}
      </main>
    </div>
  );
}
