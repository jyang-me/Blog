# My Blog

一个基于 VitePress 的个人博客项目，采用左侧导航与科技感主题设计，支持动态交互组件与 Cloudflare Pages 部署。

## 项目特点

- 基于 `VitePress 1.6.x` 构建，启动与构建速度快
- 自定义主题样式，包含科技风视觉与交互动效
- 首页包含动态渲染模块（实时状态、筛选面板等）
- 内容组织清晰：学习、技术栈、工作、生活、博客
- 支持本地搜索与静态站点部署

## 技术栈

- `VitePress`
- `Vue 3`
- `Vite`
- `Cloudflare Pages`

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 本地开发

```bash
npm run dev
```

默认访问地址：`http://localhost:5173`

### 3. 构建生产版本

```bash
npm run build
```

构建产物目录：`docs/.vitepress/dist`

### 4. 本地预览构建结果

```bash
npm run preview
```

## 可用脚本

- `npm run dev`：启动本地开发环境
- `npm run build`：构建静态站点
- `npm run preview`：预览构建结果

## 目录结构

```text
my-blog/
├─ docs/
│  ├─ .vitepress/
│  │  ├─ config.js
│  │  └─ theme/
│  ├─ blog/
│  ├─ index.md
│  ├─ learning.md
│  ├─ tech-stack.md
│  ├─ work.md
│  └─ life.md
├─ DEPLOYMENT.md
├─ package.json
└─ README.md
```

## 内容维护说明

- 新增文章：在 `docs/blog/` 下创建 Markdown 文件
- 修改导航：编辑 `docs/.vitepress/config.js`
- 调整样式：编辑 `docs/.vitepress/theme/custom.css`
- 扩展交互组件：编辑 `docs/.vitepress/theme/components/`

## 部署

推荐部署到 Cloudflare Pages，详见：

- `DEPLOYMENT.md`

核心配置如下：

- Build command: `npm run build`
- Build output directory: `docs/.vitepress/dist`

## 许可证

`ISC`
