
import {ConhecimentoContainer} from './styles'
import {ReactNode} from 'react'
import {useInView} from 'react-intersection-observer'

interface ConhecimentoProps {
    title:string;
    icon: ReactNode;
}

export default function ConhecimentoItem({title,icon} : ConhecimentoProps) {
    return (
        <ConhecimentoContainer data-aos="flip-left">
            <p>{title}</p>
            <p>{icon}</p>
        </ConhecimentoContainer>
    )
}