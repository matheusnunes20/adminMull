import React, { useState } from "react";
import { FaCheck, FaBars } from "react-icons/fa";
import perfil from "../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";
import "./sistemConfigCMD.css";

const SistemaOperacionalCMD = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const irParaInicio = () => {
    navigate("/inicio");
  };

  const exibirAlerta = () => {
    alert("Abra o CMD manualmente e digite o comando para verificar a versão da linguagem configurada.");
  };

  return (
    <div className="linguagem-container">
      <button className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>

      {menuOpen && (
        <div className="linguagem-sidebar">
          <button className="sidebar-button" onClick={irParaInicio}>
            Início
          </button>
        </div>
      )}

      <div className="header">
        <span className="username">Mateus Nunes</span>
        <img src={perfil} alt="Perfil" className="avatar" />
      </div>

      <div className="linguagem-card">
        <div className="card-title">
          <h2>Máquina configurada<br />verifique no cmd.</h2>
        </div>

        <button className="cmd-button" onClick={exibirAlerta}>
          Abrir CMD
        </button>
      </div>
    </div>
  );
};

export default SistemaOperacionalCMD;
