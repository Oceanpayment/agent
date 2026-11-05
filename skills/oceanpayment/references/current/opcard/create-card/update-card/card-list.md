---
sidebar_position: 3
sidebar_label: 账户卡类型列表
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
查询账户下所有卡片类型的列表 。

## 查询账户卡类型列表
查询当前卡类型的`program_value`值：

<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php
cURL -X GET /card-api/v1/programs
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
    "trace_id": "ec2cd59fba3441ac92421d6f7673c57b",
    "data": [
        {
            "program_value": 01,
            "program_cn_name": "港币悦享卡-费用CS",
            "program_en_name": "HKD Multi Card--Fee"
        },
        {
            "program_value": 02,
            "program_cn_name": "美金悦享卡-费用CS",
            "program_en_name": "USD Multi Card--Fee"
        },
        {
            "program_value": 03,
            "program_cn_name": "港币悦享卡-UAT",
            "program_en_name": "HKD Multi Card--UAT"
        }
    ]
}
```
	</TabItem>  
</Tabs>