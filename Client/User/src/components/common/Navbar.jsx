import { Link } from "react-router";
import {BookOpen } from "lucide-react";

export default function Navbar() {
  return (    
    <nav className="bg-stone-100 sticky w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="flex items-center gap-2 text-xl font-bold">
            <BookOpen className="text-indigo-600" />
            QuizMaster
          </span>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex items-center gap-3">
            <span className="hidden text-sm font-medium text-slate-500 sm:block">
              Mohit Singh
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
              MS
            </div>
            <Link
               to="/login"
               className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-lg font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700"
            >
             Log Out
            </Link>
          </div>
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
  );
}
