---
sidebar_position: 2
sidebar_label: 提现账户列表管理
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
新增，修改和删除您的提现银行账户列表。


## 新增提现账户
### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
cURL -X POST /opc/v1/withdrawal-account/add
'Content-Type:multipart/form-data',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>
</Tabs>

### 新增
查看完整的[请求参数](/docs/opccount/parameter#新增提现账户)。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-F 'bankHolder="test"' \
-F 'bankName="test"' \
-F 'bankAccount="test"' \
-F 'settlementNumber="12345678"' \
-F 'bankAddress="HKD"' \
-F 'province="NY"' \
-F 'city="NY"' \
-F 'zipcode="96801"' \
-F 'currency="USD"' \
-F 'type="1"' \
-F 'swiftCode="1"' \
-F 'beneficiaryMsisdn="+86138111111111"' \
-F 'fileList=@"/test.txt"' \
```
	</TabItem>
</Tabs>

### 返回
查看完整的[返回参数](/docs/opccount/parameter#新增提现账户)。
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


## 修改提现账户
### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs> 
    <TabItem value="修改提现账户" label="修改提现账户" default>
```php
cURL -X POST /opc/v1/withdrawal-account/edit
'Content-Type:multipart/form-data',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>
</Tabs>

### 修改
- 使用账户唯一值[`withdrawalAccountKey`](/docs/opccount/withdrawal-account/query-list#查询结果)修改您的提现账户信息：

<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-F 'bankHolder="test"' \
-F 'bankName="test"' \
-F 'bankAccount="test"' \
-F 'settlementNumber="12345678"' \
-F 'bankAddress="HKD"' \
-F 'province="NY"' \
-F 'city="NY"' \
-F 'zipcode="96801"' \
-F 'currency="USD"' \
-F 'type="1"' \
-F 'swiftCode="1"' \
-F 'beneficiaryMsisdn="+86138111111111"' \
-F 'fileList=@"/test.txt"' \
-F 'withdrawalAccountKey="1759747048153808896"' \
```
	</TabItem>
</Tabs>
- 查看完整的[请求参数](/docs/opccount/parameter#修改提现账户)。

### 返回
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


## 删除提现账户
### 设置请求头组
查看完整的[请求头组](/docs/opccount/parameter#通用请求头所有接口必传)。
<Tabs>
    <TabItem value="删除提现账户" label="删除提现账户" default>
```php
cURL -X POST /opc/v1/withdrawal-account/delete
'Content-Type:application/json',
'Opccount-No:995149',
'Va-Code:9435762187450928365',
'Sign:ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==',
'Timestamp:1694482115'
```
	</TabItem>
</Tabs>

### 删除
查看完整的[请求参数](/docs/opccount/parameter#删除提现账户)。
- 使用账户唯一值[`withdrawalAccountKey`](/docs/opccount/withdrawal-account/query-list#查询结果)删除该提现账户：

<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```json
-d 'withdrawalAccountKey="1759747048153808896"' \
```
	</TabItem>
</Tabs>
查看完整的[请求参数](/docs/opccount/parameter#删除提现账户)。

### 返回
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

