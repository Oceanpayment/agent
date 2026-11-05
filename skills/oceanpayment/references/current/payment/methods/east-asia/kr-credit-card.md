---
sidebar_position: 2
sidebar_label: 韩国信用卡
---
# 

## 韩国信用卡
<div className="table-container">
|功能|说明|
| --- | --- |
|支付LOGO|<img src="/img/methods/kr-credit-card.svg" width="120"/>|
|集成方案|<ol><li>✅ 托管结账</li></ol>|
|推荐使用国家|韩国|
|是否支持虚拟行业|✅|
|是否支持订阅服务|❌️ |
|支持的SaaS|<ol><li>✅ Shopify</li><li>✅ Shoplazza店匠</li><li>✅ Shopline</li><li>✅ Shopyy</li><li>✅ Ueeshop</li><li>✅ Shoprise帕帕猴</li><li>✅ Shoplus超店</li><li>✅ Shoptop</li></ol>|
|支持的开源建站|<ol><li>✅ Magento</li><li>✅ WordPress/Woocommerce</li><li>✅ OpenCart</li><li>✅ PrestaShop</li><li>✅ ZenCart</li></ol>|
</div>


## 附加参数
使用韩国信用卡分期支付时，除标准请求参数外，必须额外传入以下参数。
|参数|说明|枚举|
| --- | --- | --- |
|`pay_bankCode`|支持的银行代码，为空则跳转银行聚合页面|<ul><li>CCLG: Shinhan</li><li>CCDI: Hyundai</li><li>CCSS: Samsung</li><li>CCNH: Nonghyup</li><li>CCHN: Hana</li><li>CCKE: KEB</li><li>CCLO: Lotte</li><li>CCCT: Citibank</li><li>CCWR: Woori</li><li>CCPB: Korea Post</li><li>CCKJ: Kwangju</li><li>CCSM: MG Credit Co-op</li><li>CCSU: Suhyup</li><li>CCCJ: Jeju</li><li>CCCU: Shinhyup</li><li>CCSB: Savings Bank</li><li>CCKD: KDB</li><li>CCBC: BC</li><li>CCKM: Kookmin</li></ul>|
|`pay_installments`|分期数，默认为1期|<ul><li>01</li><li>02</li><li>03</li><li>04</li><li>05</li><li>06</li><li>07</li><li>08</li><li>09</li><li>10</li><li>11</li><li>12</li></ul>|