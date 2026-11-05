---
sidebar_position: 3
sidebar_label: 查询卡详细信息
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
查看卡片详细信息，包括卡产品名称、卡片类型、脱敏卡号、持卡人、卡交易限制、余额等信息。


通过添加卡片返回的 [`card_id`](/docs/opcard/create-card/add-card#卡片创建成功)，查询卡片详细信息。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X GET /cards/{card_id}/detail
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
```
	</TabItem>  
</Tabs>

## 卡产品名称
卡产品名称（Card Product Name），即卡片所属的卡产品、卡段或发卡方案，用于区分不同的卡类型或发卡计划。
<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
"data": {
  "product_name": "***26452香港Mastercard"
}
```
	</TabItem>  
</Tabs>

## 卡片编号
返回当前账户后台的卡片编号字段`card_no`。
<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
"data": {
  "card_no": 2716020776676196990,
}
```
	</TabItem>  
</Tabs>


## 卡片信息
获取卡号(脱敏) `card_number`和有效期 `card_validity_time`。
<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
"data": {
  "card_id": 1954802358738284544,
  "card_number": "527375 **** 4392",
  "card_validity_time": "2027-08-01T00:00:00+08:00"
}
```
	</TabItem>  
</Tabs>

## 账户卡类型
获取当前的[账户卡类型](/docs/opcard/create-card/add-card#获取账户卡类型) `program_value`。
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
"data": {
  "program_value": 15,
  "program_cn_name": "美金悦享卡_OTA",
  "program_en_name": "USD Multi Card_OTA",
  "card_holder_id": 1950830536975781888
}
```
	</TabItem>  
</Tabs>


## 卡片状态
获取当前的[卡片状态](/docs/opcard/create-card/card-status) `card_status`。
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
"data": {
   "card_status": "Activate",
}
```
	</TabItem>  
</Tabs>



## 卡片交易限制
获取当前卡片设置的所有[交易限制](/docs/opcard/create-card/add-card#设置您的卡交易限制) `risk_list`。
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
"data": {
  "risk_list": [
    {
      "trade_risk_name": "purchase_1d",
      "trade_risk_value": "100"
    },
    {
      "trade_risk_name": "blocked_countries",
      "trade_risk_value": "US"
    }
  ],
}
```
	</TabItem>  
</Tabs>

## 卡片额度
获取当前卡片设置的额度：`max_value`卡总限额，`current_value`卡已用额度，`available_value`卡可用额度。
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
"data": {
  "max_value": "",
  "current_value": "",
  "available_value": "",
}
```
	</TabItem>  
</Tabs>
