import styled from "styled-components";

export const ContainerStyleModal = styled.div`

  width: 100%;
  height: 100vh;
  padding: 1rem 2rem;

  animation: expand .5s;

  position: fixed;
  top: 0;

  background: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  flex-direction: column;

  .button-close_modal{
    width: 100%;
    display: flex;
    justify-content: end;

    cursor: pointer;

    margin-bottom: 1rem;

    button{
      width: 4rem;
      height: 4rem;

      border-radius: 50%;

      border: none;

      background-color: ${({ theme }) => theme.Colors.withe};
      color: ${({ theme }) => theme.Colors.red};
      
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 2.4rem;
    }
  }

  .modal_container{
    width: 100%;
    padding: 3rem 2rem;
    background-color: ${({ theme }) => theme.Colors.withe};
  }


  @keyframes expand {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`