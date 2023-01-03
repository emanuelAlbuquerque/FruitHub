import React from 'react'
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../src/styles/GlobalStyle"
import { theme } from "../../src/styles/Theme"


export const withTheme = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
}