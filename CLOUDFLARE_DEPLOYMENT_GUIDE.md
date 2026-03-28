# Cloudflare Pages 快速部署指南

## 📋 准备工作

✅ 代码已推送到 GitHub：https://github.com/ljyang009-prog/my-blog
✅ 仓库设置为 Public（公开）
✅ 配置文件已完善

## 🚀 部署步骤（详细版）

### 第 1 步：访问 Cloudflare Pages

1. 打开浏览器，访问：**https://pages.cloudflare.com/**
2. 如果还没有 Cloudflare 账号：
   - 点击 **Sign up**
   - 使用邮箱注册（免费）
   - 验证邮箱

### 第 2 步：连接 GitHub

1. 登录后，点击 **Create a project** 按钮
2. 选择 **Connect to Git**
3. 选择 **GitHub**
4. 点击 **Authorize Cloudflare Pages** 授权
5. 在弹出的 GitHub 授权页面：
   - 选择 **Only select repositories**
   - 在下拉列表中选择 **ljyang009-prog/my-blog**
   - 点击 **Install & Authorize**

### 第 3 步：选择仓库

1. 返回 Cloudflare Pages 页面
2. 在仓库列表中找到 **ljyang009-prog/my-blog**
3. 点击该仓库

### 第 4 步：配置构建设置 ⚠️ 重要

请完全按照以下配置填写：

#### 基础设置
- **Project name（项目名称）**: `my-blog`
  - 💡 这个名称将成为你的域名：`my-blog.pages.dev`
  - 你可以改成其他名字，比如 `ljyang-blog`

- **Production branch（生产分支）**: `main`

#### 构建设置（Framework preset）
- **Framework preset**: 选择 `None` 或 `VitePress`

#### 构建配置（Build configuration）
```
Build command（构建命令）:
npm run build

Build output directory（输出目录）:
docs/.vitepress/dist

Root Directory（根目录）:
(留空)
```

#### 环境变量（Environment variables）
- 点击 **Add variable** 添加以下变量：
  ```
  变量名: NODE_VERSION
  值: 18
  ```

### 第 5 步：开始部署

1. 检查所有配置是否正确
2. 点击 **Save and Deploy** 按钮
3. 等待部署完成（约 2-5 分钟）

### 第 6 步：查看部署状态

部署过程中你会看到：

1. **Initializing build environment** - 初始化构建环境
2. **Cloning repository** - 克隆仓库
3. **Installing dependencies** - 安装依赖
4. **Building application** - 构建应用
5. **Deploying to Cloudflare's global network** - 部署到全球网络
6. **Success!** - 部署成功

### 第 7 步：访问你的博客

部署成功后，你会看到：

```
🎉 Your site is live at:
https://my-blog.pages.dev
```

点击链接就可以访问你的博客了！

## 🔧 常见问题排查

### 问题 1：构建失败 - Node.js 版本错误

**症状**：构建日志显示 Node.js 版本不兼容

**解决方案**：
1. 进入项目设置（Settings）
2. 找到 **Environment variables**
3. 添加 `NODE_VERSION = 18`

### 问题 2：404 Not Found

**症状**：部署成功但访问显示 404

**解决方案**：
1. 检查 **Build output directory** 是否为 `docs/.vitepress/dist`
2. 查看构建日志，确认 dist 目录生成成功

### 问题 3：构建超时

**症状**：构建过程超过 20 分钟

**解决方案**：
1. 检查 `package.json` 中的依赖是否正确
2. 重新触发部署（点击 **Retry deployment**）

### 问题 4：CSS 样式丢失

**症状**：页面显示但没有样式

**解决方案**：
1. 检查 `.vitepress/theme/index.js` 是否正确导入了 CSS
2. 清除 Cloudflare 缓存并重新部署

## 🎯 部署后的操作

### 自动部署

配置完成后，每次你推送代码到 GitHub 的 `main` 分支，Cloudflare Pages 会自动重新部署！

```bash
# 更新博客的工作流程
cd /e/my-blog

# 1. 编辑文章（在 docs/blog/ 目录下）
# 2. 提交更改
git add .
git commit -m "新增文章：xxx"
git push

# 3. Cloudflare Pages 自动检测并部署（1-3分钟）
# 4. 访问你的博客查看更新
```

### 自定义域名（可选）

如果你有自己的域名：

1. 在项目中点击 **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入域名（如 `blog.yourdomain.com`）
4. 按照提示在你的域名服务商添加 CNAME 记录：
   ```
   CNAME blog.yourdomain.com -> my-blog.pages.dev
   ```
5. 等待 DNS 生效（几分钟到几小时）

### 查看部署历史

1. 进入项目 Dashboard
2. 点击 **Deployments** 标签
3. 查看所有历史部署记录
4. 可以回滚到之前的版本

### 查看访问统计

1. 在项目页面点击 **Analytics**
2. 查看访问量、带宽使用等数据

## 📊 配置总结

| 配置项 | 值 |
|--------|-----|
| **项目名称** | `my-blog`（或自定义） |
| **生产分支** | `main` |
| **构建命令** | `npm run build` |
| **输出目录** | `docs/.vitepress/dist` |
| **Node 版本** | `18` |

## 🎉 完成！

部署成功后，你将拥有：

- ✅ 一个炫酷的个人博客
- ✅ 免费的全球 CDN 加速
- ✅ 自动 HTTPS 证书
- ✅ 无限带宽
- ✅ 自动部署功能

---

**祝你部署顺利！如有问题请查看构建日志。**
