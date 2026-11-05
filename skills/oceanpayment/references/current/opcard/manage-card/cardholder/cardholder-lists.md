---
sidebar_position: 1
sidebar_label: 持卡人管理
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
管理您的账户持卡人信息。


## 查询持卡人列表
查询账户所有持卡人列表。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X POST /card-api/v1/cardholders
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
-d '{     
      "last_name": "test",
      "first_name": "test",
      "email": "test@gmail.com",
      "phone": "13800000000",
      "phone_area_code": "+86",
      "default_cardholder": 1
   }'
```
	</TabItem>  
</Tabs>

<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "5596d8aa571e4c1eb57af92e9ee6cb1e",
    "data": {
        "data": [
            {
                "card_holder_id": 1925820493991116800,
                "first_name": "test",
                "last_name": "test",
                "phone_area_code": "+86",
                "phone": "13800000000",
                "email": "dev@oceanpayment.com.cn",
                "default_cardholder": 0
            },
            {
                "card_holder_id": 1925080953255141376,
                "first_name": "test",
                "last_name": "test",
                "phone_area_code": "+86",
                "phone": "13800000001",
                "email": "test@gmail.com",
                "default_cardholder": 1
            }
        ],
        "next_cursor": "1921822011221946368",
        "has_more": true
    }
}
```
	</TabItem>  
</Tabs>

## 查询和更新持卡人详情
通过[创建持卡人](/docs/opcard/manage-card/cardholder/cardholder-create)获取`card_holder_id`。
<Tabs> 
  <TabItem value="查询" label="查询" default>
```php
cURL -X GET /card-api/v1/cardholders/{card_holder_id}
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
```
  </TabItem>  
  
  <TabItem value="更新" label="更新">
```php
cURL -X POST /card-api/v1/cardholders/{card_holder_id}/update
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
-d '{
      "phone": "13800000002",
      "email": "test@gmail.com",
      "phone_area_code": "+86",
      "default_cardholder": 1
   }'
```
  </TabItem> 	
</Tabs>
