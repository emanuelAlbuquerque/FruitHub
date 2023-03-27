import styled from "styled-components";

export const ContainerStylePageBascket = styled.div`

  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-rows: 15% 70% 15%;
  grid-template-areas: 'header' 'products' 'button';

  .bascket_cards{
    padding: 3rem 1.5rem;
    
    background-color: ${({ theme }) => theme.Colors.withe};

    overflow-y: auto;

    grid-area: products;

    .card:not(:last-child){
      margin-bottom: 2rem;
    }
  }

  .button{
    grid-area: button;

    background-color: ${({ theme }) => theme.Colors.greyWithe};

    padding: 2rem 1.5rem;
  }
`