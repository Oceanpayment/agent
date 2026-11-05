---
sidebar_position: 1
sidebar_label: 交易记录
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
查看您账户的交易记录。

## 交易记录
<Tabs> 
  <TabItem value="交易记录列表" label="交易记录列表" default>
```php
cURL -X POST /card-api/v1/transactions
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
-d '{ 
      "transaction_type_list": "[1,2,3]",
      "transaction_currency_list": [USD,HKD],
      "program_value_list": "[01,02]"
    }'
```
  </TabItem>
  
  <TabItem value="当天交易记录" label="当天交易记录" default>
```php
cURL -X POST /card-api/v1/transactions/today
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
-d '{ 
      "transaction_type_list": "[1,2,3]",
      "transaction_currency_list": [USD,HKD],
      "program_value_list": "[01,02]"
    }'
```
  </TabItem>
</Tabs>

| 字段|描述|值|
| --- | --- | --- |
|time_type|查询时间类型(默认交易时间)|<ul><li>`1` : 交易时间</li><li>`2` : 结算时间</li></ul>|
|transaction_type_list|交易类型|<ul><li>`0` : 未知</li><li>`1` : 新账户</li><li>`2` : 卡片订购</li><li>`3` : 购买</li><li>`4` : 退款</li><li>`5` : 续额</li><li>`6` : 提现</li><li>`7` : 余额查询</li><li>`8` : p2p转账</li><li>`9` : 钱包转账</li><li>`10` : 外汇交易</li><li>`11` : 汇率差额</li><li>`12` : 申诉</li><li>`13` : 拒付</li><li>`14` : 资金调整</li><li>`15` : 汇率调整</li><li>`16` : 账号维护</li><li>`17` : 冲销</li><li>`18` : 扣缴</li><li>`19` : 账户关闭</li><li>`20` : 奖励</li><li>`21` : 运输</li><li>`22` : 加急运输</li><li>`23` : 定位</li><li>`24` : 结算</li><li>`25` : 资金合并</li><li>`26` : 利息</li><li>`27` : 现金返还</li><li>`28` : 费用</li><li>`29` : 月费</li><li>`30` : 年费</li><li>`31` : 快速资金</li><li>`32` : 撤消付款</li><li>`33` : 资金到期</li><li>`34` : A2A入账</li><li>`35` : 滞纳金</li><li>`36` : DCC费用</li><li>`37` : A2A出账</li></ul>|
|transaction_id_list|交易ID|`ARRAY`|
|transaction_currency_list|交易币种|`ARRAY`|
|program_value_list|账户卡类型列表|`ARRAY`|

<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "trace_id": "d182a07d5000474ebe0affcb92e08ab3",
    "data": {
        "data": [
            {
                "transaction_time": "2025-06-06 14:57:02",
                "transaction_id": "1000001862113",
                "card_number": "527375 **** 3744",
                "transaction_type": 3,
                "transaction_currency": "USD",
                "transaction_amount": 1.22,
                "billing_currency": "USD",
                "billing_amount": 1.22,
                "program_value": 5,
                "program_cn_name": "美金悦享卡",
                "program_en_name": "USD Multi Card-XA"
            }
        ],
        "next_cursor": null,
        "has_more": false
    }
}
```
  </TabItem>
</Tabs>