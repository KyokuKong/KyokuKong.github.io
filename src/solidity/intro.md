---
title: Solidity？
cover: /assets/images/cover3.jpg
icon: fa-solid fa-dumbbell
date: 2024-03-02
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