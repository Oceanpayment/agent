---
sidebar_position: 3
sidebar_label: 报表内容
---
# 

import Modal from '@site/src/components/Modal';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
报表文件内容涵盖交易流水、结算数据、对账信息等，方便商户核对订单、确认结算、发现差异。


## 报表类型
<div className="table-container">
| 报表名称 | 生成时间 | 文件格式 |
|---------|---------|---------|
| 交易明细 | 每日 10:00 | <Modal triggerText="TRANSACTIONS_DETAILS_yyyyMMdd.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>支付方式</td><td>Credit Card</td></tr><tr><td>卡种</td><td>MC</td></tr><tr><td>发卡国</td><td>US</td></tr><tr><td>终端号</td><td>99514901</td></tr><tr><td>支付 ID</td><td>250508235221429082533</td></tr><tr><td>账户订单号</td><td>12345678</td></tr><tr><td>编号</td><td></td></tr><tr><td>交易类型</td><td>成功</td></tr><tr><td>交易币种</td><td>USD</td></tr><tr><td>交易金额</td><td>0.01</td></tr><tr><td>结算币种</td><td>USD</td></tr><tr><td>记账金额</td><td>0.01</td></tr><tr><td>划款汇率</td><td>1</td></tr><tr><td>扣率维度</td><td></td></tr><tr><td>交易扣率</td><td>0.028</td></tr><tr><td>平台费率</td><td>0</td></tr><tr><td>保证金扣率</td><td>0.01</td></tr><tr><td>分期付款期数</td><td>0</td></tr><tr><td>利息金额</td><td>0</td></tr><tr><td>手续费</td><td>0</td></tr><tr><td>最低交易手续费</td><td>0</td></tr><tr><td>单笔手续费</td><td>0.18</td></tr><tr><td>退款处理费</td><td>0</td></tr><tr><td>拒付处理费</td><td>0</td></tr><tr><td>保证金</td><td>0</td></tr><tr><td>预结算金额</td><td>0.01</td></tr><tr><td>交易时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>记账时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>产品名</td><td>SHOES</td></tr><tr><td>交易网址</td><td>example.com</td></tr><tr><td>账户退款号</td><td>001</td></tr><tr><td>平台</td><td>Shopify</td></tr></tbody></table></Modal> |
| 交易报表 | 每日 10:00 | <Modal triggerText="TRANSACTIONS_yyyyMMdd.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>终端号</td><td>99514901</td></tr><tr><td>支付ID</td><td>250508235221429082533</td></tr><tr><td>账户订单号</td><td>12345678</td></tr><tr><td>交易币种</td><td>USD</td></tr><tr><td>交易金额</td><td>0.01</td></tr><tr><td>保证金</td><td>0</td></tr><tr><td>支付方式</td><td>Credit Card</td></tr><tr><td>交易状态</td><td>成功</td></tr><tr><td>交易返回代码</td><td>80000</td></tr><tr><td>返回信息</td><td>Transaction Approved</td></tr><tr><td>	支付类型</td><td></td></tr><tr><td>交易划款状态</td><td>已划款</td></tr><tr><td>保证金划款状态</td><td>已划款</td></tr><tr><td>是否退款</td><td>未退款</td></tr><tr><td>是否拒付</td><td>未拒付</td></tr><tr><td>是否调单</td><td>未调单</td></tr><tr><td>是否伪冒</td><td>否</td></tr><tr><td>申诉状态</td><td>未申诉</td></tr><tr><td>是否预授权</td><td>否</td></tr><tr><td>发货单据</td><td>否</td></tr><tr><td>交易时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>记账时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>邮箱</td><td>test@gmail.com</td></tr><tr><td>IP地址	</td><td>127.0.0.1</td></tr><tr><td>交易网址</td><td>example.com</td></tr><tr><td>支付卡种</td><td>MC</td></tr><tr><td>卡号</td><td>545454***5454</td></tr><tr><td>发卡行</td><td></td></tr><tr><td>持卡人姓名</td><td>firstName lastName</td></tr><tr><td>跟踪单号</td><td></td></tr><tr><td>物流网站</td><td></td></tr><tr><td>订单金额</td><td>0.01</td></tr><tr><td>客户姓名</td><td>firstName lastName</td></tr><tr><td>客户电话</td><td>138111111111</td></tr><tr><td>进入系统时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>返回时间</td><td>2025/5/8 23:52:24</td></tr><tr><td>邮政编码</td><td>96801</td></tr><tr><td>地址</td><td>test</td></tr><tr><td>城市</td><td>NY</td></tr><tr><td>州</td><td>NY</td></tr><tr><td>账单国</td><td>US</td></tr><tr><td>跨国支付</td><td></td></tr><tr><td>高风险国家</td><td></td></tr><tr><td>真实发卡国</td><td>US</td></tr><tr><td>收货人地址</td><td>NY</td></tr><tr><td>收货人城市</td><td>NY</td></tr><tr><td>收货人州</td><td>NY</td></tr><tr><td>收货人邮编</td><td>96801</td></tr><tr><td>收货人国家</td><td>US</td></tr><tr><td>收货人名</td><td>lastName</td></tr><tr><td>收货人姓</td><td>lastName</td></tr><tr><td>收货人电话</td><td>13811111111</td></tr><tr><td>产品名称</td><td>SHOES</td></tr><tr><td>产品SKU</td><td>#123</td></tr><tr><td>产品数量</td><td>1</td></tr><tr><td>IP国家</td><td>127.0.0.1</td></tr><tr><td>IP账单国</td><td>US</td></tr><tr><td>IP城市</td><td>NY</td></tr><tr><td>未通过风控信息</td><td></td></tr><tr><td>交易备注</td><td></td></tr><tr><td>页面</td><td></td></tr><tr><td>是否分期付款</td><td>否</td></tr><tr><td>分期付款期数</td><td>0</td></tr><tr><td>利息金额</td><td></td></tr><tr><td>卡号复制</td><td>否</td></tr><tr><td>密码复制</td><td>否</td></tr></tbody></table></Modal>|
| 交易月报 | 每月1日 09:00 | <Modal triggerText="TRANSACTIONS_REPORT_yyMM.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>支付方式</td><td>Credit Card</td></tr><tr><td>交易类型</td><td>成功</td></tr><tr><td>笔数</td><td>2</td></tr><tr><td>交易币种</td><td>USD</td></tr><tr><td>交易金额</td><td>0.01</td></tr><tr><td>记账币种</td><td>USD</td></tr><tr><td>记账金额</td><td>0.01</td></tr></tbody></table></Modal>|
| 划款明细 | 每日 07:00 | <Modal triggerText="SETTLEMENT_DETAILS_yyyyMMdd.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>批次号</td><td>001</td></tr><tr><td>支付方式</td><td>Credit Card</td></tr><tr><td>卡种</td><td>MC</td></tr><tr><td>发卡国</td><td>US</td></tr><tr><td>终端号</td><td>99514901</td></tr><tr><td>支付ID</td><td>250508235221429082533</td></tr><tr><td>账户订单号</td><td>NO12345678</td></tr><tr><td>交易类型</td><td>成功</td></tr><tr><td>交易币种</td><td>USD</td></tr><tr><td>交易金额</td><td>0.01</td></tr><tr><td>划款汇率</td><td>0.08</td></tr><tr><td>结算币种</td><td>USD</td></tr><tr><td>记账金额</td><td>0.01</td></tr><tr><td>分期付款期数</td><td>0</td></tr><tr><td>利息金额</td><td>0</td></tr><tr><td>扣率维度</td><td>0</td></tr><tr><td>扣率</td><td>0.18</td></tr><tr><td>平台费率</td><td>0</td></tr><tr><td>保证金比例</td><td>0</td></tr><tr><td>手续费</td><td>0</td></tr><tr><td>Interchange Fee</td><td>0</td></tr><tr><td>Scheme Fee</td><td>0</td></tr><tr><td>Cross-border Fee</td><td>0</td></tr><tr><td>最低交易手续费差额</td><td>0</td></tr><tr><td>单笔手续费</td><td>0</td></tr><tr><td>退款处理费</td><td>0</td></tr><tr><td>拒付处理费</td><td>0</td></tr><tr><td>循环保证金</td><td>0.01</td></tr><tr><td>划款金额</td><td>0.01</td></tr><tr><td>交易时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>记账日期</td><td>2025/5/8 23:52:21</td></tr><tr><td>划款时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>交易网址</td><td>example.com</td></tr><tr><td>产品名</td><td>SHOES</td></tr><tr><td>本地支付类型</td><td>HK Wallet</td></tr><tr><td>编号</td><td>001</td></tr><tr><td>平台</td><td>Shopify</td></tr><tr><td>出款模式</td><td>OPCCOUNT</td></tr></tbody></table></Modal>|
| 小结 | 每日 07:00 | <Modal triggerText="SETTLEMENT_SUMMARY_yyyyMMdd.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>划款日期</td><td>2025/5/8 23:52:21</td></tr><tr><td>批次号</td><td>001</td></tr><tr><td>支付方式</td><td>Credit Card</td></tr><tr><td>终端号</td><td>99514901</td></tr><tr><td>结算币种</td><td>USD</td></tr><tr><td>成功金额</td><td>100</td></tr><tr><td>退款金额</td><td>50</td></tr><tr><td>拒付金额</td><td>50</td></tr><tr><td>调单金额</td><td>50</td></tr><tr><td>申诉成功金额</td><td>50</td></tr><tr><td>扣率</td><td>0.18</td></tr><tr><td>平台费率</td><td>0</td></tr><tr><td>保证金比例</td><td>0</td></tr><tr><td>手续费</td><td>0</td></tr><tr><td>Interchange Fee</td><td>0</td></tr><tr><td>Cross-border Fee</td><td>0</td></tr><tr><td>Scheme Fee</td><td>0</td></tr><tr><td>最低交易手续费差额</td><td>0</td></tr><tr><td>单笔手续费</td><td>0</td></tr><tr><td>退款处理费</td><td>0</td></tr><tr><td>拒付处理费</td><td>0</td></tr><tr><td>循环保证金</td><td>0</td></tr><tr><td>划款金额</td><td>0</td></tr></tbody></table></Modal>|
| 划款数据账单 | 每日 09:00 | <a href={require('/static/report/STATEMENT_BatchNumber_yyyyMMdd.pdf').default} target="_blank">STATEMENT_批次号_yyyyMMdd.pdf</a>|
| 结算月报 | 每月1日 09:00 | · <a href={require('/static/report/SETTLEMENT_REPORT_yymm.pdf').default} target="_blank">SETTLEMENT_REPORT_yyMM.pdf</a><br/>· <Modal triggerText="SETTLEMENT_REPORT_yyMM.xls" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>支付方式</td><td>Credit Card</td></tr><tr><td>交易类型</td><td>成功</td></tr><tr><td>笔数</td><td>1</td></tr><tr><td>交易币种</td><td>CNY</td></tr><tr><td>交易金额</td><td>100</td></tr><tr><td>记账币种</td><td>HKD</td></tr><tr><td>记账金额</td><td>100</td></tr></tbody><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>支付方式</td><td>Credit Card</td></tr><tr><td>拒付率(笔数)</td><td>0.00%</td></tr><tr><td>拒付率(金额)</td><td>0.00%</td></tr><tr><td>退款率(笔数)</td><td>0.00%</td></tr><tr><td>退款率(金额)</td><td>0.00%</td></tr></tbody></table></Modal>|
| 保证金划款明细报表| 每日 07:00 | <Modal triggerText="RESERVE_DETAILS_yyyyMMdd.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>批次号</td><td>001</td></tr><tr><td>支付方式</td><td>Credit Card</td></tr><tr><td>卡种</td><td>MC</td></tr><tr><td>终端号</td><td>99514901</td></tr><tr><td>支付ID</td><td>250508235221429082533</td></tr><tr><td>账户订单号</td><td>NO12345678</td></tr><tr><td>交易类型</td><td>成功</td></tr><tr><td>交易币种</td><td>USD</td></tr><tr><td>交易金额</td><td>0.01</td></tr><tr><td>划款汇率</td><td>0.08</td></tr><tr><td>结算币种</td><td>USD</td></tr><tr><td>记账金额</td><td>0.01</td></tr><tr><td>保证金比例</td><td>0</td></tr><tr><td>划款金额</td><td>0</td></tr><tr><td>交易时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>记账时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>划款时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>产品名</td><td>SHOES</td></tr><tr><td>交易网址信息</td><td>0</td></tr></tbody></table></Modal>|
| 保证金划款小结报表 | 每日 07:00 | <Modal triggerText="RESERVE_SUMMARY_yyyyMMdd.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>划款日期</td><td>2025/5/8 23:52:21</td></tr><tr><td>批次号</td><td>001</td></tr><tr><td>终端号</td><td>99514901</td></tr><tr><td>结算币种</td><td>USD</td></tr><tr><td>成功</td><td>0</td></tr><tr><td>退款</td><td>0</td></tr><tr><td>拒付</td><td>0</td></tr><tr><td>调单</td><td>0</td></tr><tr><td>申诉成功</td><td>0</td></tr><tr><td>保证金比例</td><td>0</td></tr><tr><td>应划金额（结算币种）</td><td>0</td></tr></tbody></table></Modal>|
| OPCCOUNT报表 | 每日 17:00 |· <Modal triggerText="FUND_Daily_Report_yyyyMMdd.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>提现批次号</td><td>001</td></tr><tr><td>提现时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>处理时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>状态</td><td></td></tr><tr><td>提现账户</td><td>995149</td></tr><tr><td>提现申請金额</td><td>0</td></tr><tr><td>汇率</td><td>0.00%</td></tr><tr><td>汇率时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>手续费币种</td><td>USD</td></tr><tr><td>费用项名称1</td><td></td></tr><tr><td>费用项名称2</td><td></td></tr><tr><td>费用减免</td><td></td></tr><tr><td>费用小计</td><td>0</td></tr><tr><td>出款金额币种</td><td>USD</td></tr><tr><td>出款金额</td><td>0</td></tr><tr><td>退回金额</td><td>0</td></tr><tr><td>开户银行</td><td></td></tr><tr><td>账单币种</td><td>USD</td></tr><tr><td>付款银行</td><td>0</td></tr></tbody></table></Modal> <br/> · <Modal triggerText="POBO_Daily_Report_yyyyMMdd.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>代付批次号</td><td>001</td></tr><tr><td>申请时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>收款方名称</td><td></td></tr><tr><td>收款银行账户</td><td></td></tr><tr><td>代付类型</td><td></td></tr><tr><td>付款币种</td><td>USD</td></tr><tr><td>代付申请金额</td><td>0</td></tr><tr><td>代付状态</td><td></td></tr><tr><td>付款时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>收款方银行名称</td><td></td></tr><tr><td>收款方名称</td><td></td></tr><tr><td>收款方币种</td><td>USD</td></tr><tr><td>付款方名称</td><td></td></tr><tr><td>交易类型</td><td></td></tr><tr><td>付款金额</td><td>0</td></tr><tr><td>扣款币种</td><td>USD</td></tr><tr><td>扣款金额</td><td>0</td></tr><tr><td>付款汇率</td><td>0.00%</td></tr><tr><td>代付费用币种</td><td>USD</td></tr><tr><td>代付费用1</td><td></td></tr><tr><td>代付费用2</td><td></td></tr><tr><td>费用小计</td><td></td></tr><tr><td>申请说明 </td><td></td></tr><tr><td>银行转账备注</td><td></td></tr></tbody></table></Modal> <br/> · <Modal triggerText="WITHDRAWAL_Daily_Report_yyyyMMdd.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>动账时间</td><td></td></tr><tr><td>动账类型</td><td></td></tr><tr><td>资金类型</td><td></td></tr><tr><td>动账币种</td><td></td></tr><tr><td>动账金额</td><td></td></tr><tr><td>可提现金额</td><td></td></tr><tr><td>冻结金额</td><td></td></tr><tr><td>账户余额</td><td></td></tr></tbody></table></Modal>|
| OPCCOUNT月报 | 每月1日 17:00 |· <Modal triggerText="FUND_Monthly_Report_yyyyMM.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>提现批次号</td><td>001</td></tr><tr><td>提现时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>处理时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>状态</td><td></td></tr><tr><td>提现账户</td><td></td></tr><tr><td>提现申請金额</td><td>100</td></tr><tr><td>汇率</td><td></td></tr><tr><td>汇率时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>手续费币种</td><td>USD</td></tr><tr><td>费用项名称1</td><td></td></tr><tr><td>费用项名称2</td><td></td></tr><tr><td>费用减免</td><td>0</td></tr><tr><td>费用小计</td><td>0</td></tr><tr><td>出款金额币种</td><td>USD</td></tr><tr><td>出款金额</td><td>0</td></tr><tr><td>退回金额</td><td>0</td></tr><tr><td>开户银行</td><td>0</td></tr><tr><td>账单币种</td><td></td></tr><tr><td>付款银行</td><td></td></tr></tbody></table></Modal> <br/> · <Modal triggerText="POBO_Monthly_Report_yyyyMM.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>代付批次号</td><td>001</td></tr><tr><td>申请时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>收款方名称</td><td></td></tr><tr><td>收款银行账户</td><td></td></tr><tr><td>代付类型</td><td></td></tr><tr><td>付款币种</td><td>USD</td></tr><tr><td>代付申请金额</td><td>0</td></tr><tr><td>代付状态</td><td></td></tr><tr><td>付款时间</td><td>2025/5/8 23:52:21</td></tr><tr><td>收款方银行名称</td><td></td></tr><tr><td>收款方名称</td><td></td></tr><tr><td>收款方币种</td><td>USD</td></tr><tr><td>付款方名称</td><td></td></tr><tr><td>交易类型</td><td></td></tr><tr><td>付款金额</td><td>0</td></tr><tr><td>扣款币种</td><td>USD</td></tr><tr><td>扣款金额</td><td>0</td></tr><tr><td>付款汇率</td><td>0.00%</td></tr><tr><td>代付费用币种</td><td>USD</td></tr><tr><td>代付费用1</td><td></td></tr><tr><td>代付费用2</td><td></td></tr><tr><td>费用小计</td><td></td></tr><tr><td>申请说明 </td><td></td></tr><tr><td>银行转账备注</td><td></td></tr></tbody></table></Modal> <br/> · <Modal triggerText="WITHDRAWAL_Monthly_Report_yyyyMM.csv" modalTitle="表头字段"><table><thead><tr><th>参数名</th><th>示例</th></tr></thead><tbody><tr><td>动账时间</td><td></td></tr><tr><td>动账类型</td><td></td></tr><tr><td>资金类型</td><td></td></tr><tr><td>动账币种</td><td></td></tr><tr><td>动账金额</td><td></td></tr><tr><td>可提现金额</td><td></td></tr><tr><td>冻结金额</td><td></td></tr><tr><td>账户余额</td><td></td></tr></tbody></table></Modal> |
</div>

