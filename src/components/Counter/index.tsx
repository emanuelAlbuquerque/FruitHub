import { Minus } from 'components/Minus'
import { Plus } from 'components/Plus'
import { ContainerStyleCounter } from './style'

export interface IConter {
  handleUpdateAmountAdd: () => void
  handleUpdateAmountMinus: () => void
  counter: number

  variation?: 'large' | 'small'
  className?: string
}

export const Counter = ({
  counter,
  handleUpdateAmountAdd,
  handleUpdateAmountMinus,
  variation = 'large',
  className
}: IConter) => {
  return (
    <ContainerStyleCounter variation={variation} className={className}>
      <Plus
        onClickPlus={handleUpdateAmountAdd}
        variant={variation === 'large' ? 'large' : 'small'}
      />
      <p>{counter}</p>
      <Minus
        onClickMinus={handleUpdateAmountMinus}
        variant={variation === 'large' ? 'large' : 'small'}
      />
    </ContainerStyleCounter>
  )
}
