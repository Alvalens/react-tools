import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import Todo from './pages/Todo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>

  );
}

export default App;
