import { createTheme } from '@material-ui/core/styles'

export const colors = {
  darkBlue: '#112D4E',
  lightBlue: '#67ABD6',
  menuBlue: '#DAEBF5',
  snow: '#F9F7F7',
  dark: '#495867'
}

export default createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#fff'
    },
    secondary: {
      main: colors.darkBlue
    },
    notifications: {
      main: colors.snow
    },
    text: {
      secondary: colors.dark
    },
    background: {
      default: colors.snow
    }
  },
  typography: {
    useNextVariants: true
  }
})
