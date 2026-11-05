---
sidebar_position: 1
sidebar_label: 事件列表
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
返回webhook所支持的事件列表

### 设置请求头组
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /open-api/v1/events
'Content-Type:application/json',
'Authorization:${open_api_token}'
```
    </TabItem>  
</Tabs>

### 查询明细
查看完整的[请求参数](/docs/webhook/card/parameter#事件列表)。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d '{
      "cursor": 1,
      "limit": 10,
      "event_type": "card.transaction",
      "event_code": "165801",
      "ascending": "true",
   }'
```
  </TabItem>  
</Tabs>


### 查询结果
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
{
    "msg": "SUCCESS",
    "code": "000",
    "trace_id": "",
    "data": {
      "next_cursor": "",
      "has_more": false,
      "data": [{
        "event_id": 123,
        "event_type": "card.transaction",
        "event_category": "",
        "event_code": "165801",
        "event_description": 1,
      }]
    }
}
```
  </TabItem>  
</Tabs>
- 查看完整的[返回参数](/docs/webhook/card/parameter#事件列表)。