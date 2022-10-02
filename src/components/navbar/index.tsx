import React, { useState } from "react";
import { Conteiner, ConteinerLink, Linha1, Linha2, Linha3, LinkTo, LinkToCarrinho, ListaLink, Logo, MenuHamburg, NavBar } from "./styled";

export default function Navbar() {
    const [ativo, setAtivo] = useState(false)
    return (
        <Conteiner>
            <Logo>BL Esculturas</Logo>
            <MenuHamburg onClick={() => setAtivo(!ativo)} ativo={ativo}>
                <Linha1 ativo={ativo}></Linha1>
                <Linha2 ativo={ativo}></Linha2>
                <Linha3 ativo={ativo}></Linha3>
            </MenuHamburg>
            <NavBar ativo={ativo}>
                <ListaLink ativo={ativo}>
                    <ConteinerLink><LinkTo to="/">Home</LinkTo></ConteinerLink>
                    <ConteinerLink><LinkTo to="/produtos">Produtos</LinkTo></ConteinerLink>
                </ListaLink>
                    <LinkToCarrinho ativo={ativo} to="/carrinho">Meu carrinho</LinkToCarrinho>
            </NavBar>
        </Conteiner>
    )
}