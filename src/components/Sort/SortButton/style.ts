import styled from "styled-components";

export const ContainerStyleSortButton = styled.button`
  padding: .3rem 1rem;
  border-radius: .5rem;

  flex-shrink: 0;

  cursor: pointer;
  border: none;

  background-color: ${({ theme }) => theme.Colors.withe};

  font-size: ${({ theme }) => theme.Typography.TextSmall.size};
  font-weight: ${({ theme }) => theme.Typography.TextSmall.weight};

  color: ${({ theme }) => theme.Colors.greyDark};
`