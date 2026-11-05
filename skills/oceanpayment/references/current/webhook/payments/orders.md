---
sidebar_position: 3
sidebar_label: 业务订单
---
# 
import Modal from '@site/src/components/Modal';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
业务订单通知是订单出现异常情况，如退款、高风险、拒付、争议、伪冒等发送的详细信息。

## 在此之前
:::info[信息]
请查看Oceanpayment完整的[重推机制和规范](/docs/subscripions/quickpay-id/introduction)。
:::

<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`signValue`|string|[安全签名](/docs/webhook/payments/orders#安全验证签名)，用于验证交易的安全性，使用SHA256加密||
|`payment_dateTime`|string|订单支付时间||
|`payment_debitTime`|string|完成时间||
|`push_dateTime`|string|推送时间||
|`order_number`|string|网站订单号||
|`order_currency`|string|订单号的交易币种<ul><li>采用国际标准[ISO 4217](/docs/resource/currency)代码</li></ul>||
|`order_amount`|string|订单号的交易金额<ul><li>最大支持小数点后2位数，如：1.00</li></ul>||
|`order_notes`|string|订单备注信息，返回时则原样返回||
|`card_type`|string|卡种||
|`card_country`|string|卡属国家|
|`payment_id`|string|支付ID，Oceanpayment的支付唯一单号 ||
|`refund_number`|string|商户网站系统内部的退款流水号 ||
|`refund_reference`|string|商户网站系统内部的退款参考号 ||
|`notice_type`|string|业务推送类型<ul><li>**refund**: 全额退款</li><li>**partialRefund**: 部分金额退款</li><li>**chargeBack**: 拒付</li><li>**re-presentment**: 申诉</li><li>**retrieval**: 调单</li><li>**reversal-retrieval**: 撤销调单</li><li>**fraud**: 伪冒</li><li>**ARN**: 退款凭证</li><li>**highRisk**: 高风险订单</li></ul>||
|`push_status`|string|业务结果状态<ul><li>**0**: 失败</li><li>**1**: 成功</li><li>**2**: 申诉中（仅`notice_type`为re-presentment才有）</li></ul>||
|`push_details`|string|具体详细信息||
|`push_id`|string|业务状态交易ID，Oceanpayment的唯一业务状态编号<ul><li>当业务类型是退款时，此字段的值等于退款ID</li></ul>||
|`payment_cpdTime`|string|异常时间<ul><li>当`notice_type`类型为：chargeBack，fraud，re-presentment，retrieval会返回值</li><li>通常用此时间来作为异常订单发生的时间</li></ul>||
</div>

## 通知类型
在异常订单通知参数中：
- `notice_type`：是用来区分订单的异常推送类型；
- `push_status`：是异常订单的推送结果；
- `push_details`：是异常订单结果的具体详细信息；
- `payment_cpdTime`：是异常订单发发的时间。

:::warning[注意]
此为业务订单的消息通知，如需处理该笔异常，请访问[Oceanpayment账户后台](https://odpm.oceanpayment.com)进行操作处理。
:::

## 返回XML示例
```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <account>995149</account>
  <terminal>99514901</terminal>
  <signValue>0DB0C564E97C1459250333E67F1FCD8B0789BB1D2A3A0D87E878B1CC8A7485F6</signValue>
  <payment_dateTime>2021-11-24 19:43:27</payment_dateTime>
  <payment_debitTime>2021-11-24 19:43:27</payment_debitTime>
  <push_dateTime>2021-12-01 17:55:43</push_dateTime>
  <order_number>110529-EVEVSY11438</order_number>
  <order_currency>USD</order_currency>
  <order_amount>0.01</order_amount>
  <order_notes></order_notes>
  <card_type>Maestro</card_type>
  <card_country>IT</card_country>
  <payment_id>211124194326789278592</payment_id>
  <refund_number></refund_number>
  <refund_reference></refund_reference>
  <notice_type>Refund</notice_type>
  <push_id>5433634</push_id>
  <push_status>1</push_status>
  <push_details>其他原因</push_details>
  <payment_cpdTime>2021-11-24 19:43:27</payment_cpdTime>
</response>
```

## 接收示例
通过交易请求的参数[`noticeUrl`](/docs/payment/parameter#请求参数)进行接收：
<Tabs> 
  <TabItem value="PHP" label="PHP" default>
```php
//获取推送输入流XML
$xml_str = file_get_contents("php://input");
//判断返回的输入流是否为xml  
if(xml_parser($xml_str)){
	$xml = simplexml_load_string($xml_str);		
	//把推送参数赋值到$_REQUEST
	$_REQUEST['account'] = (string)$xml->account;
	$_REQUEST['terminal'] = (string)$xml->terminal;
	$_REQUEST['signValue'] = (string)$xml->signValue;
	$_REQUEST['payment_dateTime'] = (string)$xml->payment_dateTime;
	$_REQUEST['payment_debitTime'] = (string)$xml->payment_debitTime;
	$_REQUEST['push_dateTime'] = (string)$xml->push_dateTime;
	$_REQUEST['order_number'] = (string)$xml->order_number;		
	$_REQUEST['order_currency'] = (string)$xml->order_currency;	
	$_REQUEST['order_amount']= (string)$xml->order_amount;
	$_REQUEST['order_notes'] = (string)$xml->order_notes;
	$_REQUEST['card_type'] = (string)$xml->card_type;
	$_REQUEST['card_country'] = (string)$xml->card_country;		
	$_REQUEST['payment_id'] = (string)$xml->payment_id;
	$_REQUEST['refund_number']= (string)$xml->refund_number;
	$_REQUEST['refund_reference'] = (string)$xml->refund_reference;	
	$_REQUEST['notice_type'] = (string)$xml->notice_type;		
	$_REQUEST['push_id'] = (string)$xml->push_id;
	$_REQUEST['push_status'] = (string)$xml->push_status;
	$_REQUEST['push_details'] = (string)$xml->push_details;
	$_REQUEST['payment_cpdTime'] = (string)$xml->payment_cpdTime;
}

//判断是否为xml
function xml_parser($str){
	$xml_parser = xml_parser_create();
	if(!xml_parse($xml_parser,$str,true)){
		xml_parser_free($xml_parser);
		return false;
	}else {
		return true;
	}
}
```
  </TabItem>
</Tabs>


## 安全验证签名
<div className="table-container">
|类型|签名结构|
| --- | --- |
|异常订单|`account`+`terminal`+`order_number`+`payment_id`+`refund_number`+`push_id`+`push_status`+`push_details`+`secureCode`|
</div>

## 签名验证示例
<Tabs> 
  <TabItem value="PHP" label="PHP" default>
```php

$_REQUEST['signValue'] = (string)$xml->signValue;

//获取本地的secureCode值  
$secureCode = {secureCode};  
$local_signValue = hash("sha256",$_REQUEST['account'].$_REQUEST['terminal'].$_REQUEST['order_number'].$_REQUEST['payment_id'].$_REQUEST['refund_number'].$_REQUEST['push_id'].$_REQUEST['push_status'].$_REQUEST['push_details'].$secureCode);
//加密串校验  
if (strtolower($local_signValue) == strtolower($_REQUEST['signValue'])) {
    //异常订单类型
    if ($_REQUEST['notice_type'] == 'Refund') {				 
       //全额退款  		
    }elseif{
       //其他类型等
    }			 
}else{			 
  //校验失败	  				 
}		
echo "receive-ok";
exit;
```
  </TabItem>
</Tabs>


