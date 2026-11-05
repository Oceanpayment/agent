---
sidebar_position: 1
sidebar_label: 资金管理
---
# 
import { FaCode, FaCloudDownloadAlt, FaServer } from 'react-icons/fa';


## 概述
资金管理主要负责**入账**、**额度管理**和**提额**三个核心模块。


## 资金管理
<div className="opcard-refer">
  <div className="opcard-plan">
    <div className="opcard-chunks">📒</div>
    <div>
      ### 入账
      管理资金入账审核。 
      
      [查看文档<span className="arrowIcon"> →</span>](/docs/opcard/manage-funds/payment-intent/create-intent)
    </div>
  </div>
  
  <div className="opcard-plan">
    <div className="opcard-chunks">🧾</div>
    <div>
      ### 额度管理
      向发卡账户转移资金，创建和管理OP Card额度 。
      
      [查看文档<span className="arrowIcon"> →</span>](/docs/opcard/manage-funds/credit-limit/create-limit)
    </div>
  </div>
  
  <div className="opcard-plan">
    <div className="opcard-chunks">💰️</div>
    <div>
      ### 提额
      发卡账户资金提现。
      
      [查看文档<span className="arrowIcon"> →</span>](/docs/opcard/manage-funds/create-payouts/credit-limit)
    </div>
  </div> 
  
</div>


## 业务流程
### 资金入账流程
<img src={require('/img/cn/opcard/recorded.png').default} className="image-card"/>

### 额度上账流程
<img src={require('/img/cn/opcard/settle.png').default} className="image-card"/>

### 提额流程
<img src={require('/img/cn/opcard/increase.png').default} className="image-card"/>

## API参考
👉即刻探索我们的<a href="/docs/opcard-api/fund-management"><button className="api-button"><FaCode className="w-3 h-3" /> REST API</button></a>。
  
