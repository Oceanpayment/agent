---
sidebar_position: 1
sidebar_label: 查询争议详情
---
#



## 接口地址
```java
GET /dispute-api/v1/{dispute_id}
```

## 请求参数

<div className="table-container">
|一级字段|二级字段|输入形式|是否必填|长度限制|内容及规则、权限|
| --- | --- | --- | --- | --- | --- |
|dispute_id||string|Yes|1-50|Dispute ID|

</div>

## 响应参数

<div className="table-container">
|一级字段|二级字段|三级字段|四级字段|类型|内容及规则、权限|
| --- | --- | --- | --- | --- | --- |
|code||||string|接口结果代码，200|
|msg||||string|接口结果说明，如PARAM_ERROR|
|data||||object|节点|
||terminal|||string|返回终端号|
||currency|||string|返回交易币种|
||amount|||string|返回交易金额|
||methods|||string|返回支付方式|
||payment_id|||string|返回支付ID|
||merchant|||object|节点|
|||order_id||string|返回该笔订单的商家订单号|
||status|||string|处理状态:<ul><li>pending (未处理)</li><li>close (已处理)</li><li>noaction (无需处理)</li></ul>|
||transaction_data|||object|节点|
|||transaction_referrer||string|返回来源网址|
|||transaction_time||string|返回交易时间，转为时间戳，UTC+8 格式为2026-04-02T16:28:09+08:00|
||disputes|||object|节点|
|||disputes_id||string|Dispute ID|
|||disputes_type||string|争议类型:<ul><li>dispute = 争议</li><li>disputes-period = 宽限期</li></ul>|
|||disputes_reason||string|原因:<ul><li>goods_not_received: 服务未提供或未收到商品</li><li>return: 退款/退货</li><li>incorrect_invoice: 已取消的商品/服务</li><li>already_paid:重复交易</li><li>faulty-goods: 货不对版/货物损坏</li><li>pandemic_impact: 受新冠疫情影响</li><li>unauthorized_purchase: 未授权交易</li></ul>|
|||disputes_reference||string|参考编号|
|||disputes_amount||string|争议金额|
|||disputes_currency||string|争议币种|
|||disputes_times||string|争议次数|
|||disputes_period_from||string|宽限期开始时间，转为时间戳，UTC+8 格式为2026-04-02T16:28:09+08:00|
|||disputes_period_to||string|宽限期结束时间，转为时间戳，UTC+8 格式为2026-04-02T16:28:09+08:00|
|||disputes_date||string|争议时间，转为时间戳，UTC+8 格式为2026-04-02T16:28:09+08:00|
|||disputes_comment||string|争议描述|
|||disputes_comments_history||string|争议描述记录|
|||disputes_reply_deadline||string|回复截止时间，转为时间戳，UTC+8 格式为2026-04-02T16:28:09+08:00|
|||disputes_appeal_status||string|申诉状态:<ul><li>false: No appeal</li><li>true: Appeal in progress</li></ul> |
|||disputes_status||string|关闭状态:<ul><li>open: Klarna processing, Open</li><li>close: Klarna closed, Closed</li></ul> |
|||[dispute_evidence](/docs/orders/dispute-management/dispute_data_field-specifications#dispute_evidence-申诉元素示例)||数组||
||||evidence_code|string|申诉元素代码|
||||evidence_description|string|申诉元素的显示内容（英文）|
||||evidence_optional|string|该元素是否必填|
||||evidence_example|string|申诉元素示例文字说明|
||||evidence_submitted|string|商户已提交文字说明|
||||evidence_file|Array|商户已上传文件ID|
|||[dispute_data](/docs/orders/dispute-management/dispute_data_field-specifications)||object||
||||"\{key\}":"\{value\}"|string|需要填写的字段名作为key值，value回显已保存的值|
||billing|||object|节点|
|||firstname||string|消费者的名|
|||lastname||string|消费者的姓|
|||email||string|消费者的邮箱，需要包含@符号，可使用PG的逻辑|
|||phone||string|消费者的电话|
|||country||string|消费者的账单国家|
|||state||string|消费者的州（省、郡）|
|||city||string|消费者的城市|
|||address||string|消费者的详细地址|
|||postal_code||string|消费者的邮编|
||refund|||object|节点|
|||refund_amount||string|退款金额|
|||refund_currency||string|退款币种|
||tracking|||object|节点|
|||tracking_number||string|物流跟踪单号|
||result_code|||string|返回响应代码|
||result_message|||string|返回说明|

</div>
