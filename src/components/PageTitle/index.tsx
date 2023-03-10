import { Back } from 'components/Back'
import { ContainerStaylePageTitle } from './style'

export interface IPageTitle {
  text: string
  handleClickBack: () => void
}

export const PageTitle = ({ handleClickBack, text }: IPageTitle) => {
  return (
    <ContainerStaylePageTitle>
      <div>
        <Back text="Go Back" handleCLickBack={handleClickBack} />
        <h1>{text}</h1>
      </div>
    </ContainerStaylePageTitle>
  )
}
