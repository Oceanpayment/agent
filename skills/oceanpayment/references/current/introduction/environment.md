---
sidebar_position: 2
sidebar_label: 环境说明
---


# 
## 概述 
本章节旨在为开发人员提供对接的技术指南，详细说明如何在沙盒环境进行开发测试，以及如何迁移至生产环境完成正式上线。文档包含环境差异说明、接口调用规范及常见问题解决方案。

## 环境用途
:::warning[注意]
为了确保系统安全稳定运行，避免测试操作影响真实交易，需要对沙盒环境和生产环境进行区分。
:::
<div className="opcard-refer">
  <div className="environment-card">
     ### 沙盒环境
    - 用于开发、测试和调试；
    - 使用模拟数据，不产生真实资金流动；
    - 高性能，支持高并发。
  </div>

  <div className="environment-card">
    ### 生产环境
    - 处理真实交易；
    - 处理真实用户数据和资金交易；
    - 高性能，支持高并发。
  </div>
</div>


## 环境差异
<div className="opcard-refer">
  <div className="environment-card">
     ### 沙盒环境
    - 基础URL通常包含`test-`、`-s`；
    - 支付结果可模拟（成功/失败等）；
    - 交易限额较低；
    - 无需真实资金即可测试完整流程。
  </div>

  <div className="environment-card">
    ### 生产环境
    - 基础URL为正式域名；
    - 处理真实交易，产生实际资金流动；
    - 交易限额较高或根据商户资质设定；
    - 所有操作均产生实际效果。 
  </div>
</div>

## 请求地址
:::warning[注意]
在沙盒环境调试通过后，一旦您有生产环境账户，请注意切换到生产环境。
:::
<div className="table-container">
|功能|沙盒|生产|
|----|----|----|
|[交易](/docs/payment/introduction)|test-secure.oceanpayment.com|secure.oceanpayment.com|
|[订单管理](/docs/orders/introduction)|test-query.oceanpayment.com|query.oceanpayment.com|
|[OPCard](/docs/opcard/introduction)|checkout-s.oceanpayment.com|checkout.oceanpayment.com|
|[OPCCOUNT](/docs/opccount/introduction)|checkout-s.oceanpayment.com|checkout.oceanpayment.com|
</div>

## 配置信息
每个功能的配置信息不同，了解如何快速获取Oceanpayment[生产&沙盒配置信息](/docs/introduction/generate-key)。