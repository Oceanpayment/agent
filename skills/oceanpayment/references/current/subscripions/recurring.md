---
sidebar_position: 5
sidebar_label: 周期续扣
---
#
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
周期续扣（Recurring Cycle Charge）用于在用户完成首笔支付授权（首扣成功）后，商户在约定的周期（如每月、每季度、每年）自动向用户发起续期扣款，无需用户再次输入卡号或确认。

## 周期管理
- Oceanpayment不负责维护扣款周期逻辑；
- 商户系统应自行计算下次扣款时间，并主动调用[扣款功能](/docs/subscripions/directpay)，注意业务模式`service_mode`的场景传值；
- 若未按期调用，则不会自动续扣。

## 金额或计划变更
- 若商户修改了订阅计划金额或周期，应在生效前重新获取用户授权；
- Oceanpayment不会直接修改已授权金额的token进行扣款。

## 通知与用户体验
- 建议在续扣前发送「即将续费提醒」；
- 扣款后推送「续费成功 / 失败」通知；
- 提供“取消自动续费”入口。

## 扣款失败处理
- 发卡行拒绝或账户余额不足等扣款失败时，Oceanpayment会返回[失败码](/docs/response-code/payment#银行返回)；
- 建议商户设置重试机制，避免重复并发；
- 重试次数超过限制后，必须暂停订阅并通知用户[更新支付信息](/docs/subscripions/quickpay-id/introduction)。

