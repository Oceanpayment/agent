---
sidebar_position: 1
sidebar_label: 常见问题
---
# 

## Shopify

### 安装时Methods Code需要填写吗？
信用卡可以默认为空，本地支付根据安装文档里说明的值填写。

### Shopify后台支付logo如何勾选？  
勾选对应申请的卡种即可，如申请了Visa、Mastercard，只勾选Visa和Mastercard卡种。 
<img src={require('/img/cn/saas/install/credit-card-redirect-cardtype.png').default} className="image-card"/>

### 启用支付需要开启测试环境吗？
不需要开启，否则会提交测试环境。 
<img src={require('/img/cn/saas/install/test.png').default} className="image-card"/>

### Shopify APP应用市场显示无法安装？
无法安装是APP应用设置问题，请联系Oceanpayment技术支持。

### Shopify后台同时存在Oceanpayment两种信用卡支付？
[跳转模式](/docs/saas/payment-installation#跳转模式)可以同时安装多个，[直连模式](/docs/saas/payment-installation#直连模式)只能安装一个。

### Shopify支付方式顺序是否可以调整？
目前只有shopifyplus版本支持修改，官方文档具体操作说明：https://help.shopify.com/zh-CN/manual/checkout-settings/script-editor

### Shopify支持多币种（当地货币）收单吗？
只有Shopify Payment和Ayden支持多币种收款，官方文档具体操作说明：https://help.shopify.com/zh-CN/manual/international/pricing/limitations 

### 货币格式修改
进入店铺后台进行修改：【**theme-customise**】 -【**Store details**】-【**Store currency**】-【**change formatting**】。

### Shopify安装Oceanpayment支付方式，前端不展示支付
1. 检查店铺是否有安装第三方支付方式限制的插件。
2. 请联系Oceanpayment技术支持，会提供备用APP进行安装。

### Shopify店铺的手动授权可以开启吗？
此功能默认设置为自动授权：【**Payment capture method**】-【**Manage**】-【**Automatically at checkout**】，如需设置成手动授权，需要提前联系我们。
<img src={require('/img/cn/saas/install/credit-card-redirect-cap.png').default} className="image-card"/>

### Shopify支付方式如何卸载？
在店铺【**Settings**】-【**Payments**】找到对应的支付方式，点击【**Deactivate**】 - 【**Uninstall**】卸载完成。

### Shopify可以修改和自定义排序支付方式名称吗？
1. Shopify Plus版本可以实现修改和自定义排序支付方式名称：https://help.shopify.com/zh-CN/manual/checkout-settings/checkout-blocks/customizations/payment-methods
2. 也可以安装使用第三方插件[EasyPay Payment Rules](/docs/saas/website/shopify/payment-rules)来实现。

### 如何在店铺后台搜索Oceanpayment的订单号？
在Shopify订单管理【orders】页面输入Oceanpayment订单号进行搜索：
<img src={require('/img/cn/saas/faq/faq1.png').default} className="image-card"/>

### 如何查看支付失败返回的错误信息？
错误信息会直接在支付页面展示：
<img src={require('/img/cn/saas/faq/faq2.png').default} className="image-card"/>
