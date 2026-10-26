import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import AnimeShelf from "./pages/animeShelf/AnimeShelf";
import Upcoming from "./pages/upcoming/Upcoming";
import Trailers from "./pages/trailers/Trailers";
import About from "./pages/about/About";
import Faq from "./pages/faq/Faq";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="anime" element={<AnimeShelf />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="trailers" element={<Trailers />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
