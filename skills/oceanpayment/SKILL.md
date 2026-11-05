---
name: oceanpayment
label: Oceanpayment技术对接
description: Oceanpayment（洋银在线）跨境支付平台技术对接指引。当用户询问 Oceanpayment 商户注册、沙盒/生产环境、API 密钥生成、签名（SHA256 signValue）与验签、Preauth 预授权、3DS、PCI-DSS 合规、订单管理、退款、争议拒付（dispute）、物流/海关上送、订阅（subscriptions / QuickPay ID / recurring / directpay）、快速支付、Apple Pay / Google Pay / Klarna 等替代支付、OPCard 虚拟卡开卡与管理、OPCCOUNT 全球账户与放款、Webhook 事件订阅与验签、响应代码（response code）含义，或 Shopify、Shoplazza（店匠）、Shopline、Wix、ueeshop、weimob、shopyy 等 SaaS 收银台接入、WooCommerce/Magento 开源插件对接、如何调用 Oceanpayment API 完成支付/订阅/开卡/放款对接、跨境支付、SaaS 收单集成、洋银在线接入问题时，都应使用本技能。
---

# Oceanpayment 技术对接

本技能内置了 Oceanpayment 开发者文档全量镜像，作为回答技术对接问题的一手依据。

## 使用原则

1. **一切以 references/current/ 下的原始文档为准**，不要凭记忆或猜测编造接口参数、签名字段、URL、错误码。
2. 用户提问时，先按下方"路由地图"定位到相关目录，用 `read_file` 读取所需的 `.md` / `.mdx` 文件；跨主题问题按需读取多个。
3. 回答中如果引用了具体接口、字段、签名字符串、URL、错误码等技术细节，必须来自实际读取的文档；模糊的表述允许用综合理解表达。
4. 涉及生产/沙盒差异、密钥、签名的问题格外谨慎——这些是"错一个字符就无法对接"的关键项，务必核对文档原文。
5. 如果文档里没有覆盖用户的问题（如商户账号密码、具体开通流程、报价、SLA 等业务问题），坦诚说明并建议联系 Oceanpayment 商务或客服。

## 工作流程

**第 1 步：识别主题**
根据用户问题落到下列一个或多个模块（模块 → 文档根目录）：

| 主题 | 根目录 | 常问场景 |
|------|--------|---------|
| 入门（注册/环境/密钥/上线清单） | `references/current/introduction/` | "怎么开户""沙盒和生产的地址是什么""密钥怎么申请" |
| 合规与安全（签名/3DS/PCI/Preauth） | `references/current/compliance-and-security/` | "signValue 怎么拼""怎么验签""3DS 流程""预授权" |
| 支付-收单（5 种集成模式） | `references/current/payment/` | 托管结账 host-page、嵌入 embedded、S2S server-to-server、支付链接 link、POS |
| 支付 API（OpenAPI 参考） | `references/current/payment-api/` | 具体接口参数、请求体、响应结构 |
| 订单管理（查询/退款/争议/物流/海关） | `references/current/orders/` + `orders-api/` | "订单状态""退款接口""dispute 处理""customs 海关上送" |
| 订阅（QuickPay ID + directpay + recurring） | `references/current/subscripions/` + `subscripions-api/` | "订阅扣款""绑卡 Token""周期续扣""ApplePay/GooglePay/Klarna 快速支付" |
| OPCard（虚拟卡：开卡/管理/余额/放款） | `references/current/opcard/` + `opcard-api/` | "开虚拟卡""持卡人""授权""余额查询""放款 payout" |
| OPCCOUNT（全球账户/收付/多币种） | `references/current/opccount/` + `opccount-api/` | "全球账户""提现""收款人账户""bank slip" |
| Webhook（异步通知） | `references/current/webhook/` | "webhook 订阅""事件类型""notification 验签""card / payments 通知区别" |
| 响应代码（错误码含义） | `references/current/response-code/` | 分为 payment / order / opcard / opccount 四张码表 |
| SaaS 集成 | `references/current/saas/` | Shopify、Shoplazza（店匠）、Shopline、Wix、ueeshop、weimob、shopyy、faq、legal 模板 |
| 开源插件 | `references/current/open-source/` | WooCommerce、Magento 等 |
| 资源（国家/币种/州省/测试卡） | `references/current/resource/` | 国家码、币种、州省码、测试卡号 |

注意目录拼写：**subscripions**（文档原目录名少一个 t）、**opccount**（两个 c）——直接沿用文档原名。

