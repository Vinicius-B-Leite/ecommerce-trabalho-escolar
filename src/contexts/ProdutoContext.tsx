import React, {createContext, useState} from 'react'
import { IProduto } from '../types/IProduto'


type ProdutoContext = {
    produtosNoCarrinho: IProduto[],
    setProdutosNoCarrinho: React.Dispatch<React.SetStateAction<IProduto[]>>
}
const ValorInicial = {
    produtosNoCarrinho: [],
    setProdutosNoCarrinho: ()=>{}
}

export const ProdutoContext = createContext<ProdutoContext>(ValorInicial)


type Props = {
    children: React.ReactNode
}
export function ProdutoContextoProvider({children}: Props){
    const [produtosNoCarrinho, setProdutosNoCarrinho] = useState<IProduto[]>(ValorInicial.produtosNoCarrinho)

    return(
        <ProdutoContext.Provider value={
            {   
                produtosNoCarrinho,
                setProdutosNoCarrinho
            }
            }> 
            {children}
        </ProdutoContext.Provider>
    )
}