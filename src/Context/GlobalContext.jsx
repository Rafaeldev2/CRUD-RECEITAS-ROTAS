import { createContext, useState } from "react";

export const ProdutosContext = createContext()

export const ProdutosContextProvider = ( ({children}) => {
    const [produtos, setProdutos] = useState([])

    return(
        <ProdutosContext.Provider value={{produtos, setProdutos}}>
            {children}
        </ProdutosContext.Provider>
    )
    }
)