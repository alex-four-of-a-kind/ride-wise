import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <header>
        <h1>Ride-Wise</h1>
        <nav>
          <ul>
            <li><Link to="/cabrio">Cabrio</Link></li>
            <li><Link to="/elektro">Elektro</Link></li>
            <li><Link to="/suv">SUV</Link></li>
            <li><Link to="/sportwagen">Sportwagen</Link></li>
            <li><Link to="/oldtimer">Oldtimer</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<p>Startseite – Bitte eine Kategorie wählen.</p>} />
        <Route path="/cabrio" element={<p>Cabrio-Seite</p>} />
        <Route path="/elektro" element={<p>Elektro-Seite</p>} />
        <Route path="/suv" element={<p>SUV-Seite</p>} />
        <Route path="/sportwagen" element={<p>Sportwagen-Seite</p>} />
        <Route path="/oldtimer" element={<p>Oldtimer-Seite</p>} />
      </Routes>
    </div>
  );
}
