import { defineNuxtConfig } from 'nuxt/config'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  extends: '@nuxt-themes/typography',
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devtools: { enabled: true },
  pages: true,
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  // buildDir: "/root/docs",
  ssr: true
})
