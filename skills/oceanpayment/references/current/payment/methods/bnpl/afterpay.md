---
sidebar_position: 2
sidebar_label: Afterpay
---
# 

## Afterpay
<div className="table-container">
|功能|说明|
| --- | --- |
|集成方案|<ol><li>✅ 托管结账</li></ol>|
|推荐使用国家|全球|
|是否支持虚拟行业|✅ 接入受限|
|是否支持订阅服务|❌️ |
|支持的SaaS|<ol><li>✅ Shopify</li><li>✅ Shopline</li><li>✅ Shopyy</li><li>✅ Ueeshop</li><li>✅ Shoprise帕帕猴</li><li>✅ Shoplus超店</li><li>✅ Shoptop</li></ol>|
|支持的开源建站|<ol><li>✅ Magento</li><li>✅ WordPress/Woocommerce</li><li>✅ OpenCart</li><li>✅ PrestaShop</li><li>✅ ZenCart</li></ol>|
</div>


## 支付方式名称
针对不同国家的消费者，您的店铺Checkout页面需要对外展示不同的支付方式名称和LOGO。
<div className="table-container">
|市场|[账单国家(`billing_country`)](/docs/payment/parameter#账单信息)|支付方式名称|支付LOGO|
| --- | --- | --- | --- |
|英国|`GB`|`Clearpay`|<img src="/img/methods/clearpay.svg" width="60"/>|
|美国|`US`|`Cash App Afterpay`|<img src="/img/methods/cashapppay.svg" width="60"/>|
|澳大利亚/加拿大|`AU`/`CA`|`Afterpay`|<img src="/img/methods/afterpay.svg" width="60"/>|
</div>


## 授权与收款规则
- Afterpay付款在进入预授权后，商户将获得一笔预授权但未扣款的交易。
- 商户必须在预授权后的14天内完成收款（Capture）。如果在14天内未发起收款，该授权将自动失效。

## 状态说明
Afterpay进入预授权状态后，  
- [支付状态](/docs/payment/status)为待处理：
```json
payment_status = -1
```
- 且[支付类型](/docs/payment/status#支付类型)会标记为预授权类型：
```json
payment_authType = 1
```


## 发起授权/撤销
Afterpay进入预授权的订单，您可以手动通过Oceanpayment[授权功能](/docs/orders/auth)完成授权/撤销，此时订单的授权/撤销结果会再次触发[异步通知](/docs/webhook/payments/checkout)。

## 站内消息（On-site Messaging）
Afterpay站内消息是一种解决方案，允许商户在客户进入结账之前，在网站或移动应用上展示 个性化的Afterpay支付消息，用于提前告知用户可用的灵活支付方式，提升转化率和用户体验。  
### 使用示例代码集成
```javascript
<script src="https://js.afterpay.com/afterpay-1.x.js" data-analytics-enabled async ></script>
<afterpay-placement 
    data-locale="语言"
    data-currency="币种" 
    data-amount="产品金额"
 ></afterpay-placement>
```

### 以Shopify为例
以Shopify为例，可以通过在主题文件中添加脚本和展示代码来集成Afterpay站内消息功能。
1. 在Online Store（在线商店） → Themes（主题）- Edit code（编辑代码）- `theme.liquid`中添加脚本
```html
<script src="https://js.afterpay.com/afterpay-1.x.js" data-analytics-enabled async></script>
```

2. 在产品页面添加展示组件
```javascript
<afterpay-placement 
    data-locale="en_AU"
    data-currency="{{ shop.currency }}" 
    data-amount="{{ product.price | money_without_currency }}"
></afterpay-placement>
```

- `data-locale`：语言区域代码（例如 en_AU、en_US等）；
- `data-currency`：店铺币种（通过 Shopify动态获取）；
- `data-amount`：商品金额（需与页面实际展示金额保持一致）。
