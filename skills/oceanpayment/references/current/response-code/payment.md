---
sidebar_position: 1
sidebar_label: 支付
---
# 


## 概述
支付响应代码是Oceanpayment支付网关处理完交易请求后返回的状态标识，用于指示交易在网关层面的处理结果。


## 响应代码
### 接口返回
<div className="table-container">
|响应代码|响应说明|
| --- | --- |
|20001|Account cannot be empty|
|20002|Terminal cannot be empty|
|20003|signValue cannot be empty|
|20004|Account and terminal not match|
|20005|Inactive account|
|20006|Deactivated account|
|20007|Canceled account|
|20008|Abnormal account|
|20009|Inactive terminal|
|20010|Deactivated terminal|
|20011|Canceled terminal|
|20012|Abnormal terminal|
|20013|Incorrect sign value|
|20014|Transaction can not submit to production|
|20015|Transaction cannot submit to testing|
|20016|Terminal not match to interface|
|20017|Order number can not be empty|
|20018|Order number cannot exceed 50 digits|
|20019|Order amount cannot be empty|
|20020|Incorrect order amount format|
|20021|Transaction amount is invalid|
|20022|Order currency can not be empty|
|20023|Incorrect order currency|
|20024|Response URL can not be empty|
|20025|Response URL can not exceed 500 digits|
|20026|Card number can not be empty|
|20027|Invalid card number|
|20028|Card number only allows digit|
|20029|Invalid card type|
|20030|Incorrect card number|
|20031|Month cannot be empty|
|20032|Month only allows 2 digits|
|20033|Month only allows digits|
|20034|Month only allows 1~12|
|20035|Year cannot be empty|
|20036|Year must be 4 digits|
|20037|Year only allows digits|
|20038|Invalid expiry date|
|20039|Secure code cannot be empty|
|20040|Secure code should be 3-digit|
|20041|Secure code only allows digits|
|20042|Issuer cannot be empty|
|20043|Issuer cannot exceed 250 characters|
|20044|First name cannot be empty|
|20045|First name exceeds length limit|
|20046|Last name cannot be empty|
|20047|Last name cannot exceed 50 characters|
|20048|Billing email cannot be empty|
|20049|Billing email cannot exceed 50 characters|
|20050|Incorrect email address format|
|20051|Contact number cannot be empty|
|20052|Contact number cannot exceed 50 characters|
|20053|Billing country cannot be empty|
|20054|Billing country cannot exceed 100 characters|
|20055|Billing address cannot be empty|
|20056|Billing address cannot exceed 500 characters|
|20057|Zip code cannot be empty|
|20058|Zip code cannot over 50 characters|
|20059|Property {0},can not be empty|
|20060|Property {0},length is more than {1}|
|20061|Duplicate order|
|20062|Existed payment ID|
|20063|Billing state cannot be empty|
|20064|Billing state cannot exceed 100 characters|
|20065|Billing city cannot be empty|
|20066|Billing city cannot exceed 100 characters|
|20067|Remark cannot exceed 500 characters|
|20068|Request IP is not in whitelist|
|20069|Payment method is required|
|20070|Payment type is required|
|20071|IP address cannot be empty|
|20072|Incorrect IP address format|
|20074|Cardholder ID cannot be saved|
|20075|Cardholder ID not existed|
|20076|Cardholder ID not existed|
|20077|No card info in database|
|20078|No secure code info in database|
|20079|Incorrect month of expiry date|
|20080|Incorrect year of expiry date|
|20081|Incorrect first name of cardholder|
|20082|Incorrect last name of cardholder|
|20083|Incorrect billing address|
|20084|Incorrect billing city|
|20085|Incorrect billing state|
|20086|Incorrect billing country|
|20087|Incorrect zip code|
|20088|Incorrect issuer|
|20089|Incorrect email address|
|20090|Incorrect contact number|
|20091|Qiwi account number must be 6-12 digit|
|20092|Payment method error|
|20093|Boleto account cannot be empty|
|20094|Boleto account cannot exceed 50 characters|
|20095|Boleto email adress cannot be empty|
|20096|Boleto email address cannot exceed 100 characters|
|20097|Incorrect email adress format for Boleto|
|20098|payment type must be ' boleto ' , ' _tef ' , ' directboleto '|
|20099|Incorrect bank code|
|20100|Account number cannot be empty|
|20101|Account number only allows 4-12, cannot begin with 0|
|20102|Bankcode can not be empty|
|20103|Bankcode should be 8 digits|
|20104|Countrycode cannot be empty|
|20105|Qiwi countrycode cannot be empty|
|20106|pay_cpf can not be empty|
|20107|Incorrect Identity(such as CPF/CNPJ/DNI/RUT and so on) format|
|20108|Terminal not supported by MOTO|
|20109|Invalid payment URL|
|20110|First name of recipient cannot exceed 50 characters|
|20111|Last name of recipient cannot exceed 50 characters|
|20112|Contact number of recipient cannot exceed 50 characters|
|20113|Shipping country cannot exceed 100 characters|
|20114|Shipping state cannot exceed 100 characters|
|20115|Shipping city cannot exceed 100 characters|
|20116|Shipping adress cannot exceed 100 characters|
|20117|Zip code cannot exceed 100 characters|
|20118|Cart info cannot exceed 50 characters|
|20119|Cart API version cannot exceed 50 characters|
|20120|Billing ID cannot exceed 200 chracters|
|20121|pay_countryCode can not be empty|
|20122|Pay_countryCode should be 1-6 digits|
|20123|Notice URL can not exceed 500 digits|
|20124|Quickpay ID cannot exceed 200 characters|
|20125|Quickpay ID cannot be empty|
|20126|Quickpay ID not existed|
|20127|pay_userName cannot be empty|
|20128|pay_userName cannot exceed 50 characters|
|20129|productNum cannot be empty|
|20130|productNum cannot exceed 10 characters|
|20131|Incorrect productNum format|
|20132|productName cannot be empty|
|20133|productName cannot be exceed 120 characters|
|20134|Customer ID cannot be empty|
|20135|Customer ID cannot be exceed 50 characters|
|20136|PayNO. can not be empty|
|20137|PayNO. length maximum 50|
|20138|PayerName can not be empty|
|20139|PayerName length maximum 50|
|20140|PayID can not be empty|
|20141|PayID length maximum 50|
|20142|Payment method can not be empty|
|20143|Parameter error|
|20144|payment method cannot be empty|
|20145|payment method must be 'VCN'|
|20146|billing_country cannot be empty|
|20147|billing_country cannot exceed 50 characters|
|20148|billing_cardType cannot be empty|
|20149|billing_cardType cannot exceed 10 characters|
|20150|billing_activationDate cannot be empty|
|20151|Incorrect billing_activationDate forma|
|20152|billing_expiryDate cannot be empty|
|20153|Incorrect billing_expiryDate format|
|20154|MCC cannot be empty|
|20155|MCC cannot exceed 50 characters|
|20156|billing_name cannot be empty|
|20157|billing_name cannot exceed 50 characters|
|20158|reference_number cannot exceed 50 characters|
|20159|billing_activationDate cannot later than billing_expiryDate|
|20160|Incorrect pay_expirationTime or pay_expirationTimeStamp format|
|20161|Incorrect billing_country format|
|20162|Incorrect billing_currency format|
|20163|Incorrect billing_currency billing_country format|
|20164|pay_gender cannot be empty|
|20165|ship_houseNumber cannot be empty|
|20167|ship_street cannot be empty|
|20168|pay_userId cannot be empty|
|20169|productSku cannot be empty|
|20170|productPrice cannot be empty|
|20171|Invalid secure code|
|20172|ship_email cannot be empty|
|20173|language cannot be empty|
|20174|Time out|
|20176|payment additional method error|
|20177|Incorrect {0} customer&apos;s {1} travel_departureDate|
|20178|Incorrect {0} customer travel_departureTime|
|20179|Incorrect {0} customer&apos;s {1} travel_arrivalDate|
|20180|Incorrect {0} customer travel_arrivalTime|
|20181|Incorrect {0} customer travel_journeyType|
|20182|Incorrect {0} customer travel_hoursUntilDeparture|
|20183|Incorrect {0} customer travel_industryType|
|20184|Incorrect {0} customer travel_accountRegistered|
|20185|Incorrect travel_websiteLanguage|
|20186|Incorrect {0} customer&apos;s {1} travel_fareClass|
|20187|Incorrect {0} customer travel_departureCountry|
|20188|Incorrect {0} customer travel_arrivalCountry|
|20189|Incorrect {0} customer travel_customerNationality|
|20190|Incorrect {0} customer travel_isFrequentFlyer|
|20191|Incorrect {0} customer travel_frequentFlyerNumber|
|20192|Incorrect {0} customer travel_certificateType|
|20193|Incorrect {0} customer travel_certificateNumber|
|20194|Incorrect {0} customer travel_certificateExpiryDate|
|20195|Incorrect {0} customer travel_certificateIssuerCountry|
|20196|Incorrect travel_adult|
|20197|Incorrect travel_child|
|20198|Incorrect travel_infant|
|20199|Incorrect {0} customer travel_ticketNumber|
|20200|Invalid card data|
|20201|order_date cannot be empty|
|20202|Incorrect travel_electronicTicket|
|20203|Incorrect travel_pickUpDate|
|20204|Incorrect travel_pickUpTime|
|20205|Incorrect travel_dropOffDate|
|20206|Incorrect travel_dropOffTime|
|20207|Incorrect travel_pickUpCountry|
|20208|Incorrect travel_pickUpState|
|20209|Incorrect travel_pickUpCity|
|20210|Incorrect travel_pickUpZip|
|20211|Incorrect travel_pickUpAddress|
|20212|Incorrect travel_dropOffCountry|
|20213|Incorrect travel_dropOffState|
|20214|Incorrect travel_dropOffCity|
|20215|Incorrect travel_dropOffZip|
|20216|Incorrect travel_dropOffAddress|
|20217|Incorrect travel_stores|
|20218|Incorrect travel_hoursUntilDeparture|
|20219|Incorrect travel_customerNationality|
|20220|Incorrect travel_isFrequentFlyer|
|20221|Incorrect travel_frequentFlyerNumber|
|20222|Incorrect travel_certificateType|
|20223|Incorrect travel_certificateNumber|
|20224|Incorrect travel_certificateExpiryDate|
|20225|Incorrect travel_certificateIssuerCountry|
|20226|Incorrect travel_customerCount|
|20227|Incorrect travel_flightNumber|
|20228|Incorrect {0} customer travel_airlineLeg|
|20229|Incorrect travel_customerInfo|
|20230|Excess limit|
|20231|Incorrect {0} customer&apos;s {1} travel_originalAirportCode|
|20232|Incorrect {0} customer&apos;s {1} travel_destinationAirportCode|
|20233|Incorrect {0} customer travel_airportCount|
|20234|Incorrect {0} customer travel_airportCode|
|20235|Incorrect {0} customer travel_airlinesCount|
|20236|Incorrect {0} customer travel_airlinesCode|
|20237|Incorrect {0} customer travel_airlinesName|
|20238|Incorrect {0} customer&apos;s {1} travel_flightNumber|
|20239|Incorrect {0} customer travel_lastName|
|20240|Incorrect {0} customer travel_firstName|
|20241|Incorrect {0} customer travel_customerTitle|
|20242|Incorrect {0} customer travel_phone|
|20243|Incorrect {0} customer travel_email|
|20244|Decoding account number failed|
|20245|Incorrect account number|
|20246|Incorrect travel_agencyCode|
|20247|Incorrect travel_pnr|
|20248|Incorrect travel_spnr|
|20249|Incorrect {0} customer&apos;s {1} travel_stopOver|
|20250|Incorrect {0} customer travel_ticketIssueAddress|
|20251|Invalid Payment ID|
|20252|No payment data|
|20253|Failed transaction, cannot update|
|20254|Cannot be longer than 7 days|
|20255|Incorrect industry setting by terminal|
|20256|The Transaction Currency sent on the request was not valid.|
|20257|Incorrect {0} customer&apos;s {1} travel_carrierCode|
|20258|Incorrect travel_ticketReference|
|20259|Payment ID cannot be empty|
|20260|Incorrect productName format|
|20261|productSku cannot be exceed 500 characters|
|20262|Incorrect pay_cpf format|
|20263|Incorrect gateway merchant ID|
|20264|Incorrect itemList|
|20265|ItemList exceeds the limit or is empty|
|20266|{0} item list type cannot be empty|
|20267|Incorrect {0} item list type|
|20268|{0} item list title cannot be empty|
|20269|Incorrect {0} item list title|
|20270|Incorrect {0} item list sku|
|20271|Incorrect {0} item list price|
|20272|Incorrect {0} item list quantity|
|20273|Incorrect {0} item list total_amount|
|20274|Incorrect {0} item list taxRate|
|20275|Incorrect {0} item list taxPrice|
|20276|Incorrect {0} item list image_url|
|20277|Incorrect {0} item list product_url|
|20278|Incorrect {0} item list remark|
|20279|Incorrect price parameter|
|20280|Incorrect total_amount parameter|
|20281|Incorrect customs parameter|
|20282|This customs is not supported|
|20283|Incorrect customs_number parameter|
|20284|Incorrect customs_name parameter|
|20285|Incorrect sub_order_number parameter|
|20286|Incorrect shipping_fee parameter|
|20291|This order does not support customs upload|
|20292|The order has been uploaded to the customs. Please send the type=2 again.|
|20293|This order has no customs record.|
|20294|This order is not split and cannot be added sub_order_number.|
|20295|This order is split, please add sub_order_number|
|20300|This country or currency is not supported.|
|20301|Payment method does not support the country or currency.|
|20302|Limited transaction amount|
|20303|Incorrect travel_startDate|
|20304|Incorrect travel_startTime|
|20305|Incorrect travel_endDate|
|20306|Incorrect travel_endTime|
|20307|Incorrect travel_reschedule|
|20308|Incorrect redeemDate|
|20309|Incorrect redeemTime|
|20310|pay_accountNumber cannot be empty|
|20311|Incorrect pay_accountNumber format|
|20312|Incorrect order_description|
|20313|Incorrect subscription_name|
|20314|Incorrect subscription_interval|
|20315|Incorrect subscription_intervalCount|
|20316|Incorrect customer_info|
|20317|Incorrect voucher_info|
|29999|System error|
</div>

