import { createContext, useState } from "react";

export const ReceitasContext = createContext()

export const ReceitasContextProvider = ( ({children}) => {
    const [receitas, setReceitas] = useState([])

    return(
        <ReceitasContext.Provider value={{receitas, setReceitas}}>
            {children}
        </ReceitasContext.Provider>
    )
    }
)