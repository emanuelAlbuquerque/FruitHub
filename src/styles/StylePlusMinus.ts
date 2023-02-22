import styled from "styled-components";

interface IContainerStylePlusMinus {
  variant?: 'small' | 'large'
}

export const ContainerStylePlusMinus = styled.button <IContainerStylePlusMinus>`

  width: ${({ variant }) => variant === 'small' ? '24px;' : '32px;'};
  height: ${({ variant }) => variant === 'small' ? '24px;' : '32px;'};

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;
  cursor: pointer;

  background-color: ${({ theme }) => theme.Colors.orangeWithe};
`