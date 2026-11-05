---
sidebar_position: 1
sidebar_label: 付款状态
---
# 
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 付款状态

### 如何获取支付状态？
获取订单的支付状态，可通过Oceanpayment[异步回调通知](/docs/webhook/payments/checkout)和[订单状态查询](/docs/orders/query-orders)功能。
:::warning[注意]
- 请确认是否正确理解和处理Oceanpayment返回的支付状态；
- 若支付状态理解错误，可能会导致资金损失。
:::

### 支付状态说明
<Tabs> 
  <TabItem value="Responses" label="Responses" default>
<div className="table-container">
|返回参数|描述|
| --- | --- |
|`payment_status`|支付状态<ul><li>-1: 支付**待处理**（非支付终态）：需要等待回调通知，或者通过订单查询接口取得交易的最新结果</li><li>1: 支付**成功**: 请给用户提供所购买的产品或服务</li><li>0: 支付**失败**/取消支付</li></ul>|
</div>
	</TabItem>  
</Tabs>

```xml
<payment_status>1</payment_status>
```

## 支付类型
<Tabs> 
  <TabItem value="Responses" label="Responses" default>
<div className="table-container">
|返回参数|描述|
| --- | --- |
|`payment_authType`|订单的支付类型<ul><li>0: 该交易类型为**Sale**一般交易</li><li>1: 该交易类型为**预授权且非3D**交易</li><li>2: 该交易类型为**3D且非预授权**交易</li><li>3: 该交易类型为**3D且预授权**交易</li></ul>
</div>
	</TabItem>  
</Tabs>
```xml
<payment_authType>0</payment_authType>
```

## 响应代码
1. 交易会返回具体的失败详情：
- **交易的支付详情**：`payment_details`，格式为[Code:支付详情](/docs/response-code/payment)。 
```xml
<payment_details>80000:Transaction Approved</payment_details>
```

- **付款失败后的解决方法**：`payment_solutions`，可以在付款失败结果页面显示给消费者看。 
```xml
<payment_solutions>Sorry, your card is unable to authorised. If you entered the correct information, please use a different card or call your card issuer or use different payment method.</payment_solutions>
```

2. 查看Oceanpayment完整的[交易响应代码](/docs/response-code/payment)。