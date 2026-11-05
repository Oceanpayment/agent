---
sidebar_position: 1
sidebar_label: 参数说明
---

# 
import Modal from '@site/src/components/Modal';
import CollapsibleTable from '@site/src/components/CollapsibleTable';

## 概述
本文档详细描述了调用支付功能时所需的通用参数、业务参数的格式、规则和要求。仅适用于Klarna和其他本地支付场景，请在发起请求前仔细阅读。

## 调用流程
```mermaid
flowchart LR
    A[MERCHANT] --> B[按规则组装所有参数]
    B --> C[生成签名signValue]
    C --> D[向Oceanpayment发送支付请求]

    style A fill:#5B7FFF,stroke:#5B7FFF,stroke-width:1px,color:#fff,font-weight:bold,font-size:14px
    style B fill:#fff,stroke:#ddd,stroke-width:1px,color:#444,font-size:14px,font-weight:bold
    style C fill:#fff,stroke:#ddd,stroke-width:1px,color:#c33,font-size:14px,font-weight:bold
    style D fill:#02993b,stroke:#02993b,stroke-width:1px,color:#fff,font-weight:bold,font-size:14px

    linkStyle default stroke:#02993b,stroke-width:1px
```

## 请求参数

### 通用参数(所有接口必传)
:::warning[注意]
这部分是所有接口都需要的公共参数，通常与身份认证、签名和账单基础信息相关。
:::
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`account`|string|6|是|Oceanpayment账户号|995149|
|`terminal`|string|8-12|是|Oceanpayment终端号|99514901|
|`signValue`|string|64|是|[安全签名](/docs/payment/sign)，用于验证交易的安全性，使用SHA256加密|2f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08|
|`key`|string|64|有条件|Oceanpayment公钥<ul><li>[嵌入式](/docs/payment/embedded/integration)-信用卡集成必传</li></ul>|9c4f2a8d7e1b3c5f6a0d9e2b4c7f1a3d5e6b8c0f2a1d9e3c7b5f4a2d6e8c1f0a3b7d9e2c5f1a6b8d0c3e7f4a2b9c1d6e8f0a3b5c7d9e2f1a6c8b4d0e3f7a9c1b5d6e8f2a3c7b1d9e0f4a6c8b2d3e5f7a9c1d0b4e6f8a2c3d7b9e1f0a5c6d8b2e3f7a9c1d4b6e8f0a2c3d5b7e9f1a4c6d8e0b2f3a5c7d9e1f4a6b8c0d2e3f5a7b9c1d4e6f8a0c2d3b5e7f9a1c4d6e8b0f2a3c5d7e9f1a4b6c8d0e2f3a5b7c9d1e4f6a8b0c2d3e5f7a9|
|`backUrl`|string|1-500|是|[同步返回](/docs/payment/parameter#返回参数)支付信息的网站URL地址|https://example.com/callback|
|`noticeUrl`|string|1-500|否|服务器回调URL地址，用于[交易结果推送](/docs/webhook/payments/introduction)及其他[业务状态推送](/docs/webhook/payments/introduction)|https://example.com/notify|
|`methods`|string|1-50|是|支付方式<ul><li>传值请参考[支付方式名称(methods)](/docs/payment/methods/list)</li></ul>|Credit Card|
|`order_number`|string|1-50|是|网站订单号|123456789|
|`order_currency`|string|3|是|订单号的交易币种<ul><li>采用国际标准[ISO 4217](/docs/resource/currency)代码</li></ul>|USD|
|`order_amount`|string|1-10|是|订单号的交易金额<ul><li>最大支持小数点后2位数，如：1.00</li><li>如果交易金额为0，不需要发送交易</li></ul>|1.00|
</div>

### 账单信息
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`billing_firstName`|string|1-50|是|消费者的名<ul><li>为了保证签名一致，需要[过滤字符](/docs/payment/sign#特殊字符处理)：首尾空格，双引号，小于号，大于号，单引号</li></ul>|John|
|`billing_lastName`|string|1-50|是|消费者的姓<ul><li>为了保证签名一致，需要[过滤字符](/docs/payment/sign#特殊字符处理)：首尾空格，双引号，小于号，大于号，单引号</li></ul>|Wilson|
|`billing_email`|string|1-50|是|消费者的邮箱<ul><li>为了保证签名一致，需要[过滤字符](/docs/payment/sign#特殊字符处理)：首尾空格，双引号，小于号，大于号，单引号</li></ul>|customer@gmail.com|
|`billing_phone`|string|0-50|有条件|消费者的电话<ul><li>日本便利店支付为必传</li></ul>|13106683312|
|`billing_country`|string|1-100|是|消费者的账单国家<ul><li>采用国际标准[ISO 3166](/docs/resource/country-code)代码</li></ul>|US|
|`billing_state`|string|1-100|是|消费者的州（省、郡）<ul><li>采用国际标准[ISO 3166-2](/docs/resource/state-code)代码</li></ul>|NY|
|`billing_city`|string|0-500|否|消费者的城市|New York|
|`billing_address`|string|0-500|否|消费者的详细地址|350 5th Ave|
|`billing_zip`|string|0-50|否|消费者的邮编|10024-3941|
|`billing_ip`|string|0-50|有条件|消费者的ip地址<ul><li>由网站进行获取，如果获取到多个ip，则取第一个</li><li>[嵌入式](/docs/payment/embedded/integration)，[服务器对服务器](/docs/payment/server-to-server/integration)集成必传</li></ul>|127.0.0.1|
</div>

### 产品信息
:::info[信息]
产品信息为结汇合规要求，相关字段均为必传参数。
:::
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`productName`|string|1-500|是|产品名称<ul><li>多个产品用英文,隔开 </li></ul>|shoes|
|`productNum`|string|1-50|是|产品数量<ul><li>多个产品用英文,隔开 </li></ul>|1|
|`productSku`|string|1-500|是|产品SKU<ul><li>多个产品用英文,隔开 </li></ul> |#123|
|`productPrice`|string|1-500|是|产品单价<ul><li>多个产品用英文,隔开 </li></ul>|1.00|
</div>

### 收货信息
当网站没有收货信息时，可以用账单信息的值进行传值。
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`ship_firstName`|string|1-50|否|收货人的名|John|
|`ship_lastName`|string|1-50|否|收货人的姓|Wilson|
|`ship_email`|string|1-50|否|收货人的邮箱|customer@gmail.com|
|`ship_phone`|string|0-50|否|收货人的电话|13106683312|
|`ship_country`|string|1-100|否|收货人的账单国家<ul><li>采用国际标准[ISO 3166](/docs/resource/country-code)代码</li></ul>|US|
|`ship_state`|string|1-100|否|收货人的州（省、郡）<ul><li>采用国际标准[ISO 3166-2](/docs/resource/state-code)代码</li></ul>|NY|
|`ship_city`|string|0-500|否|收货人的城市|New York|
|`ship_addr`|string|0-500|否|收货人的详细地址|350 5th Ave|
|`ship_zip`|string|0-50|否|收货人的邮编|10024-3941|
</div>

### 业务参数
按对接场景需求进行传参。
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`order_notes`|string|0-500|否|订单备注信息，返回时则原样返回|test|
|`pages`|string|0-50|否|支付页面终端<ul><li>0:PC端 (默认)</li><li>1:移动端</li></ul>|0|
|`logoUrl`|string|0-50|否|用于显示在支付页面上的logo URL<ul><li>只支持[托管结账](/docs/payment/payment-page#托管结账)和[嵌入式](/docs/payment/payment-page#嵌入式)-信用卡集成</li></ul>|https://example.com/logo.png|
|`language`|string|0-50|否|支付页面语言，不传值默认根据浏览器语言进行适配<ul><li>支持[24种语言](/docs/payment/language)，默认英语（en_US），</li><li>只支持[托管结账](/docs/payment/language#托管结账)和[嵌入式](/docs/payment/language#嵌入式)-信用卡集成</li></ul>|en_US|
|`cssUrl`|string|0-50|否|在线[CSS样式文件链接](/docs/payment/payment-page)，用于重写支付页面的样式<ul><li>必须为https协议开头，</li><li>覆盖Oceanpayment支付页面原有的样式，</li><li>只支持**托管结账**和**嵌入式**集成</li></ul>|https://example.com/style.css|
|`pay_website`|string|0-500|有条件|商家的来源网址<ul><li>SaaS/平台对接时为必填项</li></ul>|example.com|
</div>

### 附加参数(本地支付)
:::warning[注意]
在使用本地支付方式时，除通用请求参数外，部分支付方式还需传递额外的特定参数。请根据不同支付方式的接口要求，正确传入对应参数。
:::
<div className="table-container">
|参数名|类型|长度|是否必填|描述|
| --- | --- | --- | --- | --- |
|`pay_bankCode`|string|1-50|有条件|<Modal triggerText="支持的银行代码" modalTitle="支持的银行代码"><table><thead><tr><th>支付方式</th><th>pay_bankCode</th></tr></thead><tbody><tr><td>iDEAL</td><td><ul><li>HANDNL2A: Handelsbanken</li><li>REVOLT21: Revolut</li><li>ABNANL2A: ABN AMRO</li><li>ASNBNL21: ASN Bank</li><li>BUNQNL2A: Bunq</li><li>INGBNL2A: ING</li><li>KNABNL2H: Knab</li><li>RABONL2U: Rabobank</li><li>RBRBNL21: RegioBank</li><li>SNSBNL2A: SNS Bank</li><li>TRIONL2U: Triodos Bank</li><li>FVLBNL22: Van Lanschot</li></ul></td></tr><tr><td>越南网银转账</td><td><ul><li>9PAY_BANKTRANSFER: 9PAY</li></ul></td></tr><tr><td>越南借记卡</td><td><ul><li>9PAY_BANKTRANSFER: 9PAY</li></ul></td></tr><tr><td>菲律宾网银转账</td><td><ul><li>DRAGONPAY: Dragonpay</li></ul></td></tr><tr><td>马来西亚网银转账</td><td><ul><li>FPX_MB2U: FPX Maybank</li><li>FPX_CIMBCLICKS: FPX CIMB</li><li>FPX_AMB: FPX_AMB</li><li>FPX_HLB: FPX_HLB</li><li>FPX_PBB: FPX_PBB</li><li>FPX_RHB: FPX_RHB</li><li>FPX_BIMB: FPX_BIMB</li><li>FPX_OCBC: FPX_OCBC</li><li>FPX_SCB: FPX_SCB</li><li>FPX_ABB: FPX_ABB</li><li>FPX_UOB: FPX_UOB</li><li>FPX_ABMB: FPX_ABMB</li><li>FPX_BSN: FPX_BSN</li><li>FPX_KFH: FPX_KFH</li><li>FPX_BMMB: FPX_BMMB</li><li>FPX_BKRM: FPX_BKRM</li><li>FPX_HSBC: FPX_HSBC</li><li>FPX_AGROBANK: FPX_AGROBANK</li></ul></td></tr><tr><td>马来西亚现金支付</td><td><ul><li>CASH-711: 7-eleven</li></ul></td></tr><tr><td>泰国网银转账</td><td><ul><li>OMISE_SCB: The siam Commercial Bank</li><li>OMISE_KTB: Krung Thai Bank</li><li>OMISE_BAY: Krungsri Bank</li><li>OMISE_BBL: Bangkok Bank</li></ul></td></tr><tr><td>泰国现金支付</td><td><ul><li>CASH-TH: Tesco Lotus</li></ul></td></tr><tr><td>PIX</td><td><ul><li>PQ</li></ul></td></tr><tr><td>Boleto</td><td><ul><li>BL</li></ul></td></tr><tr><td>哥伦比亚网银转账</td><td><ul><li>PC</li></ul></td></tr><tr><td>Efecty</td><td><ul><li>EY</li></ul></td></tr><tr><td>Davivienda</td><td><ul><li>DA</li></ul></td></tr><tr><td>OXXO</td><td><ul><li>OX</li></ul></td></tr><tr><td>韩国信用卡</td><td><ul><li>CCLG: Shinhan</li><li>CCDI: Hyundai</li><li>CCSS: Samsung</li><li>CCNH: Nonghyup</li><li>CCHN: Hana</li><li>CCKE: KEB</li><li>CCLO: Lotte</li><li>CCCT: Citibank</li><li>CCWR: Woori</li><li>CCPB: Korea Post</li><li>CCKJ: Kwangju</li><li>CCSM: MG Credit Co-op</li><li>CCSU: Suhyup</li><li>CCCJ: Jeju</li><li>CCCU: Shinhyup</li><li>CCSB: Savings Bank</li><li>CCKD: KDB</li><li>CCBC: BC</li><li>CCKM: Kookmin</li></ul></td></tr></tbody></table></Modal>|
|`pay_countryCode`|string|1-50|有条件|<Modal triggerText="支持的国家代码" modalTitle="支持的国家代码"><table><thead><tr><th>支付方式</th><th>pay_countryCode</th></tr></thead><tbody><tr><td>Boleto</td><td><ul><li>BR</li></ul></td></tr><tr><td>哥伦比亚网银转账</td><td><ul><li>CO</li></ul></td></tr><tr><td>Davivienda</td><td><ul><li>CO</li></ul></td></tr><tr><td>OXXO</td><td><ul><li>MX</li></ul></td></tr></tbody></table></Modal>|
|`pay_installments`|string|1-50|有条件|<Modal triggerText="分期数" modalTitle="分期数"><table><thead><tr><th>支付方式</th><th>pay_installments</th></tr></thead><tbody><tr><td>巴西信用卡</td><td>支持以下分期:1,2,3,4,5,6,7,8,9,10,11,12</td></tr><tr><td>韩国信用卡</td><td>分期数： 默认为01为一期，支持以下分期：01,02,03,04,05,06,07,08,09,10,11,12</td></tr></tbody></table></Modal>|
|`pay_cpf`|string|1-50|有条件|消费者的CPF，<Modal triggerText="纳税人识别号" modalTitle="纳税人识别号"><table><thead><tr><th>支付方式</th><th>pay_cpf</th></tr></thead><tbody><tr><td>Boleto</td><td>巴西纳税人识别号，11位。格式为：<ul><li>带符号：xxx.xxx.xxx-xx</li><li>数字：xxxxxxxxxxx</li></ul></td></tr><tr><td>哥伦比亚网银转账</td><td><ul><li>6-11位</li></ul></td></tr><tr><td>Davivienda</td><td><ul><li>10位数</li></ul></td></tr><tr><td>Efecty</td><td><ul><li>6-10位数</li></ul></td></tr><tr><td>OXXO</td><td><ul><li>10-18位数</li></ul></td></tr></tbody></table></Modal>|
|`pay_accountNumber`|string|1-50|有条件|<ul><li>Apple Pay&Google Pay直连返回的[Payment Token参数](/docs/payment/server-to-server/integration#本地支付集成)</li><li>微信/支付宝面对面付款-商家扫码消费者[支付授权码](/docs/payment/pos/integration#工作原理)</li><ul><li>微信授权码格式要求：^1[0-6][0-9]{16}$</li><li>支付宝授权码格式要求：^\d&#123;16,24&#125;$</li></ul><li>消费者账户号码</li></ul>|
|`card_type`|string|1-50|有条件|支付卡种。[Google Pay](/docs/payment/server-to-server/integration#工作原理)、[Apple Pay](/docs/payment/server-to-server/integration#工作原理)直连支付必传<ul><li>Apple Pay/Google Pay枚举：`VISA`, `MASTERCARD`, `MAESTRO`, `JCB`, `ELO`, `DISCOVER`, `CHINAUNIONPAY`, `CARTESBANCAIRES`, `AMEX`</li></ul>|0|
</div>

### Klarna产品信息
:::warning[注意]
在使用[Klarna](/docs/payment/methods/bnpl/klarna)支付时，`itemList`参数为必传。每个订单的总金额必须与明细金额严格一致，否则会导致支付失败。
:::
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`itemList`|string|1-500|是|<Modal triggerText="产品节点信息" modalTitle="节点字段"><table><thead><tr><th>参数名</th><th>类型</th><th>长度</th><th>是否必填</th><th>描述</th></tr></thead><tbody><tr><td>`type`</td><td>String</td><td>1-50</td><td>是</td><td><ul><li>1: physical（代表实物商品）</li><li>2: electronics（代表虚拟商品）</li><li>3: discount（代表折扣/优惠券）</li><li>4: shipping_fee（代表运费）</li><li>5: sales_tax（代表全部销售税费）</li></ul></td></tr><tr><td>`title`</td><td>String</td><td>1-100</td><td>是</td><td>名称</td></tr><tr><td>`sku`</td><td>String</td><td>1-100</td><td>是</td><td>SKU</td></tr><tr><td>`price`</td><td>String</td><td>1-100</td><td>是</td><td>单价<br/>单价的传值需要包含税费的价格。<br/>例如：taxPrice(税费)=3，price=100+3</td></tr><tr><td>`quantity`</td><td>String</td><td>1-100</td><td>是</td><td>数量</td></tr><tr><td>`total_amount`</td><td>String</td><td>1-100</td><td>是</td><td>总价<br/>总价 = 数量(quantitly)*单价(price)<br/>总价的传值需要包含税费的价格，<br/>例如：taxPrice(税费)=3，price(单价)=100+3，quantity(数量)=2，total_amount(总价)=(100+3)*2=206</td></tr><tr><td>`taxRate`</td><td>String</td><td>1-100</td><td>是</td><td>税率<br/>税费(taxPrice)=税率x单价(price) </td></tr><tr><td>`taxPrice`</td><td>String</td><td>1-100</td><td>是</td><td>税费<br/>税费=税率(taxRate)*单价(price) </td></tr><tr><td>`image_url`</td><td>String</td><td>0-500</td><td>否</td><td>图片链接</td></tr><tr><td>`product_url`</td><td>String</td><td>0-500</td><td>否</td><td>产品链接</td></tr><tr><td>`remark`</td><td>String</td><td>0-500</td><td>否</td><td>备注</td></tr></tbody></table></Modal><ul><li>Json格式，最多只允许25个节点</li></ul>|&#123;<br/>&nbsp;&nbsp;"0": &#123;<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"title": "book",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"sku": "#001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"price": "100",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"quantity": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"total_amount": "100.00",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"taxRate": "0.01",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"taxPrice": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "https://www.example.com/a.jpg",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"product_url": "https://www.example.com/a.html",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"remark": ""<br/>&nbsp;&nbsp;&#125;,<br/>&nbsp;&nbsp;"1": &#123;<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "3",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"title": "discount",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"sku": "#002",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"price": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"quantity": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"total_amount": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"taxRate": "0.01",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"taxPrice": "0.01",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"product_url": "",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"remark": ""<br/>&nbsp;&nbsp;&#125;,<br/>&nbsp;&nbsp;"2": &#123;<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "4",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"title": "shipping_fee",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"sku": "#002",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"price": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"quantity": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"total_amount": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"taxRate": "0.01",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"taxPrice": "0.01",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"product_url": "",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"remark": ""<br/>&nbsp;&nbsp;&#125;,<br/>&nbsp;&nbsp;"3": &#123;<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "5",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"title": "sales_tax",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"sku": "#002",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"price": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"quantity": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"total_amount": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"taxRate": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"taxPrice": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"product_url": "",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"remark": ""<br/>&nbsp;&nbsp;&#125;<br/>&#125;|
</div>

订单总价由以下部分组成：
- 商品金额：每个商品单价 × 数量
- 税费：可针对商品、物流或订单全局的税额
- 物流费用：运费、快递费等
- 折扣：优惠券、满减、促销折扣等  

订单总价 = 商品金额 + 税费 + 物流费用 - 折扣。


### 航空参数
:::info[信息]
航空参数仅在航空支付场景下使用，其他交易类型无需传递。
:::
<div className="table-container">
<CollapsibleTable
  data={[
  
  { 
    title: "travel_totalTaxes",
    type: "string",
    length: "0-50",
    required: "否",
    desc: "税费",
    example: ""
  },
  {
    title: "travel_websiteLanguage",
    type: "string",
    length: "0-50",
    required: "否",
    desc: "网站语言",
    example: ""
  },
  {
    title: "travel_adult",
    type: "string",
    length: "0-3",
    required: "否",
    desc: "成人数量",
    example: ""
  },
  {
    title: "travel_child",
    type: "string",
    length: "0-3",
    required: "否",
    desc: "子女数量",
    example: ""
  },
  {
    title: "travel_infant",
    type: "string",
    length: "0-3",
    required: "否",
    desc: "婴儿数量",
    example: ""
  },
  {
    title: "travel_electronicTicket",
    type: "string",
    length: "1",
    required: "是",
    desc: "是否为电子机票<ul><li>1: True</li><li>0: False</li><ul>",
    example: ""
  },
  {
    title: "travel_agencyCode",
    type: "string",
    length: "0-10",
    required: "否",
    desc: "ATA机场代码",
    example: ""
  },
  {
    title: "travel_pnr",
    type: "string",
    length: "1-10",
    required: "是",
    desc: "PNR",
    example: ""
  },
  {
    title: "travel_spnr",
    type: "string",
    length: "0-10",
    required: "否",
    desc: "SPNR",
    example: ""
  },
  {
    title: "ticket_deliveryMethod",
    type: "string",
    length: "1",
    required: "是",
    desc: "票据的交付方式，仅支持小写字母<ul><li>pick_up: 现场自取</li><li>email: 通过电子邮件发送</li><li>post: 通过邮寄发送</li><li>phone: 发送至手机号码</li><ul>",
    example: ""
  },
  {
    title: "travel_customerInfoJson",
    type: "object",
    length: "-",
    required: "是",
    desc: "乘客节点信息（Json格式）",
    example: "",
    children: [
	      {
	        title: "customer",
	        type: "object",
	        length: "-",
	        required: "是",
	        desc: "乘客节点",
	        example: "",
	        children: [
	        	{
	        title: "travel_airportCount",
	        type: "string",
	        length: "0-10",
	        required: "否",
	        desc: "所有通过机场的总数",
	        example: ""
	      },
	      {
	        title: "travel_airportCode",
	        type: "string",
	        length: "1-100",
	        required: "是",
	        desc: "通过机场代码",
	        example: ""
	      },
	      {
	        title: "travel_airlinesCount",
	        type: "string",
	        length: "0-10",
	        required: "否",
	        desc: "航空公司总数",
	        example: ""
	      },
	      {
	        title: "travel_airlinesCode",
	        type: "string",
	        length: "1-100",
	        required: "是",
	        desc: "航空公司代码",
	        example: ""
	      },
	      {
	        title: "travel_airlinesName",
	        type: "string",
	        length: "1-200",
	        required: "是",
	        desc: "航空公司名称",
	        example: ""
	      },
	      {
	        title: "travel_journeyType",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "行程类型<ul><li>1: 往返</li><li>2: 单程</li><li>3: 多城市</li><li>9: 其他</li></ul>",
	        example: ""
	      },
	      {
	        title: "travel_hoursUntilDeparture",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "离起飞还有多少小时",
	        example: ""
	      },
	      {
	        title: "travel_industryType",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "业务类型<ul><li>1: 飞行</li><li>2: 酒店</li><li>3: 飞行+酒店</li></ul>",
	        example: ""
	      },
	      {
	        title: "travel_accountRegistered",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "是否注册用户<ul><li>1: 是</li><li>0: 否</li></ul>",
	        example: ""
	      },
	      {
	        title: "travel_departureCountry",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "出发国家<ul><li>ISO 3166</li></ul>",
	        example: ""
	      },
	      {
	        title: "travel_departureCity",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "出发城市",
	        example: ""
	      },
	      {
	        title: "travel_arrivalCountry",
	        type: "string",
	        length: "1-50",
	        required: "否",
	        desc: "到达国家<ul><li>采用国际标准ISO 3166代码</li></ul>",
	        example: ""
	      },
	      {
	        title: "travel_arrivalCity",
	        type: "string",
	        length: "0-50",
	        required: "是",
	        desc: "到达城市",
	        example: ""
	      },
	      {
	        title: "travel_lastName",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "乘客姓",
	        example: ""
	      },
	      {
	        title: "travel_firstName",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "乘客名",
	        example: ""
	      },
	      {
	        title: "travel_customerTitle",
	        type: "string",
	        length: "0-20",
	        required: "否",
	        desc: "乘客称呼",
	        example: ""
	      },
	      {
	        title: "travel_phone",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "乘客电话",
	        example: ""
	      },
	      {
	        title: "travel_email",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "乘客邮箱",
	        example: ""
	      },
	      {
	        title: "travel_customerNationality",
	        type: "string",
	        length: "0-500",
	        required: "否",
	        desc: "乘客国籍<ul><li>采用国际标准ISO 3166代码</li></ul>",
	        example: ""
	      },
	      {
	        title: "travel_isFrequentFlyer",
	        type: "string",
	        length: "0-1",
	        required: "否",
	        desc: "飞行常客<ul><li>1: True</li><li>0: False</li></ul>",
	        example: ""
	      },
	      {
	        title: "travel_frequentFlyerNumber",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "常旅号",
	        example: ""
	      },
	      {
	        title: "travel_certificateType",
	        type: "string",
	        length: "0-2",
	        required: "否",
	        desc: "证件类型<ul><li>1: 护照</li><li>2: 身份证</li><li>99: 其他</li></ul>",
	        example: ""
	      },
	      {
	        title: "travel_certificateNumber",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "证件号",
	        example: ""
	      },
	      {
	        title: "travel_certificateExpiryDate",
	        type: "string",
	        length: "0-10",
	        required: "否",
	        desc: "证件过期时间<ul><li>格式：YYYY-MM-DD</li></ul>",
	        example: ""
	      },
	      {
	        title: "travel_certificateIssuerCountry",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "证书颁发国<ul><li>采用国际标准ISO 3166代码</li></ul>",
	        example: ""
	      },
		  {
		    title: "travel_ticketNumber",
		    type: "string",
		    length: "1-200",
		    required: "是",
		    desc: "机票号码",
		    example: ""
		  },
		  {
		    title: "travel_ticketIssueAddress",
		    type: "string",
		    length: "0-50",
		    required: "否",
		    desc: "出票地址",
		    example: ""
		  },	      
	      {
	        title: "travel_airlineLeg",
	        type: "object",
	        length: "-",
	        required: "是",
	        desc: "航线信息节点（Json格式）",
	        example: "",
	        children: [
	        	{
	        title: "travel_departureDateTime",
	        type: "string",
	        length: "16",
	        required: "是",
	        desc: "出发日期<ul><li>格式为YYYY-MM-DD HH:MM</li></ul>",
	        example: ""
	      },
	      {
	        title: "travel_arrivalDateTime",
	        type: "string",
	        length: "16",
	        required: "是",
	        desc: "到达日期<ul><li>格式为YYYY-MM-DD HH:MM</li></ul>",
	        example: ""
	      },
	      {
	        title: "travel_originalAirportCode",
	        type: "string",
	        length: "1-30",
	        required: "是",
	        desc: "起飞机场代码",
	        example: ""
	      },
	      {
	        title: "travel_destinationAirportCode",
	        type: "string",
	        length: "1-30",
	        required: "是",
	        desc: "目的地机场代码",
	        example: ""
	      },
	      {
	        title: "travel_flightNumber",
	        type: "string",
	        length: "1-200",
	        required: "是",
	        desc: "航班号",
	        example: ""
	      },
	      {
	        title: "travel_fareClass",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "仓位<ul><li>1: Economy</li><li>2: Business</li><li>3: First</li></ul>",
	        example: ""
	      },
	      {
	        title: "travel_stopOver",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "停留代码",
	        example: ""
	      },
	      {
	        title: "travel_carrierCode",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "航空公司代码",
	        example: ""
	      },
	      
	      
	      
        ]
      },
      
      
	      
        ]
      },
      
    ]
  }

  
  
  ]}
/>
</div>

## QuickPay
### 创建QuickPay ID
:::warning[Note]
当您在使用订阅场景，[创建Quickpay ID](/docs/subscripions/quickpay-id/introduction)时，此字段`customer_id`为必传。
:::
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`customer_id`|string|1-50|是|用户ID<ul><li>唯一值，商户用来区分不同用户</li></ul>|NO123456|
</div>


### 发起扣款
:::warning[Note]
当您在使用订阅场景或快捷支付[发起扣款](/docs/subscripions/directpay)时，此字段`quickpay_id`为必传。
:::
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`quickpay_id`|string|1-200|是|Oceanpayment生成的唯一的Quickpay ID<ul><li>UUID格式</li></ul>|c6db7a28-7639-4d24-b7c5-6cd222c3e0fc|
</div>


## 返回参数
浏览器同步返回：
- 每笔支付均以POST方式返回至交易传参的[`backUrl`](/docs/payment/parameter#通用参数所有接口必传)；
- 返回方式默认为POST，可修改为GET方式。 
<div className="table-container">
|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`response_type`|string|回调类型<ul><li>0：浏览器返回</li><li>1：服务器异步通知</li></ul>|0|
|`account`|string|账户号|995149|
|`terminal`|string|终端号|99514901|
|`signValue`|string|[安全签名](/docs/compliance-and-security/sign/payment)，用于验证交易的安全性，使用SHA256加密|A3F1C9D4E8B27F6A5C0D1E9F4B6A7C8D2E3F1A9B5C6D7E8F0A1B2C3D4E5F678|
|`methods`|string|支付方式|Credit Card|
|`order_number`|string|网站订单号|123456789|
|`order_currency`|string|订单号的交易币种|USD|
|`order_amount`|string|订单号的交易金额|1.00|
|`order_notes`|string|订单备注信息|test|
|`card_number`|string|持卡人的信用卡卡号|411111***1111|
|`card_type`|string|卡种|Visa|
|`payment_country`|string|消费者IP所在国家|US|
|`payment_id`|string|支付ID，Oceanpayment的支付唯一单号|26154125951032147852122|
|`payment_status`|string|该笔[交易的结果状态](/docs/payment/status#付款状态)<ul><li>-1:待处理（预授权才会返回）</li><li>0:支付失败</li><li>1:支付成功</li></ul>|1|
|`payment_authType`|string|该笔[交易的类型](/docs/payment/status#支付类型)<ul><li>0:该交易类型为‘Sale’一般交易</li><li>1:该交易类型为‘预授权且非3D’交易</li><li>2:该交易类型为‘3D且非预授权’交易</li><li>3:该交易类型为‘3D且预授权’交易</li></ul>|0|
|`payment_details`|string|该笔[交易的支付详情](/docs/payment/status#响应代码)<ul><li>网站可以进行处理，在付款结果页面显示给消费者看</li></ul>|80000:Transaction Approved|
|`payment_solutions`|string|付款失败后的[解决方法](/docs/payment/status#响应代码)<ul><li>网站可以进行处理，在付款结果页面显示给消费者看</li></ul>||
|`payment_risk`|string|未通过的风控规则<ul><li>格式为：风控规则=分数;风控规则=分数;...... </li></ul>||
|`pay_barCode`|string|订单打印码||
|`payment_bankInfo`|string|调起银行SDK的参数信息||
</div>



## 异步通知
查看完整的Oceanpayment[异步通知](/docs/webhook/payments/checkout#通知参数)参数。
