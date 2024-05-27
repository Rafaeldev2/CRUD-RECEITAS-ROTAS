import React from 'react';
import './Cadastro.css'
import {useContext, useState} from "react";
import { ProdutosContext } from '../Context/GlobalContext.jsx';


function Cadastro() {
  const { produtos, setProdutos } = useContext(ProdutosContext)
  const [newProdutoTitulo, setNewProdutoTitulo] = useState('')
  const [newUnidadeProdutos, setNewUnidadeProdutos] = useState([{ nome: '', quantidade: '', valor: '' }])
  const [newDescriçãoProduto, setNewDescriçãoProduto] = useState('')
  const [quantidadeProduto, setQuantidadeProduto] = useState(1)

  const handleProductChange = (index, field, value) => {
    const atualizarProdutos = [...newUnidadeProdutos]
    atualizarProdutos[index][field] = value
    setNewUnidadeProdutos(atualizarProdutos)
  }

  const addProductField = () => {
    setNewUnidadeProdutos([...newUnidadeProdutos, { nome: '', quantidade: '', valor: '' }])
  }

  const adicionarProdutos = () => {
    if (newProdutoTitulo.trim() !== '') {
      const newProduto = {
        nome: newProdutoTitulo.trim(),
        quantidade: quantidadeProduto,
        descriçãoProduto: newDescriçãoProduto.trim()
      }

      setProdutos([...produtos, newProduto])
      setNewProdutoTitulo('')
      setNewUnidadeProdutos([{ nome: '', quantidade: '', valor: '' }])
      setNewDescriçãoProduto('')
      setQuantidadeProduto(1)
    }
  }
  return (

    <>
        <div className="add-recipe">
          <h1>Cadastro de Produtos</h1>
            <div className='receita-porcao'>
              <div className='receita_2'>
                <label htmlFor="nomeReceita">Digite o nome do Produto: </label>
                <input
                className='nomeReceita'
                type="text"
                placeholder="Digite o nome do Produto"
                value={newProdutoTitulo}
                onChange={(e) => setNewProdutoTitulo(e.target.value)}
                />
              </div>
              <div className='porcao_2'>
                <label htmlFor="tamanhoPorcao">Digite a quantidade de Produtos: </label>
                <input
                className='tamanhoPorcao'
                placeholder='EX: 1, 2, 3...'
                type="number"
                value={tamanhoPorcao}
                onChange={(e) => setTamanhoPorcao(parseInt(e.target.value))}
                />
              </div>
              {NewProdutos.map((produtos, index) => (
              <div key={index}>
                
              </div>
              ))}
              <button onClick={addProductField}>Adicionar Produto</button>
              <button onClick={adicionarProdutos}>Adicionar Receita</button>
            </div>
        </div>
    </>
  )
}

export default Cadastro


{/* <div>
<h4>Produtos:</h4>
{novosProdutos.map((produto, index) => (
  <div key={index}>
    <input
      type="text"
      placeholder="Nome do produto"
      value={produto.nome}
      onChange={(e) => handleProductChange(index, 'nome', e.target.value)}
    />
    <input
      type="number"
      placeholder="Quantidade"
      value={produto.quantidade}
      onChange={(e) => handleProductChange(index, 'quantidade', e.target.value)}
    />
    <input
      type="text"
      placeholder="Unidade"
      value={produto.unidade}
      onChange={(e) => handleProductChange(index, 'unidade', e.target.value)}
    />
  </div>
))}
<button onClick={addProductField}>Adicionar Produto</button>
<button onClick={adicionarProdutos}>Adicionar Produtos</button>
</div> */}