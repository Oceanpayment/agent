---
sidebar_position: 2
sidebar_label: 授权
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

## 概述
OPCard使用 Access Token机制对接口请求进行身份认证。  在调用 OPCard前，需先通过商户的[`app_key`](/docs/introduction/generate-key#配置信息-1)和[`app_secret`](/docs/introduction/generate-key#配置信息-1)生成访问令牌（Access Token）。

## 创建令牌（Create Token）
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php 
curl -X POST 'https://checkout-s.oceanpayment.com/open-api/v1/oauth/token/create'
-H 'Content-Type: application/json'
-D '{"app_key":"7FWGJDQYQZFCPXT7QL", "app_secret":"LQ7qF1UM7x3BfyfYTVa24qci53uPsNGJmrlC2NEJQq8BLszrrsRdIJb04teTgAx9yV5ncXPOjpYOYC0rZ6BkWP7yesQD0Dla3hRJ8WCd6880qaJeZM6idAv0WZYnY5s1"}'
```
  </TabItem>  
</Tabs>

<Tabs> 
  <TabItem value="Response" label="Responses" default>
```json  
{
  "msg": "操作成功",
  "code": "200",
  "data": {
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX3NvdXJjZSI6Mywib3BfaWQiOiIyNTAwMDAxIiwic2lnbl9kYXRlIjoxNzc5MzYwNjM1LCJwX2lkcyI6IjNlOTg3ZWUxOTZhYjQ0ODczYzcwM2QxZmM2OTljZTZiYmFiNzM2MGY5NTVjNTNiY2Q3MDYwNDhjOTViYzY5MGI0MDMzNjlkY2IzNjViZmU2MTNiYzk5MTk1MTc1NjdiOSJ9.7DIyH-PPbxXXfJk_bDcF4sMfdu1PqiCOiW81WDcZUsa0exvjgI_ttXgnWPe7rG2Zc7Hw7T0qWP_3i2nLk70ruA",
    "expire": 3600,
    "refresh_token": "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX3NvdXJjZSI6Mywib3BfaWQiOiIyNTAwMDAxIiwic2lnbl9kYXRlIjoxNzc5MzU4ODM1LCJwX2lkcyI6IjNlOTg3ZWUxOTZhYjQ0ODczYzcwM2QxZmM2OTljZTZiYmFiNzM2MGY5NTVjNTNiY2Q3MDYwNDhjOTViYzY5MGI0MDMzNjlkY2IzNjViZmU2MTNiYzk5MTk1MTc1NjdiOSJ9.dScSCdefXmCu6-jjiiQOy6qpvKrkLaNxpZQWmtUifeFpUIAFpBzGfhsyeYkyxvfS732ZAKkVqGL5biSnC4-Ghg",
    "refresh_expire": 1800
  }
}
```
  </TabItem>  
</Tabs>

## 更新令牌
使用`refresh_token`刷新令牌，携带用于请求接口的通行令牌，有效期为60分钟。
<Tabs> 
  <TabItem value="Resquest" label="Resquest" default>
```php 
curl -X POST 'https://checkout-s.oceanpayment.com/open-api/v1/oauth/token/refresh'
-H 'Content-Type: application/json'
-D '{"refresh_token": "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX3NvdXJjZSI6Mywib3BfaWQiOiIyNTAwMDAxIiwic2lnbl9kYXRlIjoxNzc5MzU4ODM1LCJwX2lkcyI6IjNlOTg3ZWUxOTZhYjQ0ODczYzcwM2QxZmM2OTljZTZiYmFiNzM2MGY5NTVjNTNiY2Q3MDYwNDhjOTViYzY5MGI0MDMzNjlkY2IzNjViZmU2MTNiYzk5MTk1MTc1NjdiOSJ9.dScSCdefXmCu6-jjiiQOy6qpvKrkLaNxpZQWmtUifeFpUIAFpBzGfhsyeYkyxvfS732ZAKkVqGL5biSnC4-Ghg"}'
```
  </TabItem>  
</Tabs>

<Tabs> 
  <TabItem value="Response" label="Response" default>
```json 
{
  "msg": "操作成功",
  "code": "200",
  "data": {
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX3NvdXJjZSI6Mywib3BfaWQiOiIyNTAwMDAxIiwic2lnbl9kYXRlIjoxNzc5MzYwNzcwLCJwX2lkcyI6IjNlOTg3ZWUxOTZhYjQ0ODczYzcwM2QxZmM2OTljZTZiYmFiNzM2MGY5NTVjNTNiY2Q3MDYwNDhjOTViYzY5MGI0MDMzNjlkY2IzNjViZmU2MTNiYzk5MTk1MTc1NjdiOSJ9.ftyVK41fIlh40hVhlV6RCQrgrMzyrc_V5d2NpNgPDeqVwtVumdoAyH3CRfH4KC5RfNDJ11msc0x5Tx03KyztpQ",
    "expire": 3600,
    "refresh_token": "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX3NvdXJjZSI6Mywib3BfaWQiOiIyNTAwMDAxIiwic2lnbl9kYXRlIjoxNzc5MzU4OTcwLCJwX2lkcyI6IjNlOTg3ZWUxOTZhYjQ0ODczYzcwM2QxZmM2OTljZTZiYmFiNzM2MGY5NTVjNTNiY2Q3MDYwNDhjOTViYzY5MGI0MDMzNjlkY2IzNjViZmU2MTNiYzk5MTk1MTc1NjdiOSJ9.XynHyAmjVsbzXJnnOMW8K5NFA0IXLrZZAPWh5wSRQ7rfRg7OWYHLfGF71iu69ymiTlag4vuQyAK5kL1X9hv_vQ",
    "refresh_expire": 1800
  }
}
```
  </TabItem>  
</Tabs>
