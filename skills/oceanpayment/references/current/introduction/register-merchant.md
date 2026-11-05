---
sidebar_position: 1
sidebar_label: 注册商家账户
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
在接入Oceanpayment生产环境前，您需先注册 Oceanpayment商家账户。注册成功后，登录Oceanpayment控制面板获取商户账户信息，并创建用于接口认证的[API密钥](/docs/introduction/generate-key)。完成上述配置后，即可根据相关技术文档进行生产环境的接口集成与业务接入。
:::info[信息]
沙盒环境开发和联调无需注册正式商家账户，可直接使用Oceanpayment提供的测试账户和沙盒配置。
:::

## 注册

<div className="timeline-title">
  <div className="timeline-line"></div>
  <div className="timeline-content">
	<div className="timeline-status">1</div>
	  ### 填写注册资料
	  <p className="timeline-des">在Oceanpayment商家注册页面[https://iam.oceanpayment.com/register](https://iam.oceanpayment.com/register)填写资料。</p>
  	  <img src={require('/img/iam-register.png').default} className="image-card"/>  
  	  <div className="table-container">
	  | 字段名称| 英文 |必填/可选|描述|
	  | --- | --- | --- | --- |
	  |名| First Name|必填|长度50|
	  |姓| Last Name|必填|长度50|
	  |品牌名称/公司名称| Do Business As/Brand Name|必填|长度100|
	  |公司注册国家/地区| Country of Registration|必填|<ul><li>Hong Kong</li><li>Macau</li><li>Singapore</li><li>China</li><li>United States</li><li>United Kingdom</li><li>EEA（EEA欧盟）</li></ul>|
	  |电话| Phone Number|必填|长度50|
	  </div>	  
  </div>

  <div className="timeline-line"></div>
  <div className="timeline-content">
	<div className="timeline-status">2</div>
	  ### 邮箱验证
	  <p className="timeline-des">完成邮箱注册验证后，进行登录。</p> 
  </div>
  
  <div className="timeline-line"></div>
  <div className="timeline-content">
	<div className="timeline-status">3</div>
	  ### 完成信息调查
	  <p className="timeline-des">填写建站模式、交易量、支付产品信息。</p>  
	  
	  <Tabs> 
		  <TabItem value="填写建站模式" label="填写建站模式" default>
		  <div className="table-container">
			  | 字段名称| 英文 |必填/可选|描述|
			  | --- | --- | --- | --- |
			  |建站类型| Website Type|必填|<ul><li>自建站</li><li>SaaS平台</li><li>App</li></ul>|
			  |域名| Website|可选||
			  |APP名称| APP Name|可选||
			  |APP下载地址| APP Download URL|可选||
			  |选择行业| Industry|必填||
		   </div>	  
		  </TabItem> 
			
		  <TabItem value="填写交易量" label="填写交易量">
		  <div className="table-container">
			  | 字段名称| 英文 |必填/可选|描述|
	          | --- | --- | --- | --- |
	          |网站月交易量| Transaction Volume|必填|<ul><li>0-100,000 USD</li><li>100,000-1000,000 USD</li><li>Over 1000,000 USD</li></ul>|
	       </div>   
		  </TabItem>	
		
		  <TabItem value="填写支付产品" label="填写支付产品">
		  <div className="table-container">
			  | 字段名称| 英文 |必填/可选|描述|
	          | --- | --- | --- | --- |
	          |您希望在网站中接入什么支付产品？|What  Kind of Payment you want we support？|必填|<ul><li>Visa/MaseterCard</li></ul>|
	          |其他|Other|可选|当选择为Other时为必填|
	      </div>
		  </TabItem>	
	  </Tabs>		
	  
	  
	  
  </div>
    
  <div className="timeline-line"></div>
  <div className="timeline-content">
	<div className="timeline-status">4</div>
	  ### 确认协议
	  <p className="timeline-des">确认电子协议</p>
  </div>
  
  <div className="timeline-line"></div>
  <div className="timeline-content">
	<div className="timeline-status">5</div>
	  ### 填写资料（KYC）
	  <p className="timeline-des">填写资料（KYC）</p>
	<div className="table-container">
	|字段名称| 英文| 是否必填| 类型|
	| --- | --- | --- | --- |
	|客单价|Average Transaction Value|必填|文本框|
	|交易币种|Transaction Currency|必填|多选下拉框|
	|最近6个月的交易量|Transaction Volume In the Last 6 Months|必填|文本框|
	|最近6个月的拒付率|Chargeback Rate In the Last 6 Months|必填|文本框|
	|公司全称 |Company Legal Name|必填|文本框|
	|省份|Province|必填|下拉框|
	|城市|City|必填|下拉框|
	|公司注册编号/统一社会信用代码|Company Registration No.|必填|文本框|
	|公司注册文件/公司营业执照|Company Registration Certificate/Company Business License|可选|上传文件|
	|公司章程文件|Company Articles|可选|上传文件|
	|公司最新年报（如有必须上传）|Last Aunnal Report (If Possible)|可选|上传文件|
	|公司地址证明|Proof Of Company Address|可选|上传文件|
	|董事/法人的个人姓名|Director's Full Name|必填|文本框|
	|董事/法人的个人国籍|Director's Nationality|必填|单选下拉框|
	|董事/法人的个人出生日期|Director's Birthday|必填|文本框|
	|董事/法人的个人身份证/护照|Director's ID Card/Passport Number|必填|上传文件|
	|董事/法人的个人地址证明文件|Director's Proof Of Address|必填|上传文件|
	|公司股权架构图|Shareholding Structure Chart|必填|上传文件|
	|最终受益人1名字|UBO 1's  Full Name|必填|文本框|
	|最终受益人1国籍|UBO 1's Nationality|必填|单选下拉框|
	|最终受益人1出生日期|UBO 1's Birthday|必填|文本框|
	|最终受益人1持股比例|UBO 1's Shareholding|必填|文本框|
	|最终受益人1身份证/护照|UBO 1's ID Card/Passport Number|必填|上传文件|
	|最终受益人1地址证明文件|UBO 1's Proof Of Address|必填|上传文件|
	|银行国家|Bank Country|必填|文本框|
	|银行名称|Bank Name|必填|文本框|
	|银行账户名称|Bank Account Name|必填|文本框|
	|银行账号|Bank Account|必填|文本框|
	|币种|Currency|必填|单选下拉框|
	|BIC(SWIFT Code)|BIC(SWIFT Code)|必填|文本框|
	|Bank Code|Bank Code|必填|文本框|
	|收款银行地址（详细地址）|Band Address|必填|文本框|
	|收款方公司地址（全称）|Company Address|必填|文本框|
	|银行账单凭证|Bank Statement|必填|上传文件|
	|域名证书/电子收据|Domain Invoice/Certification|可选|上传文件|
	|办公现场照片（公司前台照）|Office Picture(Front Desk)|必填|上传文件|
	|办公现场照片（办公环境照片）|Office Picture(Room)|必填|上传文件|
	|办公现场照片（仓库照片，如有）|Office Picture(Warehouse, If Possible)|可选|上传文件|
	|品牌授权书|Brand Certificate Authorization|可选|上传文件|
	|产品质检报告|Product Quality Certificate|可选|上传文件|
	|商务计划|Business Plan|可选|上传文件|
	|财务报表|Financial Report|可选|上传文件|
	|谷歌/脸书广告费用报表|Google/Facebook Account Invoice|可选|上传文件|
	|物流追踪单号|Logistics Tracking Number|可选|上传文件|
	|其他文件|Others|可选|上传文件|
	</div> 
  </div>
  
  <div className="timeline-line"></div>
  <div className="timeline-content">
	<div className="timeline-status">6</div>
	  ### 提交审核
	  <p className="timeline-des">等待审核通过、完成付款凭证。</p>
  </div>
  
  <div className="timeline-line"></div>
  <div className="timeline-content">
	<div className="timeline-status">7</div>
	  ### 登录后台
	  <p className="timeline-des">支付产品申请、[登录账户后台](https://odpm.oceanpayment.com)。</p>
  </div>
</div>
