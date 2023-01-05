import styled from "styled-components";

export const ContainerInputText = styled.input`

  width: 100%;
  padding: 1rem .6rem;
  border-radius: 8px;

  outline: none;
  border: none;

  background-color: ${({ theme }) => theme.Colors.greySmoke};
  color: ${({ theme }) => theme.Colors.grey};

  font-size: ${props => props.theme.Typography.TextRegular.size};
  font-weight: ${props => props.theme.Typography.TextRegular.weight};

  &::placeholder{
    color: ${({ theme }) => theme.Colors.grey};
  }

`