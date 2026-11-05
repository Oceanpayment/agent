---
sidebar_position: 4
sidebar_label: Google Pay
---
# 

## Google Pay

<div className="table-container">
|功能|说明|
| --- | --- |
|支付LOGO-[使用规范](https://developers.google.com/pay/api/android/guides/brand-guidelines?hl=zh-CN)|<img src="/img/methods/googlepay.svg" width="50"/>|
|集成方案|<ol><li>✅ 托管结账</li><li>✅ 嵌入式</li><li>✅ 服务器对服务器</li></ol>|
|推荐使用国家|全球|
|是否支持虚拟行业|✅|
|是否支持订阅服务|✅ 视行业而定|
|支持的SaaS|[支持所有已对接的SaaS清单](/docs/saas/payment-installation)|
|支持的开源建站|<ol><li>✅ Magento</li><li>✅ WordPress/Woocommerce</li><li>✅ OpenCart</li><li>✅ PrestaShop</li><li>✅ ZenCart</li></ol>|
</div>


## 集成方式
### 嵌入式
查看Google Pay完整[嵌入式集成](/docs/payment/embedded/integration)方案。


### 服务器对服务器
要使用此集成模式，需要先成为Google Pay官方开发者。
:::warning[注意]
Google Pay 支持中国（CN）主体进行开发者注册，但实际商户入驻及线上支付能力可能受 Google Pay 区域准入政策限制。在生产环境中，部分收单、结算及商户审核能力仅对支持地区（如 HK / SG / EU / US 等主体）开放，建议根据业务需求选择符合 Google Pay 支持区域的主体进行商户配置。
:::
1. Google Pay开发者账号注册与配置
- 访问https://pay.google.com/about/business
- 使用公司 Gmail / Google Workspace注册；
- 选择企业账号。

2. 创建Merchant ID
- 注册完成后会生成商户ID，在Google Pay Console → API access → Merchant Info 查看。

3. 配置Google Pay API Key
- 在Google Cloud Console创建项目；
- 启用 Google Pay API for Web / Android；
- 获取 API Key。

4. 商户在用户完成支付授权后获取Google Pay Payment Token，[查看Google Pay完整示例](https://developers.google.com/pay/api/web/guides/tutorial)。
:::info[信息]
- [`pay_accountNumber`](/docs/payment/parameter#附加参数本地支付)字段用于传递Google Pay Payment Token中的`paymentData.paymentMethodData.tokenizationData.token`对象。提交支付请求时，请将以下Payment Token中`token`节点JSON格式内容作为`pay_accountNumber`参数值进行传输。
:::
```javascript
{
  "apiVersion": 2,
  "apiVersionMinor": 0,
  "paymentMethodData": {
    "type": "CARD",
    "description": "Visa •••• 1111",
    "info": {
      "cardNetwork": "VISA",
      "cardDetails": "1111"
    },
    "tokenizationData": {
      "type": "DIRECT",
      "token": "{\"signature\":\"MEQCIB...\",\"protocolVersion\":\"ECv2\",\"signedMessage\":\"{\\\"encryptedMessage\\\":\\\"...\\\",\\\"ephemeralPublicKey\\\":\\\"...\\\",\\\"tag\\\":\\\"...\\\"}\"}"
    }
  }
}
```

5. 将Payment Token通过`pay_accountNumber`参数传值Oceanpayment调用[服务器支付请求](/docs/payment/server-to-server/integration#本地支付集成)。
```javascript
const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });

const request = {
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [{
    type: 'CARD',
    parameters: {
      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
      allowedCardNetworks: ['VISA', 'MASTERCARD'],
    },
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      parameters: {
        'gateway': 'oceanpayment',
        'gatewayMerchantId': 'oceanpayment',
      },
    },
  }],
  merchantInfo: {
    merchantName: 'OceanPayment',
    merchantId: 'BCR2DN4TWW...',
  },
  transactionInfo: {
    totalPriceStatus: 'FINAL',
    totalPrice: '10.00',
    currencyCode: 'USD',
  },
};

paymentsClient.loadPaymentData(request).then(paymentData => {
  const token = paymentData.paymentMethodData.tokenizationData.token;
  //发送 token 到服务端进行交易处理
});
```

