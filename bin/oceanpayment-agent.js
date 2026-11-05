#!/usr/bin/env node
/**
 * oceanpayment-agent CLI
 *
 * 把 Oceanpayment 技术对接 Skill 安装到 AI 编码代理（Claude Code 等）的 skills 目录。
 *
 * 用法：
 *   oceanpayment-agent install                  # 安装到全局（~/.claude/skills）
 *   oceanpayment-agent install --local          # 安装到当前项目（./.claude/skills）
 *   oceanpayment-agent install --dir <path>     # 安装到指定目录
 *   oceanpayment-agent install --name <name>    # 自定义 skill 目录名（默认 oceanpayment）
 *   oceanpayment-agent install --force          # 目标已存在时覆盖
 *   oceanpayment-agent inspect                  # 查看 skill 元信息
 *   oceanpayment-agent --version                # 版本号
 *   oceanpayment-agent --help                   # 帮助
 */
'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const PACKAGE_ROOT = path.join(__dirname, '..');
const SKILL_SRC = path.join(PACKAGE_ROOT, 'skills', 'oceanpayment');
const DEFAULT_NAME = 'oceanpayment';

// 从 SKILL.md 的 YAML frontmatter 中读取简单字段
function readFrontmatter(skillDir) {
  const skillFile = path.join(skillDir, 'SKILL.md');
  let meta = { name: DEFAULT_NAME };
  try {
    const content = fs.readFileSync(skillFile, 'utf8');
    const m = content.match(/^---\n([\s\S]*?)\n---/);
    if (m) {
      const fm = m[1];
      for (const key of ['name', 'label', 'description']) {
        const re = new RegExp('^' + key + ':\\s*(.+)$', 'm');
        const hit = fm.match(re);
        if (hit) meta[key] = hit[1].trim().replace(/^["']|["']$/g, '');
      }
    }
  } catch (e) {
    /* 忽略：默认值兜底 */
  }
  return meta;
}

function parseArgs(argv) {
  const args = { _: [], dir: null, name: DEFAULT_NAME, local: false, force: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dir' || a === '-d') args.dir = argv[++i];
    else if (a === '--name' || a === '-n') args.name = argv[++i];
    else if (a === '--local' || a === '-l') args.local = true;
    else if (a === '--force' || a === '-f') args.force = true;
    else if (a === '--help' || a === '-h') args.help = true;
    else if (a === '--version' || a === '-v') args.version = true;
    else args._.push(a);
  }
  return args;
}

function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDirRecursive(s, d);
    else fs.copyFileSync(s, d);
  }
}

function countFiles(dir) {
  let n = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) n += countFiles(p);
    else n += 1;
  }
  return n;
}

function printHelp() {
  const pkg = require(path.join(PACKAGE_ROOT, 'package.json'));
  console.log(
    [
      `oceanpayment-agent v${pkg.version}`,
      '把 Oceanpayment 技术对接 Skill 安装到 AI 编码代理的 skills 目录。',
      '',
      '用法：',
      '  oceanpayment-agent <命令> [选项]',
      '',
      '命令：',
      '  install      安装 skill（默认到全局 ~/.claude/skills）',
      '  inspect      查看 skill 元信息（名称、说明）',
      '',
      'install 选项：',
      '  --local, -l        安装到当前项目 ./.claude/skills（项目级）',
      '  --dir, -d <path>   安装到指定目录（优先级最高）',
      '  --name, -n <name>  自定义 skill 目录名（默认 oceanpayment）',
      '  --force, -f        目标已存在时覆盖',
      '',
      '示例：',
      '  oceanpayment-agent install',
      '  oceanpayment-agent install --local',
      '  oceanpayment-agent install --dir ~/my-agent/skills',
      '',
      '其它：',
      '  -h, --help     显示本帮助',
      '  -v, --version  显示版本号',
    ].join('\n')
  );
}

function printInspect() {
  const meta = readFrontmatter(SKILL_SRC);
  const files = countFiles(SKILL_SRC);
  console.log('Oceanpayment 技术对接 Skill');
  console.log(`  名称 (name) : ${meta.name || DEFAULT_NAME}`);
  if (meta.label) console.log(`  标签 (label): ${meta.label}`);
  if (meta.description) console.log(`  说明        : ${meta.description.slice(0, 80)}${meta.description.length > 80 ? '…' : ''}`);
  console.log(`  文件数      : ${files}`);
  console.log(`  源目录      : ${SKILL_SRC}`);
}

function resolveTargetDir(args) {
  if (args.dir) return path.resolve(args.dir);
  if (args.local) return path.join(process.cwd(), '.claude', 'skills');
  if (process.env.AGENT_SKILLS_DIR) return path.resolve(process.env.AGENT_SKILLS_DIR);
  return path.join(os.homedir(), '.claude', 'skills');
}

function install(args) {
  if (!fs.existsSync(SKILL_SRC)) {
    console.error('错误：未找到 skill 源目录 ' + SKILL_SRC);
    process.exit(1);
  }

  const name = args.name || DEFAULT_NAME;
  const base = resolveTargetDir(args);
  const dest = path.join(base, name);

  if (fs.existsSync(dest) && !args.force) {
    console.error(`目标已存在：${dest}`);
    console.error('如需覆盖，请加 --force（会删除并重写该目录）。');
    process.exit(1);
  }

  if (args.force && fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }

  copyDirRecursive(SKILL_SRC, dest);
  const files = countFiles(dest);

  console.log('安装完成 ✓');
  console.log(`  Skill 名称 : ${name}`);
  console.log(`  目标目录   : ${dest}`);
  console.log(`  文件数     : ${files}`);
  console.log('');
  console.log('现在可以在你的 AI 编码代理中直接提问，例如：');
  console.log('  "Oceanpayment 沙盒环境的请求域名是什么？"');
  console.log('  "signValue 签名怎么拼？"');
  console.log('  "Shopify 信用卡直连怎么接入？"');
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.version) {
    const pkg = require(path.join(PACKAGE_ROOT, 'package.json'));
    console.log(pkg.version);
    return;
  }

  if (args.help || args._.length === 0) {
    printHelp();
    return;
  }

  const cmd = args._[0];
  if (cmd === 'install') install(args);
  else if (cmd === 'inspect') printInspect();
  else {
    console.error(`未知命令：${cmd}`);
    console.error('运行 oceanpayment-agent --help 查看用法。');
    process.exit(1);
  }
}

main();