**第 2 步：读文档定位细节**
- 每个主题目录里通常有 `introduction.md`（总览）+ 若干子文件；先看 `introduction.md` 拿到全局，再读具体子文件。
- API 参考在对应的 `*-api/` 目录，`.api.mdx` 是接口详情，`*.ParamsDetails.json` / `.RequestSchema.json` / `.StatusCodes.json` 是配套结构。
- 收单支付共有 5 种集成模式（host-page / embedded / server-to-server / link / pos），选型问题参考 `payment/introduction.md` 里的"集成模式对比矩阵"。

**第 3 步：综合作答**
- 给出结论性答案 + 关键字段/URL/示例；如需完整参数表，可直接抄录文档中的表格。
- 建议在末尾用相对路径注明依据来源，如 `依据：references/current/compliance-and-security/sign/payment.md`，方便用户追溯。

## 平台组件速览

Oceanpayment 平台由四大产品线组成，各自使用独立的 API 密钥和请求域名：

| 产品线 | 沙盒域名 | 生产域名 | 用途 |
|-------|---------|---------|------|
| 交易（Payment 收单） | `test-secure.oceanpayment.com` | `secure.oceanpayment.com` | 收单支付网关 |
| 订单管理 | `test-query.oceanpayment.com` | `query.oceanpayment.com` | 查单/退款/争议/物流/海关 |
| OPCard 虚拟卡 | `checkout-s.oceanpayment.com` | `checkout.oceanpayment.com` | 发卡、管理、放款 |
| OPCCOUNT 全球账户 | `checkout-s.oceanpayment.com` | `checkout.oceanpayment.com` | 收付、多币种、结算 |

以上信息以 `references/current/introduction/environment.md` 为准。切换生产时必须同步更换密钥。

## 签名要点（关键）

- 算法：**SHA256**，字段名 `signValue`。
- 密钥字段名 `secureCode`，只能在服务端保存，禁止放客户端。
- 签名拼串按 **Oceanpayment 指定字段顺序** 拼接，不是字母序。
- 签名前必须做特殊字符处理：`trim` + 把 `< > ' "` 替换为空格。
- 支付与订单管理的签名字段串不同，且不同集成模式的签名结构也不同——回答具体签名问题时必须精确读对应文档：
  - 支付类：`references/current/compliance-and-security/sign/payment.md`
  - 订单类：`references/current/compliance-and-security/sign/orders.md`
  - 订阅类：`references/current/compliance-and-security/sign/orders.md`（订阅签名也参考订单侧规则）
- 三种验签场景：
  1. 实时返回（同步接收 `pay_url` / `MOTO_url` / XML 支付结果）
  2. `backUrl` 同步跳转返回（表单方式）
  3. `noticeUrl` 异步通知（走 Webhook 章节，见 `references/current/webhook/payments/introduction.md`）

## Webhook 要点

- 事件推送采用 Server-to-Server 异步通知，商户需搭建 HTTPS 回调地址。
- Webhook 分两个来源体系：
  - `webhook/payments/*` — 收款侧（支付结果、订单异常、退款/拒付、海关上送等）
  - `webhook/card/*` — OPCard 侧（发卡状态、交易、余额变动等）
- 事件订阅、订阅列表、更新、退订等管理接口在各自的 `webhook/card/subscribe.md`、`unsubscribe.md`、`update-webhook.md`、`webhook-list.md`。
- 必须做验签并给 Oceanpayment 明确响应，否则会重试。

## 边界与常见误区

- **不要臆造密钥申请或商户开通流程**。文档里的注册说明在 `introduction/register-merchant.md`；实际开户需要商务对接，涉及资质、结算币种、费率等，属于业务问题，请直接引导用户找 Oceanpayment BD。
- **不要混用产品线密钥**。收单、OPCard、OPCCOUNT 使用彼此独立的密钥，切换场景时要检查对应密钥是否配置。
- **不要用生产 URL 调沙盒 / 沙盒 URL 调生产**——参见 environment.md 的地址表。
- **文档目录名拼写不规范但请沿用**：`subscripions`（少一个 t）、`opccount`（两个 c）；改成"正确"拼写会读不到文件。
- 图像丰富的 markdown 里包含 JSX / React 组件片段（如 `<Tabs>` `<TabItem>`），只是官网渲染样式，抽取回答内容时忽略即可。

## 输出建议

- 简短问题（比如"沙盒地址是什么"）：直接给答案 + 一句依据。
- 集成方案类问题（比如"我们做订阅怎么接"）：给出推荐流程 + 关键接口 + 每一步该看的文档路径，让用户能顺着往下读。
- 参数/字段类问题：优先复用文档里的表格，不要重写。
- 遇到多个可能路径（比如"支付集成"有 5 种模式），先问清用户场景或直接列出对比矩阵让用户选择。
