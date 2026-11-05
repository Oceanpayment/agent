---
sidebar_position: 1
sidebar_label: 查询争议数据
---
#



## 接口地址
```java
POST /dispute-api/v1/list
```

## 请求参数

<div className="table-container">
|参数名|类型|必填|长度|说明|
| --- | --- | --- | --- | --- |
|from_created_at|string|是|25|创建开始时间，UTC+8，格式：2026-04-02T16:28:09+08:00|
|to_created_at|string|是|25|创建结束时间，UTC+8，格式：2026-04-02T16:28:09+08:00|
|type|string|是|50|争议类型：dispute（争议）/ disputes-period（宽限期）|
|page|string|否|5|查询页码，默认 1|
|limit|string|否|3|每页笔数，可传 10/50/100，默认 10|

</div>

## 响应参数

<div className="table-container">
|一级字段|二级字段|三级字段|四级字段|类型|说明|
| --- | --- | --- | --- | --- | --- |
|code||||string|接口结果代码，200/400/500|
|msg||||string|结果说明，如 PARAM_ERROR|
|data||||object|数据对象|
||lists|||Array|争议列表|
|||terminal||string|终端号|
|||currency||string|交易币种|
|||amount||string|交易金额|
|||methods||string|支付方式|
|||payment_id||string|支付 ID|
|||merchant||节点||
||||order_id|string|返回该笔订单的商家订单号|
|||status||string|处理状态：<ul><li>pending（未处理）</li><li>close（已处理）</li><li>noaction（无需处理）</li></ul>|
|||disputes||object|节点|
||||disputes_id|string|Dispute ID|
||||disputes_type|string|争议类型:<ul><li>dispute = 争议</li><li>disputes-period = 宽限期</li></ul>|
||||disputes_reason|string|原因:<ul><li>goods_not_received: 服务未提供或未收到商品</li><li>return: 退款/退货</li><li>incorrect_invoice: 已取消的商品/服务</li><li>already_paid:重复交易</li><li>faulty-goods: 货不对版/货物损坏</li><li>pandemic_impact: 受新冠疫情影响</li><li>unauthorized_purchase: 未授权交易</li></ul>|
||||disputes_reference|string|参考编号|
||||disputes_amount|string|争议金额|
||||disputes_currency|string|争议币种|
||||disputes_times|string|争议次数|
||||disputes_period_from|string|宽限期开始时间，转为时间戳，UTC+8 格式为2026-04-02T16:28:09+08:00|
||||disputes_period_to|string|宽限期结束时间，转为时间戳，UTC+8 格式为2026-04-02T16:28:09+08:00|
||||disputes_date|string|争议时间，转为时间戳，UTC+8 格式为2026-04-02T16:28:09+08:00|
||||disputes_comment|string|争议描述|
||||disputes_comments_history|string|争议描述记录|
||||disputes_reply_deadline|string|回复截止时间，转为时间戳，UTC+8 格式为2026-04-02T16:28:09+08:00|
||||disputes_appeal_status|string|申诉状态:<ul><li>false: 否，未申诉 </li><li>true: 是，争议申诉中</li></ul> |
||||disputes_status|string|关闭状态:<ul><li>open: Klarna处理中，Open</li><li>close: Klarna已关闭，Closed</li></ul> |
||result_code|||string|返回响应代码|
||result_message|||string|返回说明|
||page|||string|当前页数|
||total_count|||string|总条数|
||total_pages|||string|总页数|

</div>

## disputes_reason 原因代码说明

<div className="table-container">
|Code|说明|
| --- | --- |
|goods_not_received|服务未提供或未收到商品|
|return|退款/退货|
|incorrect_invoice|已取消的商品/服务|
|already_paid|重复交易|
|faulty-goods|货不对版/货物损坏|
|pandemic_impact|受新冠疫情影响|
|unauthorized_purchase|未授权交易|

</div>

### status 处理状态判断逻辑
- `pending (Unprocessed)`: 争议状态为未处理且满足（首次争议 + 回复截止时间 > 当前时间）或（争议为多次争议）
- `close (Processed)`: 争议状态为已处理
- `noaction(No Action Required)`: 争议状态为无需处理，或满足（首次争议 + 回复截止时间 < 当前时间）