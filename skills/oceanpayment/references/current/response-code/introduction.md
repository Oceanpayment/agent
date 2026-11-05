---
sidebar_position: 1
sidebar_label: 介绍
---
# 

## 概述
本文档旨在全面定义和说明Oceanpayment涉及的核心响应代码：支付、订单、OPCard和OPCCOUNT资金账户响应代码。这些代码共同构成了交易处理的完整状态视图，是进行问题排查、对账和客户服务的基础依据。


<div className="hero-minimalist">
 <section className="hero-minimal">
  <h1 className="hero-minimal-title">响应代码</h1>
  <p className="hero-minimal-subtitle">响应代码是商户与Oceanpayment之间的确认机制，正确返回响应代码，能确保交易信息完整、安全、可靠地传递。</p>

  <div className="hero-minimal-features">
    <div className="hero-minimal-feature">
      <span>💳</span> 支付
    </div>
    <div className="hero-minimal-feature">
      <span>🧾</span> 订单管理
    </div>
    <div className="hero-minimal-feature">
      <span>🎫</span> OPCard
    </div>
    <div className="hero-minimal-feature">
      <span>💰️</span> OPCCOUNT
    </div>    
  </div>
 </section>
</div>


## 响应代码类型
<div className="table-container">
|类型|核心作用|
| --- | --- |
|[支付](/docs/response-code/payment)|支付网关对支付请求的处理结果（成功、失败及具体原因）|
|[订单管理](/docs/response-code/order)|订单的管理响应代码|
|[OPCard](/docs/response-code/opcard)|OPCard发卡管理响应代码|
|[OPCCOUNT](/docs/response-code/opccount)|OPCCOUNT资金操作管理响应代码|
</div>

## 使用与建议
面对众多的响应代码，遵循以下最佳实践能帮助你更好地集成和处理：
1. 代码依赖关系：
- 优先以业务响应码作为判断交易结果的最终依据。
- HTTP状态码仅代表请求通信层面是否成功。

2. 清晰的客户提示：
- 根据不同的响应码，向终端用户展示友好、明确的提示信息。
- 避免直接显示原始错误码（尤其是发卡行错误码），以免引起困惑或被恶意利用。

3. 日志记录与监控：
- 在商户后台记录所有交易的请求和响应详情（包括响应码）。
- 设置告警机制监控失败率异常，以便及时发现问题。

4. 善用查询接口：
-  对于返回“处理中”状态的交易，或未收到[异步通知](/docs/webhook/introduction)的情况，应主动调用[订单查询](/docs/orders/query-orders)接口来获取订单的最终状态。

:::warning[注意]
Oceanpayment的响应代码列表可能会更新或扩充，建议定期查阅Oceanpayment官方技术文档以获取最新信息。
:::
