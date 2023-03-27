import { ContainerStyleCardContain } from './style'

export interface ICardContain {
  text: string
}

export const CardContain = ({ text }: ICardContain) => {
  return <ContainerStyleCardContain>{text}</ContainerStyleCardContain>
}
