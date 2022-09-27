import React from 'react'
import { Conteiner, Produto } from './styles'

interface Props {
    src: string
}
export default function Card({ src }: Props) {

    return (
        <Conteiner>
            
            <Produto src={src} alt="" />
        </Conteiner>
    )
}

