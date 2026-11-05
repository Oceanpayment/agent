---
sidebar_position: 1
sidebar_label: 参数说明
---

# 
import Modal from '@site/src/components/Modal';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
本文档详细描述了使用OPCCOUNT接口时所需的通用参数、业务参数的格式、规则和要求。请在发起请求前仔细阅读。

## 调用流程
```mermaid
flowchart LR
    A[MERCHANT] --> B[按规则组装所有参数]
    B --> C[生成签名Sign]
    C --> D[向Oceanpayment发送请求]

    style A fill:#5B7FFF,stroke:#5B7FFF,stroke-width:1px,color:#fff,font-weight:bold,font-size:14px
    style B fill:#fff,stroke:#ddd,stroke-width:1px,color:#444,font-size:14px,font-weight:bold
    style C fill:#fff,stroke:#ddd,stroke-width:1px,color:#c33,font-size:14px,font-weight:bold
    style D fill:#02993b,stroke:#02993b,stroke-width:1px,color:#fff,font-weight:bold,font-size:14px

    linkStyle default stroke:#02993b,stroke-width:1px
```

## 通用请求头（所有接口必传）
这部分是所有接口都需要的公共参数，通常与身份认证、签名和账单基础信息相关。
<div className="table-container">
|参数名|类型|是否必填|描述|示例|
| --- | --- | --- | --- | --- |
|`Content-Type`|string|是|数据类型|application/json|
|`Opccount-No`|string|是|OPCCOUNT号|VA995149|
|`Va-Code`|int|是|商户唯一值，由oceanpayment提供|9435762187450928365|
|`Sign`|string|是|加密值|ckQHqFTsawqHScEhxuovywiXTJMio9F0a62qdh/mIONvwWXzfdNFM4cl/2UN490VER64wmw18wOWsgHH/mKL7L+uu5jRQcLkYbwE5CfQEj6g2jHewa70b2zStZPes4DRrgRwLzK+vqwzdP0jifrRYbrB6qVjS8gD4RyGort/Ju1mfaVjJNgPlUWehDJPWPz5MAU/dRpB6ChX7IwjJm4cV/jUqZvOJMDqMov8H5kMyi7g0Jx7LVHIqx9O3Cjn+k+FASpJNNOnv7m5JjvdJkJYXgMC3pGK+uBc+hfHnc20piuz7KxDeQDtaAY9IXCWkPx8BcQaru1HMQgXmBicS85YkQ==|
|`Timestamp`|int|是|时间戳|1694482115|
</div>

## 加密
- 签名方式：使用`sha256WithRSA`，在线生成公私钥对 ，生成位数：2048位(bit)，请将生成的公钥提供给Oceanpayment技术支持，私钥保留作为加密传参。
- 签名参数说明：除上传的附件以外，所有的body请求参数按字典排序+`timestamp`，`timestamp`与请求头时间戳一致。
<Tabs> 
  <TabItem value="Resquest" label="Header" default>
```php
$privateKey = "xxxx";//私钥
//字典排序
$sign_data={"billCurrency": ['USD'],"endDate": "2025-02-12 23:59:49","pageNum": 1,"pageSize": 1,"startDate": "2025-02-12 18:59:49","timestamp": "1694482115"};
$key = openssl_get_privatekey($privateKey);
openssl_sign($sign_data, $signature, $key, OPENSSL_ALGO_SHA256);
openssl_free_key($key);
$sign = base64_encode($signature);
```
	</TabItem>  
</Tabs>

