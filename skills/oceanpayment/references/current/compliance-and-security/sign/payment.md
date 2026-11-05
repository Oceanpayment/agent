---
sidebar_position: 2
sidebar_label: 交易
---
# 


## 在此之前
:::info[信息]
1. 此签名只适用于**交易**场景；
2. 请查看Oceanpayment完整的[**安全签名**](/docs/compliance-and-security/sign/introduction)流程介绍。
:::

## 签名格式
<div className="table-container">
|集成方式|签名生成|签名验证(实时返回)|签名验证(同步返回`backUlr`)|
| --- | --- | --- | --- |
|托管结账-<br/>[**商户控制重定向**](/docs/payment/host-page/integration)|`account`+`terminal`+`backUrl`+`order_number`<br/>+`order_currency`+`order_amount`+`billing_firstName`<br/>+`billing_lastName`+`billing_email`+`secureCode`|`account`+`terminal`+`order_number`+`order_currency`<br/>+`order_amount`+`order_notes`+`payment_id`+`pay_url`<br/>+`pay_results`+`pay_details`+`secureCode`|`account`+`terminal`+`order_number`+`order_currency`<br/>+`order_amount`+`order_notes`+`card_number`+`payment_id`<br/>+`payment_authType`+`payment_status`+`payment_details`<br/>+`payment_risk`+`secureCode`|
|托管结账-<br/>[**Oceanpayment自动重定向**](/docs/payment/host-page/integration)|`account`+`terminal`+`backUrl`+`order_number`<br/>+`order_currency`+`order_amount`+`billing_firstName`<br/>+`billing_lastName`+`billing_email`+`secureCode`| / |`account`+`terminal`+`order_number`+`order_currency`<br/>+`order_amount`+`order_notes`+`card_number`+`payment_id`<br/>+`payment_authType`+`payment_status`+`payment_details`<br/>+`payment_risk`+`secureCode`|
|[**嵌入式**](/docs/payment/embedded/integration)|`account`+`terminal`+`order_number`+`order_currency`<br/>+`order_amount`+`billing_firstName`+`billing_lastName`<br/>+`billing_email`+`secureCode`|`account`+`terminal`+`order_number`+`order_currency`<br/>+`order_amount`+`order_notes`+`card_number`+`payment_id`<br/>+`payment_authType`+`payment_status`+`payment_details`<br/>+`payment_risk`+`secureCode`|`account`+`terminal`+`order_number`+`order_currency`<br/>+`order_amount`+`order_notes`+`card_number`+`payment_id`<br/>+`payment_authType`+`payment_status`+`payment_details`<br/>+`payment_risk`+`secureCode`|
|[**服务器对服务器**](/docs/payment/server-to-server/integration)|请联系Oceanpayment技术支持<br/>techservice@oceanpayment.com.cn|请联系Oceanpayment技术支持|请联系Oceanpayment技术支持|
|[**付款链接**](/docs/payment/link/integration)|`account`+`terminal`+`backUrl`+`order_number`<br/>+`order_currency`+`order_amount`+`secureCode`|`account`+`terminal`+`order_number`+`order_currency`<br/>+`order_amount`+`order_notes`+`payment_id`+`MOTO_url`<br/>+`MOTO_results`+`MOTO_details`+`secureCode`|`account`+`terminal`+`order_number`+`order_currency`<br/>+`order_amount`+`order_notes`+`card_number`+`payment_id`<br/>+`payment_authType`+`payment_status`+`payment_details`<br/>+`payment_risk`+`secureCode`|
|[**面对面付款**](/docs/payment/pos/integration)|`account`+`terminal`+`order_number`+`order_currency`<br/>+`order_amount`+`billing_firstName`+`billing_lastName`<br/>+`billing_email`+`secureCode`|`account`+`terminal`+`order_number`+`order_currency`<br/>+`order_amount`+`order_notes`+`card_number`+`payment_id`<br/>+`payment_authType`+`payment_status`+`payment_details`<br/>+`payment_risk`+`secureCode`|/ |
</div>

## 订阅
### 创建QuickPay ID
<div className="table-container">
|支付方式|集成方式|签名生成|签名验证(实时返回)|
| --- | --- | --- | --- |
|信用卡|[**托管创建**](/docs/subscripions/quickpay-id/credit-card)|`account`+`terminal`+`customer_id`+`backUrl`<br/>+`billing_firstName`+`billing_lastName`+`billing_email`<br/>+`secureCode`|`account`+`terminal`+`customer_id`+`order_notes`<br/>+`card_number`+`quickpay_id`+`quickpay_status`+`secureCode`|
|信用卡/Apple Pay/Google Pay|[**嵌入式创建**](/docs/subscripions/quickpay-id/credit-card)|`account`+`terminal`+`customer_id`+`billing_firstName`<br/>+`billing_lastName`+`billing_email`+`secureCode`|`account`+`terminal`+`customer_id`+`order_notes`<br/>+`card_number`+`quickpay_id`+`quickpay_status`+`secureCode`|
</div>

### 发起扣款
<div className="table-container">
|签名生成|签名验证(实时返回)|
| --- | --- |
|`account`+`terminal`+`order_number`+`order_currency`+`order_amount`+`quickpay_id`<br/>+`billing_firstName`+`billing_lastName`+`billing_email`+`secureCode`|`account`+`terminal`+`order_number`+`order_currency`+`order_amount`<br/>+`order_notes`+`card_number`+`payment_id`+`quickpay_id`+`payment_authType`<br/>+`payment_status`+`payment_details`+`payment_risk`+`secureCode`|
</div>