### 风控
<div className="table-container">
|响应代码|响应说明|解决方法|
| --- | --- | --- |
|10000|Payment is declined|Your payment request is declined, please contact customer service for more details.|
|10001|Incorrect risk control setting in transaction amount|
|10002|High risk URL|
|10003|Payment frequency limit|
|10004|Request website is not in whitelist|
|10005|Transaction limit|Sorry, your card is unable to authorised. If you entered the correct information, please use a different card or call your card issuer or use different payment method.|
</div>


### 系统配置
<div className="table-container">
|响应代码|响应说明|
| --- | --- |
|30001|Card brand or payment method is not accepted.|
|30002|No MDR setting in terminal|
|30003|Wrong setting in terminal|
|30004|Wrong setting in terminal|
|30005|Currency processing error|
|30006|Fail to get the transaction currency|
|30007|Incorrect payment URL setting|
|30008|Card brand is not accepted. Please Change another card.|
|30009|Wrong setting in terminal|
|30010|Abnormal exchage rate|
|30011|Payment amount cannot less than {0}|
|30012|Abnormal exchage rate|
|30013|Error in bank network|
|30014|Invalid payment method in the country|
|30015|Incorrect installments|
|30016|Card limited, please try UnionPay credit card for your payment.|
|30017|Apple pay is not accepted|
|30018|Google pay is not accepted|
</div>


