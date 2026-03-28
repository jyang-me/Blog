# 我的炫酷博客

基于 VitePress 构建的个人博客，部署在 Cloudflare Pages。

## ✨ 特性

- 🚀 基于 VitePress - 快速、轻量的静态网站生成器
- 🎨 炫酷设计 - 渐变主题、平滑动画
- 📱 响应式布局 - 完美适配各种设备
- 🌙 深色模式 - 保护眼睛
- 🔍 本地搜索 - 快速查找内容
- ⚡ Cloudflare Pages - 极速访问

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 `http://localhost:5173` 查看博客。

### 构建

```bash
npm run build
```

构建产物将生成在 `docs/.vitepress/dist` 目录。

### 预览

```bash
npm run preview
```

## 📝 写作

在 `docs/blog/` 目录下创建 Markdown 文件即可开始写作。

示例：

```markdown
---
title: 文章标题
date: 2026-03-28
categories:
  - 技术
tags:
  - VitePress
---

# 文章标题

文章内容...
```

## 🎨 自定义

- **配置**: 编辑 `docs/.vitepress/config.js`
- **样式**: 修改 `docs/.vitepress/theme/custom.css`
- **主题**: 编辑 `docs/.vitepress/theme/index.js`

## 📦 部署到 Cloudflare Pages

1. 将代码推送到 GitHub
2. 登录 [Cloudflare Pages](https://pages.cloudflare.com/)
3. 连接你的 GitHub 仓库
4. 配置构建设置：
   - **构建命令**: `npm run build`
   - **输出目录**: `docs/.vitepress/dist`
5. 点击部署

## 📂 项目结构

```
my-blog/
├── docs/
│   ├── .vitepress/
│   │   ├── config.js          # VitePress 配置
│   │   └── theme/
│   │       ├── index.js       # 主题入口
│   │       └── custom.css     # 自定义样式
│   ├── blog/                  # 博客文章
│   │   ├── index.md
│   │   ├── first-post.md
│   │   └── vitepress-guide.md
│   ├── index.md               # 首页
│   └── about.md               # 关于页面
├── package.json
└── README.md
```

## 🛠️ 技术栈

- [VitePress](https://vitepress.dev/) - 静态网站生成器
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 新一代前端构建工具
- [Cloudflare Pages](https://pages.cloudflare.com/) - 部署平台

## 📄 许可证

MIT License

---

**用心记录，用代码创造美好 ✨**
