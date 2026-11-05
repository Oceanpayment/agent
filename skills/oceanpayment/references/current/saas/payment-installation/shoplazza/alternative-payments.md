---
sidebar_position: 7
sidebar_label: 本地支付
---

# 

### 安装
1. 登陆[Shoplazza店铺后台](https://sso.shoplazza.com)，访问【**设置**】-【**收款**】-【**添加收款服务**】-【**按收款提供商搜索**】，搜索：oceanpayment，点击**启用**。
<img src={require('/img/cn/saas/install/shoplazza-cc1.png').default} className="image-card"/>

### 配置信息

1. 选择Apple Pay。
<img src={require('/img/cn/saas/install/shoplazza-local1.png').default} className="image-card"/>
2. 填写Oceanpayment提供的配置信息，账号(Account)、客户端ID(Terminal)、秘钥(SecureCode)。
<img src={require('/img/cn/saas/install/shoplazza-local2.png').default} className="image-card"/>

### 添加支付方式
1. 选择已申请的支付方式，没有申请的支付不需要勾选。
2. 支持的支付方式：<span className="badge badge--primary">Konbini</span>
<span className="badge badge--primary">UnionPay</span>
<span className="badge badge--primary">Bank Transfer（巴西，哥伦比亚，马来西亚，菲律宾，泰国）</span>
<span className="badge badge--primary">Boleto</span>
<span className="badge badge--primary">OXXO</span>
<span className="badge badge--primary">Bancontact</span>
<span className="badge badge--primary">Blik</span>
<span className="badge badge--primary">Trustly</span>
<span className="badge badge--primary">MyBank</span>
<span className="badge badge--primary">Malaysia Cash payment</span>
<span className="badge badge--primary">Atome</span>
<span className="badge badge--primary">Kakao Pay（KOR_eWallet）</span>
<span className="badge badge--primary">DANA</span>
<span className="badge badge--primary">LINE Pay</span>
<span className="badge badge--primary">BPI</span>
<span className="badge badge--primary">Touch'n Go</span>
<span className="badge badge--primary">TrueMoney</span>
<span className="badge badge--primary">Akulaku </span>
<span className="badge badge--primary">Boost</span>
<span className="badge badge--primary">FPS</span>
<span className="badge badge--primary">Debit Card - Vietnam</span>
<span className="badge badge--primary">PIX</span>
<span className="badge badge--primary">GrabPay</span>
<span className="badge badge--primary">iDEAL</span>
<span className="badge badge--primary">Skrill</span>
<span className="badge badge--primary">Paysafecard</span>
<span className="badge badge--primary">MBWay</span>
<span className="badge badge--primary">Multibanco</span>
<span className="badge badge--primary">SEPA</span>
<span className="badge badge--primary">PayU</span>
<span className="badge badge--primary">EPS</span>
<span className="badge badge--primary">Open Banking</span>
<span className="badge badge--primary">Swish</span>
3. 选择`Bank Transfer（巴西，哥伦比亚）`，`Boleto`，`OXXO`支付方式时，请参考[店匠技术文档](https://helpcenter.shoplazza.com/hc/zh-cn/articles/10207204561817-%E6%94%B6%E9%9B%86%E5%AE%A2%E6%88%B7%E7%A8%8E%E5%8F%B7#--0-0)，店铺需要设置收集**客户税号**字段。
<img src={require('/img/cn/saas/install/shoplazza-local3.png').default} className="image-card"/>

### 物流同步
1. 勾选**自动同步物流单号**，**激活**。
<img src={require('/img/cn/saas/install/shoplazza-cc5.png').default} className="image-card"/>

### 卸载
1. 找到本地支付方式，点击**停用**。
<img src={require('/img/cn/saas/install/shoplazaa-uninstall.png').default} className="image-card"/>