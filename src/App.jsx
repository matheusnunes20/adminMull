import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import Login from "./Components/Login/Login";
import Inicio from "./Components/Inicio/Inicio";
import Financeiro from "./Components/financeiro/financeiro";
import Agendamento from "./Components/agendamentoAulas/agendamento";
import Estoque from "./Components/Estoque/estoque";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/agendamentosDeAulas" element={<Agendamento />} />
        <Route path="/estoque" element={<Estoque />} />
      </Routes>
    </Router>
  );
};

export default App;
