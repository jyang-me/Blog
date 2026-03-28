# Cloudflare Pages 部署指南

## 前提条件

✅ 代码已推送到 GitHub 仓库
✅ GitHub 仓库设置为 Public（公开）

## 部署步骤

### 1. 登录 Cloudflare Pages

访问：<https://pages.cloudflare.com/>

如果没有 Cloudflare 账号，需要先注册（免费）。

### 2. 创建新项目

1. 点击 **Create a project** 按钮
2. 选择 **Connect to Git**
3. 选择 **GitHub** 并授权 Cloudflare 访问你的 GitHub 账号
4. 在仓库列表中找到 `my-blog` 并点击

### 3. 配置构建设置

填写以下配置：

- **Project name**: `my-blog` (或自定义域名前缀)
- **Production branch**: `main`
- **Framework preset**: 选择 `None` 或 `VitePress`
- **Build command**:

  ```
  npm run build
  ```

- **Build output directory**:

  ```
  docs/.vitepress/dist
  ```

- **Root directory**: 留空（使用根目录）
- **Environment variables**: 不需要添加

### 4. 开始部署

点击 **Save and Deploy** 按钮，Cloudflare Pages 会自动：

1. 克隆你的 GitHub 仓库
2. 安装依赖 (`npm install`)
3. 运行构建命令 (`npm run build`)
4. 部署到全球 CDN

整个过程大约需要 2-5 分钟。

### 5. 访问你的博客

部署成功后，你会获得一个免费域名：

```
https://my-blog-prk.pages.dev/
```

或者你配置的自定义域名。

## 自动部署

配置完成后，每次你推送代码到 GitHub 的 `main` 分支，Cloudflare Pages 会自动重新构建和部署！

```bash
# 修改博客内容后
git add .
git commit -m "更新博客文章"
git push

# Cloudflare Pages 会自动检测并重新部署 🚀
```

## 自定义域名（可选）

如果你有自己的域名：

1. 在 Cloudflare Pages 项目中点击 **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入你的域名（如 `blog.yourdomain.com`）
4. 按照提示配置 DNS 记录

## 性能优化

Cloudflare Pages 自动提供：

- ✅ 全球 CDN 加速
- ✅ 自动 HTTPS 证书
- ✅ HTTP/2 和 HTTP/3
- ✅ Brotli 压缩
- ✅ 无限带宽

## 故障排查

### 构建失败

检查 Cloudflare Pages 的构建日志：

1. 进入项目 Dashboard
2. 点击失败的部署
3. 查看 **Build logs**

常见问题：

- Node.js 版本不兼容：在项目设置中指定 Node 版本
- 依赖安装失败：检查 `package.json`
- 构建命令错误：确认构建命令正确

### 页面显示 404

确保：

- **Build output directory** 设置为 `docs/.vitepress/dist`
- VitePress 构建成功生成了 `dist` 目录

---

## 快速命令参考

```bash
# 本地预览
npm run dev

# 本地构建测试
npm run build
npm run preview

# 推送到 GitHub（触发自动部署）
git add .
git commit -m "更新内容"
git push
```

---

**祝你部署顺利！🎉**
