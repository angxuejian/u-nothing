# u.nothing

Just writing casually

## Scripts

| 命令                    | 说明                                  |
| ----------------------- | ------------------------------------- |
| `pnpm run type-check`   | 使用 `vue-tsc` 进行类型检查           |
| `pnpm run lint`         | 执行 ESLint 检查                      |
| `pnpm run lint:fix`     | 自动修复 ESLint 问题                  |
| `pnpm run format`       | 使用 Prettier 格式化代码              |
| `pnpm run play`         | 启动 playground 开发环境              |
| `pnpm run docs:dev`     | 启动文档开发环境                      |
| `pnpm run docs:build`   | 构建文档                              |
| `pnpm run docs:preview` | 预览文档                              |
| `pnpm run core:build`   | 构建核心库（packages/u-nothing）      |
| `pnpm run theme:build`  | 构建主题（packages/theme）            |
| `pnpm run copy-theme`   | 拷贝主题文件到核心库目录              |
| `pnpm run build`        | 完整构建（theme + core + copy-theme） |
| `pnpm run prepare`      | 初始化 Husky                          |
| `pnpm run precommit`    | 提交前执行 type-check + lint-staged   |
