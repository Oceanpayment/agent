---
sidebar_position: 1
sidebar_label: 参数说明
---

# 
import Modal from '@site/src/components/Modal';
import CollapsibleTable from '@site/src/components/CollapsibleTable';

## 概述
本文档详细描述了调用订阅功能时所需的通用参数、业务参数的格式、规则和要求。

:::warning[注意]
仅适用于Klarna和其他本地支付订阅场景，请在发起请求前仔细阅读。
:::

## 调用流程
```mermaid
flowchart LR
    A[MERCHANT] --> B[按规则组装所有参数]
    B --> D[向Oceanpayment发送支付请求]

    style A fill:#5B7FFF,stroke:#5B7FFF,stroke-width:1px,color:#fff,font-weight:bold,font-size:14px
    style B fill:#fff,stroke:#ddd,stroke-width:1px,color:#444,font-size:14px,font-weight:bold
    style D fill:#02993b,stroke:#02993b,stroke-width:1px,color:#fff,font-weight:bold,font-size:14px

    linkStyle default stroke:#02993b,stroke-width:1px
```

## 请求头组
<div className="table-container">
|参数名|类型|长度|是否必填|描述|示例|
| --- | --- | --- | --- | --- | --- |
|`account`|string|6|是|Oceanpayment账户号||
|`terminal`|string|8-12|是|Oceanpayment终端号||
|`secureCode`|string|64|是|Oceanpayment||
</div>

