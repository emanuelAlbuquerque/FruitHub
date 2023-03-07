import { Button } from 'components/Button'
import { ContainerStyleAssemblyDouble } from './style'

export interface IAssemblyDouble {
  textButtonLeft?: string
  handleClickButtonLeft: () => void

  handleClickButtonRight: () => void
  textButtonRight: string
}

export const AssemblyDouble = ({
  textButtonLeft,
  textButtonRight,
  handleClickButtonLeft,
  handleClickButtonRight
}: IAssemblyDouble) => {
  return (
    <ContainerStyleAssemblyDouble>
      <Button variant="secondary" onClick={handleClickButtonLeft}>
        {textButtonLeft}
      </Button>
      <Button variant="secondary" onClick={handleClickButtonRight}>
        {textButtonRight}
      </Button>
    </ContainerStyleAssemblyDouble>
  )
}
