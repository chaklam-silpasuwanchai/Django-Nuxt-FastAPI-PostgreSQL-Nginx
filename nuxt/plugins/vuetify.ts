// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { md3 } from 'vuetify/blueprints'
import { createVuetify } from 'vuetify'


// Theme
import { type ThemeDefinition } from 'vuetify'
import colors from 'vuetify/util/colors'

const lightTheme: ThemeDefinition = {
  colors:{
    primary: colors.amber.darken2,
    "primary-accent": colors.amber.lighten2,
    secondary: colors.indigo.darken3,
    
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors:{
    primary: colors.brown.darken4,
    "primary-accent": colors.brown.lighten2,
    secondary: colors.blueGrey.darken4,
    background: "#182729"
  }
}

export default defineNuxtPlugin((app) => {
  var vuetify = createVuetify({
    blueprint: md3,
    theme: {
      defaultTheme: 'light',
      themes: {
        'light': lightTheme,
        'dark': darkTheme,
      }
    },
    ssr: true,
  })
  app.vueApp.use(vuetify)
})