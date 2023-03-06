import styled from "styled-components";

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

  font-size: ${props => props.theme.Typography.TextRegular.size};
  font-weight: ${props => props.theme.Typography.TextRegular.weight};

  &:disabled{
    opacity: .7;
  }
`