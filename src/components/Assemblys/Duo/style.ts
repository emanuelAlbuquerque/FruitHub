import styled from "styled-components";

export const ContainerStyleAssemblyDuo = styled.div`

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3rem;
  
  .container_button-secondary{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;


    button{
      width: 4.8rem;
      height: 4.8rem;

      border-radius: 50%;
      background: ${({ theme }) => theme.Colors.orangeSmoke};
      border: none;
  
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }


  .button_default{
    width: 80%;
  }

`