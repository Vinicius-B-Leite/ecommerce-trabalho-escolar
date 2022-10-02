import styled from 'styled-components'
import { colors } from '../../theme/color'
import { Link } from 'react-router-dom'

export const ContinerGeral = styled.div`
    display: flex;
    height: 85vh;
    
`
export const ContinerPrincipal = styled.div`
    padding: 1.4rem 4rem;
    box-sizing: border-box;
    @media screen and (max-width: 1022px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0;
    }
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 0;
    }
`
export const Titulo = styled.h1`
    color: ${colors.texto};
    font-size: 4rem;
    line-height: 5rem;
    @media screen and (max-width: 1022px){
        text-align: center;
        line-height: 3rem;
    }
    @media screen and (max-width: 425px){
        font-size: 2rem;
    }
`
export const TituloDestaque = styled.strong`
    color: ${colors.destaque};
    font-size: 6rem;
    line-height: 6rem;
    @media screen and (max-width: 1025px){
        text-align: center;
        line-height: 3rem;
    }

    @media screen and (max-width: 425px){
        font-size: 4rem;
    }
`

export const ConteinerParagrafo = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px){
        width: 100%;
    }
    @media screen and (max-width: 768px){
        width: 50%;
    }
    @media screen and (max-width: 425px) {
        width: 100%;
    }
    
`
export const Paragrafo = styled.p`
    color: ${colors.texto};
    font-size: 1.4rem;
    white-space: pre-wrap;
    padding-left: .5rem;
    @media screen and (max-width: 1024px){
        text-align: center;
        line-height: 1.2rem;
    }
`

export const Botao = styled.button`
    border: .1rem solid ${colors.texto};
    background-color: transparent;
    border-radius: 50%;
    font-size: 1rem;
    padding: 1rem 1.4rem;
    color: ${colors.texto};
    margin: 1rem;
    align-self: center;
    &:hover{
        cursor: url(${require('../../assets/cursor/cursorAtivo.png')}), auto;
    }
    @media screen and (max-width: 1024px){
        display: none;
    }
`

export const ConteinerEsculturas = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    overflow: hidden;
    @media screen and (max-width: 1022px){
        display: none;
    }
    `

export const Esculturas = styled.img`
    width: 40vw;
    align-self: flex-end;
`

export const ImagemOuro = styled.img`
    width: 15rem;
    @media screen and (max-width: 1306px){
        display: none;
    }
`

export const BotaoVerMais = styled(Link)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 78%;
    left: -2%;
    color: ${colors.texto};
    font-size: 2rem;
    border: .1rem solid ${colors.texto};
    padding: 7rem 5rem;
    border-radius: 50%;
    text-decoration: none;
    &:hover{
        cursor: url(${require('../../assets/cursor/cursorAtivo.png')}), auto;
    }
    @media screen and (max-width: 1022px){
        left: -4rem;
        top: 30rem;
    }
`

