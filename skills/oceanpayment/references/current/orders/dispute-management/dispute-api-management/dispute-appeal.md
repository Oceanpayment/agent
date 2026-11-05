---
sidebar_position: 1
sidebar_label: 争议申诉
---
#



## 接口地址
```java
POST /dispute-api/v1/{dispute_id}/update
```

## 请求参数

<div className="table-container">
|一级字段|二级菜单|类型|是否必填|长度|说明|
| --- | --- | --- | --- | --- | --- |
|dispute_id||string|Yes|1-50|争议数据唯一 ID|
|dispute_comment||string|Yes|1-3000|争议描述|
|dispute_evidence||Array|Yes||数组|
||evidence_code|string|Yes|1-3|申诉元素代码|
||evidence_submitted|string|Yes|1-1900|商户已提交文字说明|
||evidence_file|Array|Yes||以数组的形式提交商户已上传文件ID，可以支持5个id|
|dispute_data||object|No|||
||"\{key\}":"\{value\}"|string|No||需要填写的字段名作为key值，value回显已保存的值|

</div>

## 响应参数

返回结构与 [查询争议详情](/docs/orders/dispute-management/dispute-api-management/query-dispute-details#response-parameterscode200)接口一致.
