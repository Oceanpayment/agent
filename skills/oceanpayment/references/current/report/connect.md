---
sidebar_position: 2
sidebar_label: 连接信息
---
# 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述
为商户提供安全可靠的报表传输服务，支持多种数据格式和传输协议，确保业务数据准确及时送达。

## SFTP连接信息
:::warning[连接之前]
SFTP访问报表都需要登记您的服务器IP白名单，请联系Oceanpayment技术支持添加。
:::

<Tabs> 
  <TabItem value="生产" label="生产" default>
```bash
主机地址: sftp.oceanpayment.com
端口: 226
协议: SFTP (SSH)
认证方式: 密码认证
```
 </TabItem>
 <TabItem value="沙盒" label="沙盒">
```bash
主机地址: test-sftp.oceanpayment.com
端口: 22
协议: SFTP (SSH)
认证方式: 密码认证
``` 
 </TabItem>
</Tabs>


## 连接示例
请使用密码认证连接
<Tabs> 
  <TabItem value="bash" label="bash" default>
```bash
sftp -P 226 username@sftp.oceanpayment.com
```
 </TabItem>
 <TabItem value="PHP" label="PHP">
```php
$host = 'sftp.oceanpayment.com';
$port = 226;
$username = 'your_username';
$password = 'your_password';

// 初始化 SSH 连接
$connection = ssh2_connect($host, $port);
if (!$connection) {
    die("无法连接到 SFTP 服务器");
}

// 使用用户名和密码认证
if (!ssh2_auth_password($connection, $username, $password)) {
    die("认证失败");
}

// 初始化 SFTP
$sftp = ssh2_sftp($connection);
if (!$sftp) {
    die("SFTP 初始化失败");
}

echo "SFTP 连接成功！";
```
 </TabItem>
 
 <TabItem value="Java" label="Java">
```java
import com.jcraft.jsch.*;

public class SFTPClient {
    public void downloadReport() throws JSchException, SftpException {
        JSch jsch = new JSch();
        Session session = jsch.getSession("username", "sftp.oceanpayment.com", 226);
        session.setPassword("password");
        session.setConfig("StrictHostKeyChecking", "no");
        session.connect();
        
        ChannelSftp channel = (ChannelSftp) session.openChannel("sftp");
        channel.connect();
        channel.cd("/reports");
        
        //列出文件
        Vector<ChannelSftp.LsEntry> files = channel.ls("*.csv");
        for (ChannelSftp.LsEntry file : files) {
            System.out.println("文件: " + file.getFilename());
        }
        
        channel.disconnect();
        session.disconnect();
    }
}
```
 </TabItem>
 <TabItem value="Python" label="Python">
```python
import pysftp

cnopts = pysftp.CnOpts()
cnopts.hostkeys = None  # 仅用于测试环境

with pysftp.Connection(
    host='sftp.oceanpayment.com',
    username='your_username',
    password='your_password',
    port=226,
    cnopts=cnopts
) as sftp:
    sftp.cwd('/reports')
    files = sftp.listdir()
    print("可用报表文件:", files)
```
 </TabItem>
</Tabs>


