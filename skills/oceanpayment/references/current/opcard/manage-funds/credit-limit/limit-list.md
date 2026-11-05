---
sidebar_position: 1
sidebar_label: 额度管理
---

#

## 概述
查询实时可用的发卡额度，包含本月未清算的发卡额度 。

## 额度管理
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs> 
  <TabItem value="查询发卡额度" label="查询发卡额度" default>
```php
cURL -X GET /card-api/v1/load/card/limits
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
```
  </TabItem>
  <TabItem value="查询钱包" label="查询钱包">
```php
cURL -X GET /card-api/v1/payouts/{program_value}/wallets
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
```
  </TabItem>	
</Tabs>


<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "32bad897db8d45dd846e2929d50a3b23",
    "data": [
        {
            "program_value": 01,
            "card_limit_list": [
                {
                    "card_limit_currency": "HKD",
                    "card_limit_amount": 2.00
                },
                {
                    "card_limit_currency": "USD",
                    "card_limit_amount": 201.00
                }
            ]
        }
    ]
}
```
	</TabItem>  
</Tabs>
| 字段|描述|
| --- | --- |
|card_limit_list|卡额度列表 ARRAY|
|card_limit_currency|卡额度币种|
|card_limit_amount|卡额度金额|


