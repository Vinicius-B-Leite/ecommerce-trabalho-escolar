import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import { FaRecycle } from 'react-icons/fa';
import { Botao, BotaoVerMais, ConteinerEsculturas, ConteinerParagrafo, ContinerGeral, ContinerPrincipal, Esculturas, ImagemOuro, Paragrafo, Titulo, TituloDestaque } from "./styled";
import { colors } from "../../theme/color";

export default function Home() {

    const [contador, setContador] = useState(0)

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
            src: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-c7b20.appspot.com/o/dedo-do-meio.png?alt=media&token=1a5e2dd2-ecae-4795-b845-853b30cea1b1'
        }
    ]

    useEffect(()=>{
        setTimeout(()=>{
            if (contador == esculturas.length - 1) setContador(0)
            else setContador(c => c + 1)
        }, 10000)
    }, [contador])
    

    return (
        <>
            <Navbar />
            <ContinerGeral>
                <ContinerPrincipal>
                    <Titulo>
                        As melhores <br />
                        <TituloDestaque>Esculturas</TituloDestaque>
                    </Titulo>
                    <ConteinerParagrafo>
                        <FaRecycle color={colors.destaque} size={60} />
                        <Paragrafo>Descubra a maior variedade de esculturas para combinar com a sua energia</Paragrafo>
                    </ConteinerParagrafo>
                    <Botao onClick={()=>setContador(0)}>1</Botao>
                    <Botao onClick={()=>setContador(1)}>2</Botao>
                    <Botao onClick={()=>setContador(2)}>3</Botao>
                </ContinerPrincipal>
                <ConteinerEsculturas>
                        <Esculturas src={esculturas[contador].src} alt={esculturas[contador].nome} />
                </ConteinerEsculturas>

                <ImagemOuro src={require("../../assets/home/cor-de-ouro.jpg")} alt="" />

                <BotaoVerMais to="/produtos">
                    Ver Mais
                </BotaoVerMais>
            </ContinerGeral>

        </>
    )
}