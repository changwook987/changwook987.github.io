import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ko-KR",
  title: "changwook987's blog",
  description: "이것저것",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        text: "BOJ 백준",
        link: "/boj",
        items: [
          {
            text: "1000~",
            collapsed: true,
            items: [
              { text: "1000 A + B", link: "/boj/1000/1000" },
              { text: "1160 Random Number Generator", link: "/boj/1000/1160" },
              { text: "1492 합", link: "/boj/1000/1492" },
              { text: "1517 버블소트", link: "/boj/1000/1517" },
            ],
          },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/changwook987" }],
  },
  markdown: {
    math: true,
  },
});
