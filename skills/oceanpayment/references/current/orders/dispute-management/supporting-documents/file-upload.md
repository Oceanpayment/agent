---
sidebar_position: 1
sidebar_label: 资料上传
---
#

## 接口地址
```java
POST /files-api/v1/upload Content-Type： multipart/form-data
```

## 请求参数

<div className="table-container">
|一级字段|类型|是否必填|长度|内容及规则、权限|
| --- | --- | --- | --- | --- |
|file|string|是||上传的文件，使用multipart/form-data|
|purpose|string|是|1-50|文件用途，枚举值，当前只有1个：dispute_evidence|

</div>

## 响应参数 (HTTP Code 200)

<div className="table-container">
|一级字段|二级字段|三级字段|四级字段|类型|内容及规则、权限|
| --- | --- | --- | --- | --- | --- |
|code||||string|接口结果代码，200,400,500|
|msg||||string|接口结果说明，如PARAM_ERROR|
|data||||object|Node|
||files|||object|Node|
|||id||string|文件ID|
|||filename||string|文件名|
|||size||string|文件大小bytes|
|||type||string|文件后缀格式|
|||purpose||string|文件用途|
|||created||string|创建时间，转为时间戳，UTC+8 格式为2026-04-02T16:28:09+08:00|
||result_code|||string|返回响应代码|
||result_message|||string|返回说明|

</div>

