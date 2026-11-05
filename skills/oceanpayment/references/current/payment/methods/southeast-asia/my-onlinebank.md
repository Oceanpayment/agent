---
sidebar_position: 20
sidebar_label: 马来西亚网银转账
---
# 

## 马来西亚网银转账
<div className="table-container">
|功能|说明|
| --- | --- |
|支付LOGO|<img src="/img/methods/my-onlinebank.svg" width="120"/>|
|集成方案|<ol><li>✅ 托管结账</li></ol>|
|推荐使用国家|马来西亚|
|是否支持虚拟行业|✅|
|是否支持订阅服务|❌️ |
|支持的SaaS|<ol><li>✅ Shopify</li><li>✅ Shoplazza店匠</li><li>✅ Shopline</li><li>✅ Shopyy</li><li>✅ Ueeshop</li><li>✅ Shoprise帕帕猴</li><li>✅ Shoplus超店</li><li>✅ Shoptop</li></ol>|
|支持的开源建站|<ol><li>✅ Magento</li><li>✅ WordPress/Woocommerce</li><li>✅ OpenCart</li><li>✅ PrestaShop</li><li>✅ ZenCart</li></ol>|
</div>

## 附加参数
使用马来西亚网银转账支付时，除标准请求参数外，必须额外传入[`pay_bankCode`](/docs/payment/parameter#附加参数本地支付)（支持的银行代码）参数。该字段用于指定用户选择的银行，是马来西亚网银转账的必填项。
|参数|枚举|
| --- | --- |
|`pay_bankCode`|<ul><li>FPX_MB2U: FPX Maybank</li><li>FPX_CIMBCLICKS: FPX CIMB</li><li>FPX_AMB: FPX_AMB</li><li>FPX_HLB: FPX_HLB</li><li>FPX_PBB: FPX_PBB</li><li>FPX_RHB: FPX_RHB</li><li>FPX_BIMB: FPX_BIMB</li><li>FPX_OCBC: FPX_OCBC</li><li>FPX_SCB: FPX_SCB</li><li>FPX_ABB: FPX_ABB</li><li>FPX_UOB: FPX_UOB</li><li>FPX_ABMB: FPX_ABMB</li><li>FPX_BSN: FPX_BSN</li><li>FPX_KFH: FPX_KFH</li><li>FPX_BMMB: FPX_BMMB</li><li>FPX_BKRM: FPX_BKRM</li><li>FPX_HSBC: FPX_HSBC</li><li>FPX_AGROBANK: FPX_AGROBANK</li></ul>|