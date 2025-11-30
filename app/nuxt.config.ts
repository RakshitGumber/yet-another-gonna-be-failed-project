import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/icon"],
  css: ["./app/assets/css/main.css"],
  icon: {
    mode: "css",
    cssLayer: "base",
    serverBundle: {
      collections: ["solar"],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "YAGBFP",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
        },
      },
    },
  },
});