### 银行返回
<div className="table-container">
|响应代码|响应说明|解决方法|
| --- | --- | --- |
|80000|Transaction Approved|
|80001|Payment Approved|
|80002|Partial Approval|
|80003|Transaction Pending|Transaction pending， wait to confirm|
|80004|Transaction Approved for Funds|
|80005|Funds Transfer Failed|
|80006|Transaction Approved for Update|
|80010|Transaction Do Not Honour|Sorry, your card is unable to authorised. If you entered the correct information, please use a different card or call your card issuer or use different payment method.|
|80011|Refer to Card Issuer|Sorry, your card is unable to authorised. If you entered the correct information, please use a different card or call your card issuer or use different payment method.|
|80012|Payment Declined|Sorry, your card is unable to authorised. If you entered the correct information, please use a different card or call your card issuer or use different payment method.|
|80013|Transaction Not Permitted On Card|Sorry, your card is unable to authorised. If you entered the correct information, please use a different card or call your card issuer or use different payment method.|
|80014|Duplicate Transaction|Contact the merchant website to confirm the transactions.|
|80015|Transaction Declined By Issuer|Sorry, your card is unable to authorised. If you entered the correct information, please use a different card or call your card issuer or use different payment method.|
|80020|Invalid Amount|Sorry, your card is unable to authorised. Please try to Pay again or Call your card issuer or use a different card.|
|80021|Invalid Card Number|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80022|Not Sufficient Funds|1. Please confirm the card has enough money or use another card.2. Change another card to pay|
|80023|Expired Card/Wrong Expired Day|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80024|Incorrect PIN; Re-enter|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80025|Restricted Card/Retain Card|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80026|Invalid Card Verification Value(CVV)|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80027|Exceeds Payment Limit|1. Please contact your card issuer to fix the problem2. Change another card to pay|
|80028|Invalid Credit/Checking/Saving/Universal/Investment Account|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80030|Bank Declined|
|80031|Time Out|
|80032|Invalid Merchant|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80033|Invalid Transaction For Terminal|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80034|Invalid Transaction Card / Issuer / Acquirer|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80035|Format Error|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80036|Transaction Not Allowed|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80037|Invalid Capture Date (Terminal Business Date)|Please contact the merchant website|
|80038|Transaction Not Permitted On Term|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80039|Wrong PAN|Use another card to pay.|
|80040|Lost Card/Stolen Card/Pickup Card|Sorry that we are not able to confirm your card information. Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80041|Suspected Fraud/Retain Card|Sorry that we are not able to confirm your card information. Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80042|Not Allow to Pay in This Website|
|80043|Declined By Bank System|
|80050|Unable to Reverse|Unable to Reverse! Please contact the payment service company.|
|80051|Timeout Reversal|1. Try to Pay again, your card issuer may accept your payment. 2. Call the 800 number on the back of the card, ask your card issuer accept your payment, then pay again. 3. Change another card to pay|
|80052|Duplicate Reversal|
|80053|Authorisation Void|
|80054|No Original|Please contact the merchant website|
|80061|Invalid Originator|Please contact the card issuer.|
|80062|No Funds Transfer|Please contact the merchant website|
|80063|Cash Service Not Available|Please contact the merchant website|
|80064|Cash Back Request Exceeds Issuer Limit|Please contact the merchant website|
|80070|Declined By Bank Risk System|Sorry that we are not able to confirm your card information. Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80071|Declined By Bank Risk System|Sorry that we are not able to confirm your card information. Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80072|Declined By Bank Limited|Sorry that we are not able to confirm your card information. Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80073|High Risk Transaction|Sorry that we are not able to confirm your card information. Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80074|Declined By Bank System|
|80075|Declined By Bank System|
|80081|Incorrect email address format|
|80082|Payment time limit exceeded|
|80083|Signature failure|
|80084|SMS verification code sending failed.|
|80085|Format Error|Sorry that we are not able to confirm your card information.Please make sure you entered the correct information. If you are still having trouble,please try to use a different card.|
|80090|Cannot Start 3D Authorized Service|Cannot Start 3D Authorized Service, please use a deffierent card.|
|80091|Cardholder Fail to Pass 3D Authorized Service|Input right 3D secure code or change another card to pay|
|80092|3D Process Fail|Fail to process the 3D transaction, please change another card to pay.|
|80093|3D Authorized Service not completed|
|80097|Transaction Declined|
|80098|Transaction Declined|Change another card to pay.|
|80099|Transaction was rejected|
|80100|Transaction was not finished|1. Try again, finish the transaction correctly. 2. Contact website with screenshot if it has error|
|80101|Customer canceled transaction|Customer canceled transaction|
|80102|Invalid account holder name|
|80110|Transaction declined / Insufficient funds|Transaction declined / Insufficient funds|
|80111|Bank account was rejected by bank|Bank account was rejected by bank|
|80112|Bank account holder was rejected by bank|Bank account holder was rejected by bank|
|80113|Bank account not available for online banking|Bank account not available for online banking|
|80114|Amount requested error|Amount requested error|
|80115|This merchant cannot support US consumers|This merchant cannot support US consumers|
|80116|Banking Identifier Code(BIC) cannot be supported|Banking Identifier Code(BIC) cannot be supported|
|80117|Invalid IBAN|Invalid IBAN|
|80118|Operation Not Permitted|
|80120|Network problem contact bank system|Network problem contact bank system|
|80121|Bank system response error|Bank system response error|
|80122|Account setting error|Account setting error|
|80123|Bank system setting error|Bank system setting error|
|80124|Transaction amount is less than minimum amount|Transaction amount is less than minimum amount|
|80125|Mobilephone number is required|Mobilephone number is required|
|80126|No banks available|No banks available|
|80127|Invalid Email Address|
|80128|Invalid Banking Identifier Code(BIC)|Invalid Banking Identifier Code(BIC)|
|80129|Country not supported|
|80200|Unpaid|Try to pay again and finish the payment.|
|80220|Wrong account number|
|80221|Invoice amount greater than maximum (15 000 RUB)|
|80222|Invoice amount less than minimum|
|80223|Required parameter is incorrectly specified or absent in the request|
|80224|Authorization from the blocked merchant|
|80225|Bill was not found|
|80300|Failed|
|80400|Merchant limited|
|80401|Invalid zip|
|80402|Invalid state|
|80403|Waiting user to pay the bill|
|80404|Invalid country|
|80405|Country not supported|
|80406|Wrong bank setting|
|80407|User limited|
|80408|Amount/velocity limited|
|80409|Wrong cadastral situation|
|80410|Invalid CPF|
|80411|Invalid amount|
|80412|Currency not allowed for this country|
|80413|Invalid payment method/Payment method not found|
|80414|Bank reject this transaction|
|80500|Cancelled|
|80501|Waiting user to pay the bill|
|80502|Checkout was not finished|
|80503|Bank system setting not enable|
|80504|Parameter required is invalid|
|80505|Payment already exists|
|80506|Not support the currency|
|80507|Amount limited|
|80508|Wrong amount|
|80509|User limited|
|80510|User not enough 16 years old|
|80511|CPF not match the user|
|80512|User amount limited|
|80513|Create Quickpay failure|
|80514|Quickpay operation failure|
|80515|The number of instalments is not allowed|
|80516|Some error happened on the transaction|
|80517|Foreign credit card|
|80518|Merchant limited|
|80519|Payment type not supported|
|80520|Country not supported or wrong country|
|80521|Transaction not found|
|80522|Refund error|
|80523|Cannot be refunded|
|80524|Invalid operation|
|80525|Unknown error|
|80526|Cannot be canceled|
|80527|Cannot be captured|
|80528|The address could not be retrieved|
|80529|Invalid JSON expression|
|80530|Invalid CPF|
|80531|Installment transaction not permitted on debit or prepaid cards|
|80532|Name on card in incorrect|
|80533|Customer Country not match payment country|
|80534|The image URL must be https|
|80535|Online transaction not permitted on card|
|80536|Exceeds withdrawal frequency limit|
|80537|Installment transaction not permitted on debit cards|
|80538|Incorrect customer infomation|
|80539|Expired card|
|80540|Insufficient funds|
|80541|Invalid card number|
|80542|Invalid card or card type|
|80543|Acquirer timeout|
|80544|Do not honor|
|80545|Transaction void|
|80546|Wrong CVV/CVC2|
|80547|Cannot Start 3D Authorized Service|
|80548|Acquirer declined transaction|
|80549|Timeout|
|80550|Acquirer timeout|
|80551|Operation was rejected|
|80552|The transaction could not be cancelled|
|80553|Expired Card/Wrong Expired Day|
|80554|The credit card is not active|
|80555|Unknown acquirer error|
|80556|Declined By Bank Risk System|
|80557|The payment method does not support this (Billing) country.|The payment method does not support this (Billing) country.|
|80558|The country is must be "MX"|
|80600|Transaction was not finished|
|80601|Invalid customer|
|80602|Not sufficient funds|
|80610|Invalid Parameters|
|80611|Duplicate transaction id|
|80612|Sub reseller reached limit|
|80613|Invalid handshake|
|80614|Unsupported encoding|
|80615|Merchant interation suspended|
|80616|Invalid request value|
|80617|Service disable|
|80618|Internal server error|
|80620|Customer canceled transaction|
|80621|Not sufficient funds|
|80622|Inactive Merchant ID|
|80623|Inactive Payment Account.|
|80624|Incorrect Payment account details.|
|80625|Invalid account.|
|80626|The password of the Payment Account has expired|
|80627|The Merchant has limited his sales to this country|
|80628|The transaction value is more than the limit cause non-KYC|
|80629|Only KYC-compliant Payment accounts allow to buy|
|80641|Parameter required is invalid|
|80642|Caused by Frequent usage of the same telephone number in Cash|
|80700|Transaction was not finished|
|80701|System timeout or Response Error|请立即调用被扫订单结果查询API，查询当前订单状态，并根据订单的状态决定下一步的操作。|
|80702|Request parameter not filled as directed|请根据接口返回的详细信息检查您的程序|
|80703|Order Number duplicate|请确认该订单号是否重复支付，如果是新单，请使用新订单号提交|
|80704|No athourization to be scanned|请开通商户号权限。请联系产品或商务申请|
|80705|The user's barcode has expired|请收银员提示用户，请用户在微信上刷新条码，然后请收银员重新扫码。 直接将错误展示给收银员|
|80706|Insufficient balance|请收银员提示用户更换当前支付的卡，然后请收银员重新扫码。建议：商户系统返回给收银台的提示为“用户余额不足.提示用户换卡支付”|
|80707|Card type is not supported|请用户重新选择卡种 建议：商户系统返回给收银台的提示为“该卡不支持当前支付，提示用户换卡支付或绑新卡支付”|
|80708|This order is closed|商户订单号异常，请重新下单支付|
|80709|The current order has been revoked|当前订单状态为“订单已撤销”，请提示用户重新支付|
|80710|Bank side timeout|请立即调用被扫订单结果查询API，查询当前订单的不同状态，决定下一步的操作。|
|80711|Requires payment password|等待5秒，然后调用被扫订单结果查询API，查询当前订单的不同状态，决定下一步的操作。|
|80712|Request parameter not filled as directed|每个二维码仅限使用一次，请刷新再试|
|80713|The QR code is invalid, refresh and try again|付款码无效，请重新扫码|
|80714|XML Format error|请检查XML参数格式是否正确|
|80715|Post parameters are not used|请检查请求参数是否通过post方法提交|
|80716|Parameter signature result is incorrect|请检查签名参数和方法是否都符合签名算法要求|
|80717|Missing required Request parameters|请检查参数是否齐全|
|80718|Not used the specified encoding format|请使用UTF-8编码格式|
|80719|Same order replace payer is not supported|请确认支付方是否相同|
|80720|Missing AppID in Parameter|请检查APPID是否正确|
|80721|Missing MCHID in Parameter|请检查MCHID是否正确|
|80722|Same order cannot be re-submitted|请核实商户订单号是否重复提交|
|80723|AppID and MCHID don't match.|请确认appid和mch_id是否匹配|
|80724|This order number does not exist|该API只能查提交支付交易返回成功的订单，请商户检查需要查询的订单号是否正确|
|80725|Invalid transaction_id|参数错误，请重新检查|
|80726|Please use Post|请检查请求参数是否通过post方法提交|
|80727|Signature Error|请检查签名参数和方法是否都符合签名算法要求|
|80728|Retry to solve refund process error|请不要更换商户退款单号，请使用相同参数再次调用API。|
|80729|The order has exceeded the refund period|请选择其他方式自行退款|
|80730|Business Error|该错误都会返回具体的错误原因，请根据实际返回做相应处理。|
|80731|Refund request failed|此状态代表退款申请失败，商户可自行处理退款。|
|80732|Too many invalid requests|请检查业务是否正常，确认业务正常后请在1分钟后再来重试|
|80733|Insufficient balance|此状态代表退款申请失败，商户可根据具体的错误提示做相应的处理。|
|80734|Refunded order query failed|请检查订单号是否有误以及订单状态是否正确，如：未支付、已支付未退款|
|80735|Parameter error|参数错误，请重新检查|
|80736|Parameter error|参数错误，请重新检查|
|80737|Parameter error|参数错误，请重新检查|
|80738|Bill doesn't exist.|请检查当前商户号在指定日期内是否有成功的交易。|
|80739|Bill not generated|请先检查当前商户号在指定日期内是否有成功的交易，如指定日期有交易则表示账单正在生成中，请在上午10点以后再下载。|
|80740|Bill compression failed|账单压缩失败，请稍后重试|
|80741|Bill decompression failed|账单解压失败，请稍后重试|
|80742|Please do real-name authentication for policy reason.|
|80743|Order status unknown|
|80744|Customer canceled transaction|
|80745|Invalid request|
|80746|Transaction amount exceeding user or risk control limit|
|80747|The QR code is invalid, refresh and try again|
|80748|Buyer switch off the payment function|
|80749|Current trade contains risk detected by Alipay|
|80750|Transaction failed. Please try again.|
|80751|Do not support overseas consumption|
|80800|Transaction was not finished|
|80801|Customer canceled transaction|
|80802|Transaction Pending|
|80803|Exceeds Payment Limit|
|80804|Insufficient Funds|
|80805|General Error|
|80806|Format Error|
|80807|Time Out|
|89999|Acquirer Time Out|1. Contact the merchant website to confirm the payment result 2. Try to pay again.|
</div>



