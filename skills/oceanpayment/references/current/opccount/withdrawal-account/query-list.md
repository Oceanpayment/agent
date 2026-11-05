---
sidebar_position: 1
sidebar_label: 查询提现账户列表
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
查询您的提现银行账户列表相关信息。

### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /opc/v1/withdrawal-account/query-list
'Content-Type:application/json',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>  
</Tabs>


### 查询结果
- 查看完整的[请求参数](/docs/opccount/parameter#查询提现账户列表)。
- 您可以使用返回的参数提现账户唯一值：`withdrawalAccountKey`[管理您的提现账户](/docs/opccount/withdrawal-account/manage)。
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
{
    "msg": "SUCCESS",
    "code": "000",
    "data": [
        {
            "status": 1,
            "isRecord": 1,
            "currency": "USD",
            "type": 1,
            "bankAccount": "123",
            "bankName": "21312",
            "bankHolder": "firstName lastName",
            "withdrawalAccountKey": "1759747048153808896"
        }
    ]
}
```
  </TabItem>  
</Tabs>
- 查看完整的[返回参数](/docs/opccount/parameter#查询提现账户列表)。