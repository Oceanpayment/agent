---
sidebar_position: 1
sidebar_label: 介绍
---
# 

## 概述
Oceanpayment通过服务器到服务器（Server-to-Server）的异步通知（Webhook）机制，主动将支付结果推送至商户指定的地址。

<div className="hero-responsive-code">
  <div className="text">
    <h1>Webhook</h1>
    <p>Webhook是一种可靠、实时的订单状态更新方式，商户必须正确接收并处理此类通知，以确保订单状态的最终一致性。</p>
  </div>
  <div className="code-box">
    ```javascript
const express = require('express');
const bodyParser = require('body-parser');
const xml2js = require('xml2js');

const app = express();
const PORT = 8080;

app.use(bodyParser.text({ 
		type:'application/xml'
}));

app.post('/payment/notify', async(req, res) => {
  		const xml = req.body;
});
    ```
  </div>
</div>


## 通知类型
Oceanpayment支持多种类型的Webhook通知，以满足不同业务场景的需求。

<div className="opcard-refer">
	  <div className="opcard-plan">
	    <div className="opcard-chunks">📢</div>
	    <div>
	      ## 支付通知
	      <p className="opcard-cons">实时推送支付成功、失败等交易状态变更信息。</p>

	      [查看文档<span className="arrowIcon"> →</span>](/docs/webhook/payments/checkout)
	    </div>
	  </div>
	  
	  <div className="opcard-plan">
	    <div className="opcard-chunks">🧾</div>
	    <div>
	      ## 业务订单
	      <p className="opcard-cons">当订单出现异常情况（如退款、拒付等）时发送通知。</p>

	      [查看文档<span className="arrowIcon"> →</span>](/docs/webhook/payments/orders)
	    </div>
	  </div>
	  
	  <div className="opcard-plan">
	    <div className="opcard-chunks">🛃</div>
	    <div>
	      ## 海关上送
	      <p className="opcard-cons">当订单出现异常情况（如退款、拒付等）时发送通知。</p>

	      [查看文档<span className="arrowIcon"> →</span>](/docs/webhook/payments/customs-upload)
	    </div>
	  </div>
	  
	  <div className="opcard-plan">
	    <div className="opcard-chunks">🔔</div>
	    <div>
	      ## OPCard
	      <p className="opcard-cons">配置和管理OPCard通知事件。</p>

	      [查看文档<span className="arrowIcon"> →</span>](/docs/webhook/card/create-webhook)
	    </div>
	  </div>
</div>

