import React from 'react';
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import Todo from './pages/Todo';
import Note from './pages/Note';
import Expense from './pages/Expense';
import Page404 from './pages/404';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/note" element={<Note />} />
      <Route path="/expense-tracker" element={<Expense />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;






