---
sidebar_position: 2
sidebar_label: PIX
---
# 

## PIX
<div className="table-container">
|功能|说明|
| --- | --- |
|支付LOGO|<img src="/img/methods/pix.svg" width="60"/>|
|集成方案|<ol><li>✅ 托管结账</li></ol>|
|推荐使用国家|巴西|
|是否支持虚拟行业|✅|
|是否支持订阅服务|❌️ |
|支持的SaaS|<ol><li>✅ Shopify</li><li>✅ Shoplazza店匠</li><li>✅ Shopline</li><li>✅ Shopyy</li><li>✅ Ueeshop</li><li>✅ Shoprise帕帕猴</li><li>✅ Shoplus超店</li><li>✅ Shoptop</li></ol>|
|支持的开源建站|<ol><li>✅ Magento</li><li>✅ WordPress/Woocommerce</li><li>✅ OpenCart</li><li>✅ PrestaShop</li><li>✅ ZenCart</li></ol>|
</div>

## 附加参数
使用PIX支付时，除标准请求参数外，必须额外传入[`pay_bankCode`](/docs/payment/parameter#附加参数本地支付)（支持的银行代码）参数。该字段用于指定用户选择的银行，是PIX的必填项。
|参数|枚举|
| --- | --- |
|`pay_bankCode`|<ul><li>PQ</li></ul>|