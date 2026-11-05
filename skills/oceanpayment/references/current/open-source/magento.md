---
sidebar_position: 2
sidebar_label: Magento
---

# 
## 概述
Magento是一套专业开源的电子商务系统。Magento设计得非常灵活，具有模块化架构体系和功能。易于与第3方应用系统无缝集成。其面向企业级应用，可处理各方面的需求，以及建设一个多种用途和适用面的电子商务网站。

## 安装
### 2.0以上版本
1. 将[Github下载的文件](https://github.com/Oceanpayment/Magento-V2.3.x)覆盖到magento网站根目录；
2. 在网站根目录下运行 php bin/magento setup:upgrade，等待加载完成所有的模块；
3. 清除后台缓存System->Cache Management；
4. 进入配置Stores-> Configuration-> Sales->Payment Methods。


### 2.0以下版本
1. 将[Github下载的文件](https://github.com/Oceanpayment/Magento-V1.x.x)覆盖到magento网站根目录；
 - 将文件夹‘op_xx’复制到网站正在使用的模板路径中，例如：app\design\frontend\正在使用的模板名\default\template\op_xx。
 - 文件夹images复制到正在使用的模板路径中，例如：skin\frontend\正在使用的模板名\default\images。
 
2. 清除magento后台缓存；
3. 进入配置System-> Configuration-> Payment Methods。

## 配置
<div className="table-container">
|配置|选项|
| --- | --- |
|Enable|Yes|
|Title|Your payment method.|
|Account|Provide by Oceanpayment technical support.|
|Terminal|Provide by Oceanpayment technical support.|
|SecureCode|Provide by Oceanpayment technical support.|
|Gataway URL|• Production environment: https://secure.oceanpayment.com/gateway/service/pay<br/>• Sandbox environment: https://test-secure.oceanpayment.com/gateway/service/pay|
|Pay Mode| • Redirect: Redirect to open payment page<br/>• Iframe: iframe payment page.|
|New Order Status|On Hold|
|Approved Order Status|Processing|
|Failure Order Status|Canceled|
|Pending Order Status|Pending|
|Invoice When Complete|Yes|
|Payment from Applicable Countries|All Allowed Countries|
</div>