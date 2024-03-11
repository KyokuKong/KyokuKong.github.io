---
title: 区块链技术赛项模拟题 - 智能合约部分（一）
cover: /assets/images/cover3.jpg
icon: fa-solid fa-dumbbell
date: 2024-03-07
---
::: details 完整原题

使用Solidity语言完成智能合约开发、部署和调用，要求如下：
1.食品信息（FoodInfoItem）的接口编码
（1）编写食品信息实体的接口，完成可溯源食品信息初始化，实现可追溯的原始生产商食品信息上链功能；
表2-2-1 FoodInfoItem实体说明
|名称|类型|说明|
|--|--|--|
|_currentTraceName|string|当前用户名|
|_name|string|食品名称|
|_owner|address|合约的创建者|
|_quality|uint8|质量|
|_status|uint8|状态|
|_traceName|string[]|用户名|
|_timestamp|uint[]|流转时间戳|
|_traceAddress|address[]|用户地址|
|_traceQuality|uint8[]|食品质量|

```solidity
contract FoodInfoItem{
    //①保存食品流转过程中各个阶段的时间戳
    //②保存食品流转过程各个阶段的用户名
    //③保存食品流转过程各个阶段的用户地址信息（和用户一一对应）
    //④保存食品流转过程中各个阶段的质量
    //⑤食品名称
    //⑥当前用户名称
    //⑦质量（0=优质 1=合格 2=不合格）
    //⑧状态（0:生产 1:分销 2:出售）
    //⑨初始化owner
```

（2）编写分销商食品上链信息接口，根据食品溯源智能合约地址获取分销商上链食品的信息； 

```solidity
function addTraceInfoByDistributor(①, uint8 quality) public returns(bool) {
        require(_status == 0 , "status must be producing");
        //②
        _timestamp.push(now);
        _traceName.push(traceName);
        _currentTraceName = traceName;
        //③
        //④
        _traceQuality.push(_quality);
        _status = 1;
        return true;
    }
```

（3）编写超市进行食品上链信息的接口，根据食品溯源智能合约地址获取超市上链食品信息。

```solidity
function addTraceInfoByRetailer(①, uint8 quality) public returns(bool) {
        require(_status == 1 , "status must be distributing");
        //②
        _timestamp.push(now);
        _traceName.push(traceName);
        _currentTraceName = traceName;
        //③
        //④
        _traceQuality.push(_quality);
        _status = 2;
        return true;
}
```

2.食品溯源(Trace)的接口编码
（1）编写食品溯源智能合约生产商Producer添加食品接口，必须生产商才能添加可溯源的食品，实现溯源功能；

```solidity
function newFood(①, string traceName, uint8 quality)
	public ② returns(③)
        {
            //④
            //⑤
            //⑥
            //⑦
            //⑧
        }
```

（2）编写食品溯源智能合约分销商Distributor添加食品接口，必须分销商才能添加可溯源的食品，实现溯源功能；

```solidity
function addTraceInfoByDistributor(①, uint8 quality)
	public ② returns(bool) {
            //③
            return FoodInfoItem(foods[traceNumber]).④, quality);
        }
```

（3）编写食品溯源智能合约超市Retailer添加食品接口，必须超市才能添加可溯源的食品，实现溯源功能。

```solidity
function addTraceInfoByRetailer(①, uint8 quality)
	public ② returns(bool) {
            require(③, "traceNumber does not exist");
            return FoodInfoItem(foods[traceNumber]).④, quality);
        }
```

3.角色（Role）管理的接口编码
（1）编写食品溯源增加角色接口，必须是未增加的角色才能被添加，实现添加角色的功能；

```solidity
function add(①, address account) ② {
        require(!③, "Roles: account already has role");
        role.④ = true;
}
```

（2）编写食品溯源移除角色接口，必须是已增加的角色才能被移除，实现移除角色的功能； 

```solidity
function remove(①, address account) ② {
        require(③, "Roles: account does not have role");
        role.④ = false;
    }
```

（3）编写食品溯源角色授权接口，必须是授权的角色地址，实现角色权限管理功能。

```solidity
function has(①, address account) ② returns (bool) {
        require(③, "Roles: account is the zero address");
        return role.④;
    }
```

4.合约编译、部署和调用
（1）解决代码错误和警告，正确编译并部署合约，成功获取部署的合约地址和abi；
（2）调用食品溯源智能合约的接口，完整验证业务流程。

:::

哎，做题是真的烦，想回去睡觉。感觉一天睡25个小时都还是困，比完了我要睡一星期🛌。
挨个做吧。

~~后记：虽然还没比，但是睡爽了，精力回归！~~


## 1.食品信息（FoodInfoItem）的接口编码

### 题（1）

这部分主要是初始化一些会在接下来的程序中用到的变量。

根据前面表格中数据可得应填入：

```solidity
contract FoodInfoItem {
    uint[] _timestamp;
    string _traceName;
    address _traceAddress;
    uint8 _traceQuality;
    string _name;
    string _currentTraceName;
    uint8 _quality;
    uint8 _status;

    address _owner;
}
```

### 题（2）

```solidity
function addTraceInfoByDistributor(①, uint8 quality) public returns(bool) {
        require(_status == 0 , "status must be producing");
        //②
        _timestamp.push(now);
        _traceName.push(traceName);
        _currentTraceName = traceName;
        //③
        //④
        _traceQuality.push(_quality);
        _status = 1;
        return true;
    }
```

根据函数名和题目可得，这是一个通过**分销商**`Distributor`渠道向链上添加信息的函数，此时需要的传入的内容应该包括分销商的**地址**和产品的**质量**（其他变量可以直接通过环境传入）
故：

```solidity
// 需要传入的变量还有分销商的地址，故在函数定义中的①部分中传入
function addTraceInfoByDistributor(address distributor, string memory traceName, uint8 quality) public returns(bool) {
        require(_status == 0 , "status must be producing");

        //②的位置需要一个检查，确保只有链的所有者可以上传信息，所以通过msg.sender来确认发送者
        require(msg.sender == _owner, "Only the owner can add trace info");

        _timestamp.push(now);
        _traceName.push(traceName);
        _currentTraceName = traceName;

        //③处需要传入产品的分销商的信息
        _traceDistributor.push(distributor);

        //④处需要传入产品的质量信息
        _quality = quality;

        _traceQuality.push(_quality);
        _status = 1;
        return true;
    }
```

### 题（3）