import React from 'react';
import './Cadastro.css'
import {useContext, useState} from "react";
import { ProdutosContext } from '../Context/GlobalContext.jsx';


  function Cadastro() {
    const { produtos, setProdutos } = useContext(ProdutosContext)
    const [newProdutoTitulo, setNewProdutoTitulo] = useState('')
    const [NewProdutos, setNewProdutos] = useState([{ nome: '', quantidade: '', valor: '' }])
    const [NewDescriçãoProduto, setNewDescriçãoProduto] = useState('')
    const [tamanhoPorcao, setTamanhoPorcao] = useState(1)

    const handleProductChange = (index, field, value) => {
      const atualizarProdutos = [...NewProdutos]
      atualizarProdutos[index][field] = value
      setNewProdutos(atualizarProdutos)
    }
  
    const addProductField = () => {
      setNewProdutos([...NewProdutos, { nome: '', quantidade: '', valor: '' }])
    }
  
    const adicionarProdutos = () => {
      if (newProdutoTitulo.trim() !== '') {
        const NewProdutos = {
          nome: newProdutoTitulo.trim(),
          produtos: NewProdutos,
          descriçãoProduto: NewDescriçãoProduto.trim()
        }
  
        setProdutos([...setProdutos, NewProdutos])
        setNewProdutoTitulo('')
        setNewProdutos([{ nome: '', quantidade: '', valor: '' }])
        setNewDescriçãoProduto('')
        setTamanhoQuantidade(1)
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