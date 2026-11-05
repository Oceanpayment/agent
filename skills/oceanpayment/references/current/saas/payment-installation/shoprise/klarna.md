---
sidebar_position: 2
sidebar_label: Klarna
---

#

### 安装
1. 登陆[Shoprise店铺后台](https://shoprise.com/register)，访问【**设置**】-【**收款方式**】-【**信用卡支付**】 -【**添加支付渠道**】 -【**Klarna本地支付（通过Oceanpay接入）**】 → 【**激活**】。
<img src={require('/img/cn/saas/install/shoprise-cc.png').default} className="image-card"/>
<img src={require('/img/cn/saas/install/shoprise-klarna1.png').default} className="image-card"/>

### 配置信息
1. 填写Oceanpayment提供的配置信息，商户号(account)、终端号(terminal)、secureCode。
<img src={require('/img/cn/saas/install/shoprise-klarna2.png').default} className="image-card"/>

### 授权功能
店铺后台Klarna有**自动**或**手动**授权模式的设置：
1. **自动入账订单的付款**：订单支付完成后预授权待处理直接授权成功；
2. **手动入账订单的付款**：订单支付完成后订单状态为预授权待处理，需人工在店铺后台进行授权或者账户后台进行授权后，从预授权待处理变授权完成，手动模式支持先发货再授权（适用Klarna Manual Capture模式）。手动模式下可以由商户手动发货授权，或者上传物流单号后点发货授权。
<img src={require('/img/cn/saas/install/shoprise-klarna3.png').default} className="image-card"/>

### 卸载
1. 找到Klarna支付方式，点击**停用**。
