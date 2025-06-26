import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <TaskManager />
      </Layout>
    </ThemeProvider>
  );
} 