export interface Theme {
  name: string,
  colors: {
    backgroundPrimary: string,
    backgroundSecondary: string,
    backgroundTertiary: string,
    colorText: string,
  },
}

export interface Themes {
  [key: string]: Theme
}