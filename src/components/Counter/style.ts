import styled from "styled-components";
import { escolheFonte } from "Utils/chooseFont";

interface IContainerStyleCounter {
  variation: 'large' | 'small'
}

export const ContainerStyleCounter = styled.div<IContainerStyleCounter>`

  display: flex;
  align-items: center;

  gap: ${({ variation }) => variation === 'large' ? '2rem' : '1rem'};

  p{
    ${({ theme, variation }) =>
    variation === 'large' ?
      escolheFonte(theme.Typography.TitleSmall) :
      escolheFonte(theme.Typography.TextMedium)}
    color: ${({ theme }) => theme.Colors.blueDark}
  }
`