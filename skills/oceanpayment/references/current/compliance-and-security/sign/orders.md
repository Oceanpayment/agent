---
sidebar_position: 3
sidebar_label: 订单管理
---
# 


## 在此之前
:::info[信息]
1. 此签名只适用于**订单管理**功能；
2. 请查看Oceanpayment完整的[**安全签名**](/docs/compliance-and-security/sign/introduction)流程介绍。
:::

## 签名格式
<div className="table-container">
|功能|签名生成|签名验证(实时返回)|
| --- | --- | --- |
|[**订单状态查询**](/docs/orders/query-orders)|`account`+`terminal`+`order_number`+`secureCode`|`account`+`terminal`+`order_number`+`order_currency`<br/>+`order_amount`+`order_sourceUrl`+`payment_id`+`payment_results`<br/>+`payment_dateTime`+`auth_status`+`secureCode`|
|[**成功订单查询**](/docs/orders/success-orders)|`account`+`terminal`+`order_beginDate`+`order_endDate`<br/>+`pages`+`secureCode`|`account`+`terminal`+`results`+`details`<br/>+`count`+`totalpages`+`pages`+`secureCode`|
|[**业务订单查询**](/docs/orders/business-orders)|`account`+`terminal`+`order_beginDate`+`order_endDate`<br/>+`pages`+`secureCode`|`account`+`terminal`+`results`+`details`<br/>+`count`+`totalpages`+`pages`+`secureCode`|
|[**争议订单查询**](/docs/orders/dispute-orders)|`account`+`terminal`+`order_beginDate`+`order_endDate`<br/>+`pages`+`secureCode`|`account`+`terminal`+`results`+`details`<br/>+`count`+`totalpages`+`pages`+`secureCode`|
|[**预授权管理**](/docs/orders/auth)|`account`+`terminal`+`payment_id`+`payment_authType`<br/>+`order_amount`+`secureCode`|`account`+`terminal`+`payment_id`+`order_number`<br/>+`payment_status`+`payment_details`+`secureCode`|
|[**退款申请**](/docs/orders/refund)|`account`+`terminal`+`payment_id`+`refund_number`<br/>+`refund_type`+`refund_amount`+`refund_description`<br/>+`secureCode`|`account`+`terminal`+`payment_id`+`refund_id`<br/>+`refund_number`+`refund_results`+`refund_description`<br/>+`secureCode`|
|[**退款查询**](/docs/orders/refund#退款查询)|`account`+`terminal`+`refund_id`+`refund_number`<br/>+`secureCode`|`account`+`terminal`+`refund_id`+`refund_number`<br/>+`refund_check`+`refund_description`+`secureCode`|
|[**物流单号上传**](/docs/orders/upload-tracking)|`account`+`terminal`+`payment_id`+`order_number`<br/>+`tracking_number`+`tracking_site`+`tracking_handler`<br/>+`secureCode`|`account`+`terminal`+`payment_id`+`tracking_results`<br/>+`secureCode`|
|[**海关上送**](/docs/orders/customs-upload)|`account`+`terminal`+`payment_id`+`type`<br/>+`pay_userId`+`pay_userName`+`secureCode`|`account`+`terminal`+`payment_id`+`type`<br/>+`status`+`details`+`secureCode`|
</div>