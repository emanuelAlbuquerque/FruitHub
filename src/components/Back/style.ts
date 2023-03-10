import styled from "styled-components";
import { chooseTypography } from "Utils/chooseFont";

export const ContainerStayleBack = styled.button`

  padding: .5rem;

  display: flex;
  align-items: center;
  gap: .3rem;

  border-radius: 5rem;

  border: none;
  cursor: pointer;

  background-color: ${({ theme }) => theme.Colors.withe};

  p{
    ${({ theme }) => chooseTypography(theme.Typography.TextSmallLarge)}
    color: ${({ theme }) => theme.Colors.blueDark};
  }

`