import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    `
export const ListaLink = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width: 70%;
`
export const ConteinerLink = styled.li``
export const LinkTo = styled(Link)`
    text-decoration: none;
    color: #d9d9d9;
    font-size: 1.3rem;
    font-weight: 500;
`