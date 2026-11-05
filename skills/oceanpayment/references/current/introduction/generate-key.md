---
sidebar_position: 3
sidebar_label: 获取API秘钥
---

# 

import { FaCode, FaCloudDownloadAlt, FaServer } from 'react-icons/fa';

## 概述
API秘钥是访问Oceanpayment API所需的最基本凭据。这些凭据充当Oceanpayment应用的用户名和密码，Oceanpayment API会使用它们来识别请求来自哪个账户。 为了使您的应用程序能够与Oceanpayment通信，必须使用秘钥组合来对其进行身份验证。

:::warning[注意]
[接受付款](/docs/introduction/generate-key#接受付款)、[OPCard](/docs/introduction/generate-key#opcard)、[OPCCOUNT](/docs/introduction/generate-key#opccount)每个场景需要的配置信息不同，请根据不同场景功能进行申请。
:::

## 接受付款
### 配置信息
- `account`：Oceanpayment账户号。
- `terminal`：Oceanpayment终端号，区分不同的支付通道或支付场景。
- `secureCode`：Oceanpayment安全码，用于加密[`signValue`](/docs/payment/parameter)字段使用。为了接口安全性，请求时不能提交此安全码信息，它只参与加密。
- `key`：Oceanpayment公钥，用来加密卡信息。只有信用卡支付[嵌入式](/docs/payment/embedded/integration)、[服务器对服务器](/docs/payment/server-to-server/integration)集成用到。 

:::info[信息]
👉快速掌握收款配置信息的[使用方法](/docs/payment/parameter)。
:::

### 环境
1. **沙盒环境**：请联系Oceanpayment技术支持techservice@oceanpayment.com.cn开通。
2. **生产环境**：完成企业账户注册认证后，在[账户后台](https://odpm.oceanpayment.com) > 开发者模块中查看对应的账户配置信息。
<img src={require('/img/cn/payment/payment-p.png').default} className="image-card"/>


## OPCard
### 配置信息
- `app_key`：企业认证成功后分配的开发者ID。
- `app_secret`：企业认证成功后分配的对应开发者ID的秘钥。   

### 环境
完成[IAM注册](/docs/introduction/register-merchant)后，登录IAM；
1. **沙盒环境**：
- 账号完成企业认证后将自动开通沙盒工具，您也可以直接申请【开通沙盒工具】提前开通沙盒环境。
<img src={require('/img/cn/payment/opcard-s.png').default} className="image-card"/>
<img src={require('/img/cn/payment/opcard-s1.png').default} className="image-card"/>
- 企业认证通过或手动申请通过审核，沙盒完成开通，访问[沙盒环境](https://iam-s.oceanpayment.com/login)地址进行登录，可重置秘钥。

2. **生产环境**：
- 完成企业账户注册认证后，在开发者模块中查看对应的账户配置信息。
- 生产环境密钥查看路径：IAM > 首页 > 开发者控制台 > Developer > 密钥管理。
<img src={require('/img/cn/payment/opcard-p.png').default} className="image-card"/>

### 身份验证和安全
`App Key` 和`App Secret`：用于服务器根据客户端凭证颁发令牌(Access Token)的场景，可以向服务器验证自身身份并获取访问令牌，然后使用该访问令牌访问受保护的资源。

### 使用流程
1. 身份验证：应用程序在调用OPCard API之前，需要将App Key和App Secret与API请求一起发送。
2. 令牌生成：Oceanpayment接收App Key和App Secret生成身份验证令牌。
3. 权限验证：应用程序在后续的API调用中，使用令牌进行身份验证和权限验证，从而访问API。﻿

### 创建令牌
```php 
curl -X POST 'https://checkout-s.oceanpayment.com/open-api/v1/oauth/token/create'
-H 'Content-Type: application/json'
-D '{"app_key":"7FWGJDQYQZFCPXT7QL", "app_secret":"LQ7qF1UM7x3BfyfYTVa24qci53uPsNGJmrlC2NEJQq8BLszrrsRdIJb04teTgAx9yV5ncXPOjpYOYC0rZ6BkWP7yesQD0Dla3hRJ8WCd6880qaJeZM6idAv0WZYnY5s1"}'
```

### 更新令牌
为什么需要更新令牌？以固定间隔轮换应用程序令牌有几个原因：
1. 替换已配置为自动过期的令牌；
2. 限制任何受损令牌的影响；
3. 携带用于请求接口的通行令牌，有效期为60分钟。  

使用创建令牌生成的`refresh_token`进行刷新。
```php 
curl -X POST 'https://checkout-s.oceanpayment.com/open-api/v1/oauth/token/refresh'
-H 'Content-Type: application/json'
-D '{"refresh_token":"eyJhbGciOiJIUzUxMiJ9.eyJvcF9pZCI6IjI1MDAwMDEiLCJzaWduX2RhdGUiOjE3NTM5NTgwNTV9.__P-t3t24aB5ptYVfH6dkOD7m7TOtzBJ0Ua30CC5QNFTlI1br3DaLykW6ggU5pyp3ztaW4aTESZKcSt59WH-SA"}'
```

## OPCCOUNT
### 配置信息
- `Opccount-No`：OPCCOUNT账号。
- `Va-Code`：商户唯一值，由Oceanpayment提供。
   
### 环境
1. **沙盒环境**：请联系Oceanpayment技术支持开通。
2. **生产环境**：完成企业账户[注册认证](/docs/introduction/register-merchant)后，Oceanpayment技术支持提供配置信息。


## API参考
👉即刻探索我们的<a href="/docs/payment-api"><button className="api-button"><FaCode className="w-3 h-3" /> REST API</button></a>。
  
