import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

export const ContainerStyleCardContain = styled.div`
  padding: .7rem;

  background-color: ${({ theme }) => theme.Colors.whiteSmoke};

  display: inline-block;

  border-radius: 1rem;

  ${({ theme }) => chooseTypography(theme.Typography.TextSmallLarge)}
`