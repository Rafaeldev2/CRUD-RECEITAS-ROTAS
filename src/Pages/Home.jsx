import React, {useState, useContext} from 'react'
import ProductCard from '../Components/card'
import { ReceitasContext } from '../Context/GlobalContext'
import './Home.css'
import CustomInput from '../Components/CustomInput'




const Home = () => {
  const { receitas, setReceitas } = useContext(ReceitasContext)
  const [searchQuery, setSearchQuery] = useState('')

  const deletarReceita = (index) => {
    const atualizarReceitas = [...receitas]
    atualizarReceitas.splice(index, 1)
    setReceitas(atualizarReceitas)
  }

  const fracionarReceita = (index, factor) => {
    const atualizarReceitas = [...receitas]
    const receitaAtualizada = { ...atualizarReceitas[index] }

    receitaAtualizada.ingredientes = receitaAtualizada.ingredientes.map(ingrediente => ({
      ...ingrediente,
      quantidade: ingrediente.quantidade * factor
    }))

    atualizarReceitas[index] = receitaAtualizada
    setReceitas(atualizarReceitas)
  }

  const receitasFiltradas = receitas.filter(receitas =>
    receitas.nome.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <div className="recipe-list">
          <CustomInput
            placeholder="Pesquisar receitas"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {receitasFiltradas.map((receitas, index) => (
            <ProductCard 
              key={index} 
              index={index} 
              receitas={receitas} 
              deletarReceita={deletarReceita} 
              fracionarReceita={fracionarReceita} 
            />
          ))}
      </div>
    </>
  );
}

export default Home