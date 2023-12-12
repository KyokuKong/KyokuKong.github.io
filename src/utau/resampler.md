---
title: 引擎设置
cover: /assets/images/cover3.jpg
icon: fa-solid fa-car-battery
date: 2023-12-12
order: 4
---

::: info 什么是引擎？

一般我们将Utau中的重采样器称为**引擎**（**engine**），因为重采样器实际上承载了音频的拉伸变形处理等等主要功能，而Utau中的Wavtool则负责将重采样器处理过的音频进行合并。

如Moresampler这样的引擎同时包含了wavtool的功能，请在使用时将wavtool也指定为Moresampler。

:::

## 如何安装引擎？

OpenUtau会在第一次启动之后自动在安装文件夹中生成Resamplers和Wavtools文件夹。

![ ](https://img.kyoku.top/20231212090107.png)

你只需要将从其他地方下载来的重采样器和合成器分别放进对应的文件夹即可，例如对于Utau的新默认引擎Doppeltler，你需要将[Doppelter64.exe](http://utau2008.xrea.jp/2020/engine/doppeltler009.zip)放入Resamplers文件夹中，将[Wavtool64.exe](http://utau2008.xrea.jp/2020/engine/wavtool64.zip)放入Wavtools文件夹中。

在将重采样器和合成器放入对应位置后，你就可以在OpenUtau中找到它们了！

在你需要切换引擎的轨道旁边找到引擎设置选项，选中CLASSIC引擎。

![ ](https://img.kyoku.top/20231212092107.png)

然后点击旁边的小齿轮，设置重采样器和Wavtool。

![ ](https://img.kyoku.top/20231212095058.png)

锵锵，你已经设置好新的引擎了！

## 一些自用引擎

::: tip

这个部分会用来展示同一声库用不同引擎去渲染同一段工程会有什么不同。

默认使用的声库为Utau中华组的[氷 クカミ Tender](https://www.bilibili.com/video/BV12W411L7gA)。

~~支持冰狼谢谢喵，冰狼宝贝可爱的喵~~

示例工程为[部屋に照らされた光](https://www.bilibili.com/video/BV1t8411j7we)，原作にほしか，UST来自星乃スイ。

Pit如下：

![在OpenUtau中进行了粗略的响度控制](https://img.kyoku.top/20231212175422.png)

:::

::: info

Utau本身长期作为音声合成技术更新迭代的承载平台，不同引擎之间的原理相差天差地别。

基于其大致的合成方法，我们可以将引擎简略的分为 **拼接式** 和 **建模式** 两个大类。

拼接式即以fresamp为代表的一大类引擎，这类引擎运行时直接对原采样按照生成好的周波表进行处理变调和拉伸等处理。（也称非参量引擎）

建模式（或称参量引擎）则是以Moresampler为代表，建模式引擎会在运行时对采样进行分析并对其进行建模，完成建模后直接从其生成的模型渲染音频，这样可以实现更多变的声音处理。

而基于不同的合成过程，我们还可以将引擎分为 **延长式** 和 **循环式**。

这一区别主要在于随着音符时长增大超过了声库oto中设置的元音长度之后引擎如何继续处理。

对于延长式引擎，会对oto的元音部分进行分析后对其中的重复部分复制并不断拼接在一起实现延长，一般来讲，延长可以实现更自然的效果，对声库录制的要求更小，但是音质可能偏差。

循环式引擎会将oto的元音部分进行循环拼贴，对音质的影响很小，但是对声库录制时元音部分的稳定度要求极高，可能会产生一些很莫名其妙的问题。
:::

### Fresamp14

![ ](https://img.kyoku.top/fresamp14.webp){width=80%}

<audio controls="controls">
    <source src="https://img.kyoku.top/Fresamp14Preview_Track3.ogg" type="audio/ogg">
</audio>

你可以理解为这个才是Utau一直以来事实上的官方引擎。

由Utau的开发者饴屋p开发的引擎，从Utau发布开始一直迭代到2013年，但是并不随Utau安装一并附带。

~~（附带的是效果超差的Resampler.exe）~~

比较老牌的引擎，中高频表现尚可，声噪偏大。

[Fresamp14-饴屋p官网配布](http://utau2008.xrea.jp/downloads/fresamp014.zip)

需要配合wavtool使用，建议使用饴屋的Wavtool系列。

[Wavtool64-饴屋p官网配布](http://utau2008.xrea.jp/2020/engine/wavtool64.zip)

### Doppelter

![ ](https://img.kyoku.top/doppelter.webp){width=80%}

<audio controls="controls">
    <source src="https://img.kyoku.top/DoppelterPreview_Track3_Track3.ogg" type="audio/ogg">
</audio>

同样由饴屋p开发，作为Utau的新默认引擎来开发。

（结果Utau编辑器本身的迭代停在了2013年，20年才发布的Doppelter至今没有等到它开箱附赠的那天，不愧是你啊Ameya。）

作为纯拼接式引擎，表现非常优秀，可以说是超级万金油，听感比较自然。

[Doppelter009-饴屋p官网配布](http://utau2008.xrea.jp/2020/engine/doppeltler009.zip)

### Moresampler

![ ](https://img.kyoku.top/moresampler.webp){width=80%}

<audio controls="controls">
    <source src="https://img.kyoku.top/MoresamplerPreview_Track3_Track3_Track3_Track3.ogg" type="audio/ogg">
</audio>

由 Kanru Hua 开发的建模式引擎。

Moresampler以及其代表性的LLSM技术可以说宣告了这一代歌声合成技术探索的华丽结尾，Mores是一个近乎六边形的合成引擎，有着根本摸不到边的上限。
