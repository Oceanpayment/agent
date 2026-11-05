---
sidebar_position: 1
sidebar_label: 账户卡列表
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
查询当前帐户下所有卡的列表。

## 查询账户卡列表
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X POST /v1/cards
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
-d '{
      "card_status_list": [],
      "card_holder_id_list": [],
      "program_value_list": [],
   }'
```
	</TabItem>  
</Tabs>

| 字段|描述|值|
| --- | --- | --- |
|card_status_list|[卡片状态](/docs/opcard/create-card/card-status)|`ARRAY`|
|card_holder_id_list|[持卡人id](/docs/opcard/create-card/add-card#卡片创建成功)|`ARRAY`|
|program_value_list|[账户持卡人列表](/docs/opcard/create-card/add-card/query-card-info#卡片交易限制)|`ARRAY`|
|card_number|卡号||
|card_no|卡片编号||
|from_created_at|开始时间||
|to_created_at|结束时间||


<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "cd60b294f3f24be2b8e894a511c4b73d",
    "data": {
        "data": [
            {
                "card_id": 1087,
                "card_number": "527375 **** 2625",
                "card_no": "2716020776676196990",
                "card_name": "test",                
                "card_status": "Deactivated",
                "create_time": "2024-10-22T14:51:31+08:00",
                "card_remark": "123",
                "card_validity_time": "2025-10-01T00:00:00+08:00",
                "program_value": 6,
                "program_cn_name": "美金单币卡",
                "program_en_name": "USD Single Card-XA",
                "holder_name": ""
            },
        ],
        "next_cursor": "1096",
        "has_more": true
    }
}
```
	</TabItem>  
</Tabs>

