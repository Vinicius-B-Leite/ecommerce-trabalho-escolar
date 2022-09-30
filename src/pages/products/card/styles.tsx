import styled from "styled-components";
import { colors } from "../../../theme/color";


type ConteinerProps = {
    selecionado: boolean
}
export const Conteiner = styled.button<ConteinerProps>`
    width: 20rem;
    background-color: ${colors.backgroundCard};
    margin-top: 2rem;
    justify-self: center;
    border: .2rem solid ${p => p.selecionado ? colors.destaque : 'white'};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: url(${require('../../../assets/cursor/cursorAtivo.png')}), auto;
`

export const Produto = styled.img`
    max-width: 100%;
`

export const Corte = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4rem;
    height: .3rem;
    background-color: ${colors.backgroundCard};
    &:first-child{
        top: -.2rem;
    }
    &:last-child{
        bottom: -.2rem;
    }
`