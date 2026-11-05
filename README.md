# Oceanpayment Agent Skill

给 AI 编码代理（Claude Code 等）使用的 Oceanpayment 跨境支付平台技术对接指引。安装本 Skill 后，你的 AI 代理在回答商户注册、沙盒/生产环境、API 密钥、签名验签、预授权、3DS、PCI-DSS、订单管理、退款、争议拒付、订阅、OPCard 虚拟卡、OPCCOUNT 全球账户、Webhook、响应代码，以及 Shopify / 店匠 / Shopline / Wix 等 SaaS 收银台接入问题时，会自动读取内置的 Oceanpayment 官方技术文档作为一手依据，而不是靠猜测。

> 本文档只介绍**如何下载、安装与构建**。Skill 内部的接口细节、签名字段、错误码等完整内容请以安装后的 `SKILL.md` 及 `references/` 文档为准。

## 安装

### 方式一：从 npm 安装（推荐）

发布到 npm registry 后：

```bash
npm install -g @oceanpayment/agent
oceanpayment-agent install
```

### 方式二：从 GitHub 直接安装

无需发布到 npm，直接从 GitHub 仓库安装：

```bash
npm install -g github:Oceanpayment/agent
oceanpayment-agent install
```

### 方式三：一次性运行（不全局安装）

不想全局安装时，用 `npx` 直接跑一次：

```bash
npx @oceanpayment/agent install
```

### 安装位置

`oceanpayment-agent install` 默认把 Skill 安装到 `~/.claude/skills/oceanpayment/`（Claude Code 全局 skills 目录）。也可以用选项指定位置：

```bash
# 安装到当前项目（项目级，仅当前仓库生效）
oceanpayment-agent install --local

# 安装到指定目录（其他支持 Agent Skill 的工具）
oceanpayment-agent install --dir ~/my-agent/skills

# 自定义 skill 目录名
oceanpayment-agent install --name oceanpayment-dev
```

安装完成后，重启或新开一个代理会话即可生效。

## 使用

安装后直接向你的 AI 代理提问即可，例如：

- 「Oceanpayment 沙盒环境的请求域名是什么？」
- 「signValue 签名怎么拼？」
- 「Shopify 信用卡直连怎么接入？」

查看已安装 Skill 的元信息：

```bash
oceanpayment-agent inspect
```

查看 CLI 完整用法：

```bash
oceanpayment-agent --help
```

## 从源码构建

如果你要修改 Skill 内容或重新打包，按下面的流程构建。

### 环境要求

- Node.js ≥ 14
- npm ≥ 6

### 构建步骤

```bash
# 1. 克隆仓库
git clone https://github.com/Oceanpayment/agent.git
cd agent

# 2. 安装依赖（本包零第三方依赖，仅做校验）
npm install

# 3. 构建前校验：检查 SKILL.md、frontmatter、references 是否完整
npm run build

# 4. 打包成 npm 包（生成 oceanpayment-agent-<版本>.tgz）
npm pack
```

### 本地验证打包结果

```bash
# 打包
npm pack

# 全局安装本地 .tgz
npm install -g ./oceanpayment-agent-1.0.0.tgz

# 验证 CLI 可用
oceanpayment-agent --version
oceanpayment-agent inspect
```

## 发布

### 发布到 npm registry

```bash
npm login
npm publish
```

发布成功后，商户即可通过 `npm install -g @oceanpayment/agent` 安装。

### 发布到 GitHub

直接推送到仓库即可，无需额外步骤：

```bash
git add .
git commit -m "release: oceanpayment agent skill v1.0.0"
git push origin main
```

商户可直接从 GitHub 安装：`npm install -g github:Oceanpayment/agent`。

> 若需让 `npm publish` 发布的是 scoped 包 `@oceanpayment/agent`，首次发布可能需要 `npm publish --access public`（scoped 包默认私有）。

## 目录结构

```
agent/
├── package.json              # npm 包定义（name / version / bin / files）
├── bin/
│   └── oceanpayment-agent.js # CLI 安装脚本（install / inspect）
├── scripts/
│   └── verify.js             # 构建前校验脚本（npm run build）
├── skills/
│   └── oceanpayment/
│       ├── SKILL.md          # Skill 入口（含 name / description 元数据）
│       └── references/       # Oceanpayment 官方技术文档全量镜像
├── README.md
└── LICENSE
```

## 更新 Skill

1. 用最新文档替换 `skills/oceanpayment/references/` 下的对应文件，必要时同步更新 `SKILL.md`。
2. 在 `package.json` 中递增 `version`。
3. 执行 `npm run build && npm pack` 校验并打包。
4. 重新发布（`npm publish` 或 `git push`）。

已安装的商户用同样的安装命令重新安装即可获得新版本（`npm install -g @oceanpayment/agent@latest` 后再次运行 `oceanpayment-agent install`，可加 `--force` 覆盖旧文件）。

## License

[MIT](./LICENSE)
