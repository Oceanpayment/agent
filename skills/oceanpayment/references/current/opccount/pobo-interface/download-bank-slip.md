---
sidebar_position: 2
sidebar_label: 下载水单
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述

代付成功后Oceanpayment财务人员会在后台上传银行水单，用户可以通过下载水单接口请求下载上传的水单文件。需要发送批次号查询。


## 新增提现账户
### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /opc/v1/fund-payment/download-water-bill
'Content-Type:multipart/form-data',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>
</Tabs>

### 查询明细
查看完整的[请求参数](/docs/opccount/parameter#下载水单)。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d '{
      "batchNo": 109335
   }'
```
  </TabItem>  
</Tabs>

