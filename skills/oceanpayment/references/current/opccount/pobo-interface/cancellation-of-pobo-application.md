---
sidebar_position: 1
sidebar_label: 取消代付申请
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
代付审核通过，用户可以通过取消代付申请接口取消代付申请记录。需要发送批次号取消。

### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /opc/v1/fund-payment/cancel-fund-payment
'Content-Type:application/json',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>  
</Tabs>

### 查询明细
查看完整的[请求参数](/docs/opccount/parameter#取消代付申请)。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d '{
      "batchNo": 109336
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
    "code": "000"
}
```
  </TabItem>  
</Tabs>
- 查看完整的[返回参数](/docs/opccount/parameter#取消代付申请)。