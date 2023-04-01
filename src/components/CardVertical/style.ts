import styled from "styled-components";
import { Link } from "react-router-dom";
import { chooseTypography } from "Utils/chooseTypography";

interface ContainerStyleCardVertical {
  variation: 'default' | 'small'
}

export const ContainerStyleCardVertical = styled(Link) <ContainerStyleCardVertical>`

  display: block;
  text-align: center;

  flex-shrink: 0;

  text-decoration: none;

  width: 100%;
  max-width: ${({ variation }) => variation === 'default' ? '15rem' : '14rem'};
  padding: 1rem;

  background: ${({ theme }) => theme.Colors.orangeSmoke};
  border-radius: 1.6rem;

  position: relative;

  .button_like{
    position: absolute;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: none;
    background: none;
  }

  img{
    width: ${({ variation }) => variation === 'default' ? '8rem' : '6rem'};
    height: ${({ variation }) => variation === 'default' ? '8rem' : '6rem'}
  }

  h3{
    ${({ theme }) => chooseTypography(theme.Typography.CardSmall)}
    color:${({ theme }) => theme.Colors.blueDark};
    margin: 1rem 0;
  }

  .container_price{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

`