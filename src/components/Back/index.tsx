import { ArrowLarge } from 'assets/Icons/ArrowLarge'
import { ContainerStayleBack } from './style'

export interface IBack {
  handleCLickBack: () => void
  text: string
}

export const Back = ({ handleCLickBack, text }: IBack) => {
  return (
    <ContainerStayleBack onClick={handleCLickBack}>
      <ArrowLarge />
      <p>{text}</p>
    </ContainerStayleBack>
  )
}
