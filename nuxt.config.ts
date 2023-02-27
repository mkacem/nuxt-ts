// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API:  process.env.API,
    }
  },
  vite: {
    server: {
      fs: {
        allow: ['C:'],
      },
    },
  },
  modules:[
    '@pinia/nuxt'
  ]
})