## 账户资金
### 资金明细查询
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`pageNum`|int|5|否|当前页码<ul><li>默认为1</li></ul>||
|`pageSize`|int|5|否|每页容量<ul><li>默认为10</li></ul>||
|`startDate`|int|19|否|开始时间<ul><li>格式为yyyy-MM-dd HH:mm:ss，与结束时间之间间隔不能超过一年</li></ul>||
|`endDate`|int|19|否|结束时间<ul><li>格式为yyyy-MM-dd HH:mm:ss，与开始时间两者之间间隔不能超过一年</li></ul>||
|`billCurrency`|array||否|币种集合<ul><li>AUD</li><li>HKD</li><li>CHF</li><li>SGD</li><li>JPY</li><li>EUR</li><li>GBP</li><li>USD</li><li>CAD</li><li>NZD</li><li>ZAR</li><li>CNY</li></ul>||
</div>
  </TabItem>
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|状态码||
|`data`|object|数据||
|`total`|int|总数||
|`pages`|int|总页数||  
|`pageSize`|int|每页容量||
|`pageNum`|int|页码||  
|`list`|array|每页的数据||  
|`fundType`|int|资金类型<ul><li>1： 交易划款</li><li>2： 保证金划款</li><li>3： 冻结操作</li><li>4： 提现</li><li>5： 其他</li><li>6： 退回</li><li>7： 退回</li><li>8： 取消</li></ul>||  
|`amount`|int|账户金额||  
|`movingAccountCurrency`|string|动账币种||  
|`withdrawalAmount`|int|可提现金额||  
|`congealAmount`|int|冻结金额||  
|`movingAccountType`|int|动账类型<ul><li>1： 转入</li><li>2： 转出</li></ul>||  
|`operateTime`|string|动账时间<ul><li>格式为：yyyy-MM-dd HH:mm:ss</li></ul>||  
|`billCurrency`|string|账单币种||  
|`movingAccountAmount`|string|动账金额||  
|`applicationType`|int|代付账户类型<ul><li>1： 代付至OPCCOUNT</li><li>2： 代付至虚拟账户</li></ul>||  
|`senderPartyName`|string|付款方信息||  
</div>
  </TabItem>
</Tabs>

### 查询余额
<Tabs> 
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|状态码||
|`data`|object|数据||
|`currency`|string|OPCCOUNT币种||
|`amount`|string|OPCCOUNT金额||
|`withdrawalAmount`|string|可提现金额||
|`congealAmount`|string|冻结金额||
</div>
  </TabItem>
</Tabs>

## 提现账户
### 查询提现账户列表
<Tabs> 
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|object|数据||
|`bankAccount`|string|收款方银行账号||
|`withdrawalAccountKey`|string|提现账户ID||
|`isRecord`|int|是否已备案<ul><li>0： 未备案</li><li>1： 已备案</li><li>2： 无需备案</li></ul>||
|`currency`|string|账户提现币种||
|`bankName`|string|银行名称||
|`bankHolder`|string|银行开户名称||
|`type`|int|银行账户类型<ul><li>1： 公司账户</li><li>2： 个人账户</li></ul>|| 
|`status`|int|状态<ul><li>-1： 审核中</li><li>0： 审核失败</li><li>1： 正常</li></ul>|| 
</div>
  </TabItem>
</Tabs>



### 新增提现账户
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`bankHolder`|string|200|是|收款方开户名||
|`bankName`|string|200|是|收款方开户银行||
|`bankAccount`|string|200|是|银行账号||
|`settlementNumber`|string|200|是|证件号<ul><li>swiftCode的五六位等于NZ或者PE的时候必填</li></ul>||
|`settlementType`|string|278|否|证件类型<br/>swiftCode的五六位等于NZ或者PE的时候必填<ul><li>1： 身份证</li><li>2： 营业执照号（通用）</li><li>8： 统一社会信用代码（三证合一企业）</li><li>9： 组织结构代码（其他企业）</li></ul>||
|`bankHolderPhone`|string|200|否|银行预留手机号||
|`bankAddress`|string|200|是|银行地址<ul><li>当提现币种不等于CNY的时候必填</li></ul>||
|`address`|string|200|否|收款方地址||
|`province`|string|200|是|收款方汇入省<ul><li>当提现币种等于USD的时候必填</li></ul>||
|`city`|string|200|是|收款方城市<ul><li>当提现币种等于USD的时候必填</li></ul>||
|`zipcode`|string|200|是|邮编<ul><li>当提现币种等于USD的时候必填</li></ul>||
|`currency`|string|3|是|提现币种||
|`type`|int|1|是|银行账户类型<br/>香港主体才有公司账户<ul><li>1： 公司账户</li><li>2： 个人账户</li></ul>||
|`swiftCode`|string|20|是|SWIFT CODE<ul><li>非CNY需要必填</li></ul>||
|`bankProvince`|string|200|否|银行所在省||
|`bankCity`|string|200|否|银行所在市||
|`bankCode`|string|200|否|银行所在国家区域<ul><li>ID等于152必填</li></ul>||
|`branchCode`|string|200|否|BRANCH CODE<ul><li>`swiftCode`查询匹配字段列表存在`branchCode`必填</li></ul>||
|`ibanNumber`|string|278|否|IBAN Number<ul><li>提现币种等于EUR或GBP或TRY且国家区域是欧洲时必填</li></ul>||
|`abaNumber`|string|278|否|ABA Number<ul><li>提现币种等于USD或CAD且国家区域是美国时必填</li></ul>||
|`bsbNumber`|string|278|否|BSB Number<ul><li>提现币种等于AUD 且国家信息是澳洲时必填</li></ul>||
|`sortCode`|string|6|是|Sort code<ul><li>`swiftCode`查询匹配字段列表存在`sortCode`必填</li></ul>||
|`clabe`|string|18|否|Clabe<ul><li>`swiftCode`查询匹配字段列表存在`clabe`必填</li></ul>||
|`beneficiaryMsisdn`|string|6|是|收款人手机号（国际格式）<ul><li>当swiftCode的五六位等于JP的时候必填</li></ul>||
|`fileList`|object||是|文件列表||
</div>
  </TabItem>
  
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|object|返回数据|| 
</div>
  </TabItem>
