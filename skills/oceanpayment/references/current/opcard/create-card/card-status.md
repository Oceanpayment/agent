---
sidebar_position: 1
sidebar_label: 卡片状态
---

# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
查询和设置您的卡片状态

### 设置卡片状态
通过添加卡片返回的[`card_id`](/docs/opcard/create-card/add-card/#卡片创建成功)，管理您的卡片状态。
<Tabs> 
  <TabItem value="激活" label="激活" default>
```php
cURL -X GET /cards/{card_id}/activate
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
```
  </TabItem> 
	
  <TabItem value="禁用" label="禁用">
```php
cURL -X GET /cards/{card_id}/disable
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
```
  </TabItem>	

  <TabItem value="注销" label="注销">
```php
cURL -X GET /cards/{card_id}/close
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
```
  </TabItem>
  
  <TabItem value="检查卡片状态" label="检查卡片状态">
```php
cURL -X GET /cards/{card_id}/status
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
```
  </TabItem>	 

</Tabs>


<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "2c08800ea313466192f00873c26619c4",
    "data": {
        "card_status": "Activate",
    }
}
```
	</TabItem>  
</Tabs>
| 字段|值|
| --- | --- |
|card_status|<ul><li>`Blocked` : 暂停</li><li> `Activate` : 激活</li><li> `Deactivated` : 注销</li><li>`Blocking` : 暂停(处理中)</li><li> `Activating` : 激活(处理中)</li><li> `Deactivating` : 注销(处理中)</li></ul>|

:::warning[注意]
1. 仅有激活状态可正常交易，暂停与注销状态均不能交易。
2. 激活可以暂停或注销，暂停可以注销或激活，注销状态不可逆。
2. 中间状态(处理中)需等待状态变更完成后才能操作。
:::
