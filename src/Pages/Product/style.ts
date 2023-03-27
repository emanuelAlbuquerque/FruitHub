import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

export const ContainerStylePageProduct = styled.div`
  background: ${({ theme }) => theme.Colors.orange};
  width: 100%;
  height: 100vh;

  .container_img{
    padding: 1.5rem;
    height: 40%;

    .img{
      width: 100%;
      text-align: center;
      margin-top: 1rem;
    }
  }

  .container_info{
    background-color: ${({ theme }) => theme.Colors.withe};
    border-radius: 2rem 2rem 0 0;
    padding: 1.5rem;

    height: 60%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1{
      margin-top: 1rem;
      color: ${({ theme }) => theme.Colors.blueDark};
      font-size: 2rem;
      font-weight: 500;
    }

    .container_info-counter{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1.5rem 0;
    }

    .container_list-contain{
      padding: 1.5rem 0;

      border-top: 1px solid ${({ theme }) => theme.Colors.greyWithe};
      border-bottom: 1px solid ${({ theme }) => theme.Colors.greyWithe};

      h2{
        margin-bottom: 2rem;
      }

      ul{
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
      }
    }

    .container_info-description{
      margin: 1rem 0 1.5rem 0;
      ${({ theme }) => chooseTypography(theme.Typography.TextSmallLarge)}
    }

  }
`