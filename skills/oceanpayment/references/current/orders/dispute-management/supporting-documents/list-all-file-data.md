---
sidebar_position: 1
sidebar_label: 遍历所有资料数据
---
#

## 接口地址
```java
POST /files-api/v1/list
```

## 请求参数

<div className="table-container">
|一级字段|类型|是否必填|长度|内容及规则、权限|
| --- | --- | --- | --- | --- |
|from_created_at|string|是|25|传创建开始时间时间戳，UTC+8 格式为2026-04-02T16:28:09+08:00|
|to_created_at|string|是|25|传创建结束时间时间戳，UTC+8 格式为2026-04-02T16:28:09+08:00|
|purpose|string|是|50|文件用途，枚举值，当前只有1个：dispute_evidence|
|page|string|否|5|查询第x页 默认1 传入的pages为0或者其他非正整数，返回第1页 传入的pages大于总页数，返回最后1页|
|limit|string|否|3|每页返回笔数 可传10,50,100 其他传值或为空，默认10笔 |

</div>

## 响应参数 (HTTP Code 200)

<div className="table-container">
|一级字段|二级字段|三级字段|四级字段|类型|内容及规则、权限|
| --- | --- | --- | --- | --- | --- |
|code||||string|接口结果代码，200,400,500|
|msg||||string|接口结果说明，如PARAM_ERROR|
|data||||object|Node|
||lists|||Array||
|||id||string|文件ID|
|||filename||string|文件名|
|||size||string|文件大小bytes|
|||type||string|文件后缀格式|
|||purpose||string|文件用途|
|||created||string|创建时间 格式为2026-04-02T16:28:09+08:00|
||result_code|||string|返回响应代码|
||result_message|||string|返回说明|
||page|||string|当前页数|
||total_count|||string|总条数|
||total_pages|||string|总页数|

</div>

