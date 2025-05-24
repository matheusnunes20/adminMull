import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Enviando os dados: " + username + " - " + password);
    navigate("/inicio");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="header-banner">
          <img src={logo} alt="logo configApp" className="logo" />
          <div className="app-name">CONFIGAPP</div>
          <div className="app-slogan">Porque seu tempo vale mais.</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>

          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <div className="recall-forget">
            <label htmlFor="rememberMe" className="checkBox-label">
              <input type="checkbox" id="rememberMe" />
              Lembre de mim
            </label>
            <Link to="/recuperar-senha">Esqueceu a senha?</Link>
          </div>

          <button type="submit" disabled={!username || !password}>
            Entrar
          </button>

          <div className="signup-link">
            <p>
              Não tem conta? <Link to="/registrar">Registrar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;