# Common Fonts

这是一个自用的字体整合项目，方便在 CSS 中快速调用多种流行字体，简化开发流程。

## 开始使用

首先，运行开发服务器：

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 来查看效果。

## Cloudflare 集成

项目包含了一些与 [Cloudflare Pages](https://pages.cloudflare.com/) 集成的脚本：

- `pages:build` 使用 [`@cloudflare/next-on-pages`](https://github.com/cloudflare/next-on-pages) CLI 构建应用。
- `preview` 使用 [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI 本地预览应用。
- `deploy` 使用 [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI 部署应用。

> **注意**：建议在部署前预览应用，以确保其在 Pages 环境中正常运行（更多详情请参阅 [`@cloudflare/next-on-pages` 的推荐开发工作流程](https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md#recommended-development-workflow)）。
