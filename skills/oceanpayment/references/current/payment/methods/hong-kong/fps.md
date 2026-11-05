---
sidebar_position: 3
sidebar_label: FPS
---
# 

## FPS
<div className="table-container">
|功能|说明|
| --- | --- |
|支付LOGO|<img src="/img/methods/fps.svg" width="40"/>|
|集成方案|<ol><li>✅ 托管结账</li><li>✅ 服务器对服务器</li></ol>|
|推荐使用地区|香港|
|是否支持虚拟行业|✅|
|是否支持订阅服务|❌️ |
|支持的SaaS|<ol><li>✅ Shopify</li><li>✅ AllValue有赞</li><li>✅ WIX</li><li>✅ Shopline</li><li>✅ Shopyy</li><li>✅ Ueeshop</li><li>✅ Shoprise帕帕猴</li><li>✅ Shoplus超店</li><li>✅ Shoptop</li></ol>|
|支持的开源建站|<ol><li>✅ Magento</li><li>✅ WordPress/Woocommerce</li><li>✅ OpenCart</li><li>✅ PrestaShop</li><li>✅ ZenCart</li></ol>|
</div>

## 支付场景说明
FPS根据不同的使用场景提供了不同的集成方式。为了确保商户能够正确调用对应的支付方式，以下分别说明各场景的支付特点：
<div className="table-container">
|场景|说明|支付方式[methods传值](/docs/payment/parameter#请求参数)要求|集成方式|
| --- | --- | --- | --- |
|PC站扫码支付(跳转)|用于PC端浏览器打开，<br/>用户在Oceanpayment托管页面扫码完成支付完成支付<ul><li>与PC站扫码支付(直连)方式二选一</li></ul>|`FPS`|[托管结账](/docs/payment/host-page/integration)|
|PC站扫码支付(直连)|用于PC端浏览器打开，商家生成二维码给用户扫码完成支付<ul><li>与PC站扫码支付(跳转)方式二选一</li></ul>|`FPS`|[服务器对服务器](/docs/payment/server-to-server/integration#本地支付集成)|
|WAP(H5)|用于手机端浏览器打开，完成支付|`FPS`|托管结账|
</div>