---
sidebar_position: 1
sidebar_label: 创建持卡人
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
创建您的账户持卡人信息。

## 创建持卡人
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X POST /card-api/v1/cardholders/create
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

| 字段|描述|
| --- | --- |
|last_name|持卡人姓|
|first_name|持卡人名|
|email|持卡人邮箱|
|email_language|邮件通知语言，枚举`EN`：英文,`CN`：中文|
|phone|持卡人手机号|
|phone_area_code|手机号国家代码|
|default_cardholder|默认持卡人，同一账户只能有一个默认持卡人<ul><li>0: 不为默认持卡人</li><li>1: 为默认持卡人</li></ul>|


<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "a1ebb8d701ea45a098c8e1f3cdaeabb0",
    "data": {
        "card_holder_id": 1955930998425718784,
        "default_cardholder": 1
    }
}
```
	</TabItem>  
</Tabs>

创建持卡人成功后，使用`card_holder_id` [查找和更新](/docs/opcard/manage-card/cardholder/cardholder-lists)您的持卡人信息。