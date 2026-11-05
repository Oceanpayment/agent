---
sidebar_position: 2
sidebar_label: AliPay HK
---
# 

## AliPay HK
<div className="table-container">
|功能|说明|
| --- | --- |
|支付LOGO|<div className="payment-methods-logo"><img src="/img/methods/alipay-hk.svg" width="120"/><img src="/img/methods/alipay-mo.svg" width="100"/></div>|
|集成方案|<ol><li>✅ 托管结账</li><li>✅ 服务器对服务器</li></ol>|
|推荐使用地区|香港|
|是否支持虚拟行业|✅|
|是否支持订阅服务|❌️ |
|支持的SaaS|<ol><li>✅ Shopify</li><li>✅ AllValue有赞</li><li>✅ WIX</li><li>✅ Shopline</li><li>✅ Shopyy</li><li>✅ Ueeshop</li><li>✅ Shoprise帕帕猴</li><li>✅ Shoplus超店</li><li>✅ Shoptop</li></ol>|
|支持的开源建站|<ol><li>✅ Magento</li><li>✅ WordPress/Woocommerce</li><li>✅ OpenCart</li><li>✅ PrestaShop</li><li>✅ ZenCart</li></ol>|
</div>

## 对接模式说明
支付宝提供两种不同的集成方式：
1. 商户自行区分场景：根据不同的使用场景进行集成。
2. 由Oceanpayment区分场景：集成方式由Oceanpayment根据场景自动处理。


### 商户自行区分场景
:::warning[注意]
适用于HK/CN钱包
:::

<div className="table-container">
|场景|说明|支付方式[methods传值](/docs/payment/parameter#请求参数)要求|集成方式|
| --- | --- | --- | --- |
|PC站扫码支付(跳转)|用于PC端浏览器打开，<br/>用户在Oceanpayment托管页面扫码完成支付<ul><li>与PC站扫码支付(直连)方式二选一</li></ul>|`Alipay_Web`|[托管结账](/docs/payment/host-page/integration)|
|PC站扫码支付(直连)|用于PC端浏览器打开，商家生成二维码给用户扫码完成支付<ul><li>与PC站扫码支付(跳转)方式二选一</li></ul>|`Alipay_Web`|[服务器对服务器](/docs/payment/server-to-server/integration#本地支付集成)|
|WAP(H5)|用于手机端非微信浏览器打开，完成支付|`Alipay_Wap`|托管结账|
|小程序|用于微信小程序打开，完成支付|`Alipay_Wap`|服务器对服务器|
|APP|用于APP内打开，完成支付|`Alipay_APP`|服务器对服务器|
</div>

### 由Oceanpayment区分场景
:::warning[注意]
适用于CN钱包
:::
<div className="table-container">
|场景|说明|支付方式methods传值要求|集成方式|
| --- | --- | --- | --- |
|所有场景|<ul><li>PC站扫码支付</li><li>WAP(H5)</li><li>小程序</li><li>APP</li></ul>|固定传值<ul><li>`AlipayCN`</li></ul>|[托管结账](/docs/payment/host-page/integration)|
</div>



