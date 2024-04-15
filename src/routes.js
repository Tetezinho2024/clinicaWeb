import Inicio from "./Inicio/inicio";
import Dashboard from "./Dashboard/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Rotas() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    );
  }