---
sidebar_position: 1
sidebar_label: Header 规范
---
#



## 接口地址
```java
POST /files-api
```

## 请求头参数

<div className="table-container">
|Header 字段|必填|说明|
| --- | --- | --- |
|Content-Type|是|application/json|
|Authorization|是|Access Token，来源于 /open-api/v1/oauth/token/create|
|X-Auth-Account|是|账户号|

</div>


