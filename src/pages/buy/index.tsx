import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar";
import { BotaoComprar, BotaoProximaPag, CarrinhoVazio, Conteiner, ConteinerComprar, ConteinerCupom, ConteinerInfoProduto, ConteinerProdutos, CupomInput, CupomLabel, ImagemEscultura, NomeEscultura, Preco, Produto, ProdutoImagem, TotalPreco } from "./styles";
import { MdOutlineNavigateNext } from 'react-icons/md';
import { ProdutoContext } from "../../contexts/ProdutoContext";


export default function Buy() {
    const { produtosNoCarrinho, total } = useContext(ProdutoContext)
    var [index, setIndex] = useState(0)
    var [produtosAtuais, setProdutosAtuais] = useState((produtosNoCarrinho.length > 1) ? [produtosNoCarrinho[index], produtosNoCarrinho[index + 1]] : [produtosNoCarrinho[index]])

    const proximosProdutos = () => {
        if (index + 2 <= produtosNoCarrinho.length) {
            setIndex(index + 2)
            setProdutosAtuais(((produtosNoCarrinho.length - 2) > 1) ? [produtosNoCarrinho[index], produtosNoCarrinho[index + 1]] : [produtosNoCarrinho[index + 2]])
        }else {
            setIndex(0)
            setProdutosAtuais(((produtosNoCarrinho.length - index) > 1) ? [produtosNoCarrinho[0], produtosNoCarrinho[1]] : [produtosNoCarrinho[produtosNoCarrinho.length - 1]])
        }
    }



    return (
        <>
            <Navbar />
            <Conteiner>
                {
                    produtosNoCarrinho.length > 0 ?
                        (
                            <>
                                <div>
                                    {
                                        produtosAtuais.map(({ src, nome, preco }) => {
                                            return (
                                                <ConteinerProdutos >
                                                    <Produto>
                                                        <ProdutoImagem src={src} alt={nome} />
                                                    </Produto>
                                                    <ConteinerInfoProduto>
                                                        <NomeEscultura>{nome}</NomeEscultura>
                                                        <Preco>R$ {preco.toString().replace('.', ',')}</Preco>
                                                    </ConteinerInfoProduto>
                                                </ConteinerProdutos>
                                            )
                                        })
                                    }
                                    {produtosNoCarrinho.length > 2 && <BotaoProximaPag onClick={() => proximosProdutos()}><MdOutlineNavigateNext /></BotaoProximaPag>}
                                </div>
                                <ConteinerComprar>
                                    <ConteinerCupom>
                                        <CupomLabel htmlFor="cupom">Você tem algum cupom?</CupomLabel>
                                        <CupomInput id="cupom" type="text" />
                                    </ConteinerCupom>
                                    <div>
                                        <TotalPreco>Total: R$ {total.toString().replace('.', ',')}</TotalPreco>
                                        <ImagemEscultura src={require('../../assets/esculturas/escultura-poseidon.png')} alt="" />
                                    </div>
                                    <BotaoComprar>Comprar</BotaoComprar>
                                </ConteinerComprar>
                            </>

                        )
                        :
                        <CarrinhoVazio>Carrinho vazio</CarrinhoVazio>
                }





            </Conteiner>
        </>
    )
}