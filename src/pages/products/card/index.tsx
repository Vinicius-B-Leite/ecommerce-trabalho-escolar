import React, { useContext, useState } from 'react'
import { ProdutoContext } from '../../../contexts/ProdutoContext'
import { IProduto } from '../../../types/IProduto'
import { Conteiner, Corte, Produto } from './styles'

type Props = {
    produto: IProduto
}
export default function Card({ produto }: Props) {
    const { setProdutosNoCarrinho } = useContext(ProdutoContext)
    const [estaNoCarrinho, setEstaNoCarrinho] = useState(false)

    const adicionarNoCarrinho = () => {
        setProdutosNoCarrinho(p => p && [...p, { ...produto }])
        setEstaNoCarrinho(true)
    }
    const tirarDoCarrinho = () => {
        setProdutosNoCarrinho(p => p.filter(e => e.id !== produto.id))
        setEstaNoCarrinho(false)
    }
    return (
        <Conteiner onClick={() => estaNoCarrinho ? tirarDoCarrinho() : adicionarNoCarrinho()} selecionado={estaNoCarrinho}>
            <Corte></Corte>
            <Produto src={produto.src} alt={produto.nome} />
            <Corte></Corte>
        </Conteiner>
    )
}

