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
      <Route path="play" element={<Play />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="learn" element={<Learn />} />
      <Route path="about" element={<About />} />
    </Routes>
    
  );
}

export default App;
