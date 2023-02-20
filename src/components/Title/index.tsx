import { ContainerStyleTitle } from "./style"

export interface ITitle{
  children: string
}

export const Title = ({children}: ITitle) => {
  return (
    <ContainerStyleTitle>
      {children}
    </ContainerStyleTitle>
  )
}