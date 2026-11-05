---
sidebar_position: 1
sidebar_label: 查询卡产品名称
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Modal from '@site/src/components/Modal';
import CollapsibleTable from '@site/src/components/CollapsibleTable';

## 概述
Card Product Name卡产品的名称，是用于标识特定卡产品、卡段或发卡方案的名称。每个卡产品会定义该类卡片的属性和规则，例如：
- BIN/Card Range（卡段）
- 注册地
- 卡组织（Mastercard、Visa）

:::info[信息]
卡产品名称是创建卡片的必备参数之一。请先获取`product_name`，并在调用[创建卡片](/docs/opcard/create-card/add-card/#获取卡产品名称)时传入该参数。
:::

## 查询卡产品名称
用账户卡类型[`{program_value}`](/docs/opcard/create-card/update-card/card-list)来查询对应的卡产品名称：
<Tabs> 
  <TabItem value="Request" label="Request" default>
```php
cURL -X GET /v1/cards/products/{program_value}
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
    "data": {
        "program_value": "1016X10007530070724",
        "total_count": "1016X10007422220312",
        "products": [
            {
                "product_name": "***26452香港Mastercard"
            }
        ]
    }
}
```
  </TabItem>
</Tabs>

|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`program_value`|string|账户卡类型|2|
|`total_count`|int|卡产品总数|1|
|`products`|array|卡产品列表|-|
|`products.product_name`|string|卡产品名称|***26452香港Mastercard|
