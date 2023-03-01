import { IconHeart } from 'assets/Icons/Heart'
import { Plus } from 'components/Plus'
import { Price } from 'components/Price'
import { ContainerStyleCardVertical } from './style'

import Prato from '../../assets/img/pratoBarry.svg'

export interface ICardVertical {
  price: number
  nameDish: string
  img: string
  variation?: 'default' | 'small'
}

export const CardVertical = ({
  img,
  nameDish,
  price,
  variation = 'default'
}: ICardVertical) => {
  return (
    <ContainerStyleCardVertical variation={variation}>
      <button className="button_like">
        <IconHeart />
      </button>
      <img src={img} alt="" />
      <h3>{nameDish}</h3>
      <div className="container_price">
        <Price price={price} />
        <Plus />
      </div>
    </ContainerStyleCardVertical>
  )
}
