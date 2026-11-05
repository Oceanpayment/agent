---
sidebar_position: 1
sidebar_label: 参数说明
---

# 
import Modal from '@site/src/components/Modal';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
本文档详细描述了调用所有订单管理API接口时所需的通用参数、业务参数的格式、规则和要求。请在发起请求前仔细阅读。

## 调用流程
```mermaid
flowchart LR
    A[MERCHANT] --> B[按规则组装所有参数]
    B --> C[生成签名signValue]
    C --> D[向Oceanpayment发送请求]

    style A fill:#5B7FFF,stroke:#5B7FFF,stroke-width:1px,color:#fff,font-weight:bold,font-size:14px
    style B fill:#fff,stroke:#ddd,stroke-width:1px,color:#444,font-size:14px,font-weight:bold
    style C fill:#fff,stroke:#ddd,stroke-width:1px,color:#c33,font-size:14px,font-weight:bold
    style D fill:#02993b,stroke:#02993b,stroke-width:1px,color:#fff,font-weight:bold,font-size:14px

    linkStyle default stroke:#02993b,stroke-width:1px
```

## 通用参数（所有接口必传）
这部分是所有接口都需要的公共参数，通常与身份认证、签名和账单基础信息相关。
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`account`|string|6|是|Oceanpayment账户号||
|`terminal`|string|8-12|是|Oceanpayment终端号||
|`signValue`|string|64|是|[安全签名](/docs/compliance-and-security/sign/orders)，用于验证交易的安全性，使用SHA256加密||
</div>

