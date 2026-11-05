---
sidebar_position: 1
sidebar_label: 确认创建额度
---

# 

## 概述
确认、取消发卡的上账操作。


## 确认、取消创建额度

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

在[创建额度](/docs/opcard/manage-funds/credit-limit/create-limit)中获取您的审核次号`batch_no`。
<Tabs> 
  <TabItem value="确认创建额度" label="确认创建额度" default>
```php
cURL -X POST /card-api/v1/load/{batch_no}/confirm
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
```
  </TabItem>
  
    <TabItem value="取消创建额度" label="取消创建额度">
```php
cURL -X POST /card-api/v1/load/{batch_no}/cancel
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
    "trace_id": "8382b5e3c7144476b05dac034322660b",
    "data": {
        "batch_no": "36458158-99eb-48b0-b0b5-0bc31020a352",
        "status": "已确认",
        "msg": "101633"
    }
}
```
	</TabItem>  
</Tabs>