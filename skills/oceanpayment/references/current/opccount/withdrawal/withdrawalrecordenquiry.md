---
sidebar_position: 1
sidebar_label: 提现记录查询
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
通过提现记录查询接口可查询该账户下指定时间范围内的提现记录，发送请求时间类型、开始结束时间等。接口会返回提现记录详情的信息。

### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /opc/v1/withdrawal/find-withdrawal-page
'Content-Type:application/json',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>  
</Tabs>

### 查询明细
查看完整的[请求参数](/docs/opccount/parameter#提现记录查询)。
1. 开始时间`startDate`和结束时间`endDate`间隔不能超过一年；格式为：yyyy-MM-dd HH:mm:ss
2. `withdrawalCurrency`支持币种：AUD、HKD、CHF、SGD、JPY、EUR、GBP、USD、CAD、NZD、ZAR、CNY。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d '{
      "pageNum": "1",
      "pageSize": "10",
      "startTime": "2025-05-01 12:00:00",
      "endTime": "2025-10-01 12:00:00",
      "status": "1",
      "withdrawalCurrency": "[USD,CNY]",
   }'
```
  </TabItem>  
</Tabs>


### 查询结果
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
{
    "msg": "SUCCESS",
    "code": "000",
    "data": {
        "total": 2,
        "current": 1,
        "pages": 1,
        "withdrawalListVOList": [
            {
                "bankAccount": "88888",
                "rateTime": "2025-01-22 17:07:26",
                "withdrawalFeeDetailList": [
                    
                ],
                "bankName": "Bank Name",
                "withdrawalStatus": 2,
                "withdrawalStatusStr": "失败",
                "withdrawalCurrency": "USD",
                "chargeActualFee": "0.00",
                "billAmount": "58,799.95",
                "createTime": "2025-01-22 17:07:26",
                "withdrawalAmount": "58,799.95",
                "rate": "1",
                "billCurrency": "USD",
                "id": "108077",
                "withdrawalFeeDetailVOList": [
                    
                ],
                "returnAmount": "58,799.95"
            },
            {
                "bankAccount": "88888",
                "rateTime": "2025-01-21 15:01:01",
                "withdrawalFeeDetailList": [
                    
                ],
                "bankName": "Bank Name",
                "withdrawalStatus": 2,
                "withdrawalStatusStr": "失败",
                "withdrawalCurrency": "USD",
                "chargeActualFee": "0.00",
                "billAmount": "58,799.95",
                "createTime": "2025-01-21 15:01:02",
                "withdrawalAmount": "58,799.95",
                "rate": "1",
                "billCurrency": "USD",
                "id": "108069",
                "withdrawalFeeDetailVOList": [
                    
                ],
                "returnAmount": "58,799.95"
            }
        ],
        "pageSize": 2,
        "rowList": [
            
        ]
    }
}
```
  </TabItem>  
</Tabs>
- 查看完整的[返回参数](/docs/opccount/parameter#提现记录查询)。