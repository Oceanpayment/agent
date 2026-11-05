---
sidebar_position: 3
sidebar_label: Boleto
---
# 

## Boleto
<div className="table-container">
|功能|说明|
| --- | --- |
|支付LOGO|<img src="/img/methods/boleto.svg" width="60"/>|
|集成方案|<ol><li>✅ 托管结账</li></ol>|
|推荐使用国家|巴西|
|是否支持虚拟行业|✅|
|是否支持订阅服务|❌️ |
|支持的SaaS|<ol><li>✅ Shopify</li><li>✅ Shoplazza店匠</li><li>✅ Shopline</li><li>✅ Shopyy</li><li>✅ Ueeshop</li><li>✅ Shoprise帕帕猴</li><li>✅ Shoplus超店</li><li>✅ Shoptop</li></ol>|
|支持的开源建站|<ol><li>✅ Magento</li><li>✅ WordPress/Woocommerce</li><li>✅ OpenCart</li><li>✅ PrestaShop</li><li>✅ ZenCart</li></ol>|
</div>

## 附加参数
使用Boleto支付时，除标准请求参数外，必须额外传入以下参数。
|参数|说明|枚举|
| --- | --- | --- |
|`pay_bankCode`|支持的银行代码|<ul><li>BL</li></ul>|
|`pay_countryCode`|支持的国家代码|<ul><li>BR</li></ul>|
|`pay_cpf`|纳税人识别号，11位，格式为：<ul><li>带符号：xxx.xxx.xxx-xx</li><li>数字：xxxxxxxxxxx</li></ul>||