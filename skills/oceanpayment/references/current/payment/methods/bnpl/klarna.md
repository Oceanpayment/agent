---
sidebar_position: 2
sidebar_label: Klarna
---
# 

## Klarna
<div className="table-container">
|功能|说明|
| --- | --- |
|支付LOGO|<img src="/img/methods/klarna.svg" width="70"/>|
|集成方案|<ol><li>✅ 托管结账</li></ol>|
|推荐使用国家|<span className="text-tooltip" tabIndex="0">查看<span className="tooltip-text">奥地利、比利时、捷克共和国、丹麦、芬兰、爱尔兰、波兰、罗马尼亚、西班牙、瑞典、英国、法国、德国、希腊、意大利、荷兰、挪威、葡萄牙、瑞士、美国、匈牙利</span></span>|
|是否支持虚拟行业|✅|
|是否支持订阅服务|✅ |
|支持的SaaS|<ol><li>✅ Shopify</li><li>✅ Shoplazza店匠</li><li>✅ Shopline</li><li>✅ Shopyy</li><li>✅ Ueeshop</li><li>✅ Allvalue有赞</li><li>✅ Shoprises帕帕猴</li><li>✅ Meshop蜜店云</li><li>✅ Shoptop</li><li>✅ Shoppaas</li></ol>|
|支持的开源建站|<ol><li>✅ Magento</li><li>✅ WordPress/Woocommerce</li><li>✅ OpenCart</li><li>✅ PrestaShop</li><li>✅ ZenCart</li></ol>|
</div>

