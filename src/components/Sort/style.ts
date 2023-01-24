import styled from "styled-components";

export const ContainerStyleSort = styled.div`
  width: 100%;
  padding: .5rem 0rem .5rem 1rem;
  display: flex;
  align-items: center;
  gap: .5rem;
  
  overflow-x: scroll;

  background-color: ${({ theme }) => theme.Colors.greyWithe};
`