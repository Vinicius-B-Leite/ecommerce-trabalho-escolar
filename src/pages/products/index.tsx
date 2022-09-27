import React from 'react'
import Navbar from '../../components/navbar'
import Card from './card'
import { Conteiner, MeuCarrinho, MeuCarrinhoTitulo } from './styled'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { colors } from '../../theme/color'

export default function Products() {
    const esculturas = [
        {
            nome: 'escultura segurando pedra',
            src: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-c7b20.appspot.com/o/homemSegurandoPedra.png?alt=media&token=7147d1fe-79dd-4b3a-9bbf-70ce4b62c8c3'
        },
        {
            nome: 'escultura pessoa meio perfil',
            src: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-c7b20.appspot.com/o/escultura-meio-perfil.png?alt=media&token=74ccada9-58f2-49e5-9d5a-ebc12964'
        },
        {
            nome: 'escultura dedo do meio',
            src: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-c7b20.appspot.com/o/escultura-dedo-do-meio.png?alt=media&token=95e4e3ea-62fc-492d-bc35-4cb2c9b540d5'
        }
    ]

    return (
        <>
            <Navbar />
            <Conteiner>
                <Card src={esculturas[0].src} />
                <h1>ejhfkjehakh</h1>
                <Card src={esculturas[0].src} />
                <MeuCarrinho>
                    <MeuCarrinhoTitulo>Meu Carrinho</MeuCarrinhoTitulo>
                    <MdOutlineAddShoppingCart color={colors.destaque} fontSize={60}/>
                </MeuCarrinho>
                <Card src={esculturas[0].src} />
                <Card src={esculturas[0].src} />
                <Card src={esculturas[0].src} />
            </Conteiner>
        </>
    )
}