## 付款名称
:::warning[注意]
Klarna要求所有商户的在Checkout页面的支付方式名称需要修改为[Klarna官方认可的名称](https://docs.klarna.com/payments/web-payments/additional-resources/ux-guidelines/payment-descriptors)。
:::
在您的网站可以自行定义支付方式名称时，Checkout页面需要按照消费者填写的账单国家更新支付方式名称：
<div className="table-container">
|Market|[账单国家(`billing_country`)](/docs/payment/parameter#账单信息)|Language|Payment Descriptor|
| --- | --- | --- | --- |
|Austria|AT|<ol><li>English</li><li>German</li></ol>|<ol><li>Pay flexibly</li><li>Flexibel bezahlen</li></ol>|
|Belgium|BE|<ol><li>English</li><li>Dutch</li><li>French</li></ol>|<ol><li>Pay with Klarna</li><li>Betaal met Klarna</li><li>Payez avec Klarna</li></ol>|
|Czech Republic|CZ|<ol><li>English</li><li>Czech</li></ol>|<ol><li>Pay with Klarna</li><li>Flexibilní platby s Klarnou</li></ol>|
|Denmark|DK|<ol><li>English</li><li>Danish</li></ol>|<ol><li>Pay with Klarna</li><li>Betal med Klarna</li></ol>|
|Finland|FI|<ol><li>English</li><li>Finnish</li><li>Swedish</li></ol>|<ol><li>Pay with Klarna</li><li>Maksa Klarnalla</li><li>Betala med Klarna</li></ol>|
|France|FR|<ol><li>English</li><li>French</li></ol>|<ol><li>Flexible payments with Klarna</li><li>Paiements flexibles avec Klarna</li></ol>|
|Germany|DE|<ol><li>English</li><li>German</li></ol>|<ol><li>Pay flexibly</li><li>Flexibel bezahlen</li></ol>|
|Greece|GR|<ol><li>English</li><li>Greek</li></ol>|<ol><li>Flexible payments with Klarna</li><li>Ευέλικτες πληρωμές με Klarna</li></ol>|
|Hungary|HU|<ol><li>English</li><li>Hungarian</li></ol>|<ol><li>Flexible payments with Klarna</li><li>Rugalmas fizetési lehetőségek a Klarnával</li></ol>|
|lreland|IE|<ol><li>English</li></ol>|<ol><li>Flexible payments with Klarna</li></ol>|
|Italy|IT|<ol><li>English</li><li>Italian</li></ol>|<ol><li>Flexible payments with Klarna</li><li>Pagamenti flessibili con Klarna</li></ol>|
|Netherlands|NL|<ol><li>English</li><li>Dutch</li></ol>|<ol><li>Pay with Klarna</li><li>Betaal met Klarna</li></ol>|
|Norway|NO|<ol><li>English</li><li>Dutch</li></ol>|<ol><li>Pay with Klarna</li><li>Betaal met Klarna</li></ol>|
|Poland|PL|<ol><li>English</li><li>Polish</li></ol>|<ol><li>Flexible payments with Klarna</li><li>Elastyczne płatności z Klarną</li></ol>|
|Portugal|PT|<ol><li>English</li><li>Portuguese</li></ol>|<ol><li>Flexible payments with Klarna</li><li>Pagamentos flexíveis com Klarna</li></ol>|
|Romania|RO|<ol><li>English</li><li>Romanian</li></ol>|<ol><li>Flexible payments with Klarna</li><li>Plăți flexibile cu Klarna</li></ol>|
|Slovakia|SK|<ol><li>English</li><li>Slovak</li></ol>|<ol><li>Flexible payments with Klarna</li><li>Flexibilné platby s Klarnou</li></ol>|
|Spain|ES|<ol><li>English</li><li>Spanish</li></ol>|<ol><li>Flexible payments with Klarna</li><li>Pagos flexibles con Klarna</li></ol>|
|Sweden|SE|<ol><li>English</li><li>Swedish</li></ol>|<ol><li>Pay with Klarna</li><li>Betala med Klarna</li></ol>|
|Switzerland|CH|<ol><li>English</li><li>German</li><li>French</li><li>Italian</li></ol>|<ol><li>Pay with Klarna</li><li>Flexibel bezahlen</li><li>Paiements flexibles avec Klarna</li><li>Paga con Klarna</li></ol>|
|United Kingdom|GB|<ol><li>English</li></ol>|<ol><li>Pay with Klarna</li></ol>|
|United States|US|<ol><li>English</li><li>Spanish</li></ol>|<ol><li>Pay with Klarna</li><li>Paga con Klarna</li></ol>|
</div>

## 产品信息
:::warning[注意]
在使用Klarna支付时，商户需要通过[`itemList`](/docs/payment/parameter/#klarna产品信息)字段向Klarna上送订单中的商品明细信息。该字段用Klarna进行风险评估、分期计算、账单展示及合规校验，因此必须严格按照Klarna的字段规范进行传值。
:::

## 订阅功能
Klarna的[订阅功能](/docs/subscripions/quickpay-id/klarna)允许商户在用户首次授权后，按照预设的账单周期自动完成后续扣款，适用于会员服务、SaaS、内容订阅等周期性收费场景。


## 授权与收款规则
- Klarna付款在进入预授权后，商户将获得一笔预授权但未扣款的交易。
- 商户必须在预授权后的28天内完成收款（Capture）。如果在28天内未发起收款，该授权将自动失效。

### 自动捕获Klarna付款（Auto Capture）
自动捕获（Auto Capture） 是指商户在Klarna完成付款进入预授权（Authorization）后，由Oceanpayment自动发起收款（Capture）的流程，此功能可联系我们进行开通。

### 手动捕获Klarna付款（Manual Capture）
手动捕获（Manual Capture） 是指商户在Klarna完成付款进入预授权（Authorization）后，由商户主动发起收款（Capture）的流程，而不是在授权完成后自动扣款。

## 状态说明
Klarna进入预授权状态后，  
- [支付状态](/docs/payment/status)为待处理：
```json
payment_status = -1
```
- 且[支付类型](/docs/payment/status#支付类型)会标记为预授权类型：
```json
payment_authType = 1
```

## 发起授权/撤销
Klarna进入预授权的订单，您可以手动通过Oceanpayment[授权功能](/docs/orders/auth)完成授权/撤销，此时订单的授权/撤销结果会再次触发[异步通知](/docs/webhook/payments/checkout)。


## 争议订单处理
在处理存在争议（Dispute）的Klarna订单时，商户需向Klarna提供完整、准确的争议相关数据，以支持争议调查、责任判定及后续处理。您可以通过Oceanpayment查询Klarna完整的[争议订单](/docs/orders/dispute-orders)数据。


## 站内消息（On-site Messaging）
[Klarna站内消息](https://docs.klarna.com/conversion-boosters/on-site-messaging/before-you-start)是一种解决方案，允许商户在客户进入结账之前，在网站或移动应用上展示个性化的Klarna支付消息，用于提前告知用户可用的灵活支付方式，提升转化率和用户体验。

### 功能简介
- 在商品页、购物车页或整个站点展示 Klarna 支付选项相关消息（例如“先买后付”、“分期付款”）；
- 消息内容可根据购买金额、支持的支付方式及地区动态调整；
- 帮助顾客在购买过程中更早了解什么是 Klarna 以及如何付款。

### 集成方式
1. 使用API直接集成到网站前端，向Oceanpayment获取`data-client-id`：
```javascript
<script
    async
    data-environment="production"
    src="https://js.klarna.com/web-sdk/v1/klarna.js"
    data-client-id="{{ your data-client-id }}"
></script>

<klarna-placement
    data-key="credit-promotion-badge"
    data-locale="en-US"
    data-purchase-amount="{{ product.price }}"
></klarna-placement>
```
2. 平台插件：支持Shopify、Shoplazza、Shopline等[主流电商平台](/docs/saas/website/shopify/klarnaosm)快速集成。


## 测试数据
选择一个国家/地区以查看可用于测试Klarna的[示例数据](https://docs.klarna.com/resources/developer-tools/sample-data/sample-customer-data)。
