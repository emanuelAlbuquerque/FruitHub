import styled from "styled-components";
import { Link } from "react-router-dom";
import { escolheFonte } from "Utils/chooseFont";

interface ContainerStyleCardVertical {
  variation: 'default' | 'small'
}

export const ContainerStyleCardVertical = styled.a<ContainerStyleCardVertical>`

  display: block;
  text-align: center;

  width: 100%;
  max-width: ${({ variation }) => variation === 'default' ? '15rem' : '14rem'};
  padding: 1rem;

  background: ${({ theme }) => theme.Colors.withe};
  box-shadow: 0px 30px 60px rgba(32, 32, 32, 0.05);
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
    ${({ theme }) => escolheFonte(theme.Typography.CardSmall)}
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