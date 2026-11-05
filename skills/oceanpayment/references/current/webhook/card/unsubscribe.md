---
sidebar_position: 1
sidebar_label: 事件取消订阅
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
对已绑定事件的webhook端点进行解绑

### 设置请求头组
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /open-api/v1/webhooks/{webhook_id}/unsubscribe
'Content-Type:application/json',
'Authorization:${open_api_token}'
```
    </TabItem>  
</Tabs>

### 查询明细
查看完整的[请求参数](/docs/webhook/card/parameter#事件取消订阅)。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d '{
      "event_type": "card.transaction",
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
    "trace_id": "d5c314d0ad8247c7b99f32a10472a128",
    "data": {
        "webhook_id": 11,
        "webhook_name": "webhook_name",
        "webhook_url": "https://example.com",
        "sign_secret": "Ujr0hOSlAkOpuIiHfRrd",
        "creator_id": 246011,
        "creator_name": "246011",
        "create_time": 1750298755000,
        "operator_id": 246011,
        "operator_name": "246011",
        "operate_time": 1750301630000,
        "event_type": "card.load",
        "event_description": "续额通知"
    }
}
```
  </TabItem>  
</Tabs>
- 查看完整的[返回参数](/docs/webhook/card/parameter#事件取消订阅)。