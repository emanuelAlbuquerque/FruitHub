interface chooseFontProps {
  size: string,
  weight: string
}

export const escolheFonte = (variacao: chooseFontProps) => {
  return `
    font-size: ${variacao.size};
    font-weight: ${variacao.weight};
  `
}