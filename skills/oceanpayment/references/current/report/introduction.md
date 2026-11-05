---
sidebar_position: 1
sidebar_label: 介绍
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
Oceanpayment SFTP（SSH File Transfer Protocol）报表系统是一个用于生成、传输和监控业务数据报表的自动化平台。通过安全的SFTP协议在企业内部系统与外部合作伙伴之间可靠地传输重要业务数据。


<div className="hero-sftp">
  <div className="container">
    <div className="hero__content">
      <div className="hero__badge">
        <span>🚀 企业级解决方案</span>
      </div>
      
      <h1 className="hero__title">
        <span className="hero__title-main">SFTP 智能报表</span>
      </h1>
       <div className="hero__description">
      	  为商户提供安全、高效、可靠的报表传输服务
       </div>
      <div className="hero__demo">
        <div className="demo-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="terminal-title">sftp-reports-system</div>
          </div>
          <div className="terminal-content">
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span> sftp connect sftp.oceanpayment.com 226</span>
            </div>
            <div className="terminal-line">
              <span className="output">✅ 连接成功 | 📊 今日报表: 15个 | ⚡ 状态: 正常</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span> download TRANSACTIONS_DETAILS_20251001.csv</span>
            </div>
            <div className="terminal-line">
              <span className="output">📥 下载中... ██████████ 100% | ✅ 完成</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


## 开始之前
:::info[]
如果您还没有SFTP账户，请先注册一个[商家账户](/docs/introduction/register-merchant)。
:::

## 对接流程
### 获取账号信息
Oceanpayment会为商户开通独立的SFTP账号，连接信息包含：
- Host（主机地址）
- Port（端口）
- Username（用户名）
- Password / Key（密码或密钥）

### 建立连接
使用支持SFTP的客户端/[代码进行连接](/docs/report/connect)：
1. 客户端工具
- WinSCP
- FileZilla
- lftp

### 报表生成与获取
通过SFTP连接，查看[报表文件](/docs/report/info)内容和生成规则。
