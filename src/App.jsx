import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Utilities";
import { Home, Disease, Prediction, History, About } from "./page";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Disease" element={<Disease />} />
          <Route path="/Prediction" element={<Prediction />} />
          <Route path="/History" element={<History />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
