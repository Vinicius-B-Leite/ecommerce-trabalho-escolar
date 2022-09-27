import styled from 'styled-components'
import { colors } from '../../theme/color'
import { Link } from 'react-router-dom'

export const ContinerGeral = styled.div`
    display: flex;
    height: 85vh;
`
export const ContinerPrincipal = styled.div`
    padding: 2rem 4rem;
    box-sizing: border-box;
`
export const Titulo = styled.h1`
    color: ${colors.texto};
    font-size: 4rem;
    line-height: 5rem;
`
export const TituloDestaque = styled.strong`
    color: ${colors.destaque};
    font-size: 6rem;
    line-height: 6rem;
`

export const ConteinerParagrafo = styled.div`
    display: flex;
    align-items: center;
`
export const Paragrafo = styled.p`
    color: ${colors.texto};
    font-size: 1.4rem;
    white-space: pre-wrap;
    padding-left: .5rem   ;
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
`

export const ConteinerEsculturas = styled.div`
    display: flex;
    padding: 0 5rem;
    width: 60%;
    /* background-color: red; */
    justify-content: center;
    overflow: hidden;
    `

export const Esculturas = styled.img`
    max-width: 100%;
    align-self: flex-end;
`

export const ImagemOuro = styled.img`
    width: 15rem;
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
`

