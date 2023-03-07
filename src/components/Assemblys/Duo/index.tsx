import { IconHeart } from 'assets/Icons/Heart'
import { Button } from 'components/Button'
import { ReactNode } from 'react'
import { ContainerStyleAssemblyDuo } from './style'

export interface IAssemblyDuo {
  iconButtonSmall: ReactNode
  handleClickButtonSmall: () => void

  textButtonLarge: string
  handleClickButtonLarge: () => void
}

export const AssemblyDuo = ({
  handleClickButtonLarge,
  handleClickButtonSmall,
  iconButtonSmall,
  textButtonLarge
}: IAssemblyDuo) => {
  return (
    <ContainerStyleAssemblyDuo>
      <div className="container_button-secondary">
        <button onClick={handleClickButtonSmall}>{iconButtonSmall}</button>
      </div>
      <Button onClick={handleClickButtonLarge} className="button_default">
        {textButtonLarge}
      </Button>
    </ContainerStyleAssemblyDuo>
  )
}
