---
sidebar_position: 2
sidebar_label: 发卡设置信息
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
更新当前账户卡片类型的风险设置信息 。

## 更新发卡设置信息
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X POST /config/update
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
-d '{ 
      "program_value": "01",
      "trade_risk_name": "purchase_count_1d",
      "trade_risk_value": "100"
    }'
```
	</TabItem>  
</Tabs>

<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "ce90772035e9499ea7b550937165bfa5",
    "data": {
        "trade_risk_name": "purchase_count_1d",
        "trade_risk_value": "20",
        "program_value": 01,
        "account_id": "1016X10034767280883"
    }
}
```
	</TabItem>  
</Tabs>