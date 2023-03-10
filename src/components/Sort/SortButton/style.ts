import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

export const ContainerStyleSortButton = styled.button`
  padding: .3rem 1rem;
  border-radius: .5rem;

  flex-shrink: 0;

  cursor: pointer;
  border: none;

  background-color: ${({ theme }) => theme.Colors.withe};

  ${({ theme }) => chooseTypography(theme.Typography.TextSmall)}

  color: ${({ theme }) => theme.Colors.greyDark};
`