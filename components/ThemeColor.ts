import { Platform } from "react-native"
import { Theme } from "@react-navigation/native"

const White = '#fff'
const secondaryLight = '#e5e7eb'
const Black = '#000000'
const secondaryDark = '#1f2937'
const Primary = '#2e78b7'
const notification = "#dc2626"

const fonts = Platform.select({
  ios: {
    regular: {
      fontFamily: "System",
      fontWeight: '400',
    },
    medium: {
      fontFamily: "System",
      fontWeight: '500',
    },
    bold: {
      fontFamily: "System",
      fontWeight: '600',
    },
    heavy: {
      fontFamily: "System",
      fontWeight: '900',
    },
  },
  default: {
    regular: {
      fontFamily: "sans-serif",
      fontWeight: '400',
    },
    medium: {
      fontFamily: "sans-serif-medium",
      fontWeight: '500',
    },
    bold: {
      fontFamily: "sans-serif",
      fontWeight: '600',
    },
    heavy: {
      fontFamily: "sans-serif",
      fontWeight: '900',
    },
  }
} as const satisfies Record<string, Theme['fonts']>);

const MyLightTheme: Theme = {
  dark: false,
  colors: {
    primary: Primary,
    background: White,
    card: White,
    text: Black,
    border: secondaryLight,
    notification: notification,
  },
  fonts
}

const MyDarkTheme: Theme = {
  dark: true,
  colors: {
    primary: Primary,
    background: Black,
    card: White,
    text: White,
    border: secondaryDark,
    notification: notification,
  },
  fonts
}

export {
  MyLightTheme,
  MyDarkTheme
}