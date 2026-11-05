---
sidebar_position: 2
sidebar_label: Klarna On-Site Messaging
---

#

## 概述
[On Site Message (OSM)](https://docs.klarna.com/conversion-boosters/on-site-messaging/before-you-start/) 是Klarna提供的一种工具，让客户知道您的网站上可以使用Klarna支付。该服务适用于所有使用 Klarna Payments或 Klarna Checkout的零售商。而且是免费的！

## 安装说明
在安装Klarna OSM前，请确认已满足下列条件：
1. 请确认Shopify主题使用为2.0版本。如果您使用的不是2.0版本的主题，请参考文档升级至主题2.0版本，[主题升级](https://help.shopify.com/zh-CN/manual/online-store/themes/managing-themes/upgrading-themes)。
2. 在Oceanpayment有申请Klarna支付通道。
3. 联系Oceanpayment技术支持获得店铺对应的`MID`和`clientid`。

:::warning[MID和Clientid说明]
1. 每个域名在北美和欧洲都有对应的mid和clientid。北美的mid由N开头，欧洲的mid由K开头。
2. MID： Merchant ID，是分配给每个使用 Klarna的商户的唯一商户识别码，由一个字母跟着一串数字组成。
3. MID和Clientid示例：
- 北美：mid：N3210944；clientid：8a2b11ac-7f55-645e-8fcd-3154f28ebca8
- 欧洲：mid：K8685421；clientid：71305f12-e8e5-5caa-812e-bfcddfad6f9i
::: 

## 安装步骤
1. 在Shopify APP应用市场找到On Site Message (OSM)安装：[https://apps.shopify.com/klarna-on-site-messaging](https://apps.shopify.com/klarna-on-site-messaging)
<img src={require('/img/cn/saas/website/klarnaosm-install.png').default} className="image-card"/>

## 账户配置
1. 在Shopify后台APP中打开On Site Message，找到【**Account Septup**】 - 【**Klarna Account**】。
2. 在【**Select endpoint**】中选择对应的地区（Europe、NA、Oceania），并在下方输入框内输入地区对应的MID。完成后点击Connect Account。
<img src={require('/img/cn/saas/website/klarnaosm.png').default} className="image-card"/>

## 主题设置
1. 如果您使用了2.0版本主题，可以直接点击**App Block Instruction**配置插件。
2. 如果在【**Verify and Continue**】后出现Unable to Detect App Blocks提示，点击【**Continue without Verifying**】即可完成配置。
<img src={require('/img/cn/saas/website/klarnaosm1.png').default} className="image-card"/>

## 在产品页添加Klarna OSM
1. 在Shopify店铺后台访问自定义主题：【**Online Store**】 - 【**Themes**】 - 【**Customize**】 
<img src={require('/img/cn/saas/website/klarnaosm2.png').default} className="image-card"/>
2. 在右边的配置栏中，选择需要的显示类型**Placement type**和语言**Locale Setting**，点击保存。
<img src={require('/img/cn/saas/website/klarnaosm3.png').default} className="image-card"/>

## 常见问题
1. **设置完成后，Klarna OSM在网页前端中不显示。**  
- 检查MID对应的域名和地区（北美、欧洲）是否正确。
- Klarna OSM会识别用户的ip地址，请将ip地址调整到对应的覆盖区域内。
- 少数主题会有页面内Product Block和Klarna OSM不兼容的情况。在主题修改页面，产品详情页面单独添加一个App Block，在App Block中添加Klarna App后可正常显示。

2. **Klarna OSM是否支持自定义详情内容？**  
- 不支持自定义详情页内容。

3. **Klarna OSM点击learn more后，详情页显示空白页。**  
- 检查是否有使用其他页面拦截工具，如有，请联系第三方工具服务商停止拦截Klarna显示信息。例如Consent Manager等第三方工具会导致Klarna OSM详情页信息展示失败。