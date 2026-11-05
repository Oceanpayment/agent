---
sidebar_position: 6
sidebar_label: Klarna
---
#
import { FaCode, FaCloudDownloadAlt, FaServer } from 'react-icons/fa';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## 概述
用户仅需在首次订阅时完成Klarna授权，后续周期性费用将自动从用户账户中扣除，无需重复跳转或二次确认。

## 工作原理
1. 设置请求头组：
```json
'Content-Type:application/json',
'account:995149',
'terminal:99514901',
'secureCode:12345678'
```
2. 调用Oceanpayment创建QuickPay ID，提交[必要参数](/docs/subscripions/parameter)，
```php
cURL -X POST 'https://checkout-s.oceanpayment.com/pg/quickPay/create' \
-d 
{
    "order": {
        "currency": "USD",
        "amount": "0.1",
        "methods": "Klarna",
        "redirectUrl": "http://www.abc.com/result.php",
        "notifyUrl": "http://www.abc.com/notice.php",
        "remark": "",
        "ip": "127.0.0.1",
        "description": ""
    },
    "merchant": {
        "referenceId": "test20250116094234"
    },
    "billing": {
        "firstname": "firstName",
        "lastname": "lastName",
        "email": "test@op.com",
        "phone": "13800138000",
        "country": "US",
        "state": "state",
        "city": "city",
        "address": "address",
        "zip": "518000"
    },
    "customer": {
        "id": "test20250116094234"
    },
    "device": {
        "environment": "",
        "osType": ""
    },
    "subscription"{
    	"name": "",
    	"interval": "1",
    	"intervalCount": "1",  
    },   
    "customer_info": "{}",
    "voucher_info": "{}" 
}
```

## 处理返回
1. `url`：跳转url地址，商户需要浏览器进行重定向，用户通过前端完成授权验证。
- url不为空时：则表示需要进行页面重定向，通过前端完成授权验证，验证后会返回创建QuickPay ID的结果(返回依赖于`redirectUrl`，默认使用POST接收)；
- url为空时：返回数据即为创建QuickPay ID的结果。 
<Tabs> 
  <TabItem value="url不为空" label="url不为空" default>
```json
{
    "msg": "SUCCESS",
    "code": "000",
    "data": {
        "account": "995149",
        "terminal": "99514901",
        "order": {
            "methods": "Klarna",
            "referenceId": "250117093828061010584",
            "remark": "",
            "description": ""
        },
        "url": "https://checkout.oceanpayment.com/bank/quickPay/create?opRefId=250117093828061010584",
        "merchant": {
            "referenceId": "test20250117093730"
        }
    }
}
```
- 商户将用户重定向到`url`地址进行创建 ：
```php
HTTP/1.2 301 Moved Permanently
Location: {url}
``` 

- 用`redirectUrl`参数来接收创建QuickPay ID的结果：
```php
Array
(
    [code]=> 000
    [message] => SUCCESS
    [account] => 995290
    [terminal] => 99529001
    [signature] => F03C3D5154FC2672C5EC05BAD3DDDF0892617CC1517517DCD37E6499AA896D73
    [card_number] => 
    [card_type] => USD
    [order_amount] => 0.01
    [order_notes] => 
    [card_number] => 
    [card_type] => null
    [card_country] => US
    [order_currency] => USD
    [order_amount] => 0.01
    [order_methods] => 
    [order_reference_id] => 250214134817000529042
    [order_remark] =>
    [merchant_reference_id] => 12345678
    [quickpay_id] => 6cdf6ebf-86c9-41ae-aee5-623ce3d48d22
    [quickpay_status] => 1
)
```

  </TabItem>
  <TabItem value="url为空" label="url为空">
```json 
{
    "msg": "SUCCESS",
    "code": "000",
    "data": {
        "account": "995290",
        "terminal": "99529001",
        "card": {},
        "order": {
            "currency": "USD",
            "amount": "0.1",
            "methods": "Klarna",
            "referenceId": "250117093737917010531",
            "remark": "",
            "description": ""
        },
        "quickPay": {
            "id": "6cdf6ebf-86c9-41ae-aee5-623ce3d48d22",
            "status": 1
        },
        "merchant": {
            "referenceId": "test20250117093730"
        }
    }
}
```

  </TabItem>
</Tabs>


2. 查看QuickPay ID的[创建结果](/docs/subscripions/parameter#响应)。
3. 商户保存返回的卡信息`quickpay_id`，格式为UUID形式，用来发起[快捷/订阅支付](/docs/subscripions/directpay)。


## 签名
查看详细的[签名和验签](/docs/compliance-and-security/sign/payment)功能。

## API参考
👉即刻探索我们的<a href="../../subscripions-api/klarna"><button className="api-button"><FaCode className="w-3 h-3" /> REST API</button></a>。
