import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/react-task-manager">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskManager />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
} 