import { IconHeart } from 'assets/Icons/Heart'
import { Button } from 'components/Button'
import { ReactNode } from 'react'
import { ContainerStyleAssemblyDuo } from './style'

export interface IAssemblyDuo {
  iconButtonSmall: ReactNode
  handleClickButtonSmall: () => void

  textButtonLarge: string
  handleClickButtonLarge: () => void

  className?: string
}

export const AssemblyDuo = ({
  handleClickButtonLarge,
  handleClickButtonSmall,
  iconButtonSmall,
  textButtonLarge,
  className
}: IAssemblyDuo) => {
  return (
    <ContainerStyleAssemblyDuo className={className}>
      <div className="container_button-secondary">
        <button onClick={handleClickButtonSmall}>{iconButtonSmall}</button>
      </div>
      <Button onClick={handleClickButtonLarge} className="button_default">
        {textButtonLarge}
      </Button>
    </ContainerStyleAssemblyDuo>
  )
}
