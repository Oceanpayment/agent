---
sidebar_position: 1
sidebar_label: 介绍
---

# 
## 概述
Oceanpayment将海外先进的收单业务管理经验及技术与中国本地化的服务能力相结合，形成了独特的平台运营优势，在不断发展和完善海外收单机构合作的同时，也与各大信用卡机构建立了战略合作伙伴关系，旨在全面的构建全球收单服务体系和技术运营能力，力求为海内外跨境电子商务模式提供国际化、科技化、标准化的支付产品和服务。

<section className="payment-section">
    <div className="payment-content">
        <h1 className="payment-title animated">全球支付解决方案，助力您的业务走向世界</h1>
        <p className="payment-description animated delay-1">Oceanpayment提供安全、高效的一站式跨境支付服务，让您轻松接受全球付款</p>                
        <div className="features-grid">
            <div className="feature-item animated delay-1">
                <div className="feature-icon">⚡</div>
                <h3 className="feature-title">极简集成</h3>
                <p className="feature-description">多种集成模式，从几分钟到几小时即可完成支付接入，提供完善的API文档和技术支持。</p>
            </div>
            
            <div className="feature-item animated delay-2">
                <div className="feature-icon">🛡️</div>
                <h3 className="feature-title">安全合规</h3>
                <p className="feature-description">PCI DSS LEVEL 1认证，银行级安全保障，符合全球各地支付行业监管要求。</p>
            </div>
            
            <div className="feature-item animated delay-3">
                <div className="feature-icon">🌐</div>
                <h3 className="feature-title">全球覆盖</h3>
                <p className="feature-description">支持信用卡、电子钱包、银行转账等500+种支付方式，覆盖全球200多个国家和地区。</p>
            </div>
        </div>
        
        <div className="cta-buttons">
            [<span className="payment-btn payment-btn-primary">立即开始</span>](/docs/payment-api)
        </div>
    </div>
</section>

## 开始之前
:::info[信息]
1. 如果您的店铺基于SaaS建站平台（如Shopify、店匠Shoplazza、Shopline等）搭建，可通过📌[官方集成方案](/docs/saas)快速完成支付接入；
2. 如果您的店铺使用WooCommerce、Magento等开源建站程序，也可通过相应的插件或开发文档快速完成🎯[支付集成](/docs/open-source)。
:::

## 集成模式对比矩阵
通过低代码来构建您的支付集成，Oceanpayment提供多种灵活、安全的支付集成方案，以满足不同业务场景、技术能力和用户体验的需求。
<div className="table-container">
|特性维度|[托管结账](/docs/payment/host-page/integration)|[嵌入式](/docs/payment/embedded/integration)|[服务器对服务器](/docs/payment/server-to-server/integration)|[付款链接](/docs/payment/link/integration)|[面对面付款](/docs/payment/pos/integration)|
| --- | --- | --- | --- | --- | --- |
|**集成难度**|⭐⭐☆☆☆ (简单)|⭐⭐⭐☆☆ (中等)|⭐⭐⭐☆☆ (中等)|⭐☆☆☆☆ (极简)|⭐⭐☆☆☆ (简单)|
|**用户体验**|一般|最佳|依赖商户实现|一般（跳转）|线下场景|
|**UI/UX控制权**|Oceanpayment|商户部分控制|商户|Oceanpayment|Oceanpayment|
|**PCI DSS合规**|无需|无需|PCI DSS LEVEL 1|无需|无需|
|**安全性**|最高|高|高|无需|无需|
|**典型场景**|<ul><li>标准电商网站</li><li>App</li><li>H5</li></ul>|<ul><li>定制化电商网站</li><li>App</li><li>H5</li></ul>|<ul><li>App</li><li>游戏内购</li><li>ERP系统</li></ul>|<ul><li>账单支付</li><li>社交媒体销售</li><li>邮件营销</li></ul>|<ul><li>零售POS</li><li>扫码支付</li><li>线下活动</li></ul>|
|**移动端友好**|是（响应式）|是（可深度适配）|是（需自行适配）|是|是（主扫/被扫）|
</div>

:::info[信息]
Oceanpayment已获得全球金融业最高级别安全认证[PCI DSS LEVEL 1](https://www.oceanpayment.com/cn/about-us/%e8%8d%a3%e8%aa%89%e8%b5%84%e8%b4%a8/)（获得PCI DSS LEVEL 1认证的公司意味着其在处理支付卡信息方面采取高度严格的安全措施，以确保持卡人数据不受到未经授权的访问和泄露），体现了国际权威组织及金融业界对Oceanpayment在数据安全方面的认可，是对Oceanpayment安全水平的强有力印证。
:::

## 🚀开始集成
1. **注册**：创建Oceanpayment[商家账户](/docs/introduction/register-merchant)；
2. **沙盒测试**：[获取测试账号和密钥](/docs/introduction/generate-key#接受付款)，在沙盒环境中集成；
3. **选择模式**：阅读[支付产品说明书](/docs/payment/methods/list)，参考以上集成模式，选择最适合您的一种；
4. **查看文档📚**：阅读详细的API文档并进行开发；
5. 💻下载SDK与示例Demo；
6. **上线**：通过验证后，[切换生产环境](/docs/introduction/environment#请求地址)。