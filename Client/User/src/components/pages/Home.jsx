import { ArrowRight, BrainCircuit, Trophy, ChartNoAxesCombined, ShieldCheck, Sparkles, CheckCircle2, Zap, Target, BookOpen} from "lucide-react";
import { Link } from "react-router";
import Footer from "../common/Footer";

const features = [
  {
    icon: BrainCircuit,
    title: "Smart Quizzes",
    description:
      "Challenge yourself with carefully designed quizzes across programming, technology, and more.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Track Progress",
    description:
      "Understand your strengths, discover weak areas, and watch your performance improve.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Trophy,
    title: "Earn Achievements",
    description:
      "Reach milestones, maintain your streak, and celebrate every learning win.",
    color: "bg-amber-100 text-amber-700",
  },
];

const topics = [
  { name: "Web Development", icon: "💻", count: "12 quizzes" },
  { name: "Programming", icon: "⚡", count: "18 quizzes" },
  { name: "Database Systems", icon: "🗄️", count: "8 quizzes" },
  { name: "Computer Science", icon: "🧠", count: "15 quizzes" },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <nav className="bg-stone-100 sticky w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <BookOpen className="text-indigo-600" />
            QuizMaster
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
               to='/login'
               className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-lg font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700"
            >
             Register
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <Link to="/"
                  className="block py-2 px-3 bg-brand rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-tertiary hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg-brand md:bg-transparent md:text-fg-brand md:hover:bg-transparent md:hover:text-fg-brand md:p-0 hover:text-sky-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard"
                  className="block py-2 px-3 bg-brand rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-tertiary hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg-brand md:bg-transparent md:text-fg-brand md:hover:bg-transparent md:hover:text-fg-brand md:p-0 hover:text-sky-700"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/browse"
                  className="block py-2 px-3 text-heading rounded transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-tertiary hover:text-fg-brand hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg-brand md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent  hover:text-sky-700"
                >
                  Browse Quizzes
                </Link>
              </li>
              <li>
                <Link to="/history"
                  className="block py-2 px-3 text-heading rounded transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-tertiary hover:text-fg-brand hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg-brand md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent  hover:text-sky-700"
                >
                  History
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>

      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
        <div className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
              <Sparkles size={16} />
              Your next learning streak starts here
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Learn smarter.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Score higher.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Turn your knowledge into confidence. Practice with interactive
              quizzes, challenge yourself, and track your progress — one quiz
              at a time.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Explore quizzes <ArrowRight size={18} />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                Discover features
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" />
                Learn at your pace
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" />
                Track your growth
              </span>
            </div>
          </div>

          {/* Hero preview card */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-200/60 to-violet-200/60 blur-2xl" />

            <div className="relative rounded-3xl border border-white bg-white p-5 shadow-2xl shadow-indigo-200/50 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Your learning overview
                  </p>
                  <h2 className="mt-1 text-xl font-bold">Keep it up! 🚀</h2>
                </div>
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                  <ChartNoAxesCombined size={25} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-indigo-50 p-4">
                  <div className="flex items-center gap-2 text-indigo-600">
                    <Target size={18} />
                    <span className="text-xs font-semibold">Accuracy</span>
                  </div>
                  <p className="mt-3 text-3xl font-extrabold text-slate-900">
                    92%
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Sample preview
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-50 p-4">
                  <div className="flex items-center gap-2 text-amber-600">
                    <Zap size={18} />
                    <span className="text-xs font-semibold">Streak</span>
                  </div>
                  <p className="mt-3 text-3xl font-extrabold text-slate-900">
                    7 days
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Sample preview
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-100 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">Weekly activity</h3>
                  <span className="text-xs text-slate-400">Demo data</span>
                </div>

                <div className="mt-5 flex h-28 items-end justify-between gap-3">
                  {[42, 68, 52, 88, 62, 100, 76].map((height, index) => (
                    <div
                      key={index}
                      className="flex h-full flex-1 items-end"
                    >
                      <div
                        style={{ height: `${height}%` }}
                        className={`w-full rounded-t-lg transition ${
                          index === 5
                            ? "bg-indigo-600"
                            : "bg-indigo-100 hover:bg-indigo-300"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex justify-between text-xs text-slate-400">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <span key={index} className="flex-1 text-center">
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
                <div className="rounded-xl bg-white p-2 text-emerald-600">
                  <Trophy size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Every attempt counts!
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Keep practicing to improve your skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-5 top-1/3 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-lg sm:flex">
              <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
                <ShieldCheck size={20} />
              </div>
              <span className="text-sm font-bold">Practice with purpose</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-7 sm:grid-cols-3 sm:px-8">
          {[
            { value: "Learn", label: "Build knowledge step by step" },
            { value: "Practice", label: "Test what you understand" },
            { value: "Improve", label: "Grow with every attempt" },
          ].map((item) => (
            <div key={item.value} className="text-center">
              <p className="text-xl font-extrabold text-indigo-600">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Why QuizMaster?
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Your learning journey, upgraded.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Everything you need to make practice a consistent part of your
              learning routine.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60"
                >
                  <div
                    className={`inline-flex rounded-2xl p-4 ${feature.color}`}
                  >
                    <Icon size={27} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-600 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full border-[40px] border-white/10" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Sparkles size={28} />
            </div>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">
              Ready to put your knowledge to the test?
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-indigo-100">
              Start exploring topics, challenge yourself, and make your next
              learning session count.
            </p>
            <Link
              to = "/login"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Explore quizzes <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}