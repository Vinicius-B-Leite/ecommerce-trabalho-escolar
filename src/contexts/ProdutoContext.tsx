import React, {createContext, useState} from 'react'
import { IProduto } from '../types/IProduto'


type ProdutoContextType = {
    produtosNoCarrinho: IProduto[],
    setProdutosNoCarrinho: React.Dispatch<React.SetStateAction<IProduto[]>>,
    total: number
}
const ValorInicial = {
    produtosNoCarrinho: [],
    setProdutosNoCarrinho: ()=>{},
    total: 0.0
}

export const ProdutoContext = createContext<ProdutoContextType>(ValorInicial)


type Props = {
    children: React.ReactNode
}
export function ProdutoContextoProvider({children}: Props){
    const [produtosNoCarrinho, setProdutosNoCarrinho] = useState<IProduto[]>(ValorInicial.produtosNoCarrinho)
    var total = 0

    const calculaTotal = () => {
        produtosNoCarrinho.forEach(p => total += p.preco)
        total.toFixed(2)
    }

    calculaTotal()
    return(
        <ProdutoContext.Provider value={
            {   
                produtosNoCarrinho,
                setProdutosNoCarrinho,
                total
            }
            }> 
            {children}
        </ProdutoContext.Provider>
    )
}