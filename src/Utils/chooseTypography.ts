interface chooseFontProps {
  size: string,
  weight: string
}

export const chooseTypography = (variacao: chooseFontProps) => {
  return `
    font-size: ${variacao.size};
    font-weight: ${variacao.weight};
  `
}