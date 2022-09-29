import styled from "styled-components";
import { colors } from "../../theme/color";

export const Conteiner = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 75% 25%;

`

export const ConteinerProdutos = styled.div`
    display: flex;
    box-sizing: border-box;
    border-bottom: .2rem solid white;
`


export const Produto = styled.div`
    background-image: url(${require('../../assets/buy/folder.png')});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
    padding: .5rem;
    border-right: .2rem solid white;
    padding: 3rem;
`

export const ProdutoImagem = styled.img`
    max-width: 80%;
`

export const ConteinerInfoProduto = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
`

export const BotaoProximaPag = styled.button`
    border: .1rem solid white;
    background-color: transparent;
    font-size: 3rem;
    padding: .7rem 1rem;
    color: ${colors.texto};
    justify-self: flex-end;
    border-radius: 50%;
    margin: 1rem;
    &:hover{
        cursor: url(${require('../../assets/cursor/cursorAtivo.png')}), auto;
    }
`

export const NomeEscultura = styled.p`
    color: ${colors.texto};
    font-size: 1.4rem;
    border: 0.1rem solid white;
    padding: 1rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
`

export const Preco = styled.p`
    color: ${colors.texto};
    font-size: 1.4rem;
`

export const ConteinerComprar = styled.div`
    padding: 7rem 3rem;
    border-left: 0.2rem solid white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`

export const ConteinerCupom = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const CupomLabel = styled.label`
    color: ${colors.texto};
    font-size: 1.3rem;
    line-height: 3rem;
`

export const CupomInput = styled.input`
    border: 0;
    border-bottom: 0.1rem solid white;
    background-color: transparent;
    width: 100%;
    color: ${colors.texto};
    font-size: 1rem;
    outline: none;
    padding: 0.5rem;
`

export const TotalPreco = styled.p`
    color: ${colors.texto};
    font-size: 2rem;
`

export const ImagemEscultura = styled.img`
    transform: rotate(90deg) translate(-100%, -60%);
    height: 100%;
    width: 3rem;
    object-fit: cover;
`

export const BotaoComprar = styled.button`
    position: absolute;
    font-size: 1.5rem;
    background-color: transparent;
    color: ${colors.texto};
    border: 0.1rem solid white;
    padding: 4.8rem 3.5rem;
    border-radius: 50%;
    bottom: -1.2rem;
    right: -2.3rem;
`