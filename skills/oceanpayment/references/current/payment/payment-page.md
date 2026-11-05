---
sidebar_position: 1
sidebar_label: 自定义支付页面
---

# 
import CollapsibleTable from '@site/src/components/CollapsibleTable';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
Oceanpayment支付页面支持通过自定义CSS样式实现品牌化展示。开发者可以根据品牌视觉规范，对支付页面的输入框、按钮等元素进行样式调整，以保持支付页面与商户网站或应用的整体设计风格一致，从而提升用户体验和品牌一致性。

## 支持的集成方式
以下两种集成方式可以支持自定义页面样式：
- [托管结账](/docs/payment/payment-page#托管结账)
- [嵌入式](/docs/payment/payment-page#嵌入式)

## 自定义方式
通过支付请求参数[`cssUrl`](/docs/payment/parameter#业务参数)指定自定义CSS文件地址，Oceanpayment支付页面将在加载时自动引入该样式文件并覆盖默认样式。

## 参数说明
<div className="table-container">
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `cssUrl` | String |自定义CSS文件的公网访问地址，必须使用 HTTPS协议，并确保Oceanpayment服务能够正常访问该资源。|
</div>
:::info[注意]
- `cssUrl`必须为可公开访问的HTTPS链接。
- 建议使用稳定的CDN或静态资源服务器托管CSS文件，以避免因资源不可访问导致样式加载失败。
- 自定义样式仅用于页面展示，不会影响支付逻辑、风控校验或页面功能。
- 建议仅修改页面颜色、圆角、边框等视觉样式，避免对页面布局进行大幅调整，以确保最佳兼容性。
:::

## 可自定义的样式类
开发者可在CSS文件中定义以下样式类，以覆盖Oceanpayment支付页面的默认样式。
<div className="table-container">
|css样式|说明|参考属性|
| --- |--- | --- |
|`.field__input` |卡信息填写框|<ul><li>border</li><li>border-radius</li><li>background-color</li><li>color</li><li>font-size</li></ul>|
|`.confirm` |支付确认按钮|<ul><li>border</li><li>border-radius</li><li>background-color</li><li>color</li><li>font-size</li></ul>|
|`.cancel` |支付取消按钮|<ul><li>display</li><li>border</li><li>border-radius</li><li>background-color</li><li>color</li><li>font-size</li></ul>|
</div>


## 托管结账  
### 默认样式
<img src={require('/img/cn/payment/redirect-page.png').default} className="image-card"/>

### 自定义样式
在[托管结账](/docs/payment/host-page/integration#工作原理)模式下，可通过表单参数`cssUrl`指定自定义样式文件。
```html
<input
  type="hidden"
  name="cssUrl"
  value="https://www.oceanpayment.com.cn/wp-content/themes/oceanpayment/css/style-red.css"
/>
```
<img src={require('/img/cn/payment/redirect-red.png').default} className="image-card"/>


## 嵌入式
### 默认样式
<img src={require('/img/cn/payment/one-page.png').default} className="image-card"/>

### 自定义样式
<Tabs> 
  <TabItem value="信用卡" label="信用卡">
在信用卡嵌入式支付模式下，可通过[`Oceanpayment.init()`](/docs/payment/embedded/integration#工作原理)方法的`cssUrl`参数指定自定义 CSS文件。支付组件初始化时，Oceanpayment会自动加载该样式文件，并将其中定义的样式应用于支付页面，实现页面样式的自定义。
```javascript
<script>
  $(function() {
      Oceanpayment.init(' ','https://www.oceanpayment.com.cn/wp-content/themes/oceanpayment/css/style-black.css','');
  });
</script>
```
<img src={require('/img/cn/payment/one-page-black.png').default} className="image-card"/>
  </TabItem>
  
  <TabItem value="Google Pay" label="Google Pay">
在Google Pay嵌入式支付模式下，可通过[`onePageGooglePay.init()`](/docs/payment/embedded/integration#工作原理)方法的 buttonStyle参数自定义 Google Pay按钮的展示样式。
:::warning[注意]
支付组件初始化时，将根据传入的配置自动渲染符合Google Pay规范的[支付按钮](https://developers.google.com/pay/api/web/guides/resources/customize?hl=zh-CN)。
:::
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
在Apple Pay嵌入式支付模式下，可通过[`onePageApplePay.init()`](/docs/payment/embedded/integration#工作原理)方法的 buttonStyle参数自定义 Apple Pay按钮的展示样式。
:::warning[注意]
支付组件初始化时，将根据传入的配置自动渲染符合Apple Pay规范的[支付按钮](https://developer.apple.com/documentation/apple_pay_on_the_web/applepaybutton)。
:::
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
