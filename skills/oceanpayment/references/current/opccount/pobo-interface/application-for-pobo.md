---
sidebar_position: 1
sidebar_label: 代付申请
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
用户通过代付申请接口请求发起代付/代扣，需要上传审核要求的资料，提交代付/代扣请求后需要等待审核。

### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /opc/v1/fund-payment/apply-fund-payment
'Content-Type:application/json',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>  
</Tabs>

### 查询明细
查看完整的[请求参数](/docs/opccount/parameter#代付申请)。
代付账户`fundPaymentAccountKey`和代扣账户`withholdingAccountKey`二选一。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d '{
  "notesOnBank": null,
  "applicationType": 1,
  "paymentAccountId": 3581,
  "fundPaymentAccountKey": "1899997771830657024",
  "accountType": 0,
  "type": 1,
  "paymentAmount": 12,
  "transactionType": 1,
  "agreementId": 537236,
  "payerName": 0,
  "paymentCurrency": "AUD",
  "autoDebit": 2,
  "paymentDesc": "12"
}'
```
  </TabItem>  
</Tabs>


### 查询结果
查看完整的[返回参数](/docs/opccount/parameter#代付申请)。
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
{
    "msg": "SUCCESS",
    "code": "000",
    "data": {
        "batchNo": 109336,
        "extraData": {
            "orderNumber": "1747644494972",
            "orderAmount": "0.01",
            "orderCurrency": "HKD",
            "orderNotes": "订单备注"
        }
    }
}
```
  </TabItem>  
</Tabs>