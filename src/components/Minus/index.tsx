import { MinusIcon } from "assets/Icons/MinusIcon"
import { ContainerStyleMinus } from "./style"

export interface IMinus {
  onClickMinus?: () => void

  variant?: 'small' | 'large'
}

export const Minus = ({ onClickMinus, variant = 'small' }: IMinus) => {
  return (
    <ContainerStyleMinus variant={variant} onClick={onClickMinus}>
      <MinusIcon size={variant === 'small' ? 12 : 16}/>
    </ContainerStyleMinus>
  )
}