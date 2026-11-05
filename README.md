# Oceanpayment Agent Skill

A technical integration guide for Oceanpayment's cross-border payment platform, designed for AI coding agents (Claude Code, etc.). Once this Skill is installed, when your AI agent answers questions about merchant onboarding, sandbox/production environments, API keys, signing and signature verification, pre-authorization, 3DS, PCI-DSS, order management, refunds, disputes/chargebacks, subscriptions, OPCard virtual cards, OPCCOUNT global accounts, Webhooks, response codes, and SaaS checkout integrations such as Shopify / Shoplazza / Shopline / Wix, it will automatically read the bundled official Oceanpayment technical documentation as its primary source of truth — instead of guessing.

> This document only covers **how to download, install, and build**. For the full details inside the Skill — API specifics, signing fields, error codes, etc. — refer to the installed `SKILL.md` and the `references/` documentation.

## Installation

### Option 1: Install from npm (recommended)

After publishing to the npm registry:

```bash
npm install -g @oceanpayment/agent
oceanpayment-agent install
```

### Option 2: Install directly from GitHub

No need to publish to npm — install directly from the GitHub repository:

```bash
npm install -g github:Oceanpayment/agent
oceanpayment-agent install
```

### Option 3: One-off run (no global install)

If you don't want a global install, run it once with `npx`:

```bash
npx @oceanpayment/agent install
```

### Install location

`oceanpayment-agent install` installs the Skill to `~/.claude/skills/oceanpayment/` (the Claude Code global skills directory) by default. You can also specify a location with options:

```bash
# Install to the current project (project-level, effective only for this repository)
oceanpayment-agent install --local

# Install to a specific directory (other tools that support Agent Skills)
oceanpayment-agent install --dir ~/my-agent/skills

# Customize the skill directory name
oceanpayment-agent install --name oceanpayment-dev
```

After installation, restart or open a new agent session for it to take effect.

## Usage

Once installed, simply ask your AI agent directly, for example:

- "What is the request domain for the Oceanpayment sandbox environment?"
- "How do I construct the signValue signature?"
- "How do I integrate Shopify direct credit card processing?"

View the installed Skill's metadata:

```bash
oceanpayment-agent inspect
```

View the full CLI usage:

```bash
oceanpayment-agent --help
```

## Build from source

If you want to modify the Skill content or repackage it, follow the steps below.

### Requirements

- Node.js ≥ 14
- npm ≥ 6

### Build steps

```bash
# 1. Clone the repository
git clone https://github.com/Oceanpayment/agent.git
cd agent

# 2. Install dependencies (this package has zero third-party dependencies; used only for validation)
npm install

# 3. Pre-build validation: check that SKILL.md, frontmatter, and references are complete
npm run build

# 4. Package as an npm package (generates oceanpayment-agent-<version>.tgz)
npm pack
```

### Verify the package locally

```bash
# Package
npm pack

# Install the local .tgz globally
npm install -g ./oceanpayment-agent-1.0.0.tgz

# Verify the CLI works
oceanpayment-agent --version
oceanpayment-agent inspect
```

## Publishing

### Publish to the npm registry

```bash
npm login
npm publish
```

After publishing successfully, merchants can install it via `npm install -g @oceanpayment/agent`.

### Publish to GitHub

Just push to the repository — no extra steps needed:

```bash
git add .
git commit -m "release: oceanpayment agent skill v1.0.0"
git push origin main
```

Merchants can install directly from GitHub: `npm install -g github:Oceanpayment/agent`.

> To publish the scoped package `@oceanpayment/agent` via `npm publish`, the first publish may require `npm publish --access public` (scoped packages are private by default).

## Directory structure

```
agent/
├── package.json              # npm package definition (name / version / bin / files)
├── bin/
│   └── oceanpayment-agent.js # CLI install script (install / inspect)
├── scripts/
│   └── verify.js             # pre-build validation script (npm run build)
├── skills/
│   └── oceanpayment/
│       ├── SKILL.md          # Skill entry (contains name / description metadata)
│       └── references/       # full mirror of Oceanpayment official technical documentation
├── README.md
└── LICENSE
```

## Updating the Skill

1. Replace the corresponding files under `skills/oceanpayment/references/` with the latest documentation, and update `SKILL.md` if necessary.
2. Bump the `version` in `package.json`.
3. Run `npm run build && npm pack` to validate and package.
4. Republish (`npm publish` or `git push`).

Merchants who have already installed it can reinstall with the same command to get the new version (run `npm install -g @oceanpayment/agent@latest`, then run `oceanpayment-agent install` again; add `--force` to overwrite old files).

## License

[MIT](./LICENSE)
