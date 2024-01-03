import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home"
import SomePage from "./pages/SomePage"
import AnotherPage from "./pages/AnotherPage";

// Don't write any code here!!

function App() {
  return (
    <div className="center">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/somepage" element={<SomePage />} />
          <Route path="/anotherpage" element={<AnotherPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
