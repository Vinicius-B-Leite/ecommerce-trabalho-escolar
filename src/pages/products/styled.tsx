import styled from "styled-components";
import { colors } from "../../theme/color";

export const Conteiner = styled.div`
    padding: 0 2rem;
    width: 100%;
    height: 85vh;
    display: grid;
    grid-template-columns: 28rem 28rem 28rem 17rem;
    grid-template-rows: 50%;
    justify-content: center;
    gap: 2rem;
    box-sizing: border-box;
`

export const MeuCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    grid-row: span 2;
    border-top: none;
    border-left: 0.2rem solid ${colors.texto};
    display: flex;
`
export const MeuCarrinhoTitulo = styled.h1`
    color: ${colors.texto};
    rotate: 90deg;
    font-size: 4rem;
    white-space: nowrap;
`