import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

export const ContainerStyleCardHorizontal = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  .container_img{
    width: 7rem;
    height: 7rem;
    border-radius: 0.8rem;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    box-shadow: 0px 10px 15px rgba(32, 32, 32, 0.1);
    
    img{
      width: 4rem;
      height: 4rem;
    }
  }

  .options{
    h2{
      ${({ theme }) => chooseTypography(theme.Typography.TextRegular)}
      color: ${({ theme }) => theme.Colors.greyDark};
    }

    .options_counter{
      margin: .5rem 0;
    }
  }
`