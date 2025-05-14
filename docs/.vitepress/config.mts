import { defineConfig } from "vitepress";

import * as boj from "./links/boj.mjs";
import * as misc from "./links/misc.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ko-KR",
  title: "changwook987's blog",
  description: "이것저것",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        text: "BOJ 백준",
        link: "/boj",
        items: boj.items(),
      },
      {
        text: "잡담",
        link: "/misc",
        items: misc.items(),
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/changwook987" }],
  },
  markdown: {
    math: true,
  },
});
