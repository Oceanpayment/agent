---
sidebar_position: 2
sidebar_label: 查询卡号与CVV
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
查看您的完整明文卡号与CVV信息。


## 查询卡号信息
通过添加卡片返回的[`card_id`](/docs/opcard/create-card/add-card/#卡片创建成功)，查询卡号信息。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X GET /cards/{card_id}/cvv
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
```
	</TabItem>  
</Tabs>

1. 查询完整的卡号`card_number`与`cvv`：
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "2c08800ea313466192f00873c26619c4",
    "data": {
        "card_number": "5454545454545454",
        "cvv": "012"
    }
}
```
	</TabItem>  
</Tabs>


2. [查询卡片有效期](/docs/opcard/create-card/add-card/query-card-info#卡片信息) `card_validity_time`。