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


## 通用请求头（所有接口必传）
这部分是所有接口都需要请求接口的通行令牌。s
<div className="table-container">
|参数名|类型|是否必填|描述|示例|
| --- | --- | --- | --- | --- |
|`Content-Type`|string|是|数据类型|application/json|
|`Authorization`|string|是|请求接口的通行令牌||
</div>


## webhook列表
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`cursor`|int|10|否|用于分页查询的游标||
|`limit`|int|5|否|查询条数||
|`webhook_name`|string|20|否|webhook名称||
|`webhook_url`|string|100|否|通知地址||
|`ascending`|boolean||否|是否升序——默认降序（true/false）||
</div>
  </TabItem>
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|状态码||
|`trace_id`|string|错误跟踪id||
|`data`|object|数据||
|`next_cursor`|string|分页游标||
|`has_more`|boolean|是否有下一页||  
|`data`|array|数据列表||
|`webhook_id`|int|webhook Id||  
|`webhook_name`|string|webhook名称||  
|`webhook_url`|string|通知地址||  
|`sign_secret`|string|签名密钥||  
|`creator_id`|int|创建人ID||  
|`creator_name`|string|创建人名称||  
|`create_time`|string|创建时间||  
|`operator_id`|int|更新人ID||  
|`operator_name`|string|更新人名称||  
|`operate_time`|string|更新时间||  
|`event_code`|string|事件code||  
|`event_type`|string|事件类型||  
|`event_description`|string|事件描述||  
</div>
  </TabItem>
</Tabs>

## 新增webhook
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`webhook_name`|string|20|是|webhook名称||
|`webhook_url`|string|100|否|通知地址||
</div>
  </TabItem>
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|状态码||
|`trace_id`|string|错误跟踪id||
|`data`|array|数据||
|`webhook_id`|int|webhook Id||
|`webhook_name`|string|webhook名称||
|`webhook_url`|string|通知地址||
|`sign_secret`|string|签名密钥||
|`creator_id`|int|创建人ID||
|`creator_name`|string|创建人名称||
|`create_time`|string|创建时间||
|`operator_id`|string|更新人ID||
|`operator_name`|string|更新人名称||
|`operate_time`|string|更新时间||
</div>
  </TabItem>
</Tabs>


## 更新webhook
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`webhook_name`|string|20|是|webhook名称||
|`webhook_url`|string|100|否|通知地址||
</div>
  </TabItem>
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|状态码||
|`trace_id`|string|错误跟踪id||
|`data`|array|数据||
|`webhook_id`|int|webhook Id||
|`webhook_name`|string|webhook名称||
|`webhook_url`|string|通知地址||
|`sign_secret`|string|签名密钥||
|`creator_id`|int|创建人ID||
|`creator_name`|string|创建人名称||
|`create_time`|string|创建时间||
|`operator_id`|string|更新人ID||
|`operator_name`|string|更新人名称||
|`operate_time`|string|更新时间||
</div>
  </TabItem>
</Tabs>



## 事件列表
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`cursor`|int|10|否|用于分页查询的游标——由上一次调用返回，首次调用不填||
|`limit`|int|10|否|查询条数||
|`event_type`|string|50|否|事件类型<br/><ul><li>card.transaction： 交易</li><li>card.load： 续额</li></ul>||
|`event_code`|string|20|否|事件编码<br/><ul><li>165801： 交易</li><li>165802： 续额</li></ul>||
|`ascending`|boolean||否|是否升序——默认降序（true/false）||
</div>
  </TabItem>
  
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`trace_id`|string|错误跟踪id||
|`data`|object|返回数据|| 
|`next_cursor`|string|分页游标||
|`has_more`|boolean|是否有下一页||
|`data`|array|数据列表||
|`event_id`|int|事件ID|| 
|`event_type`|string|事件类型<br/><ul><li>card.transaction： 交易</li><li>card.load： 续额</li></ul>||
|`event_category`|string|事件分类||
|`event_code`|string|事件编码<br/><ul><li>165801： 交易</li><li>165802： 续额</li></ul>||
|`event_description`|string|事件描述|| 
</div>
  </TabItem>
</Tabs>

## 事件订阅
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`event_type`|string|50|是|事件类型<br/><ul><li>card.transaction： 交易</li><li>card.load： 续额</li></ul>||
</div>
  </TabItem>
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|状态码||
|`trace_id`|string|错误跟踪id||
|`data`|array|数据||
|`webhook_id`|int|webhook Id||
|`webhook_name`|string|webhook名称||
|`webhook_url`|string|通知地址||
|`sign_secret`|string|签名密钥||
|`creator_id`|int|创建人ID||
|`creator_name`|string|创建人名称||
|`create_time`|string|创建时间||
|`operator_id`|string|更新人ID||
|`operator_name`|string|更新人名称||
|`operate_time`|string|更新时间||
|`event_type`|string|事件类型<br/><ul><li>card.transaction： 交易</li><li>card.load： 续额</li></ul>||
|`event_code`|string|事件编码<br/><ul><li>165801： 交易</li><li>165802： 续额</li></ul>||
|`event_description`|string|事件描述|| 
</div>
  </TabItem>
</Tabs>

## 事件取消订阅
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`event_type`|string|50|是|事件类型<br/><ul><li>card.transaction： 交易</li><li>card.load： 续额</li></ul>||
</div>
  </TabItem>
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|状态码||
|`trace_id`|string|错误跟踪id||
|`data`|array|数据||
|`webhook_id`|int|webhook Id||
|`webhook_name`|string|webhook名称||
|`webhook_url`|string|通知地址||
|`sign_secret`|string|签名密钥||
|`creator_id`|int|创建人ID||
|`creator_name`|string|创建人名称||
|`create_time`|string|创建时间||
|`operator_id`|string|更新人ID||
|`operator_name`|string|更新人名称||
|`operate_time`|string|更新时间||
|`event_type`|string|事件类型<br/><ul><li>card.transaction： 交易</li><li>card.load： 续额</li></ul>||
|`event_code`|string|事件编码<br/><ul><li>165801： 交易</li><li>165802： 续额</li></ul>||
|`event_description`|string|事件描述|| 
</div>
  </TabItem>
</Tabs>
