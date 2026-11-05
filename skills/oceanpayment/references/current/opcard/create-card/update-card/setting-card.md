---
sidebar_position: 1
sidebar_label: 卡片设置信息
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
管理您当前卡片的交易限制。

## 查询卡片交易限制

### 在此之前
在[账户卡类型列表](/docs/opcard/create-card/update-card/card-list)中获取您需要修改的卡片`program_value`。

### 查询卡设置信息
在`program_value`关联下，查询您的交易限制，其中交易限制的key为`trade_risk_name`。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X GET /config/{program_value}/get?trade_risk_name={trade_risk_name}&account_id={account_id}
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
```
	</TabItem>  
</Tabs>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`program_value`|string|1-10|是|[账户卡类型](/opcard/create-card/update-card/card-list)|2|
|`trade_risk_name`|string|1-100|是|[卡片交易限制](/docs/opcard/create-card/add-card/#开始创建卡片)|purchase_1d|
|`account_id`|string|0-20|否|指定[商户账户唯一标识号](/docs/opcard/manage-card/account)，优先级高于`program_value`|1016X10007530070724|
</div>
<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "571cec5768ae45c4bc6a725956c01fe8",
    "data": {
        "trade_risk_name": "purchase_1d",
        "trade_risk_value": "10"
    }
}
```
	</TabItem>  
</Tabs>


## 更新卡片交易限制

### 在此之前
- 在创建卡片中获取您需要修改的卡片[`card_id`](/docs/opcard/create-card/add-card#卡片创建成功)；
- 了解交易限制[`trade_risk_name`](/docs/opcard/create-card/add-card#设置您的卡交易限制) 和 [`trade_risk_value`](/docs/opcard/create-card/add-card#设置您的卡交易限制)。

### 更新卡设置信息
在`card_id`关联下，更新您的交易限制，其中交易限制的key为`trade_risk_name`，交易限制value值为`trade_risk_value`。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X POST /{card_id}/update
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
-d '{
      "trade_risk_name": "purchase_count_1d",
      "trade_risk_value": "100"
    }'
```
	</TabItem>  
</Tabs>

<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "8c9f1789793244a687a5daad4318bf1e",
    "data": {
        "card_id": 1937109027420692480
    }
}
```
	</TabItem>  
</Tabs>

