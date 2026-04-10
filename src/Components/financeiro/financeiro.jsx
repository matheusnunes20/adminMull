import "./financeiro.css";

export default function Financeiro() {
  return (
    <div className="financeiro-container">
      <h1>💰 Financeiro</h1>

      {/* RESUMO */}
      <div className="cards">
        <div className="card receita">
          <h3>Receita do mês</h3>
          <p>R$ 8.500</p>
        </div>

        <div className="card pendente">
          <h3>Pagamentos pendentes</h3>
          <p>R$ 2.100</p>
        </div>

        <div className="card alunos">
          <h3>Alunos ativos</h3>
          <p>32</p>
        </div>
      </div>

      {/* TABELA */}
      <div className="tabela">
        <h2>Pagamentos</h2>

        <table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Modalidade</th>
              <th>Valor</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>João Silva</td>
              <td>Futevôlei</td>
              <td>R$ 200</td>
              <td className="pago">Pago</td>
            </tr>

            <tr>
              <td>Maria Souza</td>
              <td>Vôlei</td>
              <td>R$ 180</td>
              <td className="pendente">Pendente</td>
            </tr>

            <tr>
              <td>Carlos Lima</td>
              <td>Beach Tennis</td>
              <td>R$ 220</td>
              <td className="pago">Pago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}