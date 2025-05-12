import { defineConfig } from "vitepress";

const boj = [
  { id: 1000, name: "A + B" },
  { id: 1067, name: "이동" },
  { id: 1160, name: "Random Number Generator" },
  { id: 1492, name: "합" },
  { id: 1517, name: "버블 소트" },
  { id: 1562, name: "계단 수" },
  { id: 5542, name: "釘 (Nails)" },
  { id: 9341, name: "ZZ" },
  { id: 10562, name: "나이트" },
  { id: 11003, name: "최솟값 찾기" },
  { id: 13976, name: "타일 채우기 2" },
  { id: 19648, name: "미하일 2마리" },
  { id: 30413, name: "양 한 마리... 양 A마리... 양 A제곱마리..." },
];

const bojToItems = () => {
  const map = new Map<number, { id: number; name: string }[]>();

  for (const { id, name } of boj) {
    const key = Math.trunc(id / 1000) * 1000;

    if (!map.get(key)) {
      map.set(key, []);
    }

    map.get(key)!.push({ id, name });
  }

  const res = new Array<{
    text: string;
    collapsed: true;
    items: {
      text: string;
      link: string;
    }[];
  }>();

  for (const [key, items] of map) {
    res.push({
      text: `${key} - ${key + 999}`,
      collapsed: true,
      items: items
        .sort((a, b) => a.id - b.id)
        .map(({ id, name }) => {
          return {
            text: `${id} ${name}`,
            link: `/boj/${key}/${id}`,
          };
        }),
    });
  }

  return res;
};

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
        items: bojToItems(),
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/changwook987" }],
  },
  markdown: {
    math: true,
  },
});