## 订单状态查询
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`order_number`|string|1-50|是|网站订单号<br/>单次最大同时查询100笔交易，交易之间用“,”进行分隔 ||
</div>
  </TabItem>
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`signValue`|string|[安全签名](/docs/compliance-and-security/sign/orders)，用于验证交易的安全性，使用SHA256加密||
|`paymentInfo`|string|支付信息订单出现多个paymentInfo时，多个paymentInfo会按照交易时间进行倒序||
|`order_currency`|string|交易币种||  
|`order_amount`|string|交易金额||  
|`order_number`|string|网站订单号||  
|`order_notes`|string|订单备注信息，返回时则原样返回||  
|`methods`|string|支付方式代码||  
|`order_currency`|string|订单号的交易币种||  
|`payment_details`|string|该笔交易的支付详情||  
|`order_amount`|string|订单号的交易金额||  
|`payment_dateTime`|string|交易时间<ul><li>格式： yyyy-mm-dd HH:mm:ss</li></ul>||  
|`order_sourceUrl`|string|订单来源URL||  
|`payment_id`|string|支付ID，Oceanpayment的支付唯一单号||  
|`payment_results`|string|[对账结果](/docs/response-code/order#订单状态查询)||  
|`payment_details`|string|该笔交易的支付详情||  
|`payment_risk`|string|未通过的风控规则||  
|`payment_authCode`|string|这笔交易的授权码，非信用卡交易返回为空||  
|`payment_eci`|string|ECI值||  
|`payment_dateTime`|string|支付日期时间<ul><li>GMT+8</li><li>格式： yyyy-mm-dd HH:mm:ss</li></ul>||  
|`auth_status`|string|预授权状态<ul><li>0: 非预授权交易 </li><li>1: 撤销授权</li><li>2: 待处理</li><li>3: 授权成功</li></ul>||  
|`payment_debitTime`|string|记账时间<ul><li>GMT+8</li><li>格式： yyyy-mm-dd HH:mm:ss</li></ul>||  
|`pay_barCode`|string|订单打印码/微信/支付宝支付流水号||  
|`refund_status`|string|退款状态<ul><li>0: 未退款</li><li>1: 已退款</li></ul>|| 
|`refundList`|string|<Modal triggerText="refundList退款节点信息" modalTitle="refundList退款节点信息"><table><thead><tr><th>参数名</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>`refundInfo`</td><td>string</td><td>节点</td><td></td></tr><tr><td>`refund_id`</td><td>string</td><td>退款ID，Oceanpayment的唯一退款编号</td><td></td></tr><tr><td>`refund_number`</td><td>string</td><td>商户网站系统内部的退款流水号</td><td></td></tr><tr><td>`refund_amount`</td><td>string</td><td>退款金额</td><td></td></tr><tr><td>`refund_reference`</td><td>string</td><td>商户网站系统内部的退款参考号</td><td></td></tr></tbody></table></Modal>||
|`chargeBack_status`|string|拒付状态<ul><li>0: 未拒付</li><li>1: 已拒付</li></ul>||
|`chargeBackList`|string|<Modal triggerText="chargeBackList拒付节点信息" modalTitle="chargeBackList拒付节点信息"><table><thead><tr><th>参数名</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>`chargeBackInfo`</td><td>string</td><td>节点</td><td></td></tr><tr><td>`chargeBack_id`</td><td>string</td><td>拒付ID，Oceanpayment的唯一退款编号</td><td></td></tr><tr><td>`chargeBack_amount`</td><td>string</td><td>拒付金额</td><td></td></tr><tr><td>`chargeBack_details`</td><td>string</td><td>拒付原因</td><td></td></tr><tr><td>`chargeBack_reasoncode`</td><td>string</td><td>拒付原因代码</td><td></td></tr><tr><td>`chargeBack_description`</td><td>string</td><td>拒付原因描述</td><td></td></tr><tr><td>`chargeBack_date`</td><td>string</td><td>拒付时间<ul><li>格式： yyyy-mm-dd HH:mm:ss</li></ul></td><td></td></tr><tr><td>`chargeBack_deadline`</td><td>string</td><td>回复截止时间<ul><li>格式： yyyy-mm-dd HH:mm:ss</li></ul></td><td></td></tr><tr><td>`chargeBack_accept`</td><td>string</td><td>在账户后台对该笔拒付记录进行操作接受后的状态<ul><li>0: 未接受或超过截止时间</li><li>1：已接受</li></ul></td><td></td></tr></tbody></table></Modal>|| 
|`duplicate_status`|string|重复状态<br/>相同终端号下，当30天内存在大于2笔成功/预授权待处理交易时返回1，否则返回0<ul><li>0: 无</li><li>1: 有</li></ul>||  
|`transactionList`|string|<Modal triggerText="transactionList交易节点信息" modalTitle="transactionList交易节点信息"><table><thead><tr><th>参数名</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>`transactionInfo`</td><td>string</td><td>节点<br/>订单出现多个transactionInfo时，<br/>多个transactionInfo会按照交易时间进行倒序</td><td></td></tr><tr><td>`payment_id`</td><td>string</td><td>支付ID，Oceanpayment的支付唯一单号</td><td></td></tr><tr><td>`order_currency`</td><td>string</td><td>交易币种</td><td></td></tr><tr><td>`order_amount`</td><td>string</td><td>交易金额</td><td></td></tr><tr><td>`order_notes`</td><td>string</td><td>订单备注信息，返回时则原样返回</td><td></td></tr><tr><td>`methods`</td><td>string</td><td>支付方式</td><td></td></tr><tr><td>`payment_status`</td><td>string</td><td>交易的结果状态<ul><li>-1: 待处理</li><li>0:支付失败</li><li>1: 支付成功</li></ul></td><td></td></tr><tr><td>`payment_details`</td><td>string</td><td>交易的支付详情</td><td></td></tr><tr><td>`payment_dateTime`</td><td>string</td><td>交易时间<ul><li>格式: yyyy-mm-dd HH:mm:ss</li></ul></td><td></td></tr><tr><td>`payment_dateTime`</td><td>string</td><td>记账时间<ul><li>格式: yyyy-mm-dd HH:mm:ss</li></ul></td><td></td></tr></tbody></table></Modal>||   
|`update_status`|string|更新状态<ul><li>0: 未更新</li><li>1: 已更新</li></ul>||  
|`networkToken`|string|<Modal triggerText="networkToken节点信息" modalTitle="networkToken节点信息"><table><thead><tr><th>参数名</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>`networkToken`</td><td>string</td><td>节点</td><td></td></tr><tr><td>`create_status`</td><td>string</td><td>Token创建状态<ul><li>1: 成功</li><li>0: 失败</li><li>2: 无需创建token</li><li>3: 非Network Token交易</li></ul></td><td></td></tr><tr><td>`recurring_type`</td><td>string</td><td>Token交易类型（订阅）<ul><li>1: 首次交易</li><li>2: 续费交易</li><li>0: 非订阅交易</li></ul></td><td></td></tr></tbody></table></Modal>||  
|`payment_authType`|string|交易类型<ul><li>0: 该交易类型为‘Sale’一般交易</li><li>1: 该交易类型为‘预授权且非3D’交易</li><li>2: 该交易类型为‘3D且非预授权’交易</li><li>3: 该交易类型为‘3D且预授权’交易</li></ul>||  
|`threeDSecure`|string|<Modal triggerText="threeDSecure3D节点信息" modalTitle="threeDSecure3D节点信息"><table><thead><tr><th>参数名</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>`threeDSecure`</td><td>string</td><td>节点</td><td></td></tr><tr><td>`version`</td><td>string</td><td>3D版本</td><td></td></tr><tr><td>`challenge`</td><td>string</td><td>3D交易是否有摩擦<ul><li>Y: 有摩擦</li><li>N: 无摩擦</li></ul></td><td></td></tr></tbody></table></Modal>|| 
|`pay_typeCode`|string|钱包返回类型，仅支付宝和微信支付会返回||
</div>
  </TabItem>
</Tabs>

## 成功订单查询
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`order_beginDate`|string|19|是|开始时间<ul><li>格式：yyyy-mm-dd HH:mm:ss</li></ul>||
|`order_endDate`|string|19|是|结束时间<ul><li>格式：yyyy-mm-dd HH:mm:ss</li></ul>||
|`pages`|string|5|否|分页||
</div>
  </TabItem>
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`signValue`|string|[安全签名](/docs/compliance-and-security/sign/orders)，用于验证交易的安全性，使用SHA256加密||
|`results`|string|[支付结果](/docs/response-code/order#成功状态查询)||
|`details`|string|结果详情||
|`count`|string|总笔数||
|`totalpages`|string|总页数||
|`pages`|string|当前页||
|`orderInfo`|string|<Modal triggerText="orderInfo订单节点信息" modalTitle="orderInfo订单节点信息"><table><thead><tr><th>参数名</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>`orderInfo`</td><td>string</td><td>节点</td><td></td></tr><tr><td>`account`</td><td>string</td><td>账户号</td><td></td></tr><tr><td>`terminal`</td><td>string</td><td>终端号</td><td></td></tr><tr><td>`payment_id`</td><td>string</td><td>支付ID，Oceanpayment的支付唯一单号</td><td></td></tr><tr><td>`order_number`</td><td>string</td><td>网站订单号</td><td></td></tr><tr><td>`order_currency`</td><td>string</td><td>交易币种</td><td></td></tr><tr><td>`order_amount`</td><td>string</td><td>交易金额</td><td></td></tr><tr><td>`methods`</td><td>string</td><td>支付方式</td><td></td></tr><tr><td>`payment_dateTime`</td><td>string</td><td>支付日期时间<ul><li>格式: yyyy-mm-dd HH:mm:ss</li></ul></td><td></td></tr></tbody></table></Modal>|| 
</div>
  </TabItem>
</Tabs>


## 业务订单查询
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`order_beginDate`|string|19|是|开始时间<ul><li>格式：yyyy-mm-dd HH:mm:ss</li></ul>||
|`order_endDate`|string|19|是|结束时间<ul><li>格式：yyyy-mm-dd HH:mm:ss</li></ul>||
|`pages`|string|5|否|分页||
|`count`|string|3|否|每页返回笔数<br/>默认10<ul><li>10: 10笔</li><li>50: 50笔</li><li>100: 100笔</li></ul>||
|`date_type`|string|3|否|时间类型<br/>默认0<ul><li>0: 复核时间</li><li>1: 交易时间</li><li>2: 异常时间</li></ul>||
</div>
  </TabItem>
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`signValue`|string|[安全签名](/docs/compliance-and-security/sign/orders)，用于验证交易的安全性，使用SHA256加密||
|`results`|string|[结果代码](/docs/response-code/order#业务订单查询)||
|`details`|string|结果详情||
|`count`|string|总笔数||
|`totalpages`|string|总页数||
|`pages`|string|当前页||
|`orderInfo`|string|<Modal triggerText="orderInfo订单节点信息" modalTitle="orderInfo订单节点信息"><table><thead><tr><th>参数名</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>`orderInfo`</td><td>string</td><td>节点</td><td></td></tr><tr><td>`account`</td><td>string</td><td>账户号</td><td></td></tr><tr><td>`terminal`</td><td>string</td><td>终端号</td><td></td></tr><tr><td>`type`</td><td>string</td><td>业务类型<ul><li>refund: 全额退款</li><li>partialRefund: 部分金额退款</li><li>chargeback: 拒付</li><li>re-presentment: 申诉</li><li>retrieval: 调单</li><li>reversal-retrieval: 撤销调单</li><li>fraud: 伪冒</li></ul></td><td></td></tr><tr><td>`payment_id`</td><td>string</td><td>支付ID，Oceanpayment的支付唯一单号</td><td></td></tr><tr><td>`order_number`</td><td>string</td><td>网站订单号</td><td></td></tr><tr><td>`order_currency`</td><td>string</td><td>交易币种</td><td></td></tr><tr><td>`order_amount`</td><td>string</td><td>交易金额</td><td></td></tr><tr><td>`methods`</td><td>string</td><td>支付方式</td><td></td></tr><tr><td>`payment_dateTime`</td><td>string</td><td>支付日期时间<ul><li>格式: yyyy-mm-dd HH:mm:ss</li></ul></td><td></td></tr></tbody></table></Modal>|| 
</div>
  </TabItem>
</Tabs>



## 争议订单查询
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`order_beginDate`|string|19|是|开始时间<ul><li>格式：yyyy-mm-dd HH:mm:ss</li></ul>||
|`order_endDate`|string|19|是|结束时间<ul><li>格式：yyyy-mm-dd HH:mm:ss</li></ul>||
|`notice_type`|string|0-50|否|争议类型<ul><li>默认查询所有</li><li>disputes-period: 宽限期</li><li>dispute: 争议</li></ul>||
|`payment_id`|string|0-50|否|支付ID，Oceanpayment的支付唯一单号||
|`order_number`|string|0-50|否|网站订单号||
</div>
  </TabItem>
  
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`signValue`|string|[安全签名](/docs/compliance-and-security/sign/orders)，用于验证交易的安全性，使用SHA256加密||
|`results`|string|[结果代码](/docs/response-code/order#争议订单查询)||
|`details`|string|结果详情||
|`count`|string|总笔数||
|`totalpages`|string|总页数||
|`pages`|string|当前页||
|`orderInfo`|string|<Modal triggerText="orderInfo订单节点信息" modalTitle="orderInfo订单节点信息"><table><thead><tr><th>参数名</th><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>`orderInfo`</td><td>string</td><td>节点</td><td></td></tr><tr><td>`account`</td><td>string</td><td>账户号</td><td></td></tr><tr><td>`terminal`</td><td>string</td><td>终端号</td><td></td></tr><tr><td>`methods`</td><td>string</td><td>支付方式</td><td></td></tr><tr><td>`payment_id`</td><td>string</td><td>支付ID，Oceanpayment的支付唯一单号</td><td></td></tr><tr><td>`order_number`</td><td>string</td><td>网站订单号</td><td></td></tr><tr><td>`order_currency`</td><td>string</td><td>交易币种</td><td></td></tr><tr><td>`order_amount`</td><td>string</td><td>交易金额</td><td></td></tr><tr><td>`notice_type`</td><td>string</td><td>争议类型<ul><li>dispute: 争议</li><li>disputes-period: 宽限期</li></ul></td><td></td></tr><tr><td>`push_details`</td><td>string</td><td>异常原因<ul><li>goods_not_received: 服务未提供或未收到商品</li><li>return: 退款/退货</li><li>incorrect_invoice: 已取消的商品/服务</li><li>already_paid: 重复交易</li><li>faulty-goods: 货不对版/货物损坏</li><li>pandemic_impact: 受新冠疫情影响</li><li>unauthorized_purchase: 未授权交易</li></ul></td><td></td></tr><tr><td>`is_refund`</td><td>string</td><td>是否退款<ul><li>1: 是</li><li>2: 否</li></ul></td><td></td></tr><tr><td>`refund_amount`</td><td>string</td><td>退款金额</td><td></td></tr><tr><td>`refund_currency`</td><td>string</td><td>退款币种</td><td></td></tr><tr><td>`is_chargeBack`</td><td>string</td><td>是否拒付<ul><li>1: 是</li><li>2: 否</li></ul></td><td></td></tr><tr><td>`chargeBack_currency`</td><td>string</td><td>拒付币种</td><td></td></tr><tr><td>`referrer`</td><td>string</td><td>来源网址</td><td></td></tr><tr><td>`comment`</td><td>string</td><td>comment</td><td></td></tr><tr><td>`transaction_time`</td><td>string</td><td>交易时间</td><td></td></tr><tr><td>`order_krn`</td><td>string</td><td>krn</td><td></td></tr><tr><td>`billing_zip`</td><td>string</td><td>账单邮编</td><td></td></tr><tr><td>`billing_address`</td><td>string</td><td>账单地址</td><td></td></tr><tr><td>`billing_city`</td><td>string</td><td>城市</td><td></td></tr><tr><td>`billing_state`</td><td>string</td><td>州</td><td></td></tr><tr><td>`billing_country`</td><td>string</td><td>账单国</td><td></td></tr><tr><td>`tracking_number`</td><td>string</td><td>跟踪单号</td><td></td></tr><tr><td>`appeal_status`</td><td>string</td><td>是否争议申诉<ul><li>0:未申诉</li><li>1:争议申诉中</li></ul></td><td></td></tr><tr><td>`website`</td><td>string</td><td>交易网址</td><td></td></tr><tr><td>`comments_history`</td><td>string</td><td>备注记录</td><td></td></tr><tr><td>`status`</td><td>string</td><td>处理状态<ul><li>0: 未处理</li><li>1: 已处理</li><li>2: 无需处理</li></ul></td><td></td></tr><tr><td>`abnormal_amount`</td><td>string</td><td>异常金额</td><td></td></tr><tr><td>`abnormal_currency`</td><td>string</td><td>异常币种</td><td></td></tr><tr><td>`disputes_date`</td><td>string</td><td>争议时间</td><td></td></tr><tr><td>`reply_deadline`</td><td>string</td><td>回复截止时间</td><td></td></tr><tr><td>`disputes_times`</td><td>string</td><td>争议次数</td><td></td></tr><tr><td>`disputes_period_beginDate`</td><td>string</td><td>宽限期开始时间</td><td></td></tr><tr><td>`disputes_period_endDate`</td><td>string</td><td>宽限期结束时间</td><td></td></tr></tbody></table></Modal>|| 
</div>
  </TabItem>
</Tabs>


## 预授权管理
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`payment_id`|string|1-50|是|支付ID，Oceanpayment的支付唯一单号||
|`order_amount`|string|0-50|否|授权金额<ul><li>不传金额时视为全额处理 </li></ul>||
|`payment_authType`|string|1|是|授权操作<br/>对已预授权交易执行 Capture（完成扣款）或 Void（撤销）操作<ul><li>1: 完成扣款（Capture）</li><li>2: 撤销（Void）</li><li>3: 撤单（仅支持微信、支付宝线下场景）</li></ul>||
</div>
 </TabItem>
  
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`signValue`|string|[安全签名](/docs/compliance-and-security/sign/orders)，用于验证交易的安全性，使用SHA256加密||
|`order_number`|string|网站订单号||
|`payment_id`|string|支付ID，Oceanpayment的支付唯一单号 ||
|`payment_status`|string|操作状态<ul><li>1: 成功</li><li>0: 失败</li></ul>||
|`payment_details`|string|[结果详情](/docs/response-code/order#预授权)||
</div>
  </TabItem>
</Tabs>

## 退款申请
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`payment_id`|string|0-50|是|支付ID，Oceanpayment的支付唯一单号||
|`refund_number`|string|0-50|否|商户网站系统内部的退款流水号||
|`refund_type`|string|1|是|退款类型<ul><li>1: 全额退款</li><li>2: 部分退款</li></ul>||
|`refund_amount`|string|1-10|是|退款金额||
|`refund_description`|string|1-100|是|退款原因说明||
|`refund_reference`|string|0-50|否|商户网站系统内部的退款参考号||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`signValue`|string|[安全签名](/docs/compliance-and-security/sign/orders)，用于验证交易的安全性，使用SHA256加密||
|`payment_id`|string|支付ID，Oceanpayment的支付唯一单号 ||
|`order_number`|string|交易订单号||
|`refund_number`|string|商户网站系统内部的退款流水号 ||
|`refund_id`|string|退款ID，Oceanpayment的唯一退款编号 ||
|`refund_results`|string|[退款申请结果 ](/docs/response-code/order#退款申请)||
|`refund_description`|string|退款原因说明||
|`refund_reference`|string|商户网站系统内部的退款参考号||
</div>
  </TabItem>
</Tabs>
   

## 退款查询
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`refund_id`|string|1-500|二选一|退款ID，Oceanpayment的唯一退款编号 ||
|`refund_number`|string|1-50|二选一|商户网站系统内部的退款流水号||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`signValue`|string|[安全签名](/docs/compliance-and-security/sign/orders)，用于验证交易的安全性，使用SHA256加密||
|`refund_id`|string|退款ID，Oceanpayment的唯一退款编号||
|`refund_number`|string|商户网站系统内部的退款流水号<br/>有传refund_number时，会原样返回 ||
|`refund_queryNo`|string|退款凭证 发卡银行端提供的退款凭证号码，并非所有发卡行都会进行提供||
|`refund_check`|string|退款查询[结果代码](/docs/response-code/order#退款查询)||
|`refund_description`|string|退款查询原因说明||
</div>
  </TabItem>
</Tabs>


## 物流单号上传
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`payment_id`|string|1-50|二选一|支付ID，Oceanpayment的支付唯一单号<ul><li>与`order_number`二选一</li></ul>||
|`order_number`|string|1-50|二选一|网站订单号<ul><li>与`payment_id`二选一</li></ul> ||
|`tracking_number`|string|1-200|否|物流单号相同的支付ID再次上传会覆盖上一次的物流单号物流单号<ul><li>相同的`payment_id`再次上传会覆盖上一次的物流单号</li><li>如果一笔订单存在多个物流单号用“，”分隔 </li></ul>||
|`tracking_site`|string|1-100|是|查询物流信息的网站||
|`tracking_handler`|string|1-15|是|物流信息添加人||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`signValue`|string|[安全签名](/docs/compliance-and-security/sign/orders)，用于验证交易的安全性，使用SHA256加密||
|`payment_id`|string|支付ID，Oceanpayment的支付唯一单号||
|`tracking_results`|string|物流[上传结果](/docs/response-code/order#物流单号上传)||
</div>
  </TabItem>
</Tabs>


## 海关上送
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`type`|string|0-500|否|类型<br/>每笔订单只能成功发起一次海关上送请求，如需要重推请发送`type`=2<ul><li>1: 海关上送</li><li>2: 重新上送(重推)</li></ul>||
|`payment_id`|string|0-50|否|支付ID，Oceanpayment的支付唯一单号||
|`pay_userId`|string|0-50|否|身份证||
|`pay_userName`|string|0-50|否|姓名||
|`price`|string|1-100|是|商品单价||
|`total_amount`|string|1-100|是|总价||
|`customs`|string|1-100|是|<Modal triggerText="海关代码" modalTitle="海关代码"><table><thead><tr><th>海关代码</th><th>海关名称</th><th>微信</th><th>支付宝</th></tr></thead><tbody><tr><td>`01`</td><td>总署</td><td>不支持</td><td>支持</td></tr><tr><td>`02`</td><td>广州（总署版）</td><td>支持</td><td>不支持</td></tr><tr><td>`03`</td><td>广州海关（机场）</td><td>不支持</td><td>支持</td></tr><tr><td>`04`</td><td>广州海关（南沙）</td><td>支持</td><td>支持</td></tr><tr><td>`05`</td><td>广州海关（黄埔）</td><td>支持</td><td>支持</td></tr><tr><td>`06`</td><td>郑州</td><td>支持</td><td>不支持</td></tr><tr><td>`07`</td><td>郑州综保（总署版） </td><td>支持</td><td>不支持</td></tr><tr><td>`08`</td><td>郑州经开</td><td>不支持</td><td>不支持</td></tr><tr><td>`09`</td><td>郑州综合</td><td>不支持</td><td>不支持</td></tr><tr><td>`10`</td><td>新郑综合保税区（空港）</td><td>不支持</td><td>支持</td></tr><tr><td>`11`</td><td>重庆</td><td>支持</td><td>不支持</td></tr><tr><td>`12`</td><td>上海（总署版）</td><td>支持</td><td>支持</td></tr><tr><td>`13`</td><td>深圳</td><td>支持</td><td>不支持</td></tr><tr><td>`14`</td><td>天津</td><td>支持</td><td>不支持</td></tr><tr><td>`15`</td><td>河南保税物流中心</td><td>不支持</td><td>支持</td></tr><tr><td>`16`</td><td>浙江口岸(杭州) </td><td>不支持</td><td>不支持</td></tr><tr><td>`17`</td><td>杭州（总署版）</td><td>支持</td><td>支持</td></tr><tr><td>`18`</td><td>宁波</td><td>支持</td><td>不支持</td></tr></tbody></table></Modal>||
|`customs_number`|string|1-100|是|商户海关备案号||
|`customs_name`|string|1-100|是|商户海关备案名称||
|`sub_order_number`|string|0-100|否|商户子订单号，拆单时必传||
|`shipping_fee`|string|1-100|是|物流费||
|`order_notes`|string|0-500|否|备注||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`signValue`|string|[安全签名](/docs/compliance-and-security/sign/orders)，用于验证交易的安全性，使用SHA256加密||
|`payment_id`|string|支付ID，Oceanpayment的支付唯一单号||
|`type`|string|类型||
|`status`|string|上送状态<ul><li>0: 失败</li><li>1: 成功</li><li>2: 待处理</li></ul>上送结果通过[异步进行推送](/docs/webhook/payments/customs-upload)||
|`details`|string|详情说明||
</div>
  </TabItem>
</Tabs>


## 健康检查
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`site`|string|1-500|是|网站当前使用的主域名，不带https:// ||
|`key`|string|0-256|否|Oceanpayment公钥||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`results`|string|校验结果<ul><li>1: 存在记录且状态为已复核(正常)，可能会存在多条记录的情况，只要其中一条状态为已复核(正常)即视为1</li><li>2: 存在记录且全部状态为非已复核(正常)</li><li>0: 不存在记录</li></ul>||
|`site`|string|网址，原样返回|
</div>
  </TabItem>
</Tabs>


## 卡BIN校验
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`card_bin`|array|-|是|前6位卡BIN,单次最大同时查询 100个卡号||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`list`|string|每个卡BIN的结果组成数组||
|`check_results`|string|卡BIN的校验结果<ul><li>1:成功匹配</li><li>0:无法识别</li></ul>||
|`card_bin`|string|前6位卡BIN，原样返回||
|`card_type`|string|卡种名称||
|`card_country`|string|卡种国家||
</div>
  </TabItem>
</Tabs>
