import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import Todo from './pages/Todo';
import Note from './pages/Note';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/Note" element={<Note />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>

  );
}

export default App;