## 目录结构
```java
/
├── /MONTH_REPORT/
│   ├── TRANSACTIONS_REPORT_yyMM.xls
│   ├── SETTLEMENT_REPORT_yyMM.pdf
│   └── SETTLEMENT_REPORT_yyMM.xls 
│   
├── /OPCCOUNT_DAILY_REPORT/ 
│   ├── FUND_Daily_Report_yyyyMMdd.csv
│   ├── POBO_Daily_Report_yyyyMMdd.csv
│   └── WITHDRAWAL_Daily_Report_yyyyMMdd.csv
│
├── /OPCCOUNT_MONTHLY_REPORT/ 
│   ├── FUND_Monthly_Report_yyyyMM.csv
│   ├── POBO_Monthly_Report_yyyyMM.csv
│   └── WITHDRAWAL_Monthly_Report_YYYYMM.csv
│
├── /SETTLEMENT/
│   ├── RESERVE_DETAILS_yyyyMMdd.csv
│   ├── RESERVE_SUMMARY_yyyyMMdd.csv
│   ├── STATEMENT_批次号_yyyyMMdd.pdf
│   ├── SETTLEMENT_SUMMARY_yyyyMMdd.csv
│   └── SETTLEMENT_DETAILS_yyyyMMdd.csv  
│   
├── /TRANSACTIONS/   
│   └── TRANSACTIONS_yyyyMMdd.csv
│
└── /TRANSACTIONS_DETAILS/
    └── TRANSACTIONS_DETAILS_yyyyMMdd.csv 
```

## 生成规则
### 日报表生成规则
**基本原则**：每天生成前一个完整自然日的业务数据报表。

### 月报表生成规则
**基本原则**：每月1日生成上一完整自然月的数据报表。

## 文件命名规范
### 时间标识规则
所有报表文件名都明确标识数据日期而非生成日期：
```json
{报表类型}_{数据日期标识}.{格式}
```

### 日报表命名示例
正确命名：标识数据日期
```json
SETTLEMENT_DETAILS_20251001.csv    # 2025年10月01日数据
```


### 时间标识格式
```json
# 日期格式规范
DAILY_FORMAT = "yyyyMMdd"      # 年月日
MONTHLY_FORMAT = "yyyyMM"      # 年月
```
