---
sidebar_position: 3
sidebar_label: Klarna
---

#

## 安装
### 方式一
1. 登陆[Shopify店铺后台](https://admin.shopify.com)，访问【**Settings**】-【**Payment**】-【**Supported payment methods**】-【**Add payment methods**】，搜索：Klarna，点击安装。

<img src={require('/img/cn/saas/install/payment-methods.png').default} className="image-card"/>
<img src={require('/img/cn/saas/install/klarna1.png').default} className="image-card"/>


### 方式二
1. 在Shopify APP应用市场找到Oceanpayment - Klarna安装：[https://apps.shopify.com/klarna-payments-1](https://apps.shopify.com/klarna-payments-1)
<img src={require('/img/cn/saas/install/klarna2.png').default} className="image-card"/>
<img src={require('/img/cn/saas/install/klarna3.png').default} className="image-card"/>

## 配置信息
1. 填写Oceanpayment提供的配置信息，**Terminal**、**SecureCode**、Methods Code（默认为Klarna），保存。
<img src={require('/img/cn/saas/install/klarna4.png').default} className="image-card"/>

## 支付logo
1. 勾选Klarna支付logo。
<img src={require('/img/cn/saas/install/klarna5.png').default} className="image-card"/>

## 环境说明
1.  Test mode不勾选，否则会提交测试环境。
<img src={require('/img/cn/saas/install/test.png').default} className="image-card"/>

## 授权功能
1. 此功能默认设置为**自动授权**，需要**开启手动授权**请联系Oceanpayment技术支持。 
<img src={require('/img/cn/saas/install/credit-card-redirect-cap.png').default} className="image-card"/>
2. 默认设置交易为自动授权：【**Payment capture method**】-【**Automatically at checkout**】，此时预授权的订单需要在Oceanpayment账户后台进行授权操作。 
3. 当设置交易为手动授权：【**Payment capture method**】-【**Manually**】，此时预授权的订单需要在Shopify后台进行授权操作。 

## 卸载
1. 在【**Settings**】-【**Payments**】- 找到Klarna支付方式，点击**Deactivate**。
<img src={require('/img/cn/saas/install/klarna-uninstall.png').default} className="image-card"/>
