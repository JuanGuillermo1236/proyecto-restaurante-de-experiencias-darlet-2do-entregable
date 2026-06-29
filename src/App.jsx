import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home    from './pages/Home';
import Costa   from './pages/Costa';
import Sierra  from './pages/Sierra';
import Selva   from './pages/Selva';
import Reservas from './pages/Reservas';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"        element={<Home />}    />
        <Route path="/costa"   element={<Costa />}   />
        <Route path="/sierra"  element={<Sierra />}  />
        <Route path="/selva"   element={<Selva />}   />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </Router>
  );
}
