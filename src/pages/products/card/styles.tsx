import styled from "styled-components";
import { colors } from "../../../theme/color";

export const Conteiner = styled.div`
    width: 20rem;
    background-color: ${colors.backgroundCard};
    margin-top: 2rem;
    justify-self: center;
    border: .2rem solid white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
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