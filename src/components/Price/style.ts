import styled from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

interface IContainerStylePrice {
  variation?: 'default' | 'large' | 'small'
}

export const ContainerStylePrice = styled.div<IContainerStylePrice>`
  
  ${props => {
    switch (props.variation) {
      case 'large':
        return `
          ${chooseTypography(props.theme.Typography.TitleLarge)}
          color: ${props.theme.Colors.blueDark}
        `
      case 'small':
        return `
          ${chooseTypography(props.theme.Typography.TextRegular)}
          color: ${props.theme.Colors.blueDark}
        `
      default:
        return `
          ${chooseTypography(props.theme.Typography.Card)}
          color: ${props.theme.Colors.orange}
        `
    }
  }}

    `