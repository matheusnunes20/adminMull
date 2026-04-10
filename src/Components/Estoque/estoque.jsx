import { useState } from "react";
import "./estoque.css";

export default function Estoque() {
  const [itens, setItens] = useState([]);
  const [novoItem, setNovoItem] = useState({
    nome: "",
    quantidade: "",
    preco: ""
  });

  function handleChange(e) {
    setNovoItem({
      ...novoItem,
      [e.target.name]: e.target.value
    });
  }

  function adicionarItem(e) {
    e.preventDefault();

    if (!novoItem.nome || !novoItem.quantidade) {
      alert("Preencha os campos!");
      return;
    }

    setItens([...itens, novoItem]);

    setNovoItem({
      nome: "",
      quantidade: "",
      preco: ""
    });
  }

  return (
    <div className="estoque-container">
      <h1>📦 Controle de Estoque</h1>

      {/* FORM */}
      <div className="card form-card">
        <form onSubmit={adicionarItem}>
          <div className="grid">
            <input
              type="text"
              name="nome"
              placeholder="Nome do produto"
              value={novoItem.nome}
              onChange={handleChange}
            />

            <input
              type="number"
              name="quantidade"
              placeholder="Quantidade"
              value={novoItem.quantidade}
              onChange={handleChange}
            />

            <input
              type="number"
              name="preco"
              placeholder="Preço (R$)"
              value={novoItem.preco}
              onChange={handleChange}
            />
          </div>

          <button type="submit">+ Adicionar</button>
        </form>
      </div>

      {/* LISTA */}
      <div className="lista">
        {itens.length === 0 ? (
          <p className="empty">Nenhum item no estoque</p>
        ) : (
          itens.map((item, index) => (
            <div key={index} className="card item-card">
              <div>
                <h3>{item.nome}</h3>
                <p>💰 R$ {item.preco || "0,00"}</p>
              </div>

              <div className="right">
                <span
                  className={
                    item.quantidade < 5 ? "baixo" : "normal"
                  }
                >
                  {item.quantidade} unidades
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}