---
sidebar_position: 1
sidebar_label: webhook列表
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
返回webhook的端点列表

### 设置请求头组
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /open-api/v1/webhooks
'Content-Type:application/json',
'Authorization:${open_api_token}'
```
    </TabItem>  
</Tabs>

### 查询明细
查看完整的[请求参数](/docs/webhook/card/parameter#webhook列表)。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d '{
      "cursor": "",
      "limit": 1,
      "webhook_name": "webhook_name",
      "webhook_url": "https://example.com",
      "ascending": "",
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
    "trace_id": "f1ba3f40060b4dbb8d3cbee8286de37b",
    "data": {
        "data": [
            {
                "webhook_id": 39,
                "webhook_name": "webhook_name",
                "webhook_url": "https://example.com",
                "sign_secret": "RA3hzl05PQpZW86tr1NyG9yE60cAkMGlL0kEahPHCKKSXGyuoFpurzrEB8DNfipD",
                "creator_id": 246011,
                "creator_name": "246011",
                "create_time": 1750758635000,
                "operator_id": 246011,
                "operator_name": "246011",
                "operate_time": 1750758635000
            },
        ]
    }
}
```
  </TabItem>  
</Tabs>
- 查看完整的[返回参数](/docs/webhook/card/parameter#webhook列表)。