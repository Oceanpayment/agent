---
sidebar_position: 4
sidebar_label: 邮件模板修改
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#

### 找到邮件模板
1. 在您的Shopify店铺【**Settings**】–【**Notifications**】分别找到【**Order confirmation**】,【**Order edited**】,【**Order refund**】菜单。
<img src={require('/img/cn/saas/website/emials1.png').default} className="image-card"/>

### Order confirmation、Order edited修改
1. 查找（Ctrl+F）关键词`gateway`，找到以下代码位置（**没有找到代码则无需修改**）：
```html 
{{transaction.gateway|replace:"_",""|capitalize}}
```
2. 将以上代码替换为：
```php 
{%if transaction.gateway|replace:"_",""|capitalize=="Oceanpayment"%}
	Credit/Debit Card
{%else%}
     {{transaction.gateway|replace:"_",""|capitalize}}
{%endif%}
```
### Order refund修改
1. 查找（Ctrl+F）关键词`{{refund_method_title|capitalize}}`，找到以下代码位置（**没有找到代码则无需修改**）：
```html  
{{refund_method_title|capitalize}}
```
2. 将以上代码替换为：
```php 
{%if refund_method_title|capitalize=="Oceanpayment"%}
    Credit/Debit Card
{%else%}
    {{refund_method_title|capitalize}}
{%endif%}
```
3. 继续查找（Ctrl+F）关键词`{{transaction.gateway|replace:"_",""|capitalize}}`，找到以下代码位置（**没有找到代码则无需修改**）：
```html 
{{transaction.gateway|replace:"_",""|capitalize}}
```
4. 将以上代码替换为：
```php 
{%if transaction.gateway|replace:"_",""|capitalize=="Oceanpayment"%}
    Credit/Debit Card
{%else%}
    {{transaction.gateway|replace:"_",""|capitalize}}
{%endif%}
```