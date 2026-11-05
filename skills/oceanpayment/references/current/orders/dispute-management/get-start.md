---
sidebar_position: 1
sidebar_label: 介绍
---
#
## 接口总览

<div className="table-container">
|接口名称|请求方向|接口地址|说明|
| --- | --- | --- | --- |
|遍历所有争议数据|商户 → Oceanpayment|/dispute-api/v1/dispute/list|商家查询争议数据清单|
|查询争议详情|商户 → Oceanpayment|/dispute-api/v1/dispute/\{dispute_id\}|获取单笔争议的完整信息|
|争议申诉|商户 → Oceanpayment|/dispute-api/v1/dispute/\{dispute_id\}/update|提交或更新申诉内容|
|遍历所有资料|商户 → Oceanpayment|/files-api/v1/file/list|查询已上传附件清单|
|资料上传|商户 → Oceanpayment|/files-api/v1/file/upload|上传申诉附件|
|查询资料详情|商户 → Oceanpayment|/files-api/v1/file/\{file_id\}|查看指定附件信息|
</div>

## 注意事项
1. Token有效期:
-  Access Token有时效限制，请在有效期内使用；过期后用 refresh_token刷新。
2. 文件上传限制:
- 单次最多上传 5 个文件 ID 到 evidence_file 数组中。
3. 时间格式:
- 所有时间统一使用 UTC+8，格式为 2026-04-02T16:28:09+08:00。
4. dispute_evidence 必填判断:
- 以 evidence_optional=false 为准，商户必须提交该元素的说明或文件。
5. dispute_data 字段:
- 只需填写 Klarna 在争议详情中返回的`requested_fields`对应字段，无需填写标注为"技术处理"的字段。
2. X-Auth-Nonce:
- 回调签名中使用的随机字符串，需由 Oceanpayment提供给商户。


