---
sidebar_position: 1
sidebar_label: 添加条款
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#

### 添加Terms&Conditions主体

1. 在店铺后台菜单【**在线商店**】-【**自定义页面**】创建`Terms&Conditions`页面（如果没有该页面）。
2. 在Terms&Conditions页面代码编辑`</>`中，复制以下**图片**或**文字**其中一种代码方式添加（参考网站修改意见提供的对应链接）。

<Tabs> 
  <TabItem value="添加图片主体链接" label="添加图片主体链接" default>
    ```html 
<img src="https://www.9-bill.com/index/img">
```
<img src={require('/img/cn/saas/website/shopline-legal1.png').default} className="image-card"/>
	</TabItem>
  <TabItem value="添加文字主体链接" label="添加文字主体链接">
        ```html 
<object type="text/x-scriptlet" data="https://www.9-bill.com/index/text" width="100%" height="300"></object>
```
<img src={require('/img/cn/saas/website/shopline-legal2.png').default} className="image-card"/>
  </TabItem>
</Tabs>


### 添加INTELLECTUAL PROPERTY RIGHTS条款
1. 在店铺后台菜单【**在线商店**】-【**自定义页面**】创建`Terms&Conditions`页面（如果没有该页面）。
2. 在INTELLECTUAL PROPERTY RIGHTS页面代码编辑`</>`中，复制以下**图片**或**文字**其中一种代码方式添加（参考网站修改意见提供的对应链接）。

<Tabs> 
  <TabItem value="添加图片条款链接" label="添加图片条款链接" default>
    ```html 
<img src="https://www.9-bill.com/index/legal">
```
<img src={require('/img/cn/saas/website/shopline-legal3.png').default} className="image-card"/>
	</TabItem>
  <TabItem value="添加文字条款链接" label="添加文字条款链接">
        ```html 
<object type="text/x-scriptlet" data="https://www.9-bill.com/index/legal" width="100%"></object>
```
<img src={require('/img/cn/saas/website/shopline-legal4.png').default} className="image-card"/>
  </TabItem>
</Tabs>

### 如何将条款页面添加至网站底部？
1. 在店铺后台【**在线商店**】-【**底部导航**】-选择已有的菜单或者新建菜单。
<img src={require('/img/cn/saas/website/shopline-legal6.png').default} className="image-card"/>
2. 选择【**自定义页面**】-添加Terms & Conditions或INTELLECTUAL PROPERTY RIGHTS页面。
<img src={require('/img/cn/saas/website/shopline-legal7.png').default} className="image-card"/>

### 网站底部支付Logo修改
1. 在店铺后台菜单选择【**在线商店**】-【**店铺设计**】-【**页脚**】 -【**展示支付渠道图标**】。
<img src={require('/img/cn/saas/website/shopline-legal5.png').default} className="image-card"/>