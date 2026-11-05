---
sidebar_position: 7
sidebar_label: 停用QuickPay ID
---
#
import { FaCode, FaCloudDownloadAlt, FaServer } from 'react-icons/fa';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 概述
用于停用已绑定的QuickPay ID，使其无法继续用于后续支付，同时保留相关记录用于业务查询。


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

    A ->> B: 1. 卡片管理：停用
    B ->> D: 2. 请求停用QuickPay ID
    D ->> B: 3. 返回
    B ->> A: 4. 返回停用结果

```

## 工作原理
1. 设置请求头组：
```json
'Content-Type:application/json',
'account:995149',
'terminal:99514901',
'secureCode:12345678'
```

2. 调用Oceanpayment[提交必要参数](/docs/subscripions/parameter#停用quickpay-id)停用QuickPay ID
```php
cURL -X POST 'https://checkout-s.oceanpayment.com/pg/quickPay/cancel' \
-d 
{
    "quickpay": {
        "id": "",
    }
}
```

## 处理返回
查看QuickPay ID的停用状态：[`quickpay.status`](/docs/subscripions/parameter#响应)。
```json
{
    "message": "SUCCESS",
    "code": "000",
    "data": {
        "account": "995149",
        "terminal": "99514901",
        "order": {
            "methods": "{{methods}}",
            "referenceId": "250117093828061010584",
            "remark": "",
            "description": ""
        },
        "merchant": {
            "referenceId": "test20250117093730"
        },
        "quickpay": {
            "id": "test20250117093730",
            "status": "1",
            "expiryTime": "2030-10-01",
        },
        "customer": {
            "id": ""
        }
    }
}
```

