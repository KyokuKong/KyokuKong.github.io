---
title: FISCO+WeBASE部署
cover: /assets/images/cover3.jpg
icon: fa-solid fa-dumbbell
date: 2023-11-30
---
## 哈？为什么会写这玩意？

好问题，我也不知道。

前段时间混到了学校的区块链工作室准备小小的赚点学分和奖金，如果能够再嫖他一两张证书那自然是更好的。于是我不知道哪里来的勇气顺手报了学校的技能比赛。

哦，我的天哪，它刚好是明天，而且不允许现场查文档（但是能用网络，倒还好，起码docker之类的可以用）。

于是本着究极临时抱佛脚的心态，赶紧复习一下之前学的这堆玩意。

要说有什么好消息的话......大概是这部分确实还是很简单的。

好的，在我码完这几句话并且到达12月1日之前，赶紧开工吧。

## 前置准备

- VMWare Workstation 17

虚拟机平台，我觉得这个应该不太需要解释为什么要装。

妙妙链接：[点我](https://www.52pojie.cn/thread-1804571-1-1.html)

---

- Ubuntu 20.04 LTS (Live)

实际上爱用哪个版本都行，不是ubuntu也完全没问题，当然最好还是Debian系啦。

USTC镜像：[中国科学技术大学开源软件镜像站](https://iso.mirrors.ustc.edu.cn/ubuntu-releases/jammy/ubuntu-22.04.3-desktop-amd64.iso)

~~啊你问为什么不是Server CLI版本？因为我喜欢啊（笑~~

---

- OpenJDK 11/15

这个配置完了记得要设置一下JAVA_HOME的环境变量

```bash
sudo apt install openjdk-11-jdk
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
```

---

- MySQL

显然是需要用的，所以安装一份，虽然一般说要用docker，但是这里用docker会特别容易翻车，还是不献丑了。

```bash
sudo apt install mariadb-server

sudo mysqladmin password 123456
# 或者你也可以
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123456');
```

---

- Python 3

显然需要用py来运行最后的webase部署脚本。

```bash
sudo apt install python3
sudo apt install python3-pymysql
```

## 安装Ubuntu环境

我觉得VMware里打开然后装个Ubuntu不是什么很复杂的操作吧......

记得要设置成NAT模式，然后存储要分20G以上，内存多多益善。

建议先分配一个空白硬盘然后再装入ubuntu，然后最小安装即可。

## SSH连接到Ubuntu

我相信你绝对不会喜欢vmware里的傻卵键盘输入，所以赶紧自己ssh进去吧。

```bash
ssh root@<你的虚拟机的ip地址>
```

顺便非常建议你尝试一下`Windows Terminal`，这玩意真的是个人感觉用过最舒服的终端，看着养眼配置性好而且完全免费功能也不少。

:::info
如果你不知道ubuntu的ip地址是多少，可以这样做：

```bash
sudo apt install net-tools
ifconfig
```

一般来讲在你登录之前你需要保证你的ubuntu支持被远程登录，所以要先设置openssl的配置

```bash
sudo apt install ssh
sudo apt install vim
sudo vim /etc/ssh/sshd_config
```

然后设置`PermitRootLogin`为`yes`，然后`esc`并`:wq`退出vim并保存文件。

然后你需要重启ssh服务

```bash
sudo systemctl restart ssh
```

锵锵，这样就就可以用powershell登入ssh了！

![ ](https://img.kyoku.top/20231201003742.png)

:::

:::tip
如果你觉得如上的操作进行的都非常慢，那么大概率你的网络环境不太美丽，你需要换源！

```bash
sudo sed -i 's@//.*archive.ubuntu.com@//mirrors.ustc.edu.cn@g' /etc/apt/sources.list
```

:::

## 部署节点

首先，还是回到我们的shell里面。

使用apt工具安装以下的软件包：

```bash
sudo apt install curl
sudo apt install openssl
sudo apt install wget
sudo apt install git
sudo apt install nginx
sudo apt install dos2unix
```

在主文件夹中创建一个`/fisco`文件夹用来存放我们的整个区块链项目。

```bash
mkdir fisco
```

下载部署脚本到我们的项目文件夹中：

```bash
cd ~/fisco && curl -#LO https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/FISCO-BCOS/FISCO-BCOS/releases/v2.9.1/build_chain.sh && chmod u+x build_chain.sh
```

开始搭建区块链节点：

```bash
bash build_chain.sh -l 127.0.0.1:4 -p 30300,20200,8545
```

等待节点自动下载并安装即可。

完成后输出应该是这样的：

![ ](https://img.kyoku.top/20231201010223.png)

现在我们启动所有节点并测试节点的可用性：

```bash
bash nodes/127.0.0.1/start_all.sh
```

如输出为：

![ ](https://img.kyoku.top/20231201010506.png)

则为成功正常启动，然后我们可以检查节点的进程和节点数，以及是否正常进行了共识。

```bash
ps -ef | grep -v grep | grep fisco-bcos
tail -f nodes/127.0.0.1/node0/log/log*  | grep connected
tail -f nodes/127.0.0.1/node0/log/log*  | grep +++
```

## 部署控制台

还是在之前的项目文件夹里，我们运行如下代码来下载console的部署脚本并安装：

```bash
curl -#LO https://gitee.com/FISCO-BCOS/console/raw/master-2.0/tools/download_console.sh && bash download_console.sh
```

安装进度条跑完之后会自动解压安装console。

现在我们导入节点的ssl证书给控制台来让其可以正确的访问到节点：

```bash
cp -r nodes/127.0.0.1/sdk/. console/conf/
```

然后我们需要生成console的配置文件：

```bash
cp console/conf/config-example.toml console/conf/config.toml
```

启动console进行测试：

```bash
bash console/strat.sh
```

## 部署WeBase面板

首先拉取安装包：

```bash
wget https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeBASE/releases/download/v1.5.5/webase-deploy.zip
unzip webase-deploy.zip
cd webase-deploy
```

然后修改`common.properties`配置文件中的`dbUsername`和`dbPassword`，使其和你的mysql配置对应。

开始部署！

```bash
bash ../nodes/127.0.0.1/stop_all.sh

python3 deploy.py installAll
```

只需要等他跑完就大功告成了！

![ ](https://img.kyoku.top/20231201014220.png)

::: tip 超精简版本！！！

```bash
sudo apt install curl openssl wget git nginx dos2unix openjdk-11-jdk mariadb-server python3 python3-pip python-pymysql

export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

sudo mysqladmin password 123456

mkdir fisco

cd ~/fisco && curl -#LO https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/FISCO-BCOS/FISCO-BCOS/releases/v2.9.1/build_chain.sh && chmod u+x build_chain.sh

bash build_chain.sh -l 127.0.0.1:4 -p 30300,20200,8545

# bash nodes/127.0.0.1/start_all.sh

curl -#LO https://gitee.com/FISCO-BCOS/console/raw/master-2.0/tools/download_console.sh && bash download_console.sh

cp -r nodes/127.0.0.1/sdk/. console/conf/

cp console/conf/config-example.toml console/conf/config.toml

wget https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeBASE/releases/download/v1.5.5/webase-deploy.zip

unzip webase-deploy.zip

cd webase-deploy

vim common.properties
# 编辑配置文件内容

bash ../nodes/127.0.0.1/stop_all.sh

python3 deploy.py installAll
```

:::
