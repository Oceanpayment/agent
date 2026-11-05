---
sidebar_position: 4
sidebar_label: Afterpay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#

### 概述
针对不同的消费者国家，您的店铺需要安装不同的Afterpay支付插件：
 - 申请**英国** 🇬🇧 地区，店铺需安装`Clearpay`，应用市场安装地址：[https://apps.shopify.com/oceanpayment-clearpay](https://apps.shopify.com/oceanpayment-clearpay)；
 - 申请**美国** 🇺🇸 地区，店铺需安装`Cash App Afterpay`，应用市场安装地址：[https://apps.shopify.com/cash-app-afterpay](https://apps.shopify.com/cash-app-afterpay)；
 - 申请**澳大利亚** 🇭🇲、**加拿大** 🇨🇦 地区，店铺需安装`Afterpay`，应用市场安装地址：[https://apps.shopify.com/oceanpayment-afterpay](https://apps.shopify.com/oceanpayment-afterpay)。

:::warning[注意]
若您的店铺安装了多个不同国家`Afterpay`支付插件，您可以使用[EasyPay - Payment Rules](https://apps.shopify.com/payment-checkout)工具实现以下效果优化支付体验：消费者在不同账单国家展示不同的Afterpay支付APP，例如：  
- GB展示Clearpay
- US展示Cash App Afterpay
- AU,CA展示Afterpay

具体操作可参考🎯[EasyPay - Payment Rules使用说明](/docs/saas/website/shopify/payment-rules)
:::
### 安装
1. 访问对应的安装地址，进入Install app安装页面。
<img src={require('/img/cn/saas/install/afterpay1.png').default} className="image-card"/>
<img src={require('/img/cn/saas/install/afterpay2.png').default} className="image-card"/>

### 配置信息
1. 填写Oceanpayment提供的配置信息，**Terminal**、**SecureCode**、Methods Code（固定为：Afterpay），保存。
<img src={require('/img/cn/saas/install/afterpay3.png').default} className="image-card"/>

### 支付logo
1. 勾选Klarna支付logo。
<Tabs> 
  <TabItem value="Clearpay" label="Clearpay" default>
    <img src={require('/img/cn/saas/install/afterpay-cardtype3.png').default} className="image-card"/>
  </TabItem>
  <TabItem value="$ Afterpay" label="$ Afterpay">
    <img src={require('/img/cn/saas/install/afterpay-cardtype2.png').default} className="image-card"/>
  </TabItem>
  <TabItem value="Afterpay" label="Afterpay">
    <img src={require('/img/cn/saas/install/afterpay-cardtype1.png').default} className="image-card"/>
  </TabItem>
</Tabs>

### 环境说明
1.  Test mode不勾选，否则会提交测试环境。
<img src={require('/img/cn/saas/install/test.png').default} className="image-card"/>

### 授权功能
1. 此功能默认设置为**自动授权**，需要**开启手动授权**请联系Oceanpayment技术支持。 
<img src={require('/img/cn/saas/install/credit-card-redirect-cap.png').default} className="image-card"/>
2. 默认设置交易为自动授权：【**Payment capture method**】-【**Automatically at checkout**】，此时预授权的订单需要在Oceanpayment账户后台进行授权操作。 
3. 当设置交易为手动授权：【**Payment capture method**】-【**Manually**】，此时预授权的订单需要在Shopify后台进行授权操作。 

### 卸载
1. 在【**Settings**】-【**Payments**】- 找到Afterpay/$ Afterpay/Clearpay支付方式，点击**Deactivate**。
<Tabs>
  <TabItem value="Clearpay" label="Clearpay" default>
    <img src={require('/img/cn/saas/install/afterpay-uninstall3.png').default} className="image-card"/>
  </TabItem>
  <TabItem value="$ Afterpay" label="$ Afterpay">
    <img src={require('/img/cn/saas/install/afterpay-uninstall2.png').default} className="image-card"/>
  </TabItem>
  <TabItem value="Afterpay" label="Afterpay">
    <img src={require('/img/cn/saas/install/afterpay-uninstall1.png').default} className="image-card"/>
  </TabItem>
</Tabs>