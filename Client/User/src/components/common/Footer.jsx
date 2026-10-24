import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-5 mt-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-sm text-slate-500 sm:flex-row">
        <span className="flex items-center gap-2 text-xl font-bold">
          <BookOpen className="text-indigo-600" />
          QuizMaster
        </span>
        <p>
          &copy; {new Date().getFullYear()} QuizMaster. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          Made with
          <span className="text-red-500">♥</span>
          for learners
        </p>
      </div>
    </footer>
  );
}