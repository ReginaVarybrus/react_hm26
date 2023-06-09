import "./App.css";

import HomePage from "./pages/HomePage";
import HttpHeroComponent from "./pages/HeroComponent";
import SelectedHero from "./components/SelectedHero";
import EpisodesComponent from "./pages/EpisodesComponent";
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
            <Route path="hero/:id" element={<SelectedHero />} />
          </Route>
          <Route path="/episodes" element={<EpisodesComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



