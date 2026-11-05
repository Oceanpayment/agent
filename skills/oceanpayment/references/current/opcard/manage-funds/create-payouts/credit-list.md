---
sidebar_position: 1
sidebar_label: 提额记录
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
查询发卡提现记录。

## 提额记录
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X POST /card-api/v1/payouts/list
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
-d '{
      "cursor": "",
      "batch_no": "102149",
      "program_value": 5,
      "limit": 10,
      "to_created_at": "",
      "from_created_at": "",
      "currency": "",
      "ascending": false
  }'
```
  </TabItem>	
</Tabs>

| 字段|描述|
| --- | --- |
|limit|查询条数|
|batch_no|批次号|
|program_value|[Program value](/docs/opcard/create-card/update-card/card-list)|
|from_created_at|开始时间|
|to_created_at|结束时间|
|currency|币种|
|ascending|是否升序 <br/> • `true` : 是 <br/> • `false` : 否|

<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "cdd579eb955b4970b71f89c7a4cf56b9",
    "data": {
        "data": [
            {
                "batch_no": "102149",
                "program_value": 5,
                "program_cn_name": "美金悦享卡",
                "program_en_name": "USD Multi Card-XA",
                "moving_account_time": "2025-06-05T09:34:51+08:00",
                "currency": "USD",
                "amount": 0.1,
                "issue_card_amount": 2998.9
            }
        ],
        "next_cursor": null,
        "has_more": false
    }
}
```
	</TabItem>  
</Tabs>

| 字段|描述|
| --- | --- |
|batch_no|批次号|
|program_value|Program value|
|program_cn_name|program中文名称|
|program_en_name|program英文名称|
|moving_account_time|动账时间|
|currency|币种|
|amount|金额|
|issue_card_amount|发卡额度|
