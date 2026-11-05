---
sidebar_position: 1
sidebar_label: 添加条款
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#

### 添加Terms&Conditions主体

1. 在店铺后台菜单【**Online Store**】-【**pages**】或者【**Settings**】- 【**Policies**】创建`Terms&Conditions`页面（如果没有该页面）。
2. 在Terms&Conditions页面代码编辑`</>`中，复制以下**图片**或**文字**其中一种代码方式添加（参考网站修改意见提供的对应链接）。

<Tabs> 
  <TabItem value="添加图片主体链接" label="添加图片主体链接" default>
    ```html 
<img src="https://www.9-bill.com/index/img">
```
<img src={require('/img/cn/saas/website/shopify-website1.gif').default} className="image-card"/>
	</TabItem>
  <TabItem value="添加文字主体链接" label="添加文字主体链接">
        ```html 
<object type="text/x-scriptlet" data="https://www.9-bill.com/index/text" width="100%" height="300"></object>
```
<img src={require('/img/cn/saas/website/shopify-website2.gif').default} className="image-card"/>
  </TabItem>
</Tabs>


### 添加INTELLECTUAL PROPERTY RIGHTS条款
1. 在店铺后台菜单【**Online Store**】-【**pages**】创建`INTELLECTUAL PROPERTY RIGHTS`页面（如果没有该页面）。
2. 在INTELLECTUAL PROPERTY RIGHTS页面代码编辑`</>`中，复制以下**图片**或**文字**其中一种代码方式添加（参考网站修改意见提供的对应链接）。

<Tabs> 
  <TabItem value="添加图片条款链接" label="添加图片条款链接" default>
    ```html 
<img src="https://www.9-bill.com/index/legal">
```
<img src={require('/img/cn/saas/website/shopify-website3.gif').default} className="image-card"/>
	</TabItem>
  <TabItem value="添加文字条款链接" label="添加文字条款链接">
        ```html 
<object type="text/x-scriptlet" data="https://www.9-bill.com/index/legal" width="100%"></object>
```
<img src={require('/img/cn/saas/website/shopify-website4.gif').default} className="image-card"/>
  </TabItem>
</Tabs>

### 如何将条款页面添加至网站底部？
1. 在Shopify后台【Online Store】-【Navigation】-【Footer menu】菜单中，添加`Terms&Conditions`和`INTELLECTUAL PROPERTY RIGHTS`页面。
<img src={require('/img/cn/saas/website/shopify-website5.gif').default} className="image-card"/>

### 添加主体/条款内容不显示？
1. 请检查对应页面代码编辑器`</>`中，粘贴的代码是否正确，有无空格或添加错误的情况。
2. 店铺是否有发起支付对接申请。
3. 请联系Oceanpayment技术支持协助。

### 网站底部支付Logo修改
#### 方法一
1. 您可以通过安装Shopify [Oceanpayment Connect](/docs/saas/order-management) APP来修改网站底部Logo。
<img src={require('/img/cn/saas/website/shopify-website6.png').default} className="image-card"/>

#### 方法二
1. 在店铺后台菜单【**Online Store**】 - 【**Themes**】 - 【**Edit code**】 找到`footer.liquid`文件。
2. 在footer文件代码中搜索**payment**关键字（快捷操作`ctrl+F`）。
<img src={require('/img/cn/saas/website/shopify-website7.png').default} className="image-card"/>
3. 找到**payment**对应的`for`和`endfor`标签，将这几行代码进行注释，选中这几行代码按`ctrl+/`，注释后在下一空白行添加以下代码：
```php
<img src="{{ 'paypal' | payment_type_img_url }}" height="25" alt="paypal" />
<img src="{{ 'visa' | payment_type_img_url }}" height="25" alt="visa" />
<img src="{{ 'master' | payment_type_img_url }}" height="25" alt="master" />
<img src="{{ 'maestro' | payment_type_img_url }}" height="25" alt="maestro" />
<img src="{{ 'jcb' | payment_type_img_url }}" height="25" alt="jcb" />
<img src="{{ 'american_express' | payment_type_img_url }}" height="25" alt="american express"/>
<img src="{{ 'diners_club' | payment_type_img_url }}" height="25" alt="diners club" />
<img src="{{ 'discover' | payment_type_img_url }}" height="25" alt="discover" />
<img src="{{ 'klarna' | payment_type_img_url }}" height="25" alt="klarna" />
<img src="{{ 'google_pay' | payment_type_img_url }}" height="25" alt="googlepay" />
<img src="{{ 'apple_pay' | payment_type_img_url }}" height="25" alt="applepay" />   
```
