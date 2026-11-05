---
sidebar_position: 2
sidebar_label: 询价
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
通过提现询价接口，发送请求目标币种、原始币种、询价类型提现，接口会返回发送请求币种对的参考汇率和汇率时间。


## 新增提现账户
### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /opc/v1/withdrawal/inquiry
'Content-Type:multipart/form-data',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>
</Tabs>

### 查询明细
查看完整的[请求参数](/docs/opccount/parameter#询价)。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d '{
      "withdrawalAccountKey": "1742474921142910976",
      "billCurrency": "USD",
      "billAmount": 100,
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
        "tranCurrency": "USD",
        "merchantRate": 1,
        "feeCurrency": "USD",
        "tranAmount": 100,
        "expectedAmount": 95.88,
        "actualFee": 4.12,
        "baseAmount": 100,
        "baseCurrency": "USD",
        "withdrawalDetail": {
            "expectAmount": 95.88,
            "expectCurrency": "USD",
            "fee": 4.12,
            "feeCurrency": "USD",
            "withdrawalCostList": [
                {
                    "feeAmount": 4.12,
                    "costNameEn": "waibi Fee USD",
                    "costName": "提现外币-USD",
                    "feeCurrency": "USD",
                    "currency": "USD"
                }
            ]
        }
    }
}
```
  </TabItem>  
</Tabs>
- 查看完整的[返回参数](/docs/opccount/parameter#询价)。