</Tabs>


### 修改提现账户
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`bankHolder`|string|200|是|收款方开户名||
|`bankName`|string|200|是|收款方开户银行||
|`bankAccount`|string|200|是|银行账号||
|`settlementNumber`|string|200|是|证件号<ul><li>`swiftCode`的五六位等于NZ或者PE的时候必填</li></ul>||
|`settlementType`|string|278|否|证件类型<br/>`swiftCode`的五六位等于NZ或者PE的时候必填<ul><li>1： 身份证</li><li>2： 营业执照号（通用）</li><li>8： 统一社会信用代码（三证合一企业）</li><li>9： 组织结构代码（其他企业）</li></ul>||
|`bankHolderPhone`|string|200|否|银行预留手机号||
|`bankAddress`|string|200|是|银行地址<ul><li>当提现币种不等于CNY的时候必填</li></ul>||
|`address`|string|200|否|收款方地址||
|`province`|string|200|是|收款方汇入省<ul><li>当提现币种等于USD的时候必填</li></ul>||
|`city`|string|200|是|收款方城市<ul><li>当提现币种等于USD的时候必填</li></ul>||
|`zipcode`|string|200|是|邮编<ul><li>当提现币种等于USD的时候必填</li></ul>||
|`currency`|string|3|是|提现币种||
|`type`|int|1|是|银行账户类型<br/>香港主体只有公司账户<ul><li>1： 公司账户</li><li>2： 个人账户</li></ul>||
|`swiftCode`|string|20|是|SWIFT CODE<ul><li>非CNY需要必填</li></ul>||
|`bankProvince`|string|200|否|银行所在省||
|`bankCity`|string|200|否|银行所在市||
|`bankCode`|string|200|否|银行所在国家区域<ul><li>ID等于152必填</li></ul>||
|`branchCode`|string|200|否|BRANCH CODE<ul><li>`swiftCode`查询匹配字段列表存在`branchCode`必填</li></ul>||
|`ibanNumber`|string|278|否|IBAN Number<ul><li>提现币种等于EUR或GBP或TRY且国家区域是欧洲时必填</li></ul>||
|`abaNumber`|string|278|否|ABA Number<ul><li>提现币种等于USD或CAD且国家区域是美国时必填</li></ul>||
|`bsbNumber`|string|278|否|BSB Number<ul><li>提现币种等于AUD 且国家信息是澳洲时必填</li></ul>||
|`sortCode`|string|6|是|sort code<ul><li>`swiftCode`查询匹配字段列表存在`sortCode`必填</li></ul>||
|`clabe`|string|18|否|clabe<ul><li>`swiftCode`查询匹配字段列表存在`clabe`必填</li></ul>||
|`beneficiaryMsisdn`|string|6|是|收款人手机号（国际格式）<ul><li>当swiftCode的五六位等于JP的时候必填</li></ul>||
|`fileList`|object||是|文件列表||
|`withdrawalAccountKey`|object|50|是|账户唯一值||
</div>
 </TabItem>
  
  <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|string|结果代码||
|`data`|object|返回数据||
</div>
  </TabItem>
</Tabs>

### 删除提现账户
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`withdrawalAccountKey`|string|20|是|账户唯一值||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|object|返回数据||
</div>
  </TabItem>
</Tabs>
   
