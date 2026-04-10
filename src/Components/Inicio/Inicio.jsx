import React, { useState } from "react";
import { FaLaptopCode, FaCode, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // IMPORTANTE
import { FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import "./inicio.css";
import perfil from "../../assets/avatar.jpg";


const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate(); // HOOK para navegação

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const irparaFinanceiro = () => {
    navigate("/financeiro");
  };

    const irparaGerenciamentoAulas = () => {
    navigate("/agendamentosDeAulas");
  };

  return (
    <div className="inicio-container">
    {sidebarOpen && (
      <div className="sidebar">

        {/* BOTÃO FECHAR */}
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>

        <button className="sidebar-button" onClick={irparaFinanceiro}>
          <FaMoneyBillWave className="icon" />
          <span>Financeiro</span>
        </button>

        <button className="sidebar-button" onClick={irparaGerenciamentoAulas}>
          <FaCalendarAlt className="icon" />
          <span>Gerenciamento de aulas</span>
        </button>

      </div>
    )}

      <div className="main-content">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <div className="header">
          <span className="username">Mateus Nunes</span>
          <img src={perfil} alt="Perfil" className="avatar" />
        </div>

        <div className="welcome-message">
          <h1>BEM-VINDO</h1>
          <p>Sr(a). Mateus Nunes</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
