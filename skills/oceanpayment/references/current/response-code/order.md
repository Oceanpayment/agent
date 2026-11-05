---
sidebar_position: 2
sidebar_label: 订单管理
---
# 

## 概述
订单管理响应代码用于管理订单的完整生命周期。

## 响应代码

### 订单状态查询
<div className="table-container">
|响应代码|响应说明|
| --- | --- |
|-1|待处理|
|0|失败|
|1|成功|
|2|订单不存在|
|3|请求参数不完整|
|4|查询请求过多,(最多只能查询100笔)|
|5|账户或者终端号不存在|
|6|signValue加密信息错误|
|7|查询IP未在系统登记|
|8|账户不能为空|
|9|无效账户|
|10|终端号不能为空|
|11|无效终端号|
|12|订单号不能为空|
|13|无效订单号|
|14|未付款订单，支付返回代码：50000|
|15|取消付款，支付返回代码：50008|
|16|高风险的交易，支付返回代码：10000|
|17|支付接口挡掉的交易，包含返回2xxxx错误代码|
|999|系统异常|
</div>


### 成功状态查询
<div className="table-container">
|响应代码|响应说明|
| --- | --- |
|00|查询成功|
|01|无交易数据|
|02|账户号错误|
|03|终端号错误|
|04|开始日期错误|
|05|结束日期错误|
|06|账户号不能为空|
|07|终端号不能为空|
|08|开始时间不能为空|
|09|结束时间不能为空|
|10|查询时间范围不能大于7天|
|11|签名校验失败|
|12|请求IP地址不在白名单中|
|99|未知错误|
</div>


### 业务订单查询
<div className="table-container">
|响应代码|响应说明|
| --- | --- |
|00|查询成功|
|01|无交易数据|
|02|账户号错误|
|03|终端号错误|
|04|开始日期错误|
|05|结束日期错误|
|06|账户号不能为空|
|07|终端号不能为空|
|08|开始时间不能为空|
|09|结束时间不能为空|
|10|查询时间范围不能大于30天|
|11|签名校验失败|
|12|请求IP地址不在白名单中|
|13|日期类型错误|
|99|未知错误|
</div>


### 争议订单查询
<div className="table-container">
|响应代码|响应说明|
| --- | --- |
|00|查询成功|
|01|无交易数据|
|02|账户号错误|
|03|终端号错误|
|04|开始日期错误|
|05|结束日期错误|
|06|账户号不能为空|
|07|终端号不能为空|
|08|开始时间不能为空|
|09|结束时间不能为空|
|10|查询时间范围不能大于30天|
|11|签名校验失败|
|12|请求IP地址不在白名单中|
|13|日期类型错误|
|99|未知错误|
</div>

### 预授权
<div className="table-container">
响应代码|响应说明|
| --- | --- |
|40001|payment_auth type cannot be empty|
|40002|payment_auth type error|
|40003|Response URL cannot be empty|
|40004|back_Url length cannot more than 100 characters|
|40005|Payment ID cannot be empty|
|40006|Payment ID error|
|40007|Not pre-auth transaction|
|40008|Capture failed|
|40009|Over capture period|
|40010|Remark cannot exceed 100 characters|
|40011|Card number cannot be empty|
|40012|Transaction can only be voided on the same day(Acquirer local time)|
|40013|Order number cannot be empty|
|40014|Cannot cancel the unsuccessful order|
|40015|The order doesn't exist|
|40016|This order doesn't support to be cancelled|
|40017|Exceeding the validity of the cancellation|
|40018|A Refund application has been submitted, transaction cant be void.|
|40019|Repeat request.|
|40020|Incorrect order amount format|
|40021|Capture/Void amount over order amount|
|40022|Partial amount void is not supported|
|40023|Partial amount capture is not supported|
|40024|Can not fill in the amount|
|40025|The funds of this account are not sufficient, transaction cant be void.|
|40026|Please upload the tracking number first.|
|49999|Operation failed, please try again.|
</div>


### 退款申请
<div className="table-container">
响应代码|响应说明|
| --- | --- |
|00|退款申请成功|
|01|传入对象为空|
|02|退款待处理，等待退款完成的通知|
|03|请求IP地址不在白名单中|
|04|传入参数不全|
|05|账户号错误|
|06|终端号错误|
|08|支付ID格式错误|
|09|退款金额大于交易金额|
|10|退款类型设置错误|
|11|退款信息参数错误|
|12|签名信息错误|
|13|订单状态非成功，不可申请退款|
|14|订单已冻结，不可申请退款|
|15|交易金额不正确|
|16|币种不正确|
|17|保证金已制表，不可申请退款|
|18|退款金额格式不正确|
|19|退款金额和退款类型不符|
|20|该通道不支持部分退款|
|21|划款已处理，不能退款|
|22|交易金额格式不正确|
|23|退款原因长度过长|
|24|交易未对账,不可申请退款|
|25|退款金额大于可退金额，不可申请退款|
|26|账户不能为空|
|27|终端号不能为空|
|28|支付ID不能为空|
|29|退款原因说明不能为空|
|30|退款金额不能为空|
|38|账户可能已清算或余额不足|
|39|错误的refund_number|
|40|refund_number状态为失败，不能申请退款|
|41|超过可接受的退款期限|
|42|请勿重复提交退款|
|43|退款参考号不正确|
|44|退款失败，客户账户异常|
|45|不在退款期限内，请联系客服|
|46|Discover若未在30天内撤销调单，升级拒付后不支持申诉；距离调单时间已超30天，不支持退款|
|97|退款失败，请稍后再试|
|98|无此交易|
|99|申请退款发生异常|
</div>


### 退款查询
<div className="table-container">
响应代码|响应说明|
| --- | --- |
|00|已退款|
|01|审核成功未处理|
|02|待审核|
|03|审核失败|
|04|退款编号不存在|
|05|签名信息错误|
|06|请求IP地址不在白名单中|
|100|账户不能为空|
|101|终端号不能为空|
|102|退款ID不能为空|
|92|没有交易记录|
|93|无效的退款编号|
|94|无效的账户|
|95|无效的终端号|
|96|传入参数不全或有误|
|97|无此交易|
|98|传入对象为空|
|99|查询退款发生异常|
</div>


### 物流单号上传
<div className="table-container">
响应代码|响应说明|
| --- | --- |
|0|上传失败|
|01|上传成功|
|02|账户号错误|
|03|终端号错误|
|04|签名校验失败|
|05|无效账户|
|06|物流单号错误|
|07|物流网址错误|
|08|上传人错误|
|09|支付ID错误|
|10|请求参数不完整|
|11|请求IP地址不在白名单中|
|12|支付ID不能为空|
|14|账户号不能为空|
|15|终端号不能为空|
|16|上传人不能为空|
|17|支付ID不存在|
|18|物流网址不能为空|
|19|网站订单号错误|
|20|物流单号已存在，不能重复提交|
|99|未知错误|
</div>