## 代付账户
### 查询代付账户列表
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`keyWords`|string|200|否|搜索关键词——币种||
|`receiptOpccountNo`|string|20|否|收款方OPCCOUNT号||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|object|数据||
|`applicationType`|int|类型<ul><li>0： 银行账户</li><li>1： OPCCOUNT账户</li></ul>||
|`type`|int|银行账户类型<ul><li>1： 公司账户</li><li>2： 个人账户</li></ul>||
|`status`|int|状态<ul><li>0： 停用</li><li>1： 正常</li></ul>||
|`currency`|string|代付币种||
|`record`|int|是否备案<ul><li>1： 无需备案</li><li>2： 未备案</li><li>3： 已备案</li></ul>||
|`paymentFiling`|int|代付备案<ul><li>1： 未备案</li><li>2： 备案通过</li><li>3： 备案失败</li></ul>||
|`fundPaymentAccountKey`|int|代付账户唯一值||
</div>
  </TabItem>
</Tabs>


### 新增代付账户
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`receiptOpccountNo`|string|20|是|收款方OPCCOUNT号<ul><li>当类型是OPCCOUNT账户的时候不能为空</li></ul>||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|object|数据||
</div>
  </TabItem>
</Tabs>


### 删除代付账户
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`fundPaymentAccountKey`|int|19|是|代付账户唯一值||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|object|数据||
</div>
  </TabItem>
</Tabs>

## 提现
### 提现记录查询
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`startTime`|string|19|Yes|开始时间<ul><li>格式: yyyy-MM-dd HH:mm:ss</li></ul>||
|`endTime`|string|19|Yes|结束时间<ul><li>格式: yyyy-MM-dd HH:mm:ss</li></ul>||
|`pageSize`|int|5|No|每页容量<ul><li>默认为10</li></ul>||
|`pageNum`|int|5|No|页码<ul><li>默认为1</li></ul>||
|`status`|int|1|No|提现状态<ul><li>-1: 待处理</li><li>0: 失败</li><li>1: 成功</li><li>2: Send back</li><li>3: 取消</li></ul>||
|`withdrawalCurrency`|array|3|No|提现币种||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|Object|数据||
|`total`|int|总数||
|`pages`|int|总页数||
|`pageSize`|int|每页容量||
|`current`|int|当前页码||
|`rowList`|array|费用名称列表||
|`withdrawalListVOList`|array|每页的数据||
|`id`|string|提现批次号||
|`createTime`|string|创建时间||
|`handleTime`|string|提现时间||
|`withdrawalStatus`|int|提现状态<ul><li>0: Failure</li><li>1: Withdrawal success</li><li>2: Return</li><li>3: Cancel</li><li>-1: Withdrawal pending</li></ul>||
|`withdrawalStatusStr`|int|提现状态||
|`bankAccount`|string|开户账号||
|`withdrawalAmount`|string|提现金额||
|`withdrawalCurrency`|string|提现币种||
|`rate`|string|汇率||
|`rateTime`|string|汇率时间||
|`billAmount`|string|到账金额||
|`billCurrency`|string|提现申请币种||
|`bankName`|string|开户人银行||
|`paymentBank`|string|付款银行||
|`chargeActualFee`|string|实收手续费||
|`fullPaymentMark`|string|全额到账标识<ul><li>0: 否</li><li>1: 是</li></ul>||
|`withdrawalFeeDetailList`|array|费用明细||
|`withdrawalFeeDetailVOList`|array|费用明细对象||
|`costName`|string|费用名称||
|`costNameEn`|string|费用名称英文||
|`billCurrency`|string|账单币种||
</div>
  </TabItem>
</Tabs>




### 询价
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`withdrawalAccountKey`|string|20|是|提现账户唯一值||
|`billCurrency`|string|3|是|账单币种||
|`billAmount`|string|18|是|账单金额<ul><li>最多传12位整数和6位小数</li></ul>||
|`transactionFeesBearingMethods`|string|3|是|手续费承担方式<ul><li>BEN</li><li>OUR</li><li>SHA</li></ul>||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|object|数据||
|`tranCurrency`|string|卖出币种||
|`tranAmount`|string|卖出金额||
|`baseCurrency`|string|买入币种||
|`baseAmount`|string|买入金额||
|`merchantRate`|string|商户参考汇率||
|`feeCurrency`|int|手续费币种||
|`expectedAmount`|string|预计到账金额||
|`withdrawalDetail`|string|单笔提现对应的明细||
|`expectAmount`|string|预计到账金额||
|`expectCurrency`|string|预计到账币种||
|`fee`|string|手续费||
|`withdrawalCostList`|string|费用||
|`feeAmount`|int|手续费金额||
|`costName`|string|费用名称||
|`costNameEn`|string|费用名称（英文）||
|`currency`|string|账单币种||
</div>
  </TabItem>
