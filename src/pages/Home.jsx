import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <Card>
      <h1 className="text-3xl font-bold mb-4">Welcome to the PLP Task Manager</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">This is your home page. Use the navigation bar to access your tasks or explore more features.</p>
    </Card>
  );
};

export default Home; 