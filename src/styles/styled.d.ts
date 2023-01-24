import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme { // O nome precisa ser exatamente esse
    Colors: {
      orange: string
      orangeWithe: string
      orangeSmoke: string
      withe: string
      whiteSmoke: string
      blueDark: string
      whitishBlue: string
      blueOpacity: string
      grey: string
      greyWithe: string
      greyDark: string
      greyBlack: string,
      greySmoke: string
      green: string
      smokeGreen: string
    },

    Fonts: {
      Poppins: string
      BadScript: string
    },

    Typography: {
      DisplayLarge: {
        weight: string
        size: string
      },
      TitleLarge: {
        weight: string
        size: string
      },
      TitleMedium: {
        weight: string
        size: string
      },
      TitleSmall: {
        weight: string
        size: string
      },
      TextLarge: {
        weight: string
        size: string
      },
      TextRegular: {
        weight: string
        size: string
      },
      TextMedium: {
        weight: string
        size: string
      },
      TextSmall: {
        weight: string
        size: string
      },
      TextSmallLarge: {
        weight: string
        size: string
      },
      Card: {
        weight: string
        size: string
      },
    }
  }
}