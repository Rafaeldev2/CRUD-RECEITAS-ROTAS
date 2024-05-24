import React from 'react';
import './card.css';

const ProductCard  = ({ index, receitas, deletarReceita, fracionarReceita }) => {
  return (
    <div className="recipe-card">
      <h3>{produtos.nome}</h3>
      <p>Modo de Preparo: {receitas.modoDePreparo}</p>
      <p>Ingredientes:</p>
      <ul>
        {receitas.ingredientes.map((ingrediente, ingIndex) => (
          <li key={ingIndex}>
            {ingrediente.nome}: {ingrediente.quantidade} {ingrediente.valor}
          </li>
        ))}
      </ul>
      <div className="recipe-actions">
        <button onClick={() => deletarReceita(index)}>Excluir</button>
      </div>
    </div>
  );
};

export default ProductCard ;