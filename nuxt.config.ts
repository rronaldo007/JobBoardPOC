// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Lato: [100, 300, 400, 700, 900],
        'Bebas Neue': [100, 300, 400, 700, 900],
        Roboto: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Raleway: {
          wght: [100, 400],
          ital: [100]
        }
      }
    }]
  ],
  // devtools: { enabled: true }
  css : ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: 'Job Junction - Connecting Companies with Talents',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  
  
})
