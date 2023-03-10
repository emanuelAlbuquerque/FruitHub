import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

export interface IContainerStyleButton {
  variant: 'default' | 'secondary'
  disabled?: boolean
}

export const ContainerStyleButton = styled.button<IContainerStyleButton>`
  width: 100%;
  padding: 1.2rem 0;

  background: ${({ theme, variant }) => variant === 'default' ? theme.Colors.orange : theme.Colors.orangeSmoke};
  color: ${({ theme, variant }) => variant === 'default' ? theme.Colors.withe : theme.Colors.orange};
  border: none;

  border-radius: 8px;

  ${({ disabled }) => !disabled && 'cursor: pointer;'}

  ${({ theme }) => chooseTypography(theme.Typography.TextRegular)}

  &:disabled{
    opacity: .7;
  }
`