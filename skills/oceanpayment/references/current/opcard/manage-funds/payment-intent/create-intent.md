---
sidebar_position: 1
sidebar_label: 创建入账审核
---

# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 创建入账审核
创建资金入账审核记录。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X POST /fund-api/v1/payin/review/create
-H 'Content-Type: application/json'
-H 'X-ODP-Opccount-No: VA24601102'
-H 'Authorization: {token}'
-d '{
      "payer_account": "78415632",
      "payment_time": "2025-07-08 12:00:00",
      "payment_amount": 100,
      "payment_fee": 1,
      "remark": "",
      "payer_name": "test123",
      "payer_bank_bic": "789456",
      "payment_currency": "USD",
      "payer_bank_name": "test"
   }'
```
	</TabItem>  
</Tabs>

| 字段|描述|
| --- | --- |
|X-ODP-Opccount-No|OPCCOUNT账号|
|payer_account|付款方账号|
|payment_time|付款时间|
|payment_amount|付款金额|
|payment_fee|付款手续费|
|payer_name|付款人名称|
|payment_currency|付款币种|
|payer_bank_name|付款银行名|


<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "5b4c1e77e3ce42d89d72c7f784e6d5a2",
    "data": {
        "batch_no": 1000000469,
        "review_status": 0,
        "payment_currency": "USD",
        "payment_amount": 100,
        "payment_fee": 1,
        "payment_fee_status": 1,
        "payin_amount": 99
    }
}
```
	</TabItem>  
</Tabs>
| 字段|描述|值|
| --- | --- | --- |
|batch_no|批次号|创建入账审核成功后，使用批次号[查询或取消资金入账审核记录](/docs/opcard/manage-funds/payment-intent/intent-list)|
|review_status|审核状态<ul><li>`0` : 审核中<br/></li><li>: 审核通过<br/> • `2` : 审核失败待退款<br/> • `3` : 已退款</li></ul>|
|payment_fee_status|付款手续费状态|<ul><li>`0` : 未确认<br/></li><li>: 已确认</li></ul>|

