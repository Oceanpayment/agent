---
sidebar_position: 5
sidebar_label: 本地支付
---

#
:::warning[注意]
Shoplline与Oceanpayment本地支付对接方式为聚合支付，支持Oceanpayment所有本地支付。  
:::

### 安装
1. 登陆[Shoplline店铺后台](https://admin.myshopline.com)，访问【**设置**】-【**收款**】-【**其他收款方式**】-【**添加**】，搜索：Multiple payments，点击**启用**。
<img src={require('/img/cn/saas/install/shopline-other.png').default} className="image-card"/>
<img src={require('/img/cn/saas/install/shopline-mp.png').default} className="image-card"/>

### 配置信息
1. 填写Oceanpayment提供的配置信息，账号(account)、终端号(terminal)、秘钥(secureCode)。
<img src={require('/img/cn/saas/install/shopline-mp1.png').default} className="image-card"/>

### 支付logo
1. 勾选支持的支付方式，没有申请的不需要勾选。
:::warning[注意]
如果没有找到您需要勾选的支付方式，可以默认勾选一个，支付功能不受影响。
:::
<img src={require('/img/cn/saas/install/shopline-other1.png').default} className="image-card"/>

### 卸载
1. 找到Multiple payments支付方式，点击**停用**。
<img src={require('/img/cn/saas/install/shopline-cc5.png').default} className="image-card"/>
