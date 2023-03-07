import { Button } from 'components/Button'
import { Price } from 'components/Price'
import { ContainerStyleAssemblyDatails } from './style'

export interface IAssemblyDatails {
  price: number
  handleClick: () => void
  textButton: string
}

export const AssemblyDatails = ({
  handleClick,
  price,
  textButton
}: IAssemblyDatails) => {
  return (
    <ContainerStyleAssemblyDatails>
      <div className="container_datails">
        <p className="container_datails-total">Total</p>
        <Price price={price} variation="small" />
      </div>
      <Button onClick={handleClick}>{textButton}</Button>
    </ContainerStyleAssemblyDatails>
  )
}
