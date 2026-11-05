---
sidebar_position: 1
sidebar_label: 卡片管理
---
# 
import { FaCode, FaCloudDownloadAlt, FaServer } from 'react-icons/fa';

## 概述
卡片管理主要分为**账户卡管理**、**交易记录管理**和**持卡人管理**三个核心模块。  

## 卡片管理
<div className="opcard-refer">
  <div className="opcard-plan">
    <div className="opcard-chunks">⚙️</div>
    <div>
      ### 账户卡管理
      管理当前帐户下所有卡的列表。 
      
      [查看文档<span className="arrowIcon"> →</span>](/docs/opcard/manage-card/account-card/account-list)
    </div>
  </div>
  
  <div className="opcard-plan">
    <div className="opcard-chunks">📚️</div>
    <div>
      ### 交易记录
      查看当前账户的交易记录 
      
      [查看文档<span className="arrowIcon"> →</span>](/docs/opcard/manage-card/trans-lists)
    </div>
  </div>
  
  <div className="opcard-plan">
    <div className="opcard-chunks">🗣️</div>
    <div>
      ### 持卡人
      持卡人信息管理
      
      [查看文档<span className="arrowIcon"> →</span>](/docs/opcard/manage-card/cardholder/cardholder-create)
    </div>
  </div> 
  
</div>


## 业务流程

```mermaid
%%{init: {
  "theme": "default",
  "sequence": {
    "mirrorActors": false,
    "showSequenceNumbers": false,
    "height":45

  },
  "themeVariables": {
    "actorBorder": "#fff",
    "noteTextColor": "#02993b",
    "activationBkgColor": "#f9f9f9",
    "activationBorderColor": "#fff"
  }
}}%%

sequenceDiagram
    participant B as 商户
    participant D as Oceanpayment

    B ->> D: 1.1 查询账户卡列表
    D -->> B: 1.2 返回账户卡列表
    
    B ->> D: 2.1 查询发卡交易记录
    D -->> B: 2.2 返回交易记录
    
    B ->> D: 3.1 创建持卡人
    D -->> B: 3.2 返回持卡人信息
    
    B ->> D: 4.1 查询持卡人列表
    D -->> B: 4.2 返回持卡人列表
  
```


## API参考
👉即刻探索我们的<a href="/docs/opcard-api/virtualcard-management"><button className="api-button"><FaCode className="w-3 h-3" /> REST API</button></a>。
