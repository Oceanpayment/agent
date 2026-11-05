---
sidebar_position: 1
sidebar_label: 创建额度
---

# 

## 概述
向发卡账户转移资金，创建OP Card额度。


## 创建额度
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X POST /card-api/v1/load/create
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
-d '{
      "accounting_currency": "USD",
      "bill_currency": "USD",
      "program_value": 01,
      "accounting_amount": 100
   }'
```
	</TabItem>  
</Tabs>

| 字段|描述|
| --- | --- |
|accounting_currency|上账币种|
|bill_currency|账户可用币种|
|program_value|[账户卡类型](/docs/opcard/create-card/update-card/card-list)|
|accounting_amount|上账金额|


<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
      "code": "200",
      "msg": "操作成功",
      "trace_id": "dcfea0cb4b16424aac2bb8f5ab96bb5f",
      "data": {
          "batch_no": "e01f7c7f-0513-49b2-a953-b42910ccafb6",
          "status": "待确认",
          "available_currency": "USD",
          "accounting_currency": "USD",
          "accounting_amount": 100,
          "reference_exchange_rate": 1,
          "available_balance": 96214.79,
          "estimated_deduction_amount": 100,
          "estimated_deduction_currency": "USD"
    }
}
```
	</TabItem>  
</Tabs>


| 字段|描述|
| --- | --- |
|batch_no|创建额度成功后，使用批次号[确认](/docs/opcard/manage-funds/credit-limit/create-check)、[查询或取消额度记录](/docs/opcard/manage-funds/credit-limit/limit-list)|
|status|状态|
|accounting_currency|上账币种|
|accounting_amount|上账金额|
|reference_exchange_rate|上账汇率|
|available_balance|账户可用金额|
|estimated_deduction_amount|预计扣款金额|
