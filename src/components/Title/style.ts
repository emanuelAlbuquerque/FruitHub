import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

export const ContainerStyleTitle = styled.h2`

  ${({ theme }) => chooseTypography(theme.Typography.TextLarge)}

  color: ${({ theme }) => theme.Colors.blueDark};

  position: relative;


  &::before{
    content: '';
    position: absolute;

    width: 56px;
    height: 2px;

    background-color: ${({ theme }) => theme.Colors.orange};

    top: 25px;
  }

`