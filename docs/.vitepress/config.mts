import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "changwook987's blog",
  description: "이것저것",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        text: "Examples",
        items: [],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/changwook987" }],
  },
  base: ""
});
