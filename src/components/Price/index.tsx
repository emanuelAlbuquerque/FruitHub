import { Dollar } from 'assets/Icons/Dollar'
import { ContainerStylePrice } from './style'

export interface IPrice {
  price: number

  variation?: 'default' | 'large' | 'small'
}

export const Price = ({ price, variation = 'default' }: IPrice) => {
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <ContainerStylePrice variation={variation}>
      {/* <Dollar className="price_icon"/> */}
      <p>{formattedPrice}</p>
    </ContainerStylePrice>
  )
}
