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