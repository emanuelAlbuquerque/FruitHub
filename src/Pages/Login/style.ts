import styled from "styled-components";
import { ContainerPages } from "styles/ContainerPages";
import { chooseTypography } from "Utils/chooseTypography";

export const ContainerStylePageLogin = styled(ContainerPages)`

  text-align: center;

  .img_logo{
    margin: 4rem 0;
  }

  .button{
    width: 90%;
    margin: 5rem auto;
  }

  .login_next{
    display: flex;
    flex-direction: column;
    gap: .5rem;

    a{
      display: block;
      color:${({ theme }) => theme.Colors.orange};
      ${({ theme }) => chooseTypography(theme.Typography.TextSmall)};
    }
  }

`