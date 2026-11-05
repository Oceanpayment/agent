---
sidebar_position: 3
sidebar_label: Apple Pay
---
#
import { FaCode, FaCloudDownloadAlt, FaServer } from 'react-icons/fa';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## 概述
Apple Pay集成绑卡方式。

## 工作原理
1. 成为Apple Pay官方开发者，获取[Apple Pay Payment Token](/docs/payment/methods/applepay#服务器对服务器)。
2. 将Apple Pay Payment Token传给Oceanpayment，[提交必要参数](/docs/payment/parameter)创建QuickPay ID：
```php
cURL -X POST 'https://test-secure.oceanpayment.com/gateway/directservice/create' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'account=995149' \
-d 'terminal=99514901' \
-d 'signValue=6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b' \
-d 'customer_id=customer_id20250507174225' \
-d 'methods=ApplePay' \
-d 'pay_accountNumber='{"paymentData":{"data":"P/Qqc9AoboM0V9smWAWuYJO2hA5eOEQMkeuLAP/n6UkOobJHMGlDYNYRJOVTZKjQXvkjBuppGVppuM5kOYBrjJx3eKqhecZrNykGlooocdHKkp6BdRsjNH7rDOwht9IurY0dcP/ZIXycjujtH+l0c+Ez/+bEnvKMuU/0P83pz8OL5NEiXt0OJAux7M1ek1hw6+9cUZAdH6OW0Jlpxc08cZFqIdm4ETmaPoAm8Vf1+PDUb7qYCvlRCr0S09oEkX0MlrtgNBcbiIIAQijM9c16uwg/jL6HT7DXcVhOQEx7PLbshl4mnWE8m3ezpUgzB5q/2lOcVqE0W2VggrW/P3xdabnIsGUPc9trqDn5lVM02XUBfA3AHvc49DJKoNxn2X4m0wlha95CUayQImZxRQ==","signature":"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","header":{"publicKeyHash":"LfT8NhajbyOZdSZ5fWF9tJjQk9ZUoy+CnI5PZsD/e7M=","ephemeralPublicKey":"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAExekguuW80+zLuywKufjWwQpasFSw11HrGbjBqZx7PXI0wpY2JOWRZ26OMSUvyBJKP43gqJZny7+dw1xDxq2bBw==","transactionId":"8d31b7aef561befa41d5a881918983a6fbecb0f399a490ef15bc1dc50fe2c890"},"version":"EC_v1"},"paymentMethod":{"displayName":"MasterCard 0049","network":"MasterCard","type":"credit"},"transactionIdentifier":"8d31b7aef561befa41d5a881918983a6fbecb0f399a490ef15bc1dc50fe2c890"}'\
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