</Tabs>

### 提现下单申请
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`withdrawalAccountKey`|string|20|是|提现账户唯一值||
|`billCurrency`|string|3|是|账单币种||
|`billAmount`|string|18|是|账单金额——最多传12位整数和6位小数||
|`transactionFeesBearingMethods`|string|3|是|手续费承担方式 BEN/OUR/SHA||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|string|数据||
|`amount`|string|提现申请金额||
|`batchNo`|string|提现批次号||
|`billCurrency`|string|提现币种||
|`status`|int|提现状态<br/><ul><li>1： 提现成功</li><li>2： 提现失败</li><li>3： 提现待处理</li></ul>||
</div>
  </TabItem>
</Tabs>

## 代付
### 代付申请
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`fundPaymentAccountKey`|string|20|二选一|代付账户唯一值<ul><li>代付账户列表查询中找到对应的代付账户唯一值</li></ul>||
|`withholdingAccountKey`|string|20|二选一|代扣账户唯一值<br/>只能填入一个，多笔代扣需要发送多笔请求<ul><li>当 `withholdingAccountKey`不为空：用OPCCOUNT号匹配代理商OPC号进行代扣<ul><li>付款方：`withholdingAccountKey`传OPCCOUNT号（代理商OPC号）；</li><li>收款方：请求头中的OPCCOUNT号（主账号OPC号）</li></ul></li><li> 当 `withholdingAccountKey`为空：代付申请逻辑。<ul><li>付款方：请求头中的OPCCOUNT号；</li><li>收款方：用 `fundPaymentAccountKey`账户唯一值作为收款方</li></ul></li></ul>||
|`paymentAmount`|string|18|是|代付付款金额<ul><li>最多传12位整数和6位小数</li></ul>||
|`paymentCurrency`|string|3|是|代付付款币种<ul><li>采用国际标准ISO 4217</li></ul>||
|`accountType`|int|18|是|账户类型<ul><li>1：OPCCOUNT账户</li></ul>||
|`autoDebit`|int|1|是|代付自动扣款<ul><li>1： 开启</li><li>2： 关闭</li></ul>||
|`transactionType`|int|1|是|代付交易类型<br/><ul><li>1： 广告商/Overseas Advertisers</li><li>2： 物流服务商/Overseas Logistics</li><li>3： 供应商/Overseas Supplier</li><li>4： 业务/股权关联公司/Business/Equity Related Companies</li><li>5： 集团间子公司/Inter Group Subsidiaries</li></ul>||
|`orderNumber`|string|0-50|否|交易订单号||
|`orderCurrency`|string|0-3|否|订单号的交易币种——传值会原样返回，无校验||
|`orderAmount`|string|0-10|否|订单号的交易金额||
|`orderNotes`|string|0-500|否|订单备注信息，返回时则原样返回||
|`paymentDesc`|string|278|否|代付付款说明||
|`notesOnBank`|string|278|否|银行转账备注||
|`confirmAgreement`|string|1|是|确认协议——默认传1||
|`cooperationAgreementList`|file||否|合作协议附件<ul><li>当applicationType = 1-首次申请 且 （transactionType = 4-业务/股权关联公司 或 5-集团间子公司）且 payerName = 0-oceanpayment 时，必传附件：代付公司注册证书+代付银行账户证明+代付个人地址证明+代付股权架构图+Invoice&合作协议附件id</li><li>当applicationType = 1.首次申请 且 （transactionType = 1.广告商 或 2.物流服务商 或 3.供应商） 时，必传附件：合作协议+发票</li><li>当applicationType = 1-首次申请 且 （transactionType = 4-业务/股权关联公司 或 5-集团间子公司）且 payerName = 1-商户主体 时，必传附件：代付公司注册证书+代付银行账户证明+代付个人地址证明+代付股权架构图+代付子公司附件</li><li>当applicationType = 2-再次申请 且 （transactionType = 1.广告商 或 2.物流服务商 或 3.供应商） 时，必传附件：合作协议+发票</li><li>当applicationType = 2-再次申请 且 （transactionType = 4-业务/股权关联公司 或 5-集团间子公司）且 payerName = 0-oceanpayment 时，必传附件：Invoice&合作协议附件id</li><li>当applicationType = 2-再次申请 且 （transactionType = 4-业务/股权关联公司 或 5-集团间子公司）且 payerName = 1-商户主体 时，必传附件：代付子公司附件</li></ul>||
|`invoiceList`|file||否|invoce附件（发票）||
|`companyRegCertificateList`|file||否|代付公司注册证书附件||
|`bankAccountProofList`|file||否|代付银行账户附件||
|`personalAddressProofList`|file||否|代付个人地址证明附件||
|`equityStructureChartList`|file||否|代付股权架构图附件||
|`subsidiaryList`|file||否|代付子公司附件||
|`invoiceAndCooperationAgreementList`|file||否|Invoice&合作协议附件||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|string|代付批次号||
</div>
  </TabItem>
