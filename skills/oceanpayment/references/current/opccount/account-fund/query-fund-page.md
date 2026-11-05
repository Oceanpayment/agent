---
sidebar_position: 1
sidebar_label: 资金明细查询
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 

## 概述
资金明细查询接口用来查询OPCCOUNT所有发生的余额入账明细、出账明细。用来追溯每笔资金变动发生的时间、币种、金额、类型等详细信息，用户通过此接口查询资金变动记录进行对账。

## 资金明细查询
### 请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X GET /opc/v1/account-fund/query-fund-page
'Content-Type:application/json',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>  
</Tabs>

### 查询明细
查看完整的[请求参数](/docs/opccount/parameter#资金明细查询)。
1. 开始时间`startDate`和结束时间`endDate`间隔不能超过一年；格式为：yyyy-MM-dd HH:mm:ss
2. `billCurrency`支持币种：AUD、HKD、CHF、SGD、JPY、EUR、GBP、USD、CAD、NZD、ZAR、CNY。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d '{
      "pageNum": "1",
      "pageSize": "10",
      "startDate": "2025-05-01 12:00:00",
      "endDate": "2025-10-01 12:00:00",
      "billCurrency": "[USD,CNY]",
   }'
```
	</TabItem>  
</Tabs>


### 查询结果
查看完整的[返回参数](/docs/opccount/parameter#资金明细查询)。
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
{
    "msg": "SUCCESS",
    "code": "000",
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "total": 1,
        "pages": 1,
        "list": [
            {
                "operateTime": "2025-05-21 16:52:01",
                "movingAccountType": 2,
                "fundType": 5,
                "movingAccountCurrency": "USD",
                "movingAccountAmount": 3.00,
                "billCurrency": "USD",
                "withdrawalAmount": 62082.60,
                "congealAmount": 114.00,
                "amount": 62196.60,
                "applicationType": null,
                "senderPartyName": null,
                "opccountNo": "995149"
            }
        ]
    }
}
```
	</TabItem>  
</Tabs>




