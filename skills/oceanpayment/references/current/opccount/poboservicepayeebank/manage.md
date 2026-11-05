---
sidebar_position: 2
sidebar_label: 查询代付账户列表管理
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
新增和删除您的代付账户列表。


## 新增代付账户
### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /opc/v1/fund-payment/account-add
'Content-Type:multipart/form-data',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>
</Tabs>

### 新增
查看完整的[请求参数](/docs/opccount/parameter#新增代付账户)。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-F 'receiptOpccountNo="VA25677001"' \
```
	</TabItem>
</Tabs>

### 返回
- 查看完整的[返回参数](/docs/opccount/parameter#新增代付账户)。
<Tabs> 
  <TabItem value="Response" label="Response" default>
```json
{
    "msg": "SUCCESS",
    "code": "000"
}
```
	</TabItem>
</Tabs>


## 删除代付账户
### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs>
    <TabItem value="删除代付账户" label="删除代付账户" default>
```php
cURL -X POST /opc/v1/fund-payment/account-delete
'Content-Type:application/json',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>
</Tabs>

### 删除
- 使用账户唯一值[`fundPaymentAccountKey`](/docs/opccount/poboservicepayeebank/query-list#查询结果)删除该代付账户。
- 查看完整的[请求参数](/docs/opccount/parameter#删除代付账户)。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d 'fundPaymentAccountKey="1940692717977731072"' \
```
	</TabItem>
</Tabs>

### 返回
- 查看完整的[返回参数](/docs/opccount/parameter#删除代付账户)。
<Tabs> 
  <TabItem value="Response" label="Response" default>
```json
{
    "msg": "SUCCESS",
    "code": "000"
}
```
	</TabItem>
</Tabs>

