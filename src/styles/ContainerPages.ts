import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

export const ContainerPages = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
`

export const TitlePage = styled.h1`
  color: ${({ theme }) => theme.Colors.orange};
  ${({ theme }) => chooseTypography(theme.Typography.DisplayMediumn)};

  margin-bottom: 3rem;
`

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`