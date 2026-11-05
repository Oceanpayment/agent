---
sidebar_position: 1
sidebar_label: 介绍
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 概述
Oceanpayment接口使用了SHA256算法进行签名和验签，这是为了确保请求和响应数据传输的完整性、真实性，防止数据在传输过程中被篡改。这意味着需要使用SHA256算法生成请求参数的哈希摘要，接收方则用返回对应的签名验证哈希值是否一致。
:::warning[注意]
- 关于**支付**和**订单管理**每个集成方式的签名生成和验签的结构都是不同的。
- 密钥管理：[`secureCode`](/docs/compliance-and-security/sign/introduction#哈希签名示例)（用于参加生成和验证签名的字段）必须妥善保管，绝不能泄露或存放在客户端等不安全环境，请确保从Oceanpayment官方渠道获取。
:::

## 签名生成步骤（商户端）
当商户向Oceanpayment网关发送请求时，需要按以下步骤生成签名`signValue`：
1. 参数准备：获取所有需要加密的非空请求参数，同时需要注意[特殊字符](/docs/compliance-and-security/sign/introduction#特殊字符处理)的影响；
2. 根据[交易](/docs/compliance-and-security/sign/payment)和[订单管理](/docs/compliance-and-security/sign/orders)拼接签名字符串；
3. 计算signValue的SHA256哈希值，传给Oceanpayment网关。

## 签名验证步骤（商户端）
一、当商户接收到Oceanpayment的结果通知或主动查询获取响应时，需要验证这些数据的真实性以确保它们确实来自Oceanpayment，且未被篡改。
1. 接收Oceanpayment返回过来的所有参数或解析；  
2. 将返回得到的哈希值signValue与你自己在计算出的哈希值进行比对；
3. 如果两者完全一致，则验签成功，证明数据完整且来自Oceanpayment；
4. 如果不一致，则说明数据可能在传输过程中被篡改或来源不可信，应视为无效请求。  

二、签名验证在以下三个环节中会出现：
1. **签名验证(实时返回)**：  
 - 通常是后端用来接收`pay_url`或`MOTO_url`的过程进行验签，不是最终支付结果（需要重定向打开支付或3D校验URL页面）；
 - 也可以是直接返回支付结果，后端接收XML支付结果进行验签；
 - 订单管理功能返回结果也需要进行验签。
2. **签名验证(同步返回backUrl)**：
 - 接收同步返回数据需要依赖交易的传参`backUrl`，请使用表单方式接收支付结果进行验签；
 - 此签名结构在所有集成方案中是固定的。
3. **异步通知(异步返回nocticeUrl)**：
 - 异步通知的验签请查看[Webhook通知](/docs/webhook/payments/introduction)功能。


## 特殊字符处理
为了验证数据的一致性，所有参加签名的字段必须满足以下所有要求，否则会导致双方生成的签名不一致。
- 过滤字符首尾空格，并且转义双引号，小于号，大于号，单引号；
- 必须严格按照Oceanpayment字段排序生成签名。

```php
//PHP
function OceanHtmlSpecialChars($parameter){
  //首尾去空格
  $parameter = trim($parameter); 
  //符号替换为空
  $parameter = str_replace(array("<",">","'","\""),array(" "," "," "," "),$parameter); 
  return $parameter;
}
```

## 哈希签名示例

<Tabs> 
  <TabItem value="签名生成" label="签名生成" default>
```php
//PHP
$signValue = hash("sha256",$account.$terminal.$backUrl.$order_number.$order_currency.$order_amount.$billing_firstName.$billing_lastName.$billing_email.$secureCode);  
```
  </TabItem> 

  <TabItem value="签名验证" label="签名验证">
```php
//PHP
$back_signValue = $_REQUEST['signValue'];
$local_signValue = hash("sha256",$account.$terminal.$order_number.$order_currency.$order_amount.$order_notes.$card_number.$payment_id.$payment_authType.$payment_status.$payment_details.$payment_risk.$secureCode);
if (strtolower($local_signValue) == strtolower($back_signValue)){
  //处理支付结果
}else{
  //签名验证失败
}
```
  </TabItem> 
</Tabs>
