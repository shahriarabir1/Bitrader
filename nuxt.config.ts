// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  target: "static",
  ssr: false,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      htmlAttrs: {
        lang: "zxx",
      },
      title: "Home",
      titleTemplate: `%s | A Modern LMS and Kindergarten Vue/Nuxt Template for Online Learning and Personalized Education`,
      meta: [
        {
          name: "description",
          content:
            "A Modern LMS and Kindergarten Vue/Nuxt Template for Online Learning and Personalized Education",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: process.env.BASE_URL+"images/og.png",
        },
        {
          name: "keywords",
          content:
            "educax, nuxt js, vue js, lms, courses, training, education, bootstrap 5",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: process.env.BASE_URL+"images/favicon.png",
        },
        {
          rel: "shortcut icon",
          type: "image/svg",
          href: process.env.BASE_URL+"images/favicon.png",
        },
      ],
    },

    baseURL: process.env.BASE_URL || "/",
  },
  css: ["~/assets/scss/main.scss", "~/assets/scss/style.scss",'@fortawesome/fontawesome-free/css/all.css'],
  modules: ["@nuxt/content", "@nuxt/image"],
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.API_BASE_URL || "/api",
      baseUrl: process.env.BASE_URL || "/api",
    },
  },
  publicRuntimeConfig: {
  },
  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/composition-api/module",
    "@nuxtjs/pwa",
  ],
  axios: {
    baseURL: process.env.API_BASE_URL || "/api",
    credentials: true,
  },
  pwa: {
    icon: false, // disables the icon module
    meta: {
      /* meta options */
    },
    manifest: {
      /* manifest options */
    },
    workbox: {
      /* workbox options */
    },
  },
  plugins: [
  ],
  /// routes: ["/"],
  router: {
    base: process.env.BASE_URL || "/",
  },
  vite: {
    build: {
      assetsDir: 'public',
    },
  },

})