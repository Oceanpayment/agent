---
sidebar_position: 1
sidebar_label: 支付语言
---
# 
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
本文档详细介绍了Oceanpayment支付页面所提供的多语言支持功能。该功能允许商户根据其客户的地区或语言偏好，展示相应语言的支付界面，从而显著提升全球用户的支付体验和交易转化率。
<div className="subscripions-hero">
  <div className="subscripions-image">
    <img src="/img/language.png"/>
  </div>
  <div className="subscripions-text">
    <h1>一站式多语言支付解决方案</h1>
    <p>Oceanpayment提供安全可靠的多语言支付解决方案，助力企业轻松拓展全球市场。</p>

  </div>
</div>


## 支持集成
:::warning[注意]
支付语言功能只支持[托管结账](host-page/integration)和[嵌入式](embedded/integration)-信用卡支付集成方案
:::

## 语言优先级
1. Oceanpayment支付页面语言默认设置为英文；
2. 会根据用户的浏览器设置的语言来显示；
3. 当[`language`](parameter#业务参数)有传值时，会优先显示传值的语言。
### 托管结账
```html
<input type="hidden" name="language" value="en_US" />
```

### 嵌入式
<Tabs> 
  <TabItem value="信用卡" label="信用卡">
```javascript
<script>
  $(function() {
      Oceanpayment.init(' ','','en_US');
  });
</script>
```
  </TabItem>
  
  <TabItem value="Google Pay" label="Google Pay">
GooglePay支付按钮样式参考：https://developers.google.com/pay/api/web/guides/resources/customize?hl=zh-CN
```javascript
<script>
   $(function() {
        //传true提交沙盒环境，传空提交生产环境。
        onePageGooglePay.init(true, {
            buttonStyle: {
                buttonColor:'',/*按钮颜色*/
                buttonType:'',/*按钮类型*/
                buttonRadius:'',/*圆角*/
                buttonSizeMode:'',/*尺寸样式*/
                buttonLocale:''/*按钮语言*/
            }
        });
  });
</script>
```
  </TabItem>
  
  <TabItem value="Apple Pay" label="Apple Pay">
ApplePay支付按钮样式参考：https://developer.apple.com/documentation/apple_pay_on_the_web/applepaybutton  
```javascript
<script>
   $(function() {
        //传true提交沙盒环境，传空提交生产环境。
        onePageApplePay.init(true, {
            buttonStyle: {
                buttonstyle:'', /*按钮颜色*/
                type:'' /*按钮类型*/
            }
        });
   });
</script>
```
  </TabItem>
</Tabs>


## 支持的语言
<div className="table-container">
语言代码|语言名称（英文）|语言名称（中文）|
| --- | --- | --- |
|`en`;`en_US`|English|英语|
|`de`;`de_DE`;`de_AT`;`de_LI`;`de_LU`;`de_CH`|German|德语|
|`fr`;`fr_FR`;`fr_BE`;`fr_CA`;`fr_LU`;`fr_MC`;`fr_CH`|French|法语|
|`it`;`it_IT`;`it_CH`|Italian|意大利语|
|`es`;`es_ES`;`es_AR`;`es_PY`;`es_PA`;`es_PR`|Spanish|西班牙语|
|`pt`;`pt_PT`;`pt_BR`|Portuguese|葡萄牙语|
|`ru`;`ru_RU`;`ru_MD`|Russian|俄语|
|`ja`;`ja_JP`|Japanese|日语|
|`ko`;`ko_KR`|Korean|韩语|
|`ar`;`ar_sa`|Arabic|阿拉伯语|
|`tr`;`tr_tr`;`tr_TR`|Turkish|土耳其语|
|`zh_CN`|Simplified Chinese|简体中文|
|`zh_HK`|Traditional Chinese|繁体中文|
|`nb`|Norway|挪威|
|`sv`|Sweden|瑞典|
|`nl`|Netherlands|荷兰|
|`da`|Danish|丹麦|
|`fi`|Finnish|芬兰|
|`pl`|Polish|波兰|
|`ms`|Malay|马来语|
|`th`|Thai Language|泰语|
|`fil`|Filipino|菲律宾|
|`id`;`in`|Indonesian|印尼语|
|`vi`|Vietnamese|越南语|


</div>