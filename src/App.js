import "./App.css";

import HomePage from "./pages/HomePage";
import HttpHeroComponent from "./pages/HeroComponent";
import Hero from "./components/Hero";
import HttpEpisodeComponent from "./pages/EpisodeComponent";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/heroes" element={<HttpHeroComponent />}>
            <Route path="hero/:id" element={<Hero />} />
          </Route>
          <Route path="/episodes" element={<HttpEpisodeComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



