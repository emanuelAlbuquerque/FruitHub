import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

export const ContainerStylePageOrderComplete = styled.div`

  width: 100%;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
    margin: 5rem 0 1rem 0;
    color: ${({ theme }) => theme.Colors.blueDark};
    ${({ theme }) => chooseTypography(theme.Typography.DisplayLarge)}
  }

  p{
    color: ${({ theme }) => theme.Colors.blueDark};
    ${({ theme }) => chooseTypography(theme.Typography.TextSmallLarge)}
    width: 70%;
    margin-bottom: 3rem;
    text-align: center;
  }

  .button_default{
    width: 100%;
    text-align: center;

    margin-bottom: 2rem;

    button{
      max-width: 23rem;
    }
  }

  .button_secondary{
    width: 100%;
    text-align: center;

    button{
      max-width: 20rem;
    }
  }

`