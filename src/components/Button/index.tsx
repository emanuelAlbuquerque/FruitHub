import { ReactNode } from 'react'
import { ContainerStyleButton } from './style'

export interface IButton {
  children: string | ReactNode
  onClick: () => void
  variant?: 'default' | 'secondary'
  disabled?: boolean
  className?: string
}

export const Button = ({
  onClick,
  children,
  variant = 'default',
  className,
  disabled
}: IButton) => {
  return (
    <ContainerStyleButton
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </ContainerStyleButton>
  )
}
