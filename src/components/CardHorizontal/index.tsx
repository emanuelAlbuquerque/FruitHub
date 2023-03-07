import { Counter } from 'components/Counter'
import { Price } from 'components/Price'
import { ContainerStyleCardHorizontal } from './style'

import Prato from '../../assets/img/PratoBarry.svg'
import { useState } from 'react'

export interface ICardHorizontal {
  image: string
  name: string

  quantify: number
  price: number
}

export const CardHorizontal = ({
  image,
  name,
  price,
  quantify
}: ICardHorizontal) => {
  const [counter, setCounter] = useState(quantify)

  const handleUpdateItem = (action: 'increment' | 'decrement') => {
    if (action === 'increment') {
      setCounter(counter + 1)
    } else {
      if (counter > 1) {
        setCounter(counter - 1)
      }
    }
  }

  return (
    <ContainerStyleCardHorizontal>
      <div className="container_img">
        <img src={image} alt="" />
      </div>
      <div className="options">
        <h2>{name}</h2>
        <Counter
          counter={counter}
          variation="small"
          className="options_counter"
          handleUpdateAmountAdd={() => handleUpdateItem('increment')}
          handleUpdateAmountMinus={() => handleUpdateItem('decrement')}
        />
        <Price price={price} variation="small" />
      </div>
    </ContainerStyleCardHorizontal>
  )
}
