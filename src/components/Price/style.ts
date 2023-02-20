import styled from "styled-components";
import { escolheFonte } from "Utils/chooseFont";

interface IContainerStylePrice {
  variation?: 'default' | 'large' | 'small'
}

export const ContainerStylePrice = styled.div<IContainerStylePrice>`
  
  ${props => {
    switch (props.variation) {
      case 'large':
        return `
          ${escolheFonte(props.theme.Typography.TitleLarge)}
          color: ${props.theme.Colors.blueDark}
        `
      case 'small':
        return `
          ${escolheFonte(props.theme.Typography.TextRegular)}
          color: ${props.theme.Colors.blueDark}
        `
      default:
        return `
          ${escolheFonte(props.theme.Typography.Card)}
          color: ${props.theme.Colors.orange}
        `
    }
  }}

    `