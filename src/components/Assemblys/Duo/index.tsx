import { IconHeart } from 'assets/Icons/Heart'
import { Button } from 'components/Button'
import { ReactNode } from 'react'
import { ContainerStyleAssemblyDuo } from './style'

export interface IDuo {
  iconButtonSmall: ReactNode
  handleClickButtonSmall: () => void

  textButtonLarge: string
  handleClickButtonLarge: () => void
}

export const Duo = ({
  handleClickButtonLarge,
  handleClickButtonSmall,
  iconButtonSmall,
  textButtonLarge
}: IDuo) => {
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
