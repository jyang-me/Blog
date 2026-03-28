---
title: VitePress 使用指南
date: 2026-03-28
categories:
  - 技术
tags:
  - VitePress
  - Vue
  - 静态网站
---

# VitePress 使用指南

VitePress 是一个由 Vue 驱动的静态网站生成器，专为编写技术文档而设计，但也非常适合搭建个人博客。

## 快速开始

### 安装

```bash
# 创建项目目录
mkdir my-blog && cd my-blog

# 初始化项目
npm init -y

# 安装 VitePress
npm install -D vitepress
```

### 项目结构

```
my-blog/
├── docs/
│   ├── .vitepress/
│   │   ├── config.js      # 配置文件
│   │   └── theme/         # 自定义主题
│   ├── blog/              # 博客文章
│   └── index.md           # 首页
├── package.json
└── README.md
```

## 核心功能

### Markdown 增强

VitePress 支持丰富的 Markdown 语法：

::: tip 提示
这是一个提示框
:::

::: warning 警告
这是一个警告框
:::

::: danger 危险
这是一个危险提示框
:::

### 代码高亮

支持多种编程语言的代码高亮：

```typescript
interface User {
  name: string
  age: number
  email?: string
}

const user: User = {
  name: 'Alice',
  age: 25
}
```

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("World"))
```

### 代码组

````md
::: code-group

```js [config.js]
export default {
  title: 'My Blog'
}
```

```ts [config.ts]
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Blog'
})
```

:::
````

## 主题定制

### 自定义样式

在 `.vitepress/theme/custom.css` 中添加自定义样式：

```css
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
}

.dark {
  --vp-c-brand: #747bff;
  --vp-c-brand-light: #8085ff;
}
```

### 布局组件

可以创建自定义布局组件来增强页面效果。

## 部署

### Cloudflare Pages

1. 在 `package.json` 中添加构建脚本：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

2. 推送到 GitHub

3. 在 Cloudflare Pages 中配置：
   - 构建命令：`npm run docs:build`
   - 输出目录：`docs/.vitepress/dist`

## 实用技巧

### 1. 添加搜索功能

```js
export default {
  themeConfig: {
    search: {
      provider: 'local'
    }
  }
}
```

### 2. 配置导航

```js
export default {
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      {
        text: '分类',
        items: [
          { text: '技术', link: '/tech' },
          { text: '生活', link: '/life' }
        ]
      }
    ]
  }
}
```

### 3. 启用行号

```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

## 总结

VitePress 是一个功能强大、易于使用的静态网站生成器。它的优势包括：

- ⚡ 极快的开发体验
- 🎨 美观的默认主题
- 📝 强大的 Markdown 支持
- 🔧 灵活的配置选项

开始使用 VitePress，打造你的个人博客吧！

## 参考资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)

---

**标签：** VitePress、Vue、静态网站

**分类：** 技术
