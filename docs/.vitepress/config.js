import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的炫酷博客',
  description: '基于 VitePress 的个人博客',
  lang: 'zh-CN',

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于', link: '/about' },
      {
        text: '分类',
        items: [
          { text: '技术', link: '/categories/tech' },
          { text: '生活', link: '/categories/life' },
          { text: '随笔', link: '/categories/thoughts' }
        ]
      }
    ],

    sidebar: {
      '/blog/': [
        {
          text: '最新文章',
          items: [
            { text: '我的第一篇博客', link: '/blog/first-post' },
            { text: 'VitePress 使用指南', link: '/blog/vitepress-guide' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026-present'
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
