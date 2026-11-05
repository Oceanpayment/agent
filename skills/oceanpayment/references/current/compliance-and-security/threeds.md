---
sidebar_position: 1
sidebar_label: 3DS
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 概述
Oceanpayment全面支持3D Secure (3DS)协议，为跨境电子商务交易提供增强的安全认证层，帮助商户满足全球各地的合规要求（如欧洲的 PSD2 SCA），同时有效降低欺诈风险和拒付率。

## 什么是3D Secure？
3D Secure（Three-Domain Secure）是一种在线支付安全协议，旨在通过额外的身份验证步骤来减少信用卡和借记卡交易的欺诈行为。它构成了“三域”安全模型：
- 发卡域 (Issuer Domain): 持卡人及其发卡银行。
- 收单域 (Acquirer Domain): 商户及其收单银行（或Oceanpayment这样的支付服务商）。
- 互操作域 (Interoperability Domain): 卡组织（如Visa, Mastercard）提供的基础设施，确保前两域能够安全通信。


## 3DS的版本
Oceanpayment支持 3DS 1.0和 3DS 2.0/2.1/2.2/2.3（统称3DS2），并强烈推荐使用更新的 3DS2版本，因为它提供了更好的安全性和更优化的用户体验。
- 支持无跳转（应用内）、嵌入式认证流程，用户体验更流畅。
- 可传递大量交易数据（如交易类型、商户名称、送货地址、设备信息等）给发卡行，支持风险基认证（RBA）。
- 为移动应用（APP）和智能设备提供了良好支持。
- 支持更广泛的验证方法，包括生物识别（指纹、面部识别）、Push通知、行为分析等。
- 更强的安全性、更低的摩擦、更高的转化率、更好的移动体验。

## 3DS认证流程
Oceanpayment支持两种 3D验证触发模式：
- 由Oceanpayment自动判断，自动跳转3D页面，
- 由商户自行控制是否走3D，并将3D认证结果返回给Oceanpayment。

### Oceanpayment控制3D验证
3DS验证流程涉及多个参与方，具体步骤说明如下：
1. 消费者在商户网站下单，商户通过Oceanpayment发起[交易请求](/docs/payment/introduction)；
2. Oceanpayment返回需要3DS认证的交易，自动重定向（或由商户重定向）到发卡银行的3DS验证页面；
3. 用户在发卡银行的3DS验证页面输入密码、动态验证码或使用生物识别（如指纹、面部识别）进行身份验证；
4. Oceanpayment将验证结果返回商户，商户通过支付返回或[异步通知](/docs/webhook/payments/checkout)接收交易类型为3D交易，展示支付结果给用户。

### 商户控制3D验证
1. 商户自行决定是否对该笔交易进行3D验证；
2. 若需要，商户调用自身3DS Server发起验证；
3. 持卡人完成3D验证后，商户获得3D校验结果字段：
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|
| --- | --- | --- | --- | --- |
|`card_eci`|string|1-50|是|MPI返回的ECI值|
|`card_cavv`|string|1-50|是|MPI返回的CAVV值|
|`card_xid`|string|1-50|是|MPI返回的XID值|
|`DSTransactionId`|string|1-50|是|MPI返回的DSTransactionId值|
|`mpiVersion`|string|1-50|是|MPI返回的ThreeDSVersion值|
</div>
	</TabItem>  
</Tabs>
4. 商户将以上3D认证结果随[支付请求](/docs/payment/server-to-server/integration)一起提交给Oceanpayment；
5. Oceanpayment根据商户传入的3D数据执行支付处理。





