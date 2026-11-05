---
sidebar_position: 1
sidebar_label: 提现下单申请
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
用户可以通过提现询价返回的参考汇率自行计算换算后的提现金额，如果符合要求。可以通过提现下单申请接口，发送提现下单请求。接口会返回状态、批次号。

### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /opc/v1/withdrawal/apply
'Content-Type:application/json',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>  
</Tabs>

### 查询明细
查看完整的[请求参数](/docs/opccount/parameter#提现下单申请)。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d '{
      "withdrawalAccountKey": "1759747048153808896",
      "billCurrency": "USD",
      "billAmount": "10",
      "transactionFeesBearingMethods": "BEN",
   }'
```
  </TabItem>  
</Tabs>


### 查询结果
- 您可以使用返回的参数提现账户唯一值：`withdrawalAccountKey`[管理您的提现账户](/docs/opccount/withdrawal-account/manage)。
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
{
    "msg": "SUCCESS",
    "code": "000",
    "data": {
        "batchNo": 109645,
        "amount": 10,
        "billCurrency": "USD",
        "status": 1
    }
}
```
  </TabItem>  
</Tabs>
- 查看完整的[返回参数](/docs/opccount/parameter#提现下单申请)。