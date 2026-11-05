---
sidebar_position: 1
sidebar_label: 提额
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
发卡账户资金提现。

## 提额


<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X POST /card-api/v1/payouts/create
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
-d '{
      "amount": 0.1,
      "currency": "USD",
      "program_value": 15,
      "account_id": "1016X10034796020144"
   }'
```
  </TabItem> 		
</Tabs>

| 字段|描述|
| --- | --- |
|amount|金额|
|currency|币种|
|program_value|[账户卡类型](/docs/opcard/create-card/update-card/card-list)|
|account_id|子账户ID（[创建卡](/docs/opcard/create-card/add-card/#卡片创建成功)后生成的子账户标识）|

<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "9028b56cbc3d4512a3a7bc572338b251",
    "data": {
        "batch_no": "103955",
        "account_id": "1016X10034767280883"
    }
}
```
	</TabItem>  
</Tabs>

| 字段|描述|
| --- | --- |
|batch_no|使用批次号[查询提额记录](/docs/opcard/manage-funds/create-payouts/credit-list)|