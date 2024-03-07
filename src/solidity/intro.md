---
title: Solidity？
cover: /assets/images/cover3.jpg
icon: fa-solid fa-dumbbell
date: 2024-03-06
---

因为参加了学校的区块链竞赛，于是需要学习一下以太坊平台的智能合约写法，sadly，这个语言相当有一点独特，于是特开了一点文档记录一下学习的过程。

## Solidity是什么？

> Solidity 是一门面向合约的、为实现智能合约而创建的高级编程语言。智能合约是管理以太坊状态里账户行为的程序。 
> —— Solidity 中文文档

Solidity是一种写起来类似面向对象语言的针对智能合约设计的高级语言。

不过Solidity并不适用于单独开发应用，只适合开发合约。

## 基本语法和结构

Solidity的单个文件比较类似于Java等面向对象语言中的源文件，`.sol`文件中包含一个或多个合约，有这样的结构：

```solidity
//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract SimpleContract {
    // '''
    // 合约内容
    // '''
}
```

Solidity的类名命名遵守驼峰式命名，每个词的首字母和缩写的全部字母需要大写，整体代码缩进等风格比较接近Python，详见[编程风格指南](https://learnblockchain.cn/docs/solidity/style-guide.html)。

### 源文件结构

#### SPDX版权许可标识

首先从`//SPDX-License-Identifier: GPL-3.0`起始的这一部分开始，这是Solidity的SPDX版权许可标识，Solidity要求在任何一个源文件中都应该以一个这样的开源许可证注释作为起始。

如果不需要开源代码，则应将其设置为`UNLICENSED`

#### pragma版本标识

solidity用pragma关键字来告诉编译器如何编译。

可以直接指定编译器版本的范围，像这样：

```solidity
pragma solidity >=0.4.16 <0.9.0;
```

也可以用^符号来指定其大于等于某个版本但是小于下一个重大更新版本：

```solidity
pragma solidity ^0.5.2; // 这样的标识意味着编译器版本可以在0.5.2和0.6.0之间
```

### 合约结构
#### 合约

solidity中的`合约（Contract）`近似于其他语言中`类（class）`的概念。

合约以`contract`关键字起始，通过花括号包裹合约的内容来标识层级关系。

```solidity
contract BaseContract {}
```

可以通过is关键字来声明一个合约是从另一个合约继承的，并且solidity的继承特性和python非常相似，支持多重继承：

```solidity
contract ContractA is MotherContract {
    // ...
}


contract ContractB is MotherContract, FatherContract {
    // ...
}
```

::: tip

不建议多重继承，类似Python，多重继承会让代码关系变得过于复杂，所以只在必要的时候使用吧。

:::

#### 状态变量

> 状态变量是永久地存储在合约存储中的值。

类似于Python中声明变量的操作，但是Solidity本身是一种静态类型的语言，需要显式的声明变量对应的类型。

```solidity
contract TinyStorage {
    uint storedXlbData;
    // ...
}
```

作为一门针对合约设计的语言，Solidity不允许变量的值为undefined或者null、None这样的空值。在声明变量的时候事实上会先给变量赋予一个默认值，如当变量类型为`Bool`时，默认值为`false`，详情参考[作用域和声明](https://learnblockchain.cn/docs/solidity/control-structures.html#default-value)。

Solidity预置了如下的变量类型：

|类型|范围|
|--|--|
|intx|无符号整型，上限2的x次方|
|unitx|有符号整型，上限2的x次方|
|bool|布尔类型|
|address|地址类型，保存一个二十字节的地址|
|bytesx|定长字节数组，x为字节位数|

同样的，Solidity支持字面形式的常量使用（类似大多数编程语言）

#### 函数

> 函数是代码的可执行单元。函数通常在合约内部定义，但也可以在合约外定义。

一起来实现一个简单的函数：

```solidity
contract Simple {
    uint sum;   // 定义一个有符号整型变量sum
    function taker (uint a, uint b) public {
        // 定义函数taker，函数有两个有符号整型内部变量a和b，可以被外部访问
        sum = a + b;    // 将a和b的和赋值给sum
    }
}
```

在函数有返回值的时候，我们需要用`returns`关键字来显式的指定函数返回了什么。

```solidity
contract Simple {
    function arithmetic(uint a, uint b)
    public
    pure
    returns (uint sum, uint product) {
        sum = a + b;
        product = a * b;
        // 如果觉得打一遍变量名很麻烦，也可以这么写
        // return (a + b,a * b);
    }
}
```

::: info 注

如果使用 `return` 提前退出有返回值的函数， 必须在用 `return` 时提供返回值。

:::

类似于Java和C#，Solidity也可以对函数赋予类型修饰关键字。

在Solidity中，还有`view`（视图函数）和`pure`（纯函数）两种类型的函数。

对于视图函数`view`修饰的函数，要保证这个函数的状态不被修改，也就是说，视图函数只能在本地运行（不消耗gas），它可以被读取状态但是不能被修改状态。

这些操作会被视为修改了函数的状态：

- 修改状态变量。
- 产生事件。
- 创建其它合约。
- 使用 selfdestruct。
- 通过调用发送以太币。
- 调用任何没有标记为 view 或者 pure 的函数。
- 使用低级调用。
- 使用包含特定操作码的内联汇编。

而纯函数`pure`修饰的函数则是在`view`的基础上，需要保证不读取也不修改函数的状态，也就是说要在前面的列表中再加几项：

- 读取状态变量。
- 访问 address(this).balance 或者 \<address\>.balance。
- 访问 block，tx， msg 中任意成员 （除 msg.sig 和 msg.data 之外）。
- 调用任何未标记为 pure 的函数。
- 使用包含某些操作码的内联汇编。

另外的，Solidity还为一些特殊用途设计了一些特殊函数，详见[特别的函数](https://learnblockchain.cn/docs/solidity/contracts.html#special-functions)。

#### 事件 

> 事件是能方便地调用以太坊虚拟机日志功能的接口。Solidity 事件是EVM的日志功能之上的抽象。 应用程序可以通过以太坊客户端的RPC接口订阅和监听这些事件。

事件晚点再写，疑似有点太抽象了。

