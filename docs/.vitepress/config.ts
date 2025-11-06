import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Gbunny 아지트",
    description: "차곡차곡",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' }
        ],
        sidebar: [
            {
                text: '독서',
                link: "/book",
                items: [
                    { text: 'introduction to algorithms', link: '/book/intro2algo' },
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    },
    markdown: {
        // enable markdown-it-mathjax3
        math: true
    },
    ignoreDeadLinks: true
})
