import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'App'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/Theme'
import { GlobalStyle } from 'styles/GlobalStyle'
import 'leaflet/dist/leaflet.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
