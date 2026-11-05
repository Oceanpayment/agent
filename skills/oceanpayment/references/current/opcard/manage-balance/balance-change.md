---
sidebar_position: 2
sidebar_label: 余额变动记录
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
查询发卡账户余额的变动记录 。

## 余额变动记录

<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X POST /card-api/v1/balance/change/records
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
-d '{
      "cursor": "",
      "bill_currency_list": [
        "USD"
      ],
      "fund_type_list": [
        "20"
      ],
      "from_changed_at": "2025-06-06T10:45:40+08:00",
      "program_value_list": [
        "6"
      ],
      "limit": 10,
      "to_changed_at": "2025-06-29T10:45:40+08:00",
      "ascending": false,
      "moving_account_currency_list": [
        "USD"
      ]
   }'
```
  </TabItem>	
</Tabs>

|字段|描述|值|
| --- | --- | --- |
|limit|查询条数|
|from_changed_at|动账开始时间|
|to_changed_at|动账结束时间|
|bill_currency_list|账单币种|ARRAY|
|fund_type_list|资金类型|<ul><li>`20` : 创建发卡额度</li><li>`21` : 月账单</li><li>`22` : 清算月账单</li><li>`23` : 释放额度</li><li>`24` : 换汇卖出</li><li>`25` : 换汇买入</li><li> • `28` : 发卡提额</li></ul>|
|program_value_list|[账户卡类型列表](/docs/opcard/create-card/update-card/card-list)|ARRAY|
|moving_account_currency_list|动账币种|ARRAY|


<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "686bc53dbdbc4d05ab616632cd63c0ef",
    "data": {
        "data": [
            {
                "program_value": 6,
                "moving_account_Time": "2025-06-10T15:33:27+08:00",
                "moving_account_type": 1,
                "fund_type": 20,
                "batch_no": "102902",
                "bill_amount": 100,
                "bill_currency": "USD",
                "moving_account_amount": 100,
                "moving_account_currency": "USD",
                "card_limit_currency": "USD",
                "card_limit_amount": 12555.4,
                "card_exchange_rate": 1.0000000000,
                "card_exchange_time": null
            },
            {
                "program_value": 6,
                "moving_account_Time": "2025-06-10T14:50:49+08:00",
                "moving_account_type": 1,
                "fund_type": 20,
                "batch_no": "102901",
                "bill_amount": 100,
                "bill_currency": "USD",
                "moving_account_amount": 100,
                "moving_account_currency": "USD",
                "card_limit_currency": "USD",
                "card_limit_amount": 12455.4,
                "card_exchange_rate": 1.0000000000,
                "card_exchange_time": null
            },
        "next_cursor": "3620",
        "has_more": true
    }
}
```
	</TabItem>  
</Tabs>

|字段|描述|
| --- | --- |
|has_more|是否有下一页|
|program_value_list|Program value|
|moving_account_Time|动账时间|
|moving_account_type|动账类型<ul><li>`1` : 转入</li><li>`2` : 转出</li></ul>|
|fund_type|资金类型|
|batch_no|批次号|
|bill_amount|账单金额|
|bill_currency|账单币种|
|moving_account_amount|动账金额|
|moving_account_currency|动账币种|
|card_limit_currency|卡额度币种|
|card_limit_amount|卡额度金额|
|card_exchange_rate|卡转换汇率|
|card_exchange_time|卡转换时间|
