import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../theme/color'

export const Conteiner = styled.header`
    color: white;
    padding: 1rem 2rem ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .2rem solid #d9d9d9;
`

export const Logo = styled.h1`
    font-size: 2rem;
    white-space: nowrap;
`
interface Props {
    ativo: boolean
}
export const NavBar = styled.nav<Props>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    @media screen and (max-width: 880px){
        ${props => props.ativo === false && css`
            display: none;
        `}
        ${props => props.ativo === true && css`
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            z-index: 2;
            background-color: ${colors.backgroundCard};
            flex-direction: column;
        `}
    }
`

export const MenuHamburg = styled.button<Props>`
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    border: 0;
    width: 3.5rem;
    height: 2rem;
    display: none;
    z-index: 3;
    @media screen and (max-width: 880px){
        display: flex;
    }
`

export const Linha1 = styled.div<Props>`
    width: 100%;
    height: .3rem;
    background-color: #ffffff;
    transition: 1s;
    ${props => props.ativo === true && css`
        transform: rotate(30deg) translate(15%, 130%);
        transition: 1s;
    `}
`
export const Linha2 = styled.div<Props>`
    width: 100%;
    height: .3rem;
    background-color: #ffffff;
    transition: 1s;
    ${props => props.ativo === true && css`
        margin-left: 5rem;
        opacity: 0;
        transition: 1s;
    `}
`
export const Linha3 = styled.div<Props>`
    width: 100%;
    height: .3rem;
    background-color: #ffffff;
    transition: 1s;
    ${props => props.ativo === true && css`
        transform: rotate(145deg) translate(-25%, 250%);
        transition: 1s;
    `}
`


export const ListaLink = styled.ul<Props>`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width: 70%;
    @media screen and (max-width: 880px){
        ${props => props.ativo === true && css`
            flex-direction: column;
            height: 80vh;
        `}
    }

`
export const ConteinerLink = styled.li``
export const LinkTo = styled(Link)`
    text-decoration: none;
    color: #d9d9d9;
    font-size: 1.3rem;
    font-weight: 500;
    &:hover{
        cursor: url(${require('../../assets/cursor/cursorAtivo.png')}), auto;
    }
`

export const LinkToCarrinho = styled(LinkTo)<Props>`
    
    @media screen and (max-width: 880px){
        ${props => props.ativo === true && css`
            height: 70vh;
            padding-left: 3rem;
        `}
    }
`