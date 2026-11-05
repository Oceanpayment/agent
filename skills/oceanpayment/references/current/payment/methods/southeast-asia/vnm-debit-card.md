---
sidebar_position: 2
sidebar_label: 越南借记卡
---
# 

## 越南借记卡
<div className="table-container">
|功能|说明|
| --- | --- |
|支付LOGO|<img src="/img/methods/vn-onlinebank.svg" height="40"/>|
|集成方案|<ol><li>✅ 托管结账</li></ol>|
|推荐使用国家|越南|
|是否支持虚拟行业|✅|
|是否支持订阅服务|❌️ |
|支持的SaaS|<ol><li>✅ Shopify</li><li>✅ Shopline</li><li>✅ Shopyy</li><li>✅ Ueeshop</li><li>✅ Shoprise帕帕猴</li><li>✅ Shoplus超店</li><li>✅ Shoptop</li></ol>|
|支持的开源建站|<ol><li>✅ Magento</li><li>✅ WordPress/Woocommerce</li><li>✅ OpenCart</li><li>✅ PrestaShop</li><li>✅ ZenCart</li></ol>|
</div>

## 附加参数
使用越南借记卡支付时，除标准请求参数外，必须额外传入[`pay_bankCode`](/docs/payment/parameter#附加参数本地支付)（支持的银行代码）参数。该字段用于指定用户选择的银行，是越南借记卡的必填项。
|参数|枚举|
| --- | --- |
|`pay_bankCode`|<ul><li>9PAY_BANKTRANSFER</li></ul>|