## 创建QuickPay ID
### 请求参数
<div className="table-container">
<CollapsibleTable
  data={[
  {
    title: "order",
    type: "object",
    length: "-",
    required: "是",
    desc: "订单节点信息（Json格式）",
    example: "",
    children: [
      	  {
	        title: "currency",
	        type: "string",
	        length: "3",
	        required: "是",
	        desc: "交易币种",
	        example: ""
	      },
      	  {
	        title: "amount",
	        type: "string",
	        length: "1-10",
	        required: "是",
	        desc: "交易金额",
	        example: ""
	      },
      	  {
	        title: "redirectUrl",
	        type: "string",
	        length: "1-500",
	        required: "是",
	        desc: "浏览器重定向URL地址",
	        example: ""
	      },
      	  {
	        title: "notifyUrl",
	        type: "string",
	        length: "0-500",
	        required: "否",
	        desc: "服务器回调URL地址，用于结果推送",
	        example: ""
	      },
      	  {
	        title: "remark",
	        type: "string",
	        length: "0-500",
	        required: "否",
	        desc: "订单备注信息，返回时则原样返回",
	        example: ""
	      },
      	  {
	        title: "ip",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "消费者的ip地址",
	        example: ""
	      },
      	  {
	        title: "description",
	        type: "string",
	        length: "0-100",
	        required: "否",
	        desc: "订单描述，订单的用途或描述概括",
	        example: ""
	      },

      
    ]
  },
  {
    title: "merchant",
    type: "object",
    length: "-",
    required: "是",
    desc: "订单节点信息（Json格式）",
    example: "",
    children: [
      	  {
	        title: "referenceId",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "商户订单号",
	        example: ""
	      }    
    ]
  },
  {
    title: "billing",
    type: "object",
    length: "-",
    required: "是",
    desc: "账单节点信息（Json格式）",
    example: "",
    children: [
      	  {
	        title: "firstname",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "消费者的名",
	        example: ""
	      },   
      	  {
	        title: "lastname",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "消费者的姓",
	        example: ""
	      },   
      	  {
	        title: "email",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "消费者的邮箱，需要包含@符号",
	        example: ""
	      },   
      	  {
	        title: "phone",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "消费者的电话",
	        example: ""
	      },   
      	  {
	        title: "country",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "消费者的账单国家<ul><li>采用国际标准ISO 3166代码</li></ul>",
	        example: ""
	      },   
      	  {
	        title: "state",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "消费者的州（省、郡）<ul><li>采用国际标准ISO 3166-2代码</li></ul>",
	        example: ""
	      },   
      	  {
	        title: "city",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "消费者的城市",
	        example: ""
	      },   
      	  {
	        title: "address",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "消费者的详细地址",
	        example: ""
	      },   
      	  {
	        title: "zip",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "消费者的邮编",
	        example: ""
	      },   
    ]
  },
  {
    title: "customer",
    type: "object",
    length: "-",
    required: "是",
    desc: "消费者ID节点信息（Json格式）",
    example: "",
    children: [
      	  {
	        title: "id",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "消费者ID，用于区分唯一的消费者值。",
	        example: ""
	      }    
    ]
  },
  {
    title: "device",
    type: "object",
    length: "-",
    required: "否",
    desc: "环境节点信息（Json格式）",
    example: "",
    children: [
      	  {
	        title: "environment",
	        type: "string",
	        length: "0-1",
	        required: "否",
	        desc: "设备环境，默认1<ul><li>1: WEB</li><li>2: Wap</li><li>3: APP</li><li>4: MPRO</li><li>5: 微信浏览器</li><li>6: POS机</li></ul>",
	        example: ""
	      },   
      	  {
	        title: "osType",
	        type: "string",
	        length: "0-1",
	        required: "否",
	        desc: "操作系统，默认1<ul><li>1: iOS</li><li>2: Android</li><li>3: 其他</li></ul>",
	        example: ""
	      },   
    ]
  },
  {
    title: "subscription",
    type: "object",
    length: "-",
    required: "否",
    desc: "订阅节点信息（Json格式）",
    example: "",
    children: [
      	  {
	        title: "name",
	        type: "string",
	        length: "0-100",
	        required: "否",
	        desc: "订阅名称",
	        example: ""
	      },   
      	  {
	        title: "interval",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "订阅周期单位，当有subscription.name有值时，此字段必传<ul><li>1: DAY</li><li>2: WEEK</li><li>3: MONTH</li><li>4: QUARTER</li><li>5: YEAR</li></ul>",
	        example: ""
	      },   
      	  {
	        title: "intervalCount",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "订阅周期数量，当有subscription.name有值时，此字段必传",
	        example: ""
	      },   
    ]
  },
  {
    title: "customer_info",
    type: "object",
    length: "-",
    required: "否",
    desc: "消费者风控节点信息（Json文本压缩格式）",
    example: "",
    children: [
      	  {
	        title: "app_id",
	        type: "string",
	        length: "0-100",
	        required: "否",
	        desc: "商户应用的id",
	        example: ""
	      },   
      	  {
	        title: "loyalty",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "消费者对商家的忠诚度<ul><li>low</li><li>intermediate</li><li>high</li></ul>",
	        example: ""
	      },   
      	  {
	        title: "customer_ranking",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "消费者的付款行为排名",
	        example: ""
	      },   
      	  {
	        title: "customer_reviews",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "消费者的评论数",
	        example: ""
	      },   
      	  {
	        title: "last_loginTime",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "最后一次登录时间<ul><li>YYYY-MM-DDThh:mm:ss</li></ul>",
	        example: ""
	      },   
      	  {
	        title: "last_verificationMethod",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "最后一次验证方式",
	        example: ""
	      },   
      	  {
	        title: "last_verificationTime",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "最后一次验证时间<ul><li>YYYY-MM-DDThh:mm:ss</li></ul>",
	        example: ""
	      },   
      	  {
	        title: "device_id",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "消费者的设备ID或指纹",
	        example: ""
	      },   
      	  {
	        title: "fraud_behavior",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "如果商家在消费者帐户中看到任何欺诈行为，则设置为true。",
	        example: ""
	      },   
      	  {
	        title: "devices",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "消费者使用该账户的设备数",
	        example: ""
	      },   
      	  {
	        title: "phone_verified",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "如果手机号码被验证，设置为ture",
	        example: ""
	      },   
      	  {
	        title: "email_verified",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "如果邮箱被验证，设置为ture",
	        example: ""
	      },   
      	  {
	        title: "failed_transactionsAttempts",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "在过去6个月内失败的交易尝试次数",
	        example: ""
	      },   
      	  {
	        title: "account_registrationDate",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "消费者注册时间",
	        example: ""
	      },   
      	  {
	        title: "account_lastModifiedDate",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "最后一次修改时间<ul><li>YYYY-MM-DDThh:mm:ss</li></ul>",
	        example: ""
	      },   
      	  {
	        title: "payment_option",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "用于完成购买的付款选项",
	        example: ""
	      },   
      	  {
	        title: "number_paid",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "客户成功购买的总数",
	        example: ""
	      },   
      	  {
	        title: "total_amountPaid",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "客户成功购买的总金额",
	        example: ""
	      },   
      	  {
	        title: "last_paidDate",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "最后一次购买时间<ul><li>YYYY-MM-DDThh:mm:ss</li></ul>",
	        example: ""
	      },   
      	  {
	        title: "first_paidDate",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "第一次购买时间<ul><li>YYYY-MM-DDThh:mm:ss</li></ul>",
	        example: ""
	      },   
      	  {
	        title: "paid_before",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "如果客户之前已完成付款，则设置为true",
	        example: ""
	      },   
    ]
  },    
  {
    title: "voucher_info",
    type: "object",
    length: "-",
    required: "否",
    desc: "商品服务节点信息（Json文本压缩格式）",
    example: "",
    children: [
      	  {
	        title: "name",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "购买的商品或服务名称",
	        example: ""
	      },   
      	  {
	        title: "company",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "商品或服务的提供者",
	        example: ""
	      },   
      	  {
	        title: "start_time",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "服务生效时间<ul><li>YYYY-MM-DDThh:mm:ss</li></ul>",
	        example: ""
	      },   
      	  {
	        title: "end_time",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "服务结束时间<ul><li>YYYY-MM-DDThh:mm:ss</li></ul>",
	        example: ""
	      },   
    ]
  },


]}
/>
</div>


## 查询QuickPay ID

