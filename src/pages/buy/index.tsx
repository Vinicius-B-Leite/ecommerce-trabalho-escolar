import React from "react";
import Navbar from "../../components/navbar";
import { BotaoComprar, BotaoProximaPag, Conteiner, ConteinerComprar, ConteinerCupom, ConteinerInfoProduto, ConteinerProdutos, CupomInput, CupomLabel, ImagemEscultura, NomeEscultura, Preco, Produto, ProdutoImagem, TotalPreco } from "./styles";
import { MdOutlineNavigateNext } from 'react-icons/md';


export default function Buy() {
    return (
        <>
            <Navbar />
            <Conteiner>

                <div>
                    <ConteinerProdutos >
                        <Produto>
                            <ProdutoImagem src="https://firebasestorage.googleapis.com/v0/b/ecommerce-c7b20.appspot.com/o/dedo-do-meio.png?alt=media&token=1a5e2dd2-ecae-4795-b845-853b30cea1b1" alt="" />
                        </Produto>
                        <ConteinerInfoProduto>
                            <NomeEscultura>nome da escultura</NomeEscultura>
                            <Preco>R$ 3.000,00</Preco>
                        </ConteinerInfoProduto>
                    </ConteinerProdutos>
                    <ConteinerProdutos >
                        <Produto>
                            <ProdutoImagem src="https://firebasestorage.googleapis.com/v0/b/ecommerce-c7b20.appspot.com/o/dedo-do-meio.png?alt=media&token=1a5e2dd2-ecae-4795-b845-853b30cea1b1" alt="" />
                        </Produto>
                        <ConteinerInfoProduto>
                            <NomeEscultura>nome da escultura</NomeEscultura>
                            <Preco>R$ 3.000,00</Preco>
                        </ConteinerInfoProduto>
                    </ConteinerProdutos>
                    <BotaoProximaPag><MdOutlineNavigateNext /></BotaoProximaPag>
                </div>

                <ConteinerComprar>
                    <ConteinerCupom>
                        <CupomLabel htmlFor="cupom">Você tem algum cupom?</CupomLabel>
                        <CupomInput id="cupom" type="text" />
                    </ConteinerCupom>
                    <div>
                        <TotalPreco>Total: R$ 3.000,00</TotalPreco>
                        <ImagemEscultura src={require('../../assets/esculturas/escultura-poseidon.png')} alt="" />
                    </div>
                    <BotaoComprar>Comprar</BotaoComprar>
                </ConteinerComprar>

            </Conteiner>
        </>
    )
}