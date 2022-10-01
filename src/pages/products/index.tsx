import React from 'react'
import Navbar from '../../components/navbar'
import Card from './card'
import { Botao, Conteiner, ConteinerBotao, ConteinerPaginacao, Letreiro, MeuCarrinho, MeuCarrinhoTitulo } from './styled'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { colors } from '../../theme/color'
import { IProduto } from '../../types/IProduto'

export default function Products() {
    const esculturas: IProduto[] = [
        {
            id: 0,
            nome: 'escultura segurando pedra',
            src: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-c7b20.appspot.com/o/homemSegurandoPedra.png?alt=media&token=7147d1fe-79dd-4b3a-9bbf-70ce4b62c8c3',
            preco: 3000
        },
        {
            id: 1,
            nome: 'escultura pessoa meio perfil',
            src: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-c7b20.appspot.com/o/escultura-meio-perfil.png?alt=media&token=74ccada9-58f2-49e5-9d5a-ebc12964',
            preco: 1500.99
        },
        {
            id: 2,
            nome: 'escultura dedo do meio',
            src: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-c7b20.appspot.com/o/dedo-do-meio.png?alt=media&token=1a5e2dd2-ecae-4795-b845-853b30cea1b1',
            preco: 5000
        }
    ]

    return (
        <>
            <Navbar />
            <Conteiner>
                <Card produto={esculturas[0]}/>
                <ConteinerPaginacao>
                    <Letreiro>Expolere todos os produtos</Letreiro>
                    <ConteinerBotao>
                        <Botao>1</Botao>
                        <Botao>2</Botao>
                        <Botao>3</Botao>
                    </ConteinerBotao>
                </ConteinerPaginacao>

                <Card produto={esculturas[1]}/>
                <MeuCarrinho to="/carrinho">
                    <MeuCarrinhoTitulo>Meu Carrinho</MeuCarrinhoTitulo>
                    <MdOutlineAddShoppingCart color={colors.destaque} fontSize={60}/>
                </MeuCarrinho>
                <Card produto={esculturas[0]}/>
                <Card produto={esculturas[2]}/>
                <Card produto={esculturas[0]}/>
            </Conteiner>
        </>
    )
}