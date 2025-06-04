import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CabrioPage from './pages/CabrioPage';
import ElektroPage from './pages/ElektroPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cabrio" element={<CabrioPage />} />
        <Route path="/elektro" element={<ElektroPage />} />
      </Routes>
    </BrowserRouter>
  );
}
