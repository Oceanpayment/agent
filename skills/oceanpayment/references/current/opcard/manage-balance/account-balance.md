---
sidebar_position: 1
sidebar_label: 账户余额
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
获取账户的当前余额列表。

## 账户余额

<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X GET /card-api/v1/balance/list
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
    "trace_id": "b1d4878a2c984e0d8b38b9c7a99d0efb",
    "data": [
        {
            "program_value": 01,
            "program_cn_name": "美金悦享卡-费用CS",
            "program_en_name": "USD Multi Card--Fee",
            "currency": "USD",
            "available_amount": 158.00,
            "query_time": "2025-06-10T14:58:55+08:00"
        },
        {
            "program_value": 02,
            "program_cn_name": "美金悦享卡-费用CS",
            "program_en_name": "USD Multi Card--Fee",
            "currency": "HKD",
            "available_amount": 2.00,
            "query_time": "2025-06-10T14:58:55+08:00"
        },
    ]
}
```
	</TabItem>  
</Tabs>


| 字段|描述|
| --- | --- |
|program_value|[账户卡类型](/docs/opcard/create-card/update-card/card-list)|
|program_cn_name|program中文名称|
|program_en_name|program英文名称|
|currency|币种|
|available_amount|可用余额|
|query_time|查询时间|
