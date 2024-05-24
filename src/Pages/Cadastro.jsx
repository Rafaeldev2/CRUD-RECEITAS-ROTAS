import React from 'react';
import './Cadastro.css'
import {useContext, useState} from "react";
import { ReceitasContext } from '../Context/GlobalContext.jsx';


  function Cadastro() {
    const { produtos, setProdutos } = useContext(ProdutosContext)
    const [newReceitaTitulo, setNewReceitaTitulo] = useState('')
    const [NewProdutos, setNewProdutos] = useState([{ nome: '', quantidade: '', unidade: '' }])
    const [NewDescriçãoProduto, setNewDescriçãoProduto] = useState('')
    const [tamanhoPorcao, setTamanhoPorcao] = useState(1)

    const handleProductChange = (index, field, value) => {
      const atualizarProdutos = [...NewProdutos]
      atualizarProdutos[index][field] = value
      setNewProdutos(atualizarProdutos)
    }
  
    const addProductField = () => {
      setNewProdutos([...NewProdutos, { nome: '', quantidade: '', moeda: '' }])
    }
  
    const adicionarProdutos = () => {
      if (newProdutoTitulo.trim() !== '') {
        const NewProdutos = {
          nome: newProdutoTitulo.trim(),
          produtos: NewProdutos,
          descriçãoProduto: NewDescriçãoProduto.trim()
        }
  
        setProdutos([...setProdutos, NewProdutos])
        setNewProdutos('')
        setNewProdutos([{ nome: '', quantidade: '', unidade: '' }])
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
                  value={newReceitaTitulo}
                  onChange={(e) => setNewReceitaTitulo(e.target.value)}
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
                <button onClick={addIngredientField}>Adicionar Produto</button>
              </div>
        </div>
    </>
  )
}

export default Cadastro