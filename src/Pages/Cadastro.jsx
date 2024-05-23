import React from 'react';
import './Cadastro.css'
import {useContext, useState} from "react";
import { ReceitasContext } from '../Context/GlobalContext.jsx';


  function Cadastro() {
    const { receitas, setReceitas } = useContext(ReceitasContext)
    const [newReceitaTitulo, setNewReceitaTitulo] = useState('')
    const [newIngredientesReceita, setNewIngredientesReceita] = useState([{ nome: '', quantidade: '', unidade: '' }])
    const [newInstrucoesReceita, setNewInstrucoesReceita] = useState('')
    const [tamanhoPorcao, setTamanhoPorcao] = useState(1)

    const handleIngredientChange = (index, field, value) => {
      const atualizarIngredientes = [...newIngredientesReceita]
      atualizarIngredientes[index][field] = value
      setNewIngredientesReceita(atualizarIngredientes)
    }
  
    const addIngredientField = () => {
      setNewIngredientesReceita([...newIngredientesReceita, { nome: '', quantidade: '', unidade: '' }])
    }
  
    const adicionarReceitas = () => {
      if (newReceitaTitulo.trim() !== '') {
        const newReceita = {
          nome: newReceitaTitulo.trim(),
          ingredientes: newIngredientesReceita,
          modoDePreparo: newInstrucoesReceita.trim()
        }
  
        setReceitas([...receitas, newReceita])
        setNewReceitaTitulo('')
        setNewIngredientesReceita([{ nome: '', quantidade: '', unidade: '' }])
        setNewInstrucoesReceita('')
        setTamanhoPorcao(1)
      }
    }
  return (

    <>
        <div className="add-recipe">
            <h1>Cadastro de Receitas</h1>
            <input
            type="text"
            placeholder="Digite o nome da receita"
            value={newReceitaTitulo}
            onChange={(e) => setNewReceitaTitulo(e.target.value)}
            />
            <input
            type="number"
            placeholder="Porção para quantas pessoas?"
            value={tamanhoPorcao}
            onChange={(e) => setTamanhoPorcao(parseInt(e.target.value))}
            />
            <textarea
            className='modopreparo'
            rows={5}
            placeholder="Modo de preparo"
            value={newInstrucoesReceita}
            onChange={(e) => setNewInstrucoesReceita(e.target.value)}
            />
            <div>
              <h4>Ingredientes:</h4>
              {newIngredientesReceita.map((ingredient, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Nome do ingrediente"
                    value={ingredient.nome}
                    onChange={(e) => handleIngredientChange(index, 'nome', e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Quantidade"
                    value={ingredient.quantidade}
                    onChange={(e) => handleIngredientChange(index, 'quantidade', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Unidade"
                    value={ingredient.unidade}
                    onChange={(e) => handleIngredientChange(index, 'unidade', e.target.value)}
                  />
                </div>
              ))}
              <button onClick={addIngredientField}>Adicionar Ingrediente</button>
              <button onClick={adicionarReceitas}>Adicionar Receita</button>
            </div>
        </div>
    </>
  )
}

export default Cadastro