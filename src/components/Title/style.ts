import styled from "styled-components";
import { escolheFonte } from "Utils/chooseFont";

export const ContainerStyleTitle = styled.h2`

  ${({ theme }) => escolheFonte(theme.Typography.TextLarge)}

  color: ${({ theme }) => theme.Colors.blueDark};

  position: relative;

  padding-left: 1rem;

  &::before{
    content: '';
    position: absolute;

    width: 56px;
    height: 2px;

    background-color: ${({ theme }) => theme.Colors.orange};

    top: 25px;
  }

`