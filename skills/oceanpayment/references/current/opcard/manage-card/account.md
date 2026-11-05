---
sidebar_position: 1
sidebar_label: 创建子账户
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Modal from '@site/src/components/Modal';
import CollapsibleTable from '@site/src/components/CollapsibleTable';

## 概述
账户标识是系统为账户分配的唯一标识，用于标识不同账户主体对应的资金池，其中`account_id`字段表示该账户标识。

:::warning[注意]
如需使用父子账户体系，请先联系[Oceanpayment运营经理](mailto:opcard@oceanpayment.com.cn)进行申请。经审核并开通相关权限后，即可创建和管理子账户，并在[创建卡片](/docs/opcard/create-card/add-card/#获取账户唯一标识)时可指定卡片归属的主账户或子账户。
:::

## 创建子账户
用父级别账户`{account_id}`来创建子账户：
<Tabs> 
  <TabItem value="Request" label="Request" default>
```php
cURL -X POST /v1/account/{account_id}
-H 'Content-Type: application/json'
-H 'Authorization: {token}'
-d '{
	"program_value": 2,
	"primary_person": {
	    "first_name": "Joe",
	    "last_name": "Bauer",
	    "middle_name": "Joe",
	    "last_name2": "Bauer",
	    "dob": "19820301",
	    "nick_name": "Chuck",
	    "title": "Dr",
	    "suffix": "Jr"
	},
	"addresses": [{
            "line1": "123 Main St.",
            "postal_code": "12345",
            "type": "home",
            "line2": "123 Main St.",
            "line3": "123 Main St.",
            "neighborhood": "Sunfield",
            "city": "Austin",
            "state": "TX",
            "country": "US"
	}],
	"phones": [{
            "type": "contact",
            "country_code": "USA",
            "phone_number": "178549645256"
	}],
	"emails": [{
            "type": "personal",
            "email": "user@example.com",
            "state": "verified"
	}]
  }

```
  </TabItem>
</Tabs>

<div className="table-container">
<CollapsibleTable
  data={[
  {
    title: "program_value",
    type: "int",
    length: "1-10",
    required: "是",
    desc: "program账户卡类型",
    example: "2",
  },
  {
    title: "primary_person",
    type: "object",
    length: "-",
    required: "是",
    desc: "主要持卡人信息",
    example:'{\n  "primary_person":[{\n      "first_name":"firstname",\n      "last_name":"lastname",\n  }]\n}',
    children: [
      	  {
	        title: "first_name",
	        type: "string",
	        length: "1-64",
	        required: "是",
	        desc: "名",
	        example: "firstname"
	      },
	      {
	        title: "last_name",
	        type: "string",
	        length: "1-64",
	        required: "是",
	        desc: '姓',
	        example: "lastname"
	      },
	      {
	        title: "middle_name",
	        type: "string",
	        length: "0-64",
	        required: "否",
	        desc: '中间名',
	        example: "middlename"
	      },
	      {
	        title: "last_name2",
	        type: "string",
	        length: "0-64",
	        required: "否",
	        desc: '第二姓氏',
	        example: "lastname2"
	      },
	      {
	        title: "dob",
	        type: "string",
	        length: "0-8",
	        required: "否",
	        desc: '出生日期<ul><li>格式：<code>yyyyMMdd</code></li>',
	        example: "19900101"
	      },
	      {
	        title: "nick_name",
	        type: "string",
	        length: "0-64",
	        required: "否",
	        desc: '昵称',
	        example: "nickname"
	      },
	      {
	        title: "title",
	        type: "string",
	        length: "0-64",
	        required: "否",
	        desc: '称谓<ul><li>Mr</li><li>Mrs</li><li>Dr</li></ul>',
	        example: "Mr"
	      },
	      {
	        title: "suffix",
	        type: "string",
	        length: "0-64",
	        required: "否",
	        desc: '<ul><li>Jr</li><li>Sr</li></ul>',
	        example: "Jr"
	      },
    ]
  },
  {
    title: "addresses",
    type: "object",
    length: "-",
    required: "否",
    desc: "地址列表",
    example:'{\n  "addresses":[{\n      "line1":"contact",\n      "postal_code":"518000",\n      "type":"home",\n      "country":"USA"\n  }]\n}',
    children: [
      	  {
	        title: "line1",
	        type: "string",
	        length: "1-150",
	        required: "是",
	        desc: "地址第一行",
	        example: "contact"
	      },
	      {
	        title: "postal_code",
	        type: "string",
	        length: "1-16",
	        required: "是",
	        desc: '邮政编码',
	        example: "518000"
	      },
	      {
	        title: "type",
	        type: "string",
	        length: "-",
	        required: "是",
	        desc: '地址类型<ul><li>home</li><li>biz</li><li>ship</li></ul>',
	        example: "home"
	      },
	      {
	        title: "line2",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: '地址第二行',
	        example: "lastname2"
	      },
	      {
	        title: "line3",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: '地址第三行',
	        example: "19900101"
	      },
	      {
	        title: "neighborhood",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: '社区名称',
	        example: "nickname"
	      },
	      {
	        title: "city",
	        type: "string",
	        length: "0-50",
	        required: "否",
	        desc: '城市',
	        example: "Austin"
	      },
	      {
	        title: "state",
	        type: "string",
	        length: "0-12",
	        required: "否",
	        desc: '州/省',
	        example: "TX"
	      },
	      {
	        title: "country",
	        type: "string",
	        length: "-",
	        required: "否",
	        desc: '国家代码',
	        example: "US"
	      },
    ]
  },
  {
    title: "phones",
    type: "object",
    length: "-",
    required: "否",
    desc: "电话列表",
    example:'{\n  "phones":[{\n      "type":"contact",\n      "country_code":"+86",\n      "phone_number":"178549645256"\n  }]\n}',
    children: [
      	  {
	        title: "type",
	        type: "string",
	        length: "-",
	        required: "是",
	        desc: "电话类型<ul><li>contact</li><li>mob</li><li>home</li><li>work</li><li>fax</li></ul>",
	        example: "contact"
	      },
	      {
	        title: "country_code",
	        type: "string",
	        length: "-",
	        required: "否",
	        desc: '国际区号，ITU标准',
	        example: "+86"
	      },
	      {
	        title: "phone_number",
	        type: "string",
	        length: "0-33",
	        required: "否",
	        desc: '电话号码，纯数字，不含空格或特殊字符',
	        example: "178549645256"
	      },
    ]
  },
  {
    title: "emails",
    type: "object",
    length: "-",
    required: "否",
    desc: "邮箱列表",
    example:'{\n  "emails":[{\n      "type":"personal",\n      "email":"user@example.com",\n      "state":"verified"\n  }]\n}',
    children: [
      	  {
	        title: "type",
	        type: "string",
	        length: "-",
	        required: "是",
	        desc: "邮箱类型<ul><li>personal</li><li>work</li></ul>",
	        example: "personal"
	      },
	      {
	        title: "email",
	        type: "string",
	        length: "1-303",
	        required: "是",
	        desc: '邮箱地址，需符合邮箱格式',
	        example: "user@example.com"
	      },
	      {
	        title: "state",
	        type: "string",
	        length: "-",
	        required: "是",
	        desc: '验证状态<ul><li>verified</li><li>unverified</li></ul>',
	        example: "verified"
	      },
    ]
  },

]}
/>
</div>




<Tabs> 
  <TabItem value="Responses" label="Responses" default>
```json
{
    "code": "200",
    "msg": "操作成功",
    "data": {
        "account_id": "1016X10007530070724",
        "parent_account_id": "1016X10007422220312",
        "creation_time": 1782367203137,
        "modified_time": 1782367203137
    }
}
```
  </TabItem>
</Tabs>

|参数名|类型|描述|示例|
| --- | --- | --- | --- |
|`account_id`|string|子商户账户唯一标识号|1016X10007530070724|
|`parent_account_id`|string|父商户账户唯一标识号|1016X10007422220312|
|`creation_time`|long|创建时间（Unix时间戳，毫秒）|1782367203137|
|`modified_time`|long|修改时间（Unix时间戳，毫秒）|1782367203137|
