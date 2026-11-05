---
sidebar_position: 5
sidebar_label: 银联国际
---
# 

## 银联国际
<div className="table-container">
|功能|说明|
| --- | --- |
|集成方案|<ol><li>✅ 托管结账</li><li>✅ 服务器对服务器</li></ol>|
|推荐使用地区|中国大陆，香港，新加坡|
|是否支持虚拟行业|✅|
|是否支持订阅服务|❌️ |
|支持的SaaS|<ol><li>✅ Shopify</li><li>✅ Shoplazza店匠</li><li>✅ Shopline</li><li>✅ Shopyy</li><li>✅ Ueeshop</li><li>✅ Shoprise帕帕猴</li><li>✅ Shoplus超店</li><li>✅ Shoptop</li></ol>|
|支持的开源建站|<ol><li>✅ Magento</li><li>✅ WordPress/Woocommerce</li><li>✅ OpenCart</li><li>✅ PrestaShop</li><li>✅ ZenCart</li></ol>|
</div>

## 对接模式说明

<div className="table-container">
|场景|说明|支付方式[methods传值](/docs/payment/parameter#请求参数)要求|集成方式|支付LOGO|
| --- | --- | --- | --- | --- |
|收银台跳转模式|用户重定向至银联支付页面完成支付|`UnionPay`|[托管结账](/docs/payment/host-page/integration)|<img src="/img/methods/unionpay.svg" height="30"/>|
|云闪付App|通过调起云闪付App完成支付|`YunShanFu_APP`|[服务器对服务器](/docs/payment/server-to-server/integration#本地支付集成)|<img src="/img/methods/yunshanfu.svg" width="50"/>|
</div>
