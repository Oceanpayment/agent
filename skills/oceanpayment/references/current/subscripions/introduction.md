---
sidebar_position: 1
sidebar_label: 介绍
---

# 

## 概述
Oceanpayment订阅模块用于支持商户在其系统中实现周期性扣款功能。该模块允许用户在首次支付后，商户按照设定的周期（如每周、每月、每年）自动发起续费交易，支持灵活的取消与续期管理。

<div className="subscripions-hero">
  <div className="subscripions-image">
    <img src="/img/cn/subscripions/one_accounts_en.png"/>
  </div>
  <div className="subscripions-text">
    <h1>全面的订阅管理解决方案</h1>
    <p>支持SaaS平台、内容服务、软件授权等周期计费场景，帮助商户轻松构建订阅支付体系。</p>

	[<span className="button click-buttons">查看指南</span>](/docs/subscripions-api)
  </div>
</div>

## 功能结构
您可以使用Oceanpayment订阅来设置和管理定期付款。这些定期付款具有以下特点：

- 您可以按照您定义的计费模型收费。由于该过程是自动化的，因此不需要客户进行任何干预。
- 您可以根据自己控制的计费周期自动向用户收费。它让您可以轻松创建和管理订阅，并获取付款活动和订阅状态的即时提醒。
<div className="table-container">
|功能模块|功能说明|
| --- | --- |
|[创建QuickPay ID](/docs/subscripions/quickpay-id/introduction)|生成的用户支付令牌（Token），管理用户的绑卡信息|
|[发起扣款](/docs/subscripions/directpay)|调用Oceanpayment支付网关进行扣款|
|[周期续扣](/docs/subscripions/recurring)|商户定期自动发起扣款请求|
|[取消订阅](/docs/subscripions/cancel)|用户取消订阅|
</div>


## 使用场景
### 快捷支付
用户在商户网站或应用中点击“一键支付”时，系统可直接复用已绑定的`QuickPay ID`发起支付，无需用户再次输入银行卡或支付账户信息。

### 订阅扣款
用户首次完成支付授权后，商户可在后续账期基于`QuickPay ID`发起自动续费或周期性扣款，实现订阅服务的连续支付能力。


## 🚀开始集成
1. **注册**：创建Oceanpayment[商家账户](/docs/introduction/register-merchant)，申请开通订阅功能；
2. **沙盒测试**：[获取测试账号和密钥](/docs/introduction/generate-key)，在沙盒环境中集成；
3. **查看文档📚**：阅读详细的API文档并进行开发；
4. **上线**：通过验证后，[切换生产环境](/docs/introduction/environment#请求地址)。
