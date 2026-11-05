---
sidebar_position: 4
sidebar_label: 常见错误
---
# 

## 常见错误
### 连接类错误
<div className="table-container">
|错误代码|原因分析|解决方案|
| --- | --- | --- |
|`Connection refused`|服务器未启动或端口错误|检查服务状态：`systemctl status sshd`|
|`Authentication failed`|认证信息错误|验证用户名/密码或密钥文件|
|`No route to host`|网络不通|检查网络连接和防火墙设置|
|`Connection timeout`|网络延迟或防火墙阻挡|调整超时时间，检查网络配置|
</div>

### 文件操作错误
<div className="table-container">
|错误代码|原因分析|解决方案|
| --- | --- | --- |
|`Permission denied`|权限不足|检查文件/目录权限设置|
|`No such file or directory`|路径错误|验证文件路径是否存在|
|`Disk quota exceeded`|磁盘空间不足|清理旧文件或申请扩容|
|`File exists`|文件已存在|使用覆盖选项或重命名文件|
</div>

## 故障排查
1. 检查网络连通性，如果无法连通。
```bash
telnet sftp.oceanpayment.com 226
```

2. 查看服务状态。
```bash
systemctl status sshd
tail -f /var/log/secure
```

3. 检查防火墙/安全组/IP白名单
- 本地
```bash
sudo iptables -L -n
sudo ufw status
```
- 云端（AWS/GCP/Azure）：检查 Security Group/Firewall 是否允许你的客户端 IP访问22/226端口；
- Oceanpayment启用了IP白名单，确认您的客户端 IP在允许列表。