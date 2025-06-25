import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto px-4 py-3 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <span className="text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} PLP Task Manager. All rights reserved.</span>
        <div className="flex gap-3">
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:underline">About</a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 