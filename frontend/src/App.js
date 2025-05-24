import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Compare from "./pages/Compare";
import Recommendations from "./pages/Recommendations";
import Profile from "./pages/Profile";
import UploadPolicy from "./pages/UploadPolicy";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-3 mb-4">
      <ul className="flex space-x-4 text-sm font-medium">
        <li><Link to="/" className="hover:underline">Inicio</Link></li>
        <li><Link to="/login" className="hover:underline">Login</Link></li>
        <li><Link to="/register" className="hover:underline">Registro</Link></li>
        <li><Link to="/compare" className="hover:underline">Comparar</Link></li>
        <li><Link to="/upload-policy" className="hover:underline">Subir Póliza</Link></li>
        <li><Link to="/recommendations" className="hover:underline">Recomendaciones</Link></li>
        <li><Link to="/profile" className="hover:underline">Perfil</Link></li>
      </ul>
    </nav>
  );
}


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload-policy" element={<UploadPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
