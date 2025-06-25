import React from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-4 py-3 flex justify-between items-center">
      <div className="font-bold text-xl">PLP Task Manager</div>
      <div className="flex gap-4">
        <a href="/" className="text-gray-700 dark:text-gray-200 hover:underline">Home</a>
        <a href="/tasks" className="text-gray-700 dark:text-gray-200 hover:underline">Tasks</a>
      </div>
      <button
        className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar; 