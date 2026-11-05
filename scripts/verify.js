#!/usr/bin/env node
/**
 * 构建前校验：确保 npm 包结构与 skill 内容完整。
 * 被 `npm run build` 与 `prepublishOnly` 调用，任何一项不通过即退出非 0。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SKILL_DIR = path.join(ROOT, 'skills', 'oceanpayment');
const SKILL_FILE = path.join(SKILL_DIR, 'SKILL.md');
const REFS_DIR = path.join(SKILL_DIR, 'references');

const errors = [];

function check(ok, msg) {
  if (!ok) errors.push(msg);
}

// 1. package.json 存在且字段齐全
const pkgPath = path.join(ROOT, 'package.json');
check(fs.existsSync(pkgPath), '缺少 package.json');
let pkg = {};
try {
  pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
} catch (e) {
  errors.push('package.json 不是合法 JSON: ' + e.message);
}
if (pkg && !pkg.name) errors.push('package.json 缺少 name');
if (pkg && !pkg.version) errors.push('package.json 缺少 version');

// 2. SKILL.md 存在且有 frontmatter
check(fs.existsSync(SKILL_FILE), '缺少 skills/oceanpayment/SKILL.md');
let fmOk = false;
let fmName = null;
let fmDesc = null;
if (fs.existsSync(SKILL_FILE)) {
  const content = fs.readFileSync(SKILL_FILE, 'utf8');
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  fmOk = !!m;
  check(fmOk, 'SKILL.md 缺少 YAML frontmatter（--- 包裹的元数据）');
  if (m) {
    const nameHit = m[1].match(/^name:\s*(.+)$/m);
    const descHit = m[1].match(/^description:\s*(.+)$/m);
    fmName = nameHit ? nameHit[1].trim() : null;
    fmDesc = descHit ? descHit[1].trim() : null;
    check(!!fmName, 'SKILL.md frontmatter 缺少 name');
    check(!!fmDesc, 'SKILL.md frontmatter 缺少 description');
  }
}

// 3. references 目录存在且有文件
check(fs.existsSync(REFS_DIR), '缺少 skills/oceanpayment/references/ 目录');
let refCount = 0;
if (fs.existsSync(REFS_DIR)) {
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else refCount++;
    }
  };
  walk(REFS_DIR);
  check(refCount > 0, 'references/ 目录为空');
}

if (errors.length > 0) {
  console.error('构建校验未通过：');
  for (const e of errors) console.error('  ✗ ' + e);
  process.exit(1);
}

console.log('构建校验通过 ✓');
console.log(`  包名        : ${pkg.name}`);
console.log(`  版本        : ${pkg.version}`);
console.log(`  skill name  : ${fmName}`);
console.log(`  skill 说明  : ${(fmDesc || '').slice(0, 60)}${(fmDesc || '').length > 60 ? '…' : ''}`);
console.log(`  参考文档数  : ${refCount}`);
