---
sidebar_position: 1
sidebar_label: 创建 Access Token
---
#

## 接口地址
```java
POST /open-api/v1/oauth/token/create
```

## 请求参数

<div className="table-container">
|参数名|类型|必填|说明|
| --- | --- | --- | --- |
|app_key|string|是|认证企业成功后分配的开发者 ID|
|app_secret|string|是|认证企业成功后分配的开发者密钥|

</div>

## 响应参数

<div className="table-container">
|字段1|字段2|类型|内容及规则、权限|
| --- | --- | --- | --- |
|code||string|结果代码|
|msg||string|结果描述|
|data||object||
||token|string|Access Token（用于请求接口）|
||expire|string|Token 有效期（单位：秒）|
||refresh_token|string|刷新令牌（用于刷新 Access Token）|
||refresh_expire|string|刷新令牌有效期（单位：秒）|

</div>
