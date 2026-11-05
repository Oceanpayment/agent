---
sidebar_position: 6
sidebar_label: 取消订阅
---
#
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
取消订阅用于终止用户的自动续费授权。当用户主动取消、付款方式失效、或商户出于业务需要暂停服务时，商户可以直接停用自动扣款功能。

## 流程图
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

    participant A as 消费者
    participant B as 商户
    participant D as Oceanpayment

    A ->> B: 1. 取消订阅
    B -->> B: 2. 删除订阅任务
    B ->> D: 3. 请求停用QuickPay ID
    D ->> B: 4. 返回
    B ->> A: 5. 返回停用结果
```

## 状态同步
- 商户应提供“取消自动续费”的入口，确保用户可自由终止订阅；
- 取消操作应在用户界面即时生效，则需要调用Oceanpayment[停用Quickpay ID](/docs/subscripions/disable)。

