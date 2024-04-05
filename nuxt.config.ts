// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  pages: true,
  components: true,
 css: ["~/assets/css/app.css", "~/assets/css/fonts.css", "~/assets/css/form.css", "~/assets/css/utility.css", "~/assets/css/variables.css"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'The Infocolors',
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#53ff70" },
        {
          hid: "og:image",
          property: "og:image",
          content: ``,
        },
      ],
      link: [
     
      ],
      script: [
     
      ],
  
    }
  }
})