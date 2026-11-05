---
sidebar_position: 3
sidebar_label: 预授权
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 概述
预授权（Pre-Authorization）是指在交易时先对持卡人卡内金额进行冻结（不扣款），待实际履约后再执行后续扣款（Capture），或在无需扣款时进行取消冻结（Void）。

## 预授权的两种触发方式
1. 商户控制预授权：商户在请求参数中明确指定是否使用预授权，由商户自主控制交易类型；
2. Oceanpayment自动控制预授权：由Oceanpayment根据交易场景及风控策略自动判断是否执行预授权，无需商户额外指定参数。

### 商户控制预授权
商户在请求支付接口时，通过`ET_NOTES`参数明确指定交易类型，Oceanpayment根据该参数将交易处理为预授权。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|
| --- | --- | --- | --- | --- |
|`ET_NOTES`|string|1-100|是|<ul><li>pre: 预授权</li><li>sale: 非预授权</li></ul>|
</div>
	</TabItem>  
</Tabs>

### Oceanpayment自动控制预授权
Oceanpayment根据通道规则自动判断是否需要预授权。

## 预授权状态
在[支付结果](/docs/webhook/payments/checkout#通知参数)中获取订单是否进入预授权
<Tabs> 
  <TabItem value="Responses" label="Responses" default>
<div className="table-container">
|返回参数|描述|
| --- | --- |
|`payment_status`|支付状态<ul><li>-1: 支付**待处理**（非支付终态）：需要等待回调通知，或者通过订单查询接口取得交易的最新结果</li><li>1: 支付**成功**: 请给用户提供所购买的产品或服务</li><li>0: 支付**失败**/取消支付</li></ul>|
|`payment_authType`|订单的支付类型<ul><li>0: 该交易类型为**Sale**一般交易</li><li>1: 该交易类型为**预授权且非3D**交易</li><li>2: 该交易类型为**3D且非预授权**交易</li><li>3: 该交易类型为**3D且预授权**交易</li></ul>
</div>
	</TabItem>  
</Tabs>

## 授权操作
当订单进入预授权状态，可以使用[预授权操作](/docs/orders/auth)功能进行订单的授权或撤销。



