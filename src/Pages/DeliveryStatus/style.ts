import styled from "styled-components";

export const ContainerStylePageDeliveryStatus = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-areas: 'title' 'status';

  .page_status-title{
    grid-area: title;
  }

  .page-container_status{
    padding: 2rem;
    grid-area: status;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;


    .container_map{
      width: 100%;
      height: 40%;
    }
  }
`