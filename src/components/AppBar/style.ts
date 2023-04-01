import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

export const ContainerStyleAppBar = styled.div`

  width: 100%;;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  .containerBar{
    display: flex;
    align-items: center;
    gap: .5rem;
    
    .user{
      display: flex;
      align-items: center;
      gap: .5rem;

      .welcome, .nameUser{
        color: ${({ theme }) => theme.Colors.blueDark};
        ${({ theme }) => chooseTypography(theme.Typography.TextSmall)}
      }

      .nameUser::first-letter{
        text-transform: uppercase;
      }
    }
  }


  .basket{
    width: 48px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 50%;
    border: none;

    background-color: ${({ theme }) => theme.Colors.withe};
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);

  }
`