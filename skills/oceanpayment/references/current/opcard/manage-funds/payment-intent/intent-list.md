---
sidebar_position: 1
sidebar_label: 入账审核管理
---

#
## 概述
查询或取消资金入账审核记录，包括批次号、币种金额、状态等信息。

## 入账审核
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

在[创建入账审核](/docs/opcard/manage-funds/payment-intent/create-intent)中获取您的入账审核批次号`batch_no`。
<Tabs> 
  <TabItem value="查看入账审核" label="查看入账审核" default>
```php
cURL -X GET /fund-api/v1/payin/review/{batch_no}/detail
-H 'Content-Type: application/json'
-H 'X-ODP-Opccount-No: VA24601102'
-H 'Authorization: {token}'
```
  </TabItem>
  <TabItem value="取消入账审核" label="取消入账审核">
```php
cURL -X GET /fund-api/v1/payin/review/{batch_no}/cancel
-H 'Content-Type: application/json'
-H 'X-ODP-Opccount-No: VA24601102'
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

`review_status`、`payment_fee_status`在[创建入账审核](/docs/opcard/manage-funds/payment-intent/create-intent)中找到对应的状态说明。