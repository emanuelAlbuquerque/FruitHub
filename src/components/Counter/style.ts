import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

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
      chooseTypography(theme.Typography.TitleSmall) :
      chooseTypography(theme.Typography.TextMedium)}
    color: ${({ theme }) => theme.Colors.blueDark}
  }
`