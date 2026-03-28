---
layout: home

hero:
  name: "我的炫酷博客"
  text: "记录技术与生活"
  tagline: 用代码创造美好，用文字记录时光
  image:
    src: /hero-image.svg
    alt: 博客
  actions:
    - theme: brand
      text: 开始阅读
      link: /blog/
    - theme: alt
      text: 关于我
      link: /about

features:
  - icon: 🚀
    title: 快速响应
    details: 基于 Vite 构建，享受极速的开发和构建体验
  - icon: 💡
    title: 简洁优雅
    details: 专注于内容创作，让文字成为主角
  - icon: 🎨
    title: 主题定制
    details: 支持深色模式，打造个性化的阅读体验
  - icon: 📱
    title: 响应式设计
    details: 完美适配各种设备，随时随地畅快阅读
  - icon: ⚡
    title: 性能优化
    details: 静态生成，CDN 部署，访问速度超快
  - icon: 🔍
    title: 全文搜索
    details: 内置搜索功能，快速找到你想要的内容
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  --vp-home-hero-image-background-image: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
