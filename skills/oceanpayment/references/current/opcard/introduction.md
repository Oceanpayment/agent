---
sidebar_position: 1
sidebar_label: 介绍
---

# 

## 概述
`Oceanpayment card`（简称：OPCard）是基于与国际发卡机构Mastercard合作推出的虚拟卡服务，支持Oceanpayment商户通过线上申请多币种发卡资金账户，快速创建虚拟卡，为商户海外支付提供便利的服务。

<div className="opcard-banner">
  <div className="container opcard-container">
    <div className="opcard-box">
      <div className="opcard-line">
        <h1 className="opcard-title">轻松管理资金支出<br/>助您高效展业全球</h1>
        <p className="opcard-dep">安全、可扩展的发卡平台，提供端到端卡发行与管理能力</p>

        <div className="opcard-button">
            [API 参考 →](/docs/opcard-api)      
        </div>
      </div>
      <div className="opcard-safe">
        <div className="opcard-safecard">
          <div className="opcard-slider">
            <div className="opcard-caption">
              <div className="opcard-icon">🔒</div>
              <div>安全</div>
            </div>
            <div className="opcard-caption">
              <div className="opcard-icon">⚡</div>
              <div>高效</div>
            </div>
            <div className="opcard-caption">
              <div className="opcard-icon">💰️</div>
              <div>便捷</div>
            </div>
            <div className="opcard-caption">
              <div className="opcard-icon">🌐</div>
              <div>全球</div>
            </div>
          </div>
          <div className="opcard-subtitle">
                             一站式发卡、管理、支付解决方案，满足企业不同业务场景的支付需求
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## 开始之前
:::info[]
1. 如果您还没有发卡账户，请先注册一个[商家账户](/docs/introduction/register-merchant)。
2. 👉了解如何快速获取[OPCard API秘钥](/docs/introduction/generate-key#opcard)。
:::

## 为什么选择我们的发卡平台？
<div className="opcard-model">
  <div className="opcard-card">
    <div className="opcard-opt">🔒</div>
    <h3 className="opcard-article">支出管理， 安全高效</h3>
    <div className="opcard-sub">
    - 实时掌握卡片动态，自定义交易限额与权限设置，让每一笔支出更精准
    - 交易账单清晰全面，资金流向一目了然
    - 支付行业数据安全标准(PCI DSS)最高等级level 1认证+智能风控系统，实时交易监控，双重保障资金安全
    </div>
  </div>
  
  <div className="opcard-card">
    <div className="opcard-opt">⚡</div>
    <h3 className="opcard-article">即开即用，轻松接入</h3>
    <div className="opcard-sub">
    - 实时开卡，批量创建，快速启用，畅享便捷支付   
    - 智能商户后台，高效管理卡片应用，享受一站式多功能服务
    - 丰富卡片类型，满足您的多样化企业支付需求
    </div>
  </div>
    
  <div className="opcard-card">
    <div className="opcard-opt">💰️</div>
    <h3 className="opcard-article">收付互通 ，高效便捷</h3>
    <div className="opcard-sub">
    - 一站式收单与发卡服务，实现收付款互联互通，优化现金流管理
    - 提供商户后台、API和CaaS（Card-as-a-Service）等多种解决方案，精准契合您的需求，提升支付管理的灵活性和效率
    </div>
  </div> 
  
  <div className="opcard-card">
    <div className="opcard-opt">🌐</div>
    <h3 className="opcard-article">全球支付，畅行无阻</h3>
    <div className="opcard-sub">
    - Mastercard发卡机构会员，强大全球网络触手可及
    - 支持HKD、USD等主流币种支付，满足不同行业和场景的付款需求
    - 多币种额度智能调拨，打造顺畅的支付体验
    </div>
  </div>
</div>


## 了解我们的业务流程
<img src={require('/img/cn/opcard/card_business.png').default} className="image-card"/>

## 产品类型
我们提供两种卡片类型，赋能客户多样化使用场景。
<img src={require('/img/cn/opcard/card-type.png').default} className="image-card"/>
:::info[]
快速浏览OPCard的[产品类型和能力](/docs/opcard/product-type)。
:::

## 支持的币种和地区
<div className="opcard-refer">
  <div className="opcard-plan">
    <div className="opcard-chunks">💲</div>
    <div>
      ### 币种
      <p className="opcard-cons">提供全面的货币支持，满足全球用户的多样化需求</p>

      [查看文档<span className="arrowIcon"> →</span>](/docs/opcard/currency-and-region#支持的币种)
    </div>
  </div>
  
  <div className="opcard-plan">
    <div className="opcard-chunks">🌍️</div>
    <div>
      ### 国家/地区
      <p className="opcard-cons">我们的服务覆盖全球200+国家和地区</p>

      [查看文档<span className="arrowIcon"> →</span>](/docs/opcard/currency-and-region#支持的国家地区)
    </div>
  </div>
</div>

## 开发者资源

<div className="opcard-refer">
  <div className="opcard-plan">
    <div className="opcard-chunks">📚</div>
    <div>
      ### 卡片操作
      <p className="opcard-cons">对卡片进行创建、状态管理和设置更新</p>

      [查看文档<span className="arrowIcon"> →</span>](/docs/opcard/create-card)
    </div>
  </div>
  
  <div className="opcard-plan">
    <div className="opcard-chunks">🛠️</div>
    <div>
      ### 卡片管理
      <p className="opcard-cons">管理账户卡、交易记录和持卡人信息</p>

      [查看文档<span className="arrowIcon"> →</span>](/docs/opcard/manage-card)
    </div>
  </div>
  
  <div className="opcard-plan">
    <div className="opcard-chunks">💰️</div>
    <div>
      ### 资金管理
      <p className="opcard-cons">管理资金的入账、额度和提额</p>

      [查看文档<span className="arrowIcon"> →</span>](/docs/opcard/manage-funds)
    </div>
  </div>
  
  <div className="opcard-plan">
    <div className="opcard-chunks">📒</div>
    <div>
      ### 余额管理
      <p className="opcard-cons">查询实时变动余额信息</p>

      [查看文档<span className="arrowIcon"> →</span>](/docs/opcard/manage-balance/account-balance)
    </div>
  </div>
</div>

## 凭证获取
使用OPCard前，需要先获取[API凭证](/docs/introduction/generate-key#opcard)，测试环境和生产环境使用独立的访问凭证。

## 环境说明
OPCard提供测试（Sandbox）和生产（Production）两个完全隔离的[运行环境](/docs/introduction/environment)。接入前，请根据当前阶段选择对应环境进行联调。

## 通知功能
OPCard会通过Webhook[异步通知](/docs/webhook/card/webhook-list)您交易结果。请参考Webhook文档 ，设置相应的Webhook事件。

