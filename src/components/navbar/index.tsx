import React from "react";
import { Conteiner, ConteinerLink, LinkTo, ListaLink, Logo, NavBar } from "./styled";

export default function Navbar(){
    return(
        <Conteiner>
            <Logo>BL Esculturas</Logo>
            <NavBar>
                <ListaLink>
                    <ConteinerLink><LinkTo to="/">Home</LinkTo></ConteinerLink>
                    <ConteinerLink><LinkTo to="/produtos">Produtos</LinkTo></ConteinerLink>
                </ListaLink>
                <LinkTo to="/carrinho">Meu carrinho</LinkTo>
            </NavBar>
        </Conteiner>
    )
}