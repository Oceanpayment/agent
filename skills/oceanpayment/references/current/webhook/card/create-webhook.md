---
sidebar_position: 1
sidebar_label: 新增webhook
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
创建webhook接收事件的端点，用于接收不同的事件通知

### 设置请求头组
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /open-api/v1/webhooks/create
'Content-Type:application/json',
'Authorization:${open_api_token}'
```
    </TabItem>  
</Tabs>

### 查询明细
查看完整的[请求参数](/docs/webhook/card/parameter#新增webhook)。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d '{
      "webhook_name": "webhook_name",
      "webhook_url": "https://example.com",
   }'
```
  </TabItem>  
</Tabs>


### 查询结果
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "fbcc5c1eb94c4a648c17c6b92f10d0f5",
    "data": {
        "webhook_id": 37,
        "webhook_name": "webhook_name",
        "webhook_url": "https://example.com",
        "sign_secret": "xMt7NaLFEICFQTzX8KTKY5QQmDarbBiXy8b8X9yxHZSkdSAzuZmePsdZSfgOgxhx",
        "creator_id": 246011,
        "creator_name": "246011",
        "create_time": 1750758576144,
        "operator_id": 246011,
        "operator_name": "246011",
        "operate_time": 1750758576144
    }
}
```
  </TabItem>  
</Tabs>
- 查看完整的[返回参数](/docs/webhook/card/parameter#新增webhook)。