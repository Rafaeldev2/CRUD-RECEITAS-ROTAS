import React, {useState, useContext} from 'react'
import ProductCard from '../Components/card'
import { ProdutosContext } from '../Context/GlobalContext'
import './Home.css'
import CustomInput from '../Components/CustomInput'




const Home = () => {
  const { produtos, setProdutos } = useContext(ProdutosContext)
  const [searchQuery, setSearchQuery] = useState('')

  const deletarProduto = (index) => {
    const atualizarProdutos = [...produtos]
    atualizarProdutos.splice(index, 1)
    setProdutos(atualizarProdutos)
  }

  const fracionarReceita = (index, factor) => {
    const atualizarProdutos = [...receitas]
    const receitaAtualizada = { ...atualizarReceitas[index] }

    receitaAtualizada.ingredientes = receitaAtualizada.ingredientes.map(ingrediente => ({
      ...ingrediente,
      quantidade: ingrediente.quantidade * factor
    }))

    atualizarReceitas[index] = receitaAtualizada
    setReceitas(atualizarReceitas)
  }

  const produtosFiltrados = produtos.filter(produtos =>
    produtos.nome.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <div className="recipe-list">
          <CustomInput
            placeholder="Pesquisar receitas"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {produtosFiltrados.map((produtos, index) => (
            <ProductCard 
              key={index} 
              index={index} 
              produtos={produtos} 
              deletarProduto={deletarProduto} 
              produtosFiltrados={produtosFiltrados} 
            />
          ))}
      </div>
    </>
  );
}

export default Home