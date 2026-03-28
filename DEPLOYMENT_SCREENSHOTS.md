# 📸 Cloudflare Pages 部署截图指南

## 关键配置截图参考

### 1️⃣ 构建配置页面

当你看到 "Set up builds and deployments" 页面时，填写：

```
┌─────────────────────────────────────────────────────┐
│ Project name:                                       │
│ ┌─────────────────────────────────────────────┐   │
│ │ my-blog                                     │   │
│ └─────────────────────────────────────────────┘   │
│                                                     │
│ Production branch:                                  │
│ ┌─────────────────────────────────────────────┐   │
│ │ main                                        │   │
│ └─────────────────────────────────────────────┘   │
│                                                     │
│ Framework preset:                                   │
│ ┌─────────────────────────────────────────────┐   │
│ │ None (or VitePress)                    [▼] │   │
│ └─────────────────────────────────────────────┘   │
│                                                     │
│ Build command:                                      │
│ ┌─────────────────────────────────────────────┐   │
│ │ npm run build                               │   │
│ └─────────────────────────────────────────────┘   │
│                                                     │
│ Build output directory:                             │
│ ┌─────────────────────────────────────────────┐   │
│ │ docs/.vitepress/dist                        │   │
│ └─────────────────────────────────────────────┘   │
│                                                     │
│ Root Directory (optional):                          │
│ ┌─────────────────────────────────────────────┐   │
│ │                                             │   │
│ └─────────────────────────────────────────────┘   │
│                                                     │
│ Environment variables (optional):                   │
│ ┌──────────────────┬──────────────────────────┐   │
│ │ NODE_VERSION     │ 18                       │   │
│ └──────────────────┴──────────────────────────┘   │
│                                                     │
│          [Save and Deploy]                          │
└─────────────────────────────────────────────────────┘
```

### 2️⃣ 关键字段说明

#### Build command（必填）
```bash
npm run build
```
⚠️ **不要**写成：
- ❌ `vitepress build docs`
- ❌ `npm install && npm run build`
- ❌ `yarn build`

#### Build output directory（必填）
```
docs/.vitepress/dist
```
⚠️ **注意**：
- ✅ `docs/.vitepress/dist` （正确）
- ❌ `.vitepress/dist` （错误 - 缺少 docs）
- ❌ `dist` （错误 - 路径不对）
- ❌ `/docs/.vitepress/dist` （错误 - 不要加开头的 /）

#### Environment variables（推荐添加）
```
变量名: NODE_VERSION
值: 18
```

点击 **Add variable** 按钮添加。

### 3️⃣ 部署成功的标志

当你看到以下信息时，说明部署成功：

```
✅ Success! Your site is live at:

   https://my-blog.pages.dev

   Build time: 1m 23s
   Deploy time: 14s
```

### 4️⃣ 构建日志示例

成功的构建日志应该包含：

```
15:30:22.123  Cloning repository...
15:30:25.456  Success: Checked out git remote "ljyang009-prog/my-blog"
15:30:26.789  Installing dependencies...
15:30:45.123  Successfully installed dependencies
15:30:45.234  Executing build command: npm run build
15:30:45.345
15:30:45.456  > my-blog@1.0.0 build
15:30:45.567  > vitepress build docs
15:30:45.678
15:30:47.890  vitepress v1.6.4
15:30:48.901
15:30:48.902  ✓ building client + server bundles...
15:30:52.345  ✓ rendering pages...
15:31:05.678  build complete in 19.78s.
15:31:06.789  Finished building
15:31:06.890  Deploying...
15:31:20.123  Success! Deployed to https://my-blog.pages.dev
```

## 🔍 故障排查

### 如果看到这个错误：

```
❌ Error: Failed to build project
   Could not find build output directory: docs/.vitepress/dist
```

**原因**：输出目录配置错误

**解决**：
1. 返回项目设置
2. 确认 **Build output directory** 填写为 `docs/.vitepress/dist`

### 如果看到这个错误：

```
❌ Error: Build failed with 1 error
   Node.js version mismatch
```

**原因**：Node.js 版本不兼容

**解决**：
1. 进入 Settings → Environment variables
2. 添加 `NODE_VERSION = 18`
3. 重新部署

## 📱 移动端访问

部署成功后，用手机访问你的博客：
- 打开手机浏览器
- 输入 `https://my-blog.pages.dev`
- 查看响应式效果

## 🎨 预览

部署成功后你会看到：

**首页**：
- 大标题："我的炫酷博客"
- 渐变紫色主题
- 6个功能卡片
- 开始阅读按钮

**博客页面**：
- 文章列表
- 导航栏
- 搜索功能

**深色模式**：
- 点击右上角月亮图标切换

---

**现在开始部署吧！** 🚀
