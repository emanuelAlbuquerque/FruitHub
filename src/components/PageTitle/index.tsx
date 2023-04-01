import { Back } from 'components/Back'
import { ContainerStaylePageTitle } from './style'

export interface IPageTitle {
  text: string
  handleClickBack: () => void
  className?: string
}

export const PageTitle = ({ handleClickBack, text, className }: IPageTitle) => {
  return (
    <ContainerStaylePageTitle className={className}>
      <div>
        <Back text="Go Back" handleCLickBack={handleClickBack} />
        <h1>{text}</h1>
      </div>
    </ContainerStaylePageTitle>
  )
}
