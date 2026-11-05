---
sidebar_position: 3
sidebar_label: Apple Pay
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Apple Pay

<div className="table-container">
|功能|说明|
| --- | --- |
|支付LOGO-[使用规范](https://developer.apple.com/design/human-interface-guidelines/apple-pay)|<img src="/img/methods/applepay.svg" width="50"/>|
|集成方案|<ol><li>✅ 托管结账</li><li>✅ 嵌入式</li><li>✅ 服务器对服务器</li></ol>|
|推荐使用国家|全球|
|是否支持虚拟行业|✅|
|是否支持订阅服务|✅ 视行业而定|
|支持的SaaS|[支持所有已对接的SaaS清单](/docs/saas/payment-installation)|
|支持的开源建站|<ol><li>✅ Magento</li><li>✅ WordPress/Woocommerce</li><li>✅ OpenCart</li><li>✅ PrestaShop</li><li>✅ ZenCart</li></ol>|
</div>

## 集成方式
Oceanpayment支持以下两种Apple Pay集成模式：
<div className="table-container">
|集成模式|适用场景|
| --- | --- |
|嵌入式（Embedded）|商户无需申请 Apple Pay开发者资质，由 Oceanpayment完成 Merchant Validation和支付处理|
|服务器对服务器（Server-to-Server）|商户自行申请Apple Pay开发者账号并获取Payment Token后，通过Oceanpayment服务端接口完成支付|
</div>

## 嵌入式
### 1. 域名验证文件部署
商户需在所有使用Apple Pay的网站域名下部署 Apple官方域名验证文件，并确保此路径文件可以正常访问： 
<a href="/files/apple-pay-verification.zip" download="apple-pay-verification.zip">⬇️ 点击下载域名验证文件</a>  

```java
https://[DOMAIN_NAME]/.well-known/apple-developer-merchantid-domain-association
```

:::warning[注意]
每个独立域名和子域名都需要部署验证文件。  
:::

```java
https://example.com/.well-known/apple-developer-merchantid-domain-association
https://test.example.com/.well-known/apple-developer-merchantid-domain-association
···
```

### 2. 发起域名注册
- 完成验证文件部署后，调用 Oceanpayment域名注册接口：
<Tabs> 
  <TabItem value="Request" label="Request" default>
```java
cURL -X POST 'https://mds.oceanpayment.com/appleregistermerchant'
-H 'Authorization: MVc9Lt1CDY7RBRUvh8iVmvvPbYF3uvWkymUDz'
-d '{
       "website": ["example.com,test.example.com"]
    }'
```
<div className="table-container">
|参数|类型|必填|说明|
| --- | --- | --- | --- |
|`website`|Array|是|需要注册的域名列表|
</div>
  </TabItem>
  <TabItem value="Response" label="Response">
```json
{
    "statusMessage": "Success",
    "statusCode": 200
}
```
  </TabItem>
</Tabs>

- 错误处理
<div className="table-container">
|响应码|说明|
| --- | --- |
|200|OK<ul><li>Success.</li></ul>|
|400|Bad Request<ul><li>The request is malformed or invalid.</li></ul>|
|401|Unauthorized<ul><li>The request is malformed or invalid.</li></ul>|
|417|Expectation Failed<ul><li>The e-commerce platform isn’t registered with Apple Developer.</li></ul>|
|500|Internal Server Error<ul><li>An internal server error occurred.</li></ul>|
</div>

### 3. 完成接入
完成域名校验后，结账页面将在可能的情况下显示Apple Pay作为付款选项。使用[嵌入式集成](/docs/payment/embedded/integration)方案完成对接。
:::warning[注意]
嵌入式集成Apple Pay仅适用于支持它的Apple设备（例如Safari网页浏览器、iOS设备），且支付按钮仅在iOS 17及以上版本才会显示。
:::


## 服务器对服务器
采用Server-to-Server集成时，商户需自行完成Apple Pay开发者配置。
### 1. 注册 Apple Developer
访问https://developer.apple.com， 加入Apple Developer Program。

### 2. 创建Merchant ID
- 登录[Apple Developer](https://developer.apple.com/account/resources) → Certificates, Identifiers & Profiles；
- 点击左侧菜单Identifiers → Merchant IDs → (+)，创建Merchant ID。示例：`merchant.com.example.store`

### 3. 创建Payment Processing Certificate（支付处理证书）
- 在 Mac上使用 Keychain或 OpenSSL生成 CSR（Certificate Signing Request）；
- 登录Apple Developer → Certificates；
- 选择 Payment Processing Certificate 类型创建证书；
- 上传 CSR，Apple 返回 `.cer`文件；
- 下载并安装证书到本地 Keychain；
- 从Keychain导出`.p12`文件（包含私钥）；  
`.p12`文件用于服务器端解密 Apple Pay返回的Payment Token。

### 4. 配置Merchant Domain白名单
- 登录Apple Developer → Merchant IDs → Domain Verification；
- 添加商户域名（如 payments.oceanpayment.com）；
- 按提示下载验证文件 apple-developer-merchantid-domain-association；
- 上传到网站根目录，如：https://payments.oceanpayment.com/.well-known/apple-developer-merchantid-domain-association
- 点击Verify完成验证。

### 5. 获取Payment Token
请参考[Apple Pay官方示例](https://applepaydemo.apple.com)获取Payment Token。

<Tabs> 
  <TabItem value="Response" label="Response">
```javascript
{
    "paymentData": {
        "data": "",
        "signature": "",
        "header": {
            "publicKeyHash": "",
            "ephemeralPublicKey": "",
            "transactionId": ""
        },
        "version": "EC_v1"
    },
    "paymentMethod": {
        "displayName": "Visa 0112",
        "network": "Visa",
        "type": "credit"
    },
    "transactionIdentifier": ""
}
```
  </TabItem>
</Tabs>


### 6. Payment Token传参说明
- 发起Oceanpayment支付请求时，[`pay_accountNumber`](/docs/payment/parameter#附加参数本地支付)用于传递 Apple Pay Payment Token中的`paymentData`对象。
- 传值规则：请将以下节点完整传递至`pay_accountNumber`。
<Tabs> 
  <TabItem value="Request" label="Request">
```javascript
{
  "data": "",
  "signature": "",
  "header": {
	"publicKeyHash": "",
	"ephemeralPublicKey": "",
	"transactionId": ""
  },
  "version": "EC_v1"
}
```
  </TabItem>
</Tabs>
:::warning[注意]
1. `pay_accountNumber`必须完整保留 Apple返回的`paymentData`对象内容；
2. Payment Token获取后应立即提交支付请求，避免Token过期；
3. 当前支持Apple Pay返回的EC_v1加密格式。
:::

### 7. card_type传参说明
发起Oceanpayment支付请求时，`card_type`用于传递Apple Pay Payment Token中的`paymentMethod.network`，商户需将`paymentMethod.network`返回值转换为Oceanpayment [`card_type`](/docs/payment/parameter#附加参数本地支付)支持的枚举值后进行传输。
<div className="table-container">
|`paymentMethod.network`|`card_type`|
| --- | --- |
|visa|VISA|
|masterCard|MASTERCARD|
|maestro|MAESTRO|
|JCB|JCB|
|elo|ELO|
|discover|DISCOVER|
|chinaUnionPay|CHINAUNIONPAY|
|cartesBancaires|CARTESBANCAIRES|
|amex|AMEX|
</div>
<Tabs> 
  <TabItem value="Request" label="Request">
```javascript
-d 'card_type=VISA' \
```  
  </TabItem>
</Tabs>

### 8. 完成支付
将Payment Token通过`pay_accountNumber`参数传值Oceanpayment，使用[服务器对服务器](/docs/payment/server-to-server/integration#本地支付集成)集成方案完成对接。
<Tabs> 
  <TabItem value="Request" label="Request">
```javascript
const paymentRequest = {
  countryCode: 'US',
  currencyCode: 'USD',
  total: {
    label: 'OceanPayment Checkout',
    amount: '10.00',
  },
  supportedNetworks: ['visa', 'masterCard', 'amex'],
  merchantCapabilities: ['supports3DS'],
  merchantIdentifier: 'merchant.oceanpayment.test',
};

session.onpaymentauthorized = function (event) {
  const payment = event.payment;
  console.log(JSON.stringify(payment));
  console.log(JSON.stringify(payment.token));

  processPayment(payment.token).then(function (response) {
    console.log("response from datatrans received");
    console.log(response);

    if (response.match(/status=.error./)) {
       console.log("an error occured!");
       console.log(response);
       return session.abort();
    }

    session.completePayment(ApplePaySession.STATUS_SUCCESS);
    window.location.href = "/success.html";
  });
        
};


function processPayment(paymentToken) {
    let paymentMethod = paymentToken.paymentMethod;
    let cardType = paymentMethod.network;
    let environment = document.getElementById('environment').value;

    let account = payParams[environment].account;
    let terminal = payParams[environment].terminal;
    let orderNo = new Date().getTime();
    let orderCurrency = document.getElementById('#order_currency').value;
    let orderAmount = document.getElementById('#order_amount').value;

    document.getElementById('form').action = payParams[environment].url;
    document.getElementById('account').value = account;
    document.getElementById('terminal').value = terminal;
    document.getElementById('pay_accountNumber').value = paymentToken.paymentData;
    document.getElementById('card_type').value = cardType;
    document.getElementById('order_number').value = orderNo;
    document.getElementById('order_amount').value = orderAmount;
    document.getElementById('methods').value = 'ApplePay';

    let billingId = document.getElementById('billing_id').value;
    let billingFirstName = document.getElementById('billing_firstName').value;
    let billingLastName = document.getElementById('billing_lastName').value;
    let billingEmail = document.getElementById('billing_email').value;

    let signString = account + terminal + orderNo + orderCurrency + orderAmount
        + billingId + billingFirstName + billingLastName + billingEmail + payParams[environment].secureCode;

    document.getElementById('signValue').value = sha256_digest(signString);
    document.getElementById('form').submit();

}
```
  </TabItem>
</Tabs>
