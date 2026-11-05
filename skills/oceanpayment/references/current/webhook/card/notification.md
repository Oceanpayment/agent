---
sidebar_position: 1
sidebar_label: 通知参数
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Modal from '@site/src/components/Modal';
import CollapsibleTable from '@site/src/components/CollapsibleTable';

# 


## 概述

OPCard 平台在卡交易发生后，会通过**Webhook异步推送**方式，将交易事件实时通知到商户配置的回调地址。商户服务端需接收并处理推送，实现订单状态同步、账务核对和风控监控。

**适用场景**：
- 商户需要实时同步卡交易状态到自有系统
- 商户需要监听退款、拒付、续额等关键事件
- 商户需要构建统一的资金变动流水

---

## 推送机制

### 推送流程

```
┌──────────────┐  交易完成    ┌──────────────┐  HTTP POST  ┌──────────────┐
│  OPCard 系统 │ ──────────→ │  推送服务     │ ──────────→ │  商户回调地址 │
└──────────────┘             └──────────────┘   + 签名头   └──────────────┘
                                                              │ + 验签
                                                              ↓
                                                     ┌─────────────────┐
                                                     │ 返回 200 OK     │
                                                     └─────────────────┘
```

### 关键约定
<div className="table-container">
| 项 | 说明 |
|----|------|
| 推送方式 | HTTP POST（application/json）|
| 推送地址 | [设置Webhook URL](/docs/webhook/card/create-webhook)|
| 重试机制  |最大重试12次，重试阶梯（单位：分钟、小时）：1m、2m、4m、8m、15m、30m、1h、2h、4h、8h、16h、32h|
| 推送时机 | 交易状态变更时实时推送 |
| 成功标识 | 商户返回 HTTP 200，其他视为失败 |
| 幂等保证 | [`notify_event_id`](/docs/webhook/card/notification#推送字段说明)全局唯一，商户需入库去重 |
| 字符集 | UTF-8 |
| 推送时区 | UTC（请按需转换）|
</div>

## 推送字段说明

<div className="table-container">
<CollapsibleTable
  data={[
  {
    title: "event_code",
    type: "string",
    length: "-",
    required: "是",
    desc: "事件编码，用于标识具体事件类型<ul><li>165801: 交易</li><li>165802: 续额</li></ul>",
    example: "165802",
  },
  {
    title: "event_type",
    type: "string",
    length: "-",
    required: "是",
    desc: "事件类型<ul><li>card.transaction: 交易</li><li>card.load: 续额</li></ul>",
    example: "card.transaction",
  },
  {
    title: "notify_event_id",
    type: "long",
    length: "-",
    required: "是",
    desc: "通知事件唯一 ID，可用于幕等处理、日志追踪和问题排查",
    example: "2062493598283964416",
  },
  {
    title: "event_payload",
    type: "object",
    length: "-",
    required: "是",
    desc: "事件业务数据对象，包含卡交易相关的详细信息",
    example:'',
    children: [
      	  {
	        title: "transaction_id",
	        type: "string",
	        length: "-",
	        required: "是",
	        desc: "交易流水号，用于唯一标识一笔交易",
	        example: "1000002408236"
	      },
	      {
	        title: "mer_no",
	        type: "string",
	        length: "-",
	        required: "是",
	        desc: '商户号，用于标识交易所属商户',
	        example: "245981"
	      },
	      {
	        title: "transaction_status",
	        type: "string",
	        length: "-",
	        required: "是",
	        desc: '交易状态，表示当前交易所处状态',
	        example: "transaction"
	      },
	      {
	        title: "card_no",
	        type: "string",
	        length: "-",
	        required: "是",
	        desc: '卡内部编号或卡标识，用于标识发生交易的卡',
	        example: "8815544579267384492"
	      },
	      {
	        title: "transaction_amount",
	        type: "string",
	        length: "-",
	        required: "是",
	        desc: '交易金额，格式为：币种 金额',
	        example: "HKD 1.00"
	      },
	      {
	        title: "transaction_source",
	        type: "string",
	        length: "-",
	        required: "否",
	        desc: '交易来源<ul><li>Unknown: 未知</li><li>In Wallet POS: POS</li><li>Out Of Wallet POS: POS</li><li>In Wallet ATM: ATM</li><li>Out Of Wallet ATM: ATM</li><li>Online: 线上</li><li>Partner: 付款合作伙伴</li><li>Customer: 付款至客户</li><li>Internal: 内部平台</li><li>Static: 静态码</li><li>Mobile Commerce: 移动商务</li><li>On Us: 闭环支付系统</li><li>Out Of Wallet Online: 线上</li></ul>',
	        example: "Online"
	      },
	      {
	        title: "merchant_name",
	        type: "string",
	        length: "-",
	        required: "否",
	        desc: '交易商户名称',
	        example: "401 Congress"
	      },
	      {
	        title: "transaction_type",
	        type: "string",
	        length: "-",
	        required: "是",
	        desc: '交易类型<ul><li>Monthly Fee: 月费</li><li>Reward: 奖励</li><li>Shipping: 运输</li><li>Expedited Shipping: 加急运输</li><li>Addressing: 定位</li><li>Settlement: 结算</li><li>Funds Consolidation: 资金合并</li><li>Interest: 利息</li><li>Cash Back: 现金返还</li><li>Fee: 费用</li><li>Close Account: 账户关闭</li><li>Annual Fee: 年费</li><li>Fast Fund: FastFund</li><li>Reverse Payment: 撤消付款</li><li>Funds Expiry: 资金到期</li><li>A2A Money Receive: A2A入账</li><li>Late Payment Fee: 滞纳金</li><li>DCCFee: DCCFee</li><li>A2A Money Send: A2A出账</li><li>Exchange: 外汇交易</li><li>New Account: 新账户</li><li>Card Order: 卡片订购</li><li>Purchase: 消费</li><li>Refund: 退款</li><li>Load: 续额</li><li>Withdrawal: 提现</li><li>Balance Inquiry: 余额查询</li><li>p2p Transfer: p2p转账</li><li>Wallet Transfer: 钱包转账</li><li>Unknown: 未知</li><li>Exchange Margin: 汇率差额</li><li>Second Presentment: 申诉</li><li>Chargeback: 拒付</li><li>Funds Adjustment: 资金调整</li><li>Exchange Adjustment: 汇率调整</li><li>Account Maintenance: 账号维护</li><li>Charge Off: 冲销</li><li>Withholding: 扣缴</li></ul>',
	        example: "Purchase"
	      },
	      {
	        title: "fx_amount",
	        type: "string",
	        length: "-",
	        required: "否",
	        desc: '换汇金额。不涉及换汇或暂无换汇金额时为空字符串',
	        example: ""
	      }	      
    ]
  },


]}
/>
</div>


## 签名验证

### 算法与请求头
<div className="table-container">
| 项 | 值 |
|----|----|
| **算法** | HMAC-SHA256（默认） / SHA256withRSA |
| **签名计算规则** | `HMAC(secret_key, timestamp + "\n" + payload)` |
| **请求头** | `X-ODP-Timestamp`, `X-ODP-Signature` |
</div>

### 验签步骤（商户服务端必须实现）

```python
# Python示例
import hmac
import hashlib

def verify_webhook(headers: dict, body: bytes, secret_key: str) -> bool:
    timestamp = headers.get("X-ODP-Timestamp", "")
    signature = headers.get("X-ODP-Signature", "")
    
    # 1. 拼接签名原文（中间是 "\n"，不是空字符串！）
    message = timestamp + "\n" + body.decode("utf-8")
    
    # 2. HMAC-SHA256 签名
    expected = hmac.new(
        secret_key.encode("utf-8"),
        message.encode("utf-8"),
        hashlib.sha256
    ).hexdigest()
    
    # 3. 比对签名
    return hmac.compare_digest(expected, signature)
```

### 验签注意事项
<div className="table-container">
| 风险点 | 应对措施 |
|--------|----------|
| 签名原文用错分隔符 | 必须用 `"\n"`（换行符），不能用空字符串或空格 |
| 密钥泄露 | `secret_key` 严禁硬编码到前端/客户端 |
| 重放攻击 | 校验 `X-ODP-Timestamp` 与服务器时间差（建议 ≤ 5 分钟）|
| Body被修改 | 验签必须基于原始 body，不要先解析再验签 |
</div>

## 推送示例
<Tabs> 
  <TabItem value="Header" label="Header" default>
```json
X-ODP-Timestamp: 1752019200
X-ODP-Signature: 4f7e3d2c1b0a9f8e7d6c5b4a3f2e1d0c...
```
  </TabItem> 
</Tabs>

<Tabs> 
  <TabItem value="Body" label="Body" default>
```json
{
  "event_code": "165801",
  "event_type": "card.transaction",
  "notify_event_id": 2062493598283960000,
  "event_payload": {
    "transaction_id": "1000002408236",
    "mer_no": 245981,
    "transaction_status": "transaction",
    "card_no": "8815544579267380000",
    "transaction_amount": "HKD 11.00",
    "transaction_source": "Online",
    "merchant_name": "401 Congress",
    "transaction_type": "Purchase",
    "fx_amount": ""
  }
}
```
  </TabItem> 
</Tabs>


## 常见问题（FAQ）

**Q1：推送地址必须 HTTPS吗？**
A：是的。生产环境必须 HTTPS，且证书有效。

**Q2：商户不返回200会怎样？**
A：会进入重试队列。建议在3秒内返回，业务处理异步执行。

**Q3：推送会乱序到达吗？**
A：可能。商户需用 `transaction_id`关联，不依赖推送顺序。

**Q4：同一交易会推送多次吗？**
A：会。用 `notify_event_id` 幂等，同一 ID只处理一次。

**Q5：推送频率有限制吗？**
A：暂无限流，但请商户保证3秒内返回。

**Q6：`transaction_amount` 一定是两位小数吗？**
A：是的。请商户用BigDecimal解析，避免浮点误差。

**Q7：卡号是完整传递吗？**
A：`card_no`不是真实卡号，是卡内部编号或卡标识。