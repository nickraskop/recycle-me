import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Play from './pages/Play';
import Leaderboard from './pages/Leaderboard';
import Learn from './pages/Learn';
import About from './pages/About';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Play />} />
      <Route path="about" element={<Leaderboard />} />
      <Route path="portfolio" element={<Learn />} />
      <Route path="contact" element={<About />} />
    </Routes>
  );
}

export default App;
