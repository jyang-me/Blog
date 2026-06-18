import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bee Tech Blog',
  description: '聚焦技术文章与工程实践输出',
  lang: 'zh-CN',

  themeConfig: {
    nav: [],
    appearance: true,

    sidebar: {
      '/': [
        {
          text: '导航',
          items: [
            { text: '首页', link: '/' },
            { text: '学习', link: '/learning' },
            { text: '技术栈', link: '/tech-stack' },
            { text: '博客', link: '/blog/' },
            { text: '关于', link: '/about' }
          ]
        }
      ],
      '/blog/': [
        {
          text: '博客文章',
          items: [
            { text: '我的第一篇博客', link: '/blog/first-post' },
            { text: 'VitePress 使用指南', link: '/blog/vitepress-guide' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jyang-me' }
    ],

    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2026-present Bee'
    },

    search: {
      provider: 'local'
    },

    outline: {
      label: '目录',
      level: [2, 3]
    }
  },

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
