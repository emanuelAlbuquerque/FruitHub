import { PlusIcon } from "assets/Icons/PlusIcon"
import { ContainerStylePlus } from "./style"

export interface IPlus {
  onClickPlus?: () => void

  variant?: 'small' | 'large'
}

export const Plus = ({ onClickPlus, variant = 'small' }: IPlus) => {
  return (
    <ContainerStylePlus variant={variant} onClick={onClickPlus}>
      <PlusIcon size={variant === 'small' ? 12 : 16}/>
    </ContainerStylePlus> 
  )
}