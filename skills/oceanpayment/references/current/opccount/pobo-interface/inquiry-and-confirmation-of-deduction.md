---
sidebar_position: 2
sidebar_label: 代付确认扣款
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
代付确认扣款，只能同付款币种扣款。


## 新增提现账户
### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /opc/v1/fund-payment/inquiry-confirm-deduction
'Content-Type:multipart/form-data',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>
</Tabs>

### 查询明细
查看完整的[请求参数](/docs/opccount/parameter#代付确认扣款)。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d '{
      "batchNo": 2435345,
      "billCurrency": "USD",
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
    "data": 2435345
}
```
  </TabItem>  
</Tabs>
- 查看完整的[返回参数](/docs/opccount/parameter#代付确认扣款)。
