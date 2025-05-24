import React, { useState } from "react";
import { FaLaptopCode, FaCode, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // IMPORTANTE
import "./inicio.css";
import perfil from "../../assets/avatar.jpg";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate(); // HOOK para navegação

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const irParaLinguagem = () => {
    navigate("/linguagem");
  };

  return (
    <div className="inicio-container">
      {sidebarOpen && (
        <div className="sidebar">
          <button className="sidebar-button" onClick={irParaLinguagem}>
            <FaLaptopCode className="icon" />
            <span>Configuração da IDE</span>
          </button>
          <button className="sidebar-button">
            <FaCode className="icon" />
            <span>Configuração da linguagem</span>
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
          <p>AO CONFIGAPP</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
