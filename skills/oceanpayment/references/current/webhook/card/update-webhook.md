---
sidebar_position: 1
sidebar_label: 更新webhook
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
更新webhook端点。您可以编辑url和端点的状态

### 设置请求头组
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /open-api/v1/webhooks/{webhook_id}/update
'Content-Type:application/json',
'Authorization:${open_api_token}'
```
    </TabItem>  
</Tabs>

### 查询明细
查看完整的[请求参数](parameter#更新webhook)。
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
    "trace_id": "c7b7f09a6b924441a6624615238ecbaf",
    "data": {
        "webhook_id": 63,
        "webhook_name": "webhook_name",
        "webhook_url": "https://example.com",
        "sign_secret": "xerXCvRE704nzTUPeRj0XXDoXSwVNaSlksmfvfozfguR8s25bpuQdd4ZqdsC3upj",
        "creator_id": 246011,
        "creator_name": "246011",
        "create_time": 1751352705000,
        "operator_id": 246011,
        "operator_name": "246011",
        "operate_time": 1751352775129
    }
}
```
  </TabItem>  
</Tabs>
- 查看完整的[返回参数](parameter.md#更新webhook)。