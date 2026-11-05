---
sidebar_position: 1
sidebar_label: 上线验证清单
---

# 
:::warning[注意]
在生产环境中部署时，请确保执行以下步骤：	
:::

## 填写技术对接验收清单
在完成技术对接后，请填写Oceanpayment技术对接[验收清单](https://www.oceanpayment.com.cn/information/?_=Tkxg4VPbIaAZBZziodqwliRfq0o1Wm17zEK1QTTAT55D8bxLZa40d3zvltkk)。

## 配置支付方式
1. 轻松接入信用卡、本地支付与 BNPL，帮助您快速完成[全球收款](/docs/payment/methods/list)。
2. 使用[OPcard](/docs/opcard/introduction)，将收款资金直接用于您的海外支付和运营支出。
3. 开通[OPCCOUNT](/docs/opccount/introduction)全球账户，集中管理您的全球资金，统一结算、统一对账、统一调度。

## 更新生产API秘钥
Oceanpayment的支付、OPCard及OPCCOUNT产品线使用不用的API秘钥。请及时同步更新[接口配置](/docs/introduction/generate-key)。


## 配置Webhook
设置您的Webhook，将能够处理来自Oceanpayment的实时事件。
1. 来自收款
- [交易](/docs/webhook/payments/checkout)
- [订单管理](/docs/webhook/payments/orders)

2. 来自[OPCard](/docs/webhook/card/webhook-list)
