import { ContainerStyleButton } from "./style"

export interface IButton{
  children: string
  onClick: () => void
  variant: 'default' | 'secondary'
}

export const Button = ({onClick, children, variant}: IButton) => {
  return (
    <ContainerStyleButton variant={variant} onClick={onClick}>
      {children}
    </ContainerStyleButton>
  )
}