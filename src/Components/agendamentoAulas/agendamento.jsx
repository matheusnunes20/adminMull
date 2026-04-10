import { useState } from "react";
import "./agendamento.css";

export default function Agendamento() {
  const [aulas, setAulas] = useState([]);
  const [novaAula, setNovaAula] = useState({
    aluno: "",
    modalidade: "",
    horario: "",
    professor: ""
  });

  function handleChange(e) {
    setNovaAula({
      ...novaAula,
      [e.target.name]: e.target.value
    });
  }

  function adicionarAula(e) {
    e.preventDefault();

    if (!novaAula.aluno || !novaAula.modalidade || !novaAula.horario) {
      alert("Preencha todos os campos!");
      return;
    }

    setAulas([...aulas, novaAula]);

    setNovaAula({
      aluno: "",
      modalidade: "",
      horario: "",
      professor: ""
    });
  }

  return (
    <div className="agendamento-container">
      <h1>📅 Agendamento de Aulas</h1>

      {/* FORM CARD */}
      <div className="card form-card">
        <form onSubmit={adicionarAula}>
          <div className="grid">
            <input
              type="text"
              name="aluno"
              placeholder="Nome do aluno"
              value={novaAula.aluno}
              onChange={handleChange}
            />

            <select
              name="modalidade"
              value={novaAula.modalidade}
              onChange={handleChange}
            >
              <option value="">Modalidade</option>
              <option>Futevôlei</option>
              <option>Vôlei</option>
              <option>Beach Tennis</option>
            </select>

            <input
              type="time"
              name="horario"
              value={novaAula.horario}
              onChange={handleChange}
            />

            <input
              type="text"
              name="professor"
              placeholder="Professor"
              value={novaAula.professor}
              onChange={handleChange}
            />
          </div>

          <button type="submit">+ Agendar Aula</button>
        </form>
      </div>

      {/* LISTA */}
      <div className="lista">
        {aulas.length === 0 ? (
          <p className="empty">Nenhuma aula agendada</p>
        ) : (
          aulas.map((aula, index) => (
            <div key={index} className="card aula-card">
              <div className="info">
                <h3>{aula.aluno}</h3>
                <span>{aula.modalidade}</span>
              </div>

              <div className="info">
                <p>⏰ {aula.horario}</p>
                <p>👨‍🏫 {aula.professor || "Sem professor"}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}