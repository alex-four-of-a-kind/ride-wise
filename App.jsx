import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CabrioPage from "./pages/CabrioPage";
import ElektroPage from "./pages/ElektroPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-600">Ride-Wise</h1>
            <nav className="space-x-4">
              <Link to="/cabrio" className="text-orange-500 hover:underline">Cabrio</Link>
              <Link to="/elektro" className="text-orange-500 hover:underline">Elektro</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/cabrio" element={<CabrioPage />} />
            <Route path="/elektro" element={<ElektroPage />} />
            <Route path="/" element={<div className="text-xl">Willkommen bei Ride-Wise. Bitte wähle eine Kategorie.</div>} />
          </Routes>
        </main>
        <footer className="bg-white text-center text-sm py-4 text-gray-400">
          © {new Date().getFullYear()} Ride-Wise – All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;