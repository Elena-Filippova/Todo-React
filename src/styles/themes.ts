import { Theme, Themes } from '../assets/models/theme'

const light: Theme = {
  name: 'light',
  colors: {
    backgroundPrimary: '#4682b4',
    backgroundSecondary: 'rgb(237, 240, 241)',
    backgroundTertiary: 'white',
    colorText: '#4682b4',
  }
}

const dark: Theme = {
  name: 'dark',
  colors: {
    backgroundPrimary: 'black',
    backgroundSecondary: 'grey',
    backgroundTertiary: 'grey',
    colorText: 'white',
  }
}

export const themes: Themes = { light, dark }