import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from '../src/styles/Theme'
import { GlobalStyle } from "../src/styles/GlobalStyle"
import { withTheme } from "./decorators/withTheme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withTheme
]

