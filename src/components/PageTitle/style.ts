import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

export const ContainerStaylePageTitle = styled.div`
  width: 100%;
  padding: 3rem 1.5rem;
  background-color: ${({ theme }) => theme.Colors.orange};
  border-radius: 0 0 2rem 2rem;
  
  
  div{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    button{
      position: absolute;
  
      left: 0;
    }

    h1{
      ${({ theme }) => chooseTypography(theme.Typography.TextLarge)}
      color: ${({ theme }) => theme.Colors.withe};
    }
  }


`