import React from 'react'
import { Conteiner, Corte, Produto } from './styles'

interface Props {
    src: string
}
export default function Card({ src }: Props) {

    return (
        <Conteiner>
            <Corte></Corte>
            <Produto src={src} alt="" />
            <Corte></Corte>
        </Conteiner>
    )
}

