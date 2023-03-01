import { ReactNode } from 'react'
import { ContainerStyleButton } from './style'

export interface IButton {
  children: string | ReactNode
  onClick: () => void
  variant?: 'default' | 'secondary'

  className?: string
}

export const Button = ({
  onClick,
  children,
  variant = 'default',
  className
}: IButton) => {
  return (
    <ContainerStyleButton
      variant={variant}
      onClick={onClick}
      className={className}
    >
      {children}
    </ContainerStyleButton>
  )
}
