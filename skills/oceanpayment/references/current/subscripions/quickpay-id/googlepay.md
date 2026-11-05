---
sidebar_position: 3
sidebar_label: Google Pay
---
#
import { FaCode, FaCloudDownloadAlt, FaServer } from 'react-icons/fa';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## 概述
Google Pay集成绑卡方式。

## 工作原理
1. 成为Google Pay官方开发者，获取[Google Pay Payment Token](/docs/payment/methods/googlepay#服务器对服务器)。
2. 将Google Pay Payment Token传给Oceanpayment，[提交必要参数](/docs/payment/parameter)创建QuickPay ID：
```php
cURL -X POST 'https://test-secure.oceanpayment.com/gateway/directservice/create' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'account=995149' \
-d 'terminal=99514901' \
-d 'signValue=6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b' \
-d 'customer_id=customer_id20250507174225' \
-d 'methods=GooglePay' \
-d 'pay_accountNumber='{"signature":"MEUCIQDk5y5D8zv0W8O...yQIgY5bH6d7fU3a2FQ==","protocolVersion":"ECv2","signedMessage":""}'\
-d 'order_notes=' \
-d 'billing_firstName=Vergil' \
-d 'billing_lastName=Pan' \
-d 'billing_email=test@gmail.com' \
-d 'billing_phone=13800138000' \
-d 'billing_country=US' \
-d 'billing_state=AL' \
-d 'billing_city=Washington D.C.' \
-d 'billing_address=705A big Road' \
-d 'billing_zip=529012' \
```

## 处理返回
商户保存返回的卡信息`quickpay_id`，格式为UUID形式，用来发起[快捷/订阅支付](/docs/subscripions/directpay)。
```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <account>995149</account>
  <terminal>99514901</terminal>
  <signValue>79e63f6995a84934da921bab8a2ba8cb492971a36130a76d58ea18355af7f578</signValue>
  <customer_id>customer_id20240507174225</customer_id>
  <order_notes></order_notes>
  <card_number>411111***1111</card_number>
  <card_type>VISA</card_type>
  <card_country>PL</card_country>
  <quickpay_id>37ca4cff-4e99-4cd6-9869-8d6c7ad259d7</quickpay_id>
  <quickpay_status>1</quickpay_status>
  <quickpay_details>1:Success</quickpay_details>
</response>
```

## 签名
查看详细的[签名和验签](/docs/compliance-and-security/sign/payment)功能。

## API参考
👉即刻探索我们的<a href="../../subscripions-api/apple-pay-google-pay"><button className="api-button"><FaCode className="w-3 h-3" /> REST API</button></a>。



