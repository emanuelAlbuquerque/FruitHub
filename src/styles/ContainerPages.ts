import styled from "styled-components";
import { escolheFonte } from "Utils/chooseFont";

export const ContainerPages = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
`

export const TitlePage = styled.h1`
  color: ${({ theme }) => theme.Colors.orange};
  ${({ theme }) => escolheFonte(theme.Typography.DisplayMediumn)};

  margin-bottom: 3rem;
`

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`