</Tabs>

### 代付确认扣款
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`batchNo`|int|10|是|代付批次号<ul><li>代付申请 成功后，会返回代付批次号</li></ul>||
|`billCurrency`|string|3|是|确认代付币种<ul><li>默认传代付申请的币种 `paymentCurrency`，如果需要换汇，则传对应的币种</li></ul>||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|object|数据||
</div>
  </TabItem>
</Tabs>

### 代付记录查询
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`pageSize`|int|5|否|每页容量<ul><li>默认为10</li></ul>||
|`timeType`|int|1|否|时间类型<ul><li>1： 申请时间</li><li>2： 付款时间</li></ul>||
|`currencyList`|array|5|否|付款币种集合<ul><li>AUD</li><li>HKD</li><li>CHF</li><li>SGD</li><li>JPY</li><li>EUR</li><li>GBP</li><li>USD</li><li>CAD</li><li>NZD</li><li>ZAR</li><li>CNY</li></ul>||
|`batchNo`|string|10|否|付款批次号<ul><li>代付申请 成功后，会返回代付批次号</li></ul>||
|`startTime`|string|19|否|开始时间<ul><li>格式：yyyy-MM-dd HH:mm:ss</li></ul>||
|`endTime`|string|19|否|结束时间<ul><li>格式：yyyy-MM-dd HH:mm:ss</li></ul>||
|`pageNum`|int|5|否|当前页码<ul><li>默认为1</li></ul>||
|`status`|int|2|否|代付状态<ul><li>1： 审核中</li><li>2： 审核未通过</li><li>3： 审核通过</li><li>4： 处理中</li><li>6： 代付成功</li><li>7： 已退回</li><li>9： 已退款</li><li>10： 代付扣款失败</li><li>12： 已取消</li></ul>||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|object|数据||
|`total`|int|总数||
|`pages`|string|总页数||
|`pageSize`|int|每页容量||
|`pageNum`|int|页码||
|`list`|array|列表||
|`batchNo`|int|代付批次号||
|`status`|int|代付状态<ul><li>1： 审核中</li><li>2： 审核未通过</li><li>3： 审核通过</li><li>4： 处理中</li><li>6： 代付成功</li><li>7： 已退回</li><li>9： 已退款</li><li>10： 代付扣款失败</li><li>12： 已取消</li></ul>||
|`opccountNo`|string|收款方OPCCOUNT号||
|`opccountName`|string|收款方OPCCOUNT名称||
|`amount`|int|代付金额||
|`createTime`|string|代付申请时间||
|`settTime`|string|财务处理时间（出款）||
|`settName`|string|收款方开户名称||
|`settBankAccount`|string|收款银行账号||
|`currency`|string|代付币种||
|`type`|string|代付类型<ul><li>1： 直接代付</li><li>2： 代理代付</li></ul>||
|`fundPaymentAccountKey`|string|代付账户唯一值||
|`acType`|string|账户类型<ul><li>1： 公司账户</li><li>2： 个人账户</li></ul>||
|`notesOnBank`|string|银行转账备注||
|`poboFeedBack`|string|代付目的||
</div>
  </TabItem>
</Tabs>

### 下载水单
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`batchNo`|int|10|是|代付批次号<ul><li>代付申请 成功后，会返回代付批次号</li></ul>||
</div>
  </TabItem>
</Tabs>

### 取消代付申请
<Tabs> 
  <TabItem value="Request" label="Request" default>
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`batchNo`|int|10|是|代付批次号<ul><li>代付申请 成功后，会返回代付批次号</li></ul>||
</div>
  </TabItem>
  
   <TabItem value="Response" label="Response">
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`msg`|string|描述||
|`code`|int|结果代码||
|`data`|object|数据||
</div>
  </TabItem>
</Tabs>