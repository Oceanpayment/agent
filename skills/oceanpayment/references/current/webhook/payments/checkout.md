---
sidebar_position: 2
sidebar_label: 支付状态
---
# 
import Modal from '@site/src/components/Modal';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
支付通知是在用户完成付款时，发送包含交易的详细信息。

## 在此之前
:::info[信息]
请查看Oceanpayment完整的[重推机制和规范](/docs/webhook/payments/introduction)。
:::

## 通知参数
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`notice_type`|string|推送类型<ul><li>固定为：transaction</li></ul>||
|`push_dateTime`|string|推送时间||
|`response_type`|string|回调类型<ul><li>0: 浏览器返回</li><li>1: 服务器异步通知</li></ul>||
|`account`|string|Oceanpayment账户号||
|`terminal`|string|Oceanpayment终端号||
|`signValue`|string|[安全签名](/docs/webhook/payments/checkout#安全验证签名)，用于验证交易的安全性，使用SHA256加密||
|`methods`|string|支付方式||
|`order_number`|string|网站订单号|
|`card_country`|string|卡属国家|
|`order_currency`|string|订单号的交易币种<ul><li>采用国际标准[ISO 4217](/docs/resource/currency)代码</li></ul>||
|`order_amount`|string|订单号的交易金额<ul><li>最大支持小数点后2位数，如：1.00</li><li>如果交易金额为0，不需要发送交易</li></ul>||
|`order_notes`|string|订单备注信息，返回时则原样返回||
|`card_number`|string|持卡人的信用卡卡号<ul><li>截取前6位和后4位</li></ul>||
|`card_type`|string|卡种||
|`payment_country`|string|消费者IP所在国家||
|`payment_id`|string|支付ID，Oceanpayment的支付唯一单号 ||
|`quickpay_id`|string|Quickpay ID（唯一）,采用UUID形式<br/>只有QuickPay支付才有返回||
|`payment_status`|string|该笔[交易的结果状态](/docs/payment/status#付款状态)<ul><li>**-1**: 待处理</li><li>**0**: 支付失败</li><li>**1**: 支付成功</li></ul>||
|`payment_authType`|string|该笔[交易的类型](/docs/payment/status#响应代码)<ul><li>**0**: 该交易类型为‘Sale’一般交易</li><li>**1**: 该交易类型为‘预授权且非3D’交易</li><li>**2**: 该交易类型为‘3D且非预授权’交易</li><li>**3**: 该交易类型为‘3D且预授权’交易</li></ul>||
|`payment_details`|string|该笔[交易的支付详情](/docs/payment/status#响应代码)<ul><li>网站可以进行处理，在付款结果页面显示给消费者看</li></ul>||
|`payment_solutions`|string|付款失败后的[解决方法](/docs/payment/status#响应代码)<ul><li>网站可以进行处理，在付款结果页面显示给消费者看</li></ul>||
|`payment_risk`|string|未通过的风控规则<ul><li>格式为：风控规则=分数;风控规则=分数;...</li></ul>||
|`payment_amount`|string|消费者实际付款金额||
|`payment_exchangeRate`|string|汇率||
|`pay_barCode`|string|订单打印码||
|`auth_reason`|string|预授权操作原因||
|`order_operator`|string|账户后台预授权交易处理操作人||
|`auth_code`|string|返回信用卡的授权码<ul><li>只有信用卡、ApplePay和GooglePay才有返回</li></ul>||
|`pay_userId`|string|消费者ID||
|`card_cvvResultCode`|string|返回CVV银行代码及说明||
</div>

## 支付状态
在异步通知返回参数中，`payment_status`是支付的结果状态，您也可以查看完整的[付款状态](/docs/payment/status)说明。

## 响应代码
在异步通知返回参数中，`payment_details`是交易的支付详情，格式为[代码Code:支付详情](/docs/response-code/payment)。


## 返回XML示例
```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
    <notice_type>transaction</notice_type>
    <push_dateTime></push_dateTime>
    <response_type>1</response_type>
    <account>995149</account>
    <terminal>99514901</terminal>
    <signValue>0B1FAEDCD3DE9FB72F13A0DB80955479B00F2E6F7A4BF5C84A3403C1EAE489BE</signValue>
    <methods>Credit Card</methods>
    <order_number>NO12345678</order_number>
    <card_type>Visa</card_type>
    <card_country>US</card_country>
    <order_currency>USD</order_currency>
    <order_amount>1.99</order_amount>
    <order_notes></order_notes>
    <card_number>411111***1111</card_number>
    <payment_country>CN</payment_country>
    <payment_id>180808092746539010540</payment_id>
    <payment_authType>0</payment_authType>
    <payment_status>1</payment_status>
    <payment_details>Successful test transaction</payment_details>
    <payment_solutions></payment_solutions>
    <payment_risk></payment_risk>
    <payment_amount>1.00</payment_amount>
    <payment_exchangeRate></payment_exchangeRate>
    <pay_userId></pay_userId>
    <pay_barCode>5b87b4528d3a66e4a59e51577960d552461c997a32c71e3c</pay_barCode>
    <auth_reason></auth_reason>
    <order_operator></order_operator>
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
	$_REQUEST['response_type'] = (string)$xml->response_type;
	$_REQUEST['account'] = (string)$xml->account;
	$_REQUEST['terminal'] = (string)$xml->terminal;
	$_REQUEST['payment_id'] = (string)$xml->payment_id;
	$_REQUEST['order_number'] = (string)$xml->order_number;
	$_REQUEST['order_currency'] = (string)$xml->order_currency;
	$_REQUEST['order_amount']= (string)$xml->order_amount;
	$_REQUEST['payment_status']= (string)$xml->payment_status;
	$_REQUEST['payment_details'] = (string)$xml->payment_details;
	$_REQUEST['signValue'] = (string)$xml->signValue;
	$_REQUEST['order_notes'] = (string)$xml->order_notes;
	$_REQUEST['card_number'] = (string)$xml->card_number;
	$_REQUEST['payment_authType'] = (string)$xml->payment_authType;
	$_REQUEST['payment_risk'] = (string)$xml->payment_risk;
	$_REQUEST['methods'] = (string)$xml->methods;
	$_REQUEST['payment_country'] = (string)$xml->payment_country;
	$_REQUEST['payment_solutions'] = (string)$xml->payment_solutions;
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
|交易|`account`+`terminal`+`order_number`+`order_currency`+`order_amount`+`order_notes`+`card_number`+`payment_id`<br/>+`payment_authType`+`payment_status`+`payment_details`+`payment_risk`+`secureCode`|
</div>

## 签名验证示例
<Tabs> 
  <TabItem value="PHP" label="PHP" default>
```php

$_REQUEST['signValue'] = (string)$xml->signValue;

//获取本地的secureCode值  
$secureCode = {secureCode};  
$local_signValue = hash("sha256",$_REQUEST['account'].$_REQUEST['terminal'].$_REQUEST['order_number'].$_REQUEST['order_currency'].$_REQUEST['order_amount'].$_REQUEST['order_notes'].$_REQUEST['card_number'].$_REQUEST['payment_id'].$_REQUEST['payment_authType'].$_REQUEST['payment_status'].$_REQUEST['payment_details'].$_REQUEST['payment_risk'].$secureCode);
//加密串校验  
if (strtolower($local_signValue) == strtolower($_REQUEST['signValue'])) {
    if ($_REQUEST['payment_status'] == 1) {				 
    //支付成功  	
    }elseif($_REQUEST['payment_status'] == 0){				 
    //支付失败  					 
    }elseif($_REQUEST['payment_status'] == -1){
       //待处理  
       if ($_REQUEST['payment_authType'] == 1){
         //处理预授权  				
       }else{	
         //支付失败  
       }		
    }			 
}else{			 
  //校验失败	  				 
}		
echo "receive-ok";
exit;
```
  </TabItem>
</Tabs>