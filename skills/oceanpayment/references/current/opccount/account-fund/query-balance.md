---
sidebar_position: 1
sidebar_label: 查询余额
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 

## 概述
可以通过查询余额接口查看OPCCOUNT金额、可用余额、冻结金额、发卡总额度。

## 资金明细查询
### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /opc/v1/account-fund/query-balance
'Content-Type:application/json',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>  
</Tabs>

### 查询结果
查看完整的[返回参数](/docs/opccount/parameter#查询余额)。
<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json
{
    "msg": "SUCCESS",
    "code": "000",
    "data": [
        {
            "currency": "CNY",
            "amount": 0.00,
            "withdrawalAmount": 0.00,
            "congealAmount": 0.00
        },
        {
            "currency": "USD",
            "amount": 62226.67,
            "withdrawalAmount": 62112.67,
            "congealAmount": 114.00
        }
    ]
}
```
	</TabItem>  
</Tabs>