### 请求参数
<div className="table-container">
<CollapsibleTable
  data={[
  {
    title: "order",
    type: "object",
    length: "-",
    required: "是",
    desc: "订单节点信息（Json格式）",
    example: "",
    children: [
      	  {
	        title: "referenceId",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "Oceanpayment参考编号",
	        example: ""
	      },
    ]
  },
  {
    title: "merchant",
    type: "object",
    length: "-",
    required: "是",
    desc: "订单节点信息（Json格式）",
    example: "",
    children: [
      	  {
	        title: "referenceId",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "商户订单号",
	        example: ""
	      }    
    ]
  },
  {
    title: "customer",
    type: "object",
    length: "-",
    required: "是",
    desc: "消费者信息（Json格式）",
    example: "",
    children: [
      	  {
	        title: "id",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "消费者ID，用于区分唯一的消费者值",
	        example: ""
	      }	  
    ]
  },
  {
    title: "quickpay",
    type: "object",
    length: "-",
    required: "是",
    desc: "QuickPay ID节点信息（Json格式）",
    example: "",
    children: [
      	  {
	        title: "id",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: "Quickpay ID",
	        example: ""
	      }    
    ]
  },

]}
/>
</div>


## 停用QuickPay ID

### 请求参数
<div className="table-container">
<CollapsibleTable
  data={[
  {
    title: "quickpay",
    type: "object",
    length: "-",
    required: "是",
    desc: "QuickPay ID节点信息（Json格式）",
    example: "",
    children: [
      	  {
	        title: "id",
	        type: "string",
	        length: "1-50",
	        required: "是",
	        desc: "Quickpay ID",
	        example: ""
	      },
    ]
  },


]}
/>
</div>


## 响应
<div className="table-container">
<CollapsibleTable
  data={[
  {
    title: "code",
    type: "object",
    length: "-",
    required: "",
    desc: "接口结果代码，非000时，data返回空集",
    example: "",
  },
  {
    title: "message",
    type: "object",
    length: "-",
    required: "",
    desc: "接口结果说明，如PARAM_ERROR",
    example: "",
  },
  {
    title: "data",
    type: "object",
    length: "-",
    required: "",
    desc: "data节点信息（Json文本格式）",
    example: "",
    children: [
      {
        title: "account",
        type: "string",
        length: "-",
        required: "",
        desc: "返回账户号",
        example: ""
      },
      {
        title: "terminal",
        type: "string",
        length: "-",
        required: "",
        desc: "返回终端号",
        example: ""
      },
      {
        title: "url",
        type: "string",
        length: "",
        required: "",
        desc: "token生成方式=WEB时，返回此字段：跳转url地址，商户通过浏览器进行重定向，通过前端完成授权验证",
        example: "",
      },
      {
        title: "card",
        type: "object",
        length: "",
        required: "",
        desc: "card节点信息（Json文本格式）",
        example: "",
        
        children: [
	      {
	        title: "number",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "如果methods为Credit Card时才返回内容，内容为信用卡截断卡号",
	        example: ""
	      },
	      {
	        title: "type",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "如果methods为Credit Card时才返回内容，内容为信用卡卡种",
	        example: ""
	      },
	      {
	        title: "country",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "如果methods为Credit Card时才返回内容，内容为信用卡卡属国，为2位的ISO代码",
	        example: ""
	      }, 	      
	    ],       
      },
      {
        title: "order",
        type: "object",
        length: "",
        required: "",
        desc: "order节点信息（Json文本格式）",
        example: "",
        
        children: [
	      {
	        title: "currency",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "交易币种",
	        example: ""
	      },
	      {
	        title: "amount",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "交易金额",
	        example: ""
	      },
	      {
	        title: "methods",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "支付方式",
	        example: ""
	      }, 	      
	      {
	        title: "referenceId",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "Oceanpayment参考编号",
	        example: ""
	      }, 	      
	      {
	        title: "remark",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "订单备注信息，返回时则原样返回",
	        example: ""
	      }, 	      
	    ],       
      },
      {
        title: "quickpay",
        type: "object",
        length: "",
        required: "",
        desc: "quickpay节点信息（Json文本格式）",
        example: "",
        
        children: [
	      {
	        title: "id",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "OP生成的唯一的QuickpayID，UUID格式",
	        example: ""
	      },
	      {
	        title: "status",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "Quickpay ID的状态<ul><li>1：正常</li><li>0：停用</li></ul>",
	        example: ""
	      },
	       
	    ],       
      },
      {
        title: "subscription",
        type: "object",
        length: "",
        required: "",
        desc: "subscription节点信息（Json文本格式）",
        example: "",
        
        children: [
	      {
	        title: "name",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "订阅名称",
	        example: ""
	      },
	      {
	        title: "interval",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "订阅周期单位",
	        example: ""
	      },
	      {
	        title: "intervalCount",
	        type: "string",
	        length: "-",
	        required: "",
	        desc: "订阅周期数量",
	        example: ""
	      },
	       
	    ],       
      },
          
      
    ]
  },


]}
/>
</div>