import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

export const ContainerStyleFormGroup = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  label{
    display: block;
    width: 100%;
    color: ${({ theme }) => theme.Colors.blueDark};
    ${({ theme }) => chooseTypography(theme.Typography.TextMedium)}

    margin-bottom: 1rem;
  }
`