import styled, { keyframes } from "styled-components";
import { colors } from "../../theme/color";
import { Link } from "react-router-dom";

export const Conteiner = styled.div`
    width: 100%;
    height: 85vh;
    display: grid;
    grid-template-columns: 28rem 28rem 28rem 17rem;
    grid-template-rows: 50%;
    justify-content: center;
    gap: 1rem;
    box-sizing: border-box;
`
export const ConteinerPaginacao = styled.div`
    margin-top: 2rem;
    background-color: ${colors.backgroundCard};
    position: relative;
    overflow: hidden;
    width: 20rem;
    justify-self: center;
`

export const ConteinerBotao = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10rem;
    width: 100%;
`
export const Botao = styled.a`
    font-size: 1.3rem;
    color: ${colors.texto};
    padding: .5rem 1.2rem .75rem 1.2rem;
    border: .1rem solid ${colors.texto};
    border-radius: 50%;
    text-align: center;
    &:hover{
        cursor: url(${require('../../assets/cursor/cursorAtivo.png')}), auto;
    }
`

const  animacao = keyframes`
    from{
        left: -35rem;
    }
    to{
        left: 30rem;
    }
`

export const Letreiro = styled.h2`
    position: absolute;
    color: ${colors.texto};
    font-size: 2rem;
    text-transform: uppercase;
    white-space: nowrap;
    animation: ${animacao} 10s infinite ease-in-out;
    word-spacing: 1rem;
`



export const MeuCarrinho = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    grid-row: span 2;
    border-top: none;
    border-left: 0.2rem solid ${colors.texto};
    display: flex;
    text-decoration: none;
`
export const MeuCarrinhoTitulo = styled.h1`
    color: ${colors.texto};
    rotate: 90deg;
    font-size: 4rem;
    white-space: nowrap;
`