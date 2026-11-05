---
sidebar_position: 1
sidebar_label: dispute_data 字段规范
---
#

## 介绍
[dispute_data](/docs/orders/dispute-management/dispute-api-management/query-dispute-details) 为 Klarna 银行要求的动态字段，以 key-value 对象形式提交。以下为所有可用字段及其取值约束：

## 字段

<div className="table-container">
|key值|value值|类型|
| --- | --- | --- |
|return_info|yes_will_make_changes_to_order, yes_but_not_accepted, return_not_received|枚举值|
|tracking_id||≤ 1000 characters|
|shipping_date||date-time，yyyy-MM-dd格式，\<\= 100 characters |
|shipping_carrier|postnord, bring, dhl, ups, db_schenker, posten, bring, gls, swipbox, posti, posti_pakettiautomaatit, smartpost, matkahuolto, deutsche_post, hermes, dpd, osterreichische_post, post_nl, kiala, fedex, usps, laser_ship, canpar, shipping_chimp, canpost, purolator, other, order_not_sent|枚举值|
|received_payment|yes_will_make_changes_to_order, yes_refunded_consumer, not_received_payment|枚举值|
|order_type|services, physical_goods, tickets_travel|枚举值|
|service_already_used|yes, no|枚举值|
|customer_has_been_contacted|yes, no|枚举值|
|service_delivered_by|email, online, phone, physically, other|枚举值|
|order_already_shipped|yes_in_full, yes_partially, no|枚举值|
|delivery_address||string|
|shipment_country|at, de, es, it, fr, be, nl, ie, fi, gr, pt, se, no, dk, gb, us, ca, au, nz, pl, cz, ro, ch, mx, other|枚举值|
|delivered_with_proof|yes, no|枚举值|
|goods_returned|yes_in_full, yes_partially, no|枚举值|
|last_digits_of_phone_for_delivery_notification||≥ 3 characters|
|order_is_cancellable|yes_will_cancel, no|枚举值|
|order_is_refundable|yes_in_full, yes_partially, no|枚举值|
|order_already_used|yes_in_full, yes_partially, no|枚举值|
|is_travel_order|yes_will_cancel, no|枚举值|
|is_shipping_company_contacted|yes_and_the_shipping_company_is_currently_attempting_to_recall_the_order, yes_and_the_order_was_delivered_back_to_us, yes_but_order_has_already_been_delivered, no_but_we_will_do_as_soon_as_possible, no_but_we_allow_klarna_to_reach_out_to_the_shipping_company_in_order_to_try_to_stop_the_order, order_was_shipped_without_a_tracking_id_and_cannot_be_recalled|枚举值|
|is_order_shipped|yes_in_full, yes_partially, no_will_cancel_the_order|枚举值|
|shipment|技术处理，不需要商户填写|—|
|list_of_shipments|技术处理，不需要商户填写|—|
|proof_of_delivery|技术处理，不需要商户填写|—|
|capture_id|技术处理，不需要商户填写|—|

## dispute_evidence 申诉元素示例

```java
{
  "dispute_evidence": [
    {
      "evidence_code": "47",
      "evidence_description": "The Order is still on the way, Please wait patiently",
      "evidence_optional": false,
      "evidence_example": "Not listed above. Additional documentation substantiating the case",
      "evidence_submitted": "xxxxx xxxx xxxxxx xxxxxxxxx",
      "evidence_file": "222"
    },
    {
      "evidence_code": "44",
      "evidence_description": "The order has been shipped, please see the following detailed information.",
      "evidence_optional": true,
      "evidence_example": "The detail information of the order: 1. Tracking ID is 1234567; 2. The shipping company used was xxxxx; ...",
      "evidence_submitted": "",
      "evidence_file": ""
    },
    {
      "evidence_code": "19",
      "evidence_description": "Merchandise was Delivered.",
      "evidence_optional": false,
      "evidence_example": "The service was rendered/merchandise was delivered: This order was processed correctly. ...",
      "evidence_submitted": "xxxxx xxxx xxxxxx xxxxxxxxx",
      "evidence_file": "456"
    }
  ]
}

```
## dispute_data 完整示例
```java
{
  "return_info": "yes_will_make_changes_to_order",
  "customer_has_been_contacted": "yes",
  "delivered_with_proof": "yes",
  "delivery_address": "xxxxxxx",
  "goods_returned": "yes_in_full",
  "is_order_shipped": "yes_in_full"
}

```

参考来源 [Klarna Disputes API 官方文档](https://docs.klarna.com/api/disputes-api/disputes-api-2.0.0#operation/respondToDisputeRequest).

</div>


