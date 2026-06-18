import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '技术文档',
  description: 'AI、Frontend、Backend、Embedded 技术文章与学习笔记',
  lang: 'zh-CN',

  themeConfig: {
    nav: [],
    appearance: true,

    sidebar: [
      {
        text: 'AI',
        collapsed: false,
        items: [
          { text: '文章索引', link: '/ai/' }
        ]
      },
      {
        text: '前端',
        collapsed: false,
        items: [
          { text: '文章索引', link: '/frontend/' },
          { text: 'VitePress 使用指南', link: '/frontend/vitepress-guide' }
        ]
      },
      {
        text: '后端',
        collapsed: false,
        items: [
          { text: '文章索引', link: '/backend/' }
        ]
      },
      {
        text: '嵌入式',
        collapsed: false,
        items: [
          { text: '文章索引', link: '/embedded/' }
        ]
      },
      {
        text: '页面',
        items: [
          { text: '首页', link: '/' },
          { text: '学习', link: '/learning' },
          { text: '技术栈', link: '/tech-stack' },
          { text: '关于', link: '/about' }
        ]
      }
    ],

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
