import styled from "styled-components";
import { ContainerPages } from "styles/ContainerPages";
import { escolheFonte } from "Utils/chooseFont";

interface IContainerStylePageSplash {
  seconds: number
}

export const ContainerStylePageSplash = styled(ContainerPages) <IContainerStylePageSplash>`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  opacity: ${({ seconds }) => `.${seconds}`};

  h1{
    background-color: ${({ theme }) => theme.Colors.orange};
    color: ${({ theme }) => theme.Colors.withe};

    ${({ theme }) => escolheFonte(theme.Typography.TitleSmall)}

    font-family: ${({ theme }) => theme.Fonts.BadScript};

    padding: 1rem 5rem 1rem 5rem;

    border-radius: 2rem 0 2rem 0;
  }
`