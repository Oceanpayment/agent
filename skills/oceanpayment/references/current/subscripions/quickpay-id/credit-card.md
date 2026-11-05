---
sidebar_position: 2
sidebar_label: 信用卡
---
#
import { FaCode, FaCloudDownloadAlt, FaServer } from 'react-icons/fa';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 概述
信用卡集成绑卡有三种方式，选择您合适的方式：
- [托管创建](/docs/subscripions/quickpay-id/credit-card#工作原理)
- [嵌入式创建](/docs/subscripions/quickpay-id/credit-card#工作原理)
- [商户自行创建](/docs/payment/server-to-server/integration)

## 工作原理

<Tabs>
  <TabItem value="托管创建" label="托管创建" default>
  1. 商户前端Form表单调用Hosted Checkout[提交必要参数](/docs/payment/parameter)，`methods`固定为Credit Card。

```html
<form action="https://test-secure.oceanpayment.com/gateway/service/create" method="post">
  <input  type="hidden"  name="account" value="995149" />
  <input  type="hidden"  name="terminal" value="99514901" />
  <input  type="hidden"  name="signValue" value="e7cb35166f9066d2844c29a11ca43f4dd25a3e0f9d145579363a5a0124a901d1"/>
  <input  type="hidden"  name="backUrl" value="http://127.0.0.1/result.php" />
  <input  type="hidden"  name="customer_id" value="123456" />
  <input  type="hidden"  name="methods" value="Credit Card" />
  <input  type="hidden"  name="order_notes" value="abcd" />
  <input  type="hidden"  name="billing_firstName" value="test" />
  <input  type="hidden"  name="billing_lastName" value="test" />
  <input  type="hidden"  name="billing_email" value="test@test.com" />
  <input  type="hidden"  name="billing_phone" value="0755-123456789" />
  <input  type="hidden"  name="billing_country" value="US" />
  <input  type="hidden"  name="billing_state" value="WA" />
  <input  type="hidden"  name="billing_city" value="Washington D.C." />
  <input  type="hidden"  name="billing_address" value="705A big Road" />
  <input  type="hidden"  name="billing_zip" value="529012" />
  <input  type="hidden"  name="logoUrl" value="N/A" />
  <input  type="hidden"  name="cssUrl" value="N/A" />
  <input  type="hidden"  name="language" value="N/A" />
</form>
```
  2. 用户在Oceanpayment页面上填写卡信息进行绑卡；
  3. 绑卡完成后，用户被重定向回商户网站。
  </TabItem> 

  <TabItem value="嵌入式创建" label="嵌入式创建">
1. 在页面中引入Oceanpayment的JS SDK：
```javascript
//加载Oceanpayment Js
<script src="https://secure.oceanpayment.com/pages/js/onepage-quickpay.js"></script>
```
2. 在页面上创建一个`<div>`容器：
```javascript
//加载Oceanpayment支付页面
<div id="oceanpayment-element"></div>
```
3. 使用初始化并渲染支付UI组件到容器中，初始化`init();`
- 传值`true`提交沙盒环境；
- 传空提交生产环境。
```javascript
<script>
  $(function() {
    //传true提交沙盒环境，传空提交生产环境
    OnePageQuickPay.init(true,'','');
  });
</script>
```

4. 提交支付
- 调用支付方法，支付时需要做防重复提交处理；
- 使用方法transformToJson(formData){}将提交的必填参数转为Json格式；
- 再调用checkout()[提交必要参数](/docs/payment/parameter)给Oceanpayment支付网关。
```javascript
//提交参数
<script>
//Oceanpayment绑卡方法
  function pay() {
    //获取form 表单元素
    var register = $("#payForm");
    //Jquery的serialize()方法
    var formData = register.serializeArray();
    //提交参数信息给Oceanpayment网关
    OnePageQuickPay.checkout(transformToJson(formData));
  }
  //输出Json数据
  function transformToJson(formData){
    var obj={}
    for (var i in formData) {
      obj[formData[i].name]=formData[i]['value'];
    }
    return obj;
  }
</script>
```
  </TabItem>
</Tabs>

## 处理返回

<Tabs>
  <TabItem value="托管创建" label="托管创建" default>
  1. 同步返回结果依赖于backUrl：

```json
Array
(
    [account] => 995149
    [terminal] => 99514901
    [signValue] => F03C3D5154FC2672C5EC05BAD3DDDF0892617CC1517517DCD37E6499AA896D73
    [customer_id] => customer_id20240507173540
    [order_notes] => 20123456789
    [card_number] => 411111***1111
    [card_type] => Visa
    [card_country] => PL
    [quickpay_id] => 9ead3654-8f84-4d02-acab-6ac9dd10531f
    [quickpay_status] => 1
    [quickpay_details] =>1:Success
)
```
  </TabItem> 

  <TabItem value="嵌入式创建" label="嵌入式创建">
:::warning[注意]
Oceanpayment将绑卡结果发送至`backUrl`页面，backUrl传值一定要和当前页面的**地址和完整路径完全一致**，才能调用`CallBack()`方法接收支付返回信息。
:::
```javascript
var oceanpaymentCallBack = function(data){}
```
1. 当卡信息校验失败时，`data.msg`会返回报错信息，例如：
```json
//卡号输入错误
{"code":-1, "msg":"Your credit card number is incorrect."}
```
2. 当`data.msg`返回为空时，表示卡信息校验通过。接收绑卡返回：
```javascript
var oceanpaymentCallBack = function(data){	
    if(data.msg){
       //处理卡信息错误
       console.log(data.msg);
    }else{
       //处理返回
       //没有报错时，接收backUrl返回，解析返回xml
       console.log(data);
    }	
}
```
3. 返回示例：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <account>995149</account>
  <terminal>99514901</terminal>
  <signValue>d47e242d1a097fbb99a1f097fc94c30c67e8c480410b546b5244a79974b6a9ca</signValue>
  <customer_id>JSCSE-8879248308</customer_id>
  <order_notes>test</order_notes>
  <card_number>411111***1111</card_number>
  <card_type>VISA</card_type>
  <card_country>PL</card_country>
  <quickpay_id>06a0858b-d4db-425c-9f81-c75ff28d9bc8</quickpay_id>
  <quickpay_status>1</quickpay_status>
  <quickpay_details>1:Success</quickpay_details>
</response>
```
  </TabItem>
</Tabs>

- 查看QuickPay ID的[创建结果](/docs/response-code/payment)。
- 商户保存返回的卡信息`quickpay_id`，格式为UUID形式，用来发起[快捷/订阅支付](/docs/subscripions/directpay)。


## 签名
查看详细的[签名和验签](/docs/compliance-and-security/sign/payment)功能。
