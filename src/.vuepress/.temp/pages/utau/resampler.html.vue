<template><div><div class="hint-container info">
<p class="hint-container-title">什么是引擎？</p>
<p>一般我们将Utau中的重采样器称为<strong>引擎</strong>（<strong>engine</strong>），因为重采样器实际上承载了音频的拉伸变形处理等等主要功能，而Utau中的Wavtool则负责将重采样器处理过的音频进行合并。</p>
<p>如Moresampler这样的引擎同时包含了wavtool的功能，请在使用时将wavtool也指定为Moresampler。</p>
</div>
<h2 id="如何安装引擎" tabindex="-1"><a class="header-anchor" href="#如何安装引擎" aria-hidden="true">#</a> 如何安装引擎？</h2>
<p>OpenUtau会在第一次启动之后自动在安装文件夹中生成Resamplers和Wavtools文件夹。</p>
<figure><img src="https://img.kyoku.top/20231212090107.png" alt=" " tabindex="0" loading="lazy"><figcaption> </figcaption></figure>
<p>你只需要将从其他地方下载来的重采样器和合成器分别放进对应的文件夹即可，例如对于Utau的新默认引擎Doppeltler，你需要将<a href="http://utau2008.xrea.jp/2020/engine/doppeltler009.zip" target="_blank" rel="noopener noreferrer">Doppelter64.exe<ExternalLinkIcon/></a>放入Resamplers文件夹中，将<a href="http://utau2008.xrea.jp/2020/engine/wavtool64.zip" target="_blank" rel="noopener noreferrer">Wavtool64.exe<ExternalLinkIcon/></a>放入Wavtools文件夹中。</p>
<p>在将重采样器和合成器放入对应位置后，你就可以在OpenUtau中找到它们了！</p>
<p>在你需要切换引擎的轨道旁边找到引擎设置选项，选中CLASSIC引擎。</p>
<figure><img src="https://img.kyoku.top/20231212092107.png" alt=" " tabindex="0" loading="lazy"><figcaption> </figcaption></figure>
<p>然后点击旁边的小齿轮，设置重采样器和Wavtool。</p>
<figure><img src="https://img.kyoku.top/20231212095058.png" alt=" " tabindex="0" loading="lazy"><figcaption> </figcaption></figure>
<p>锵锵，你已经设置好新的引擎了！</p>
<h2 id="一些自用引擎" tabindex="-1"><a class="header-anchor" href="#一些自用引擎" aria-hidden="true">#</a> 一些自用引擎</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这个部分会用来展示同一声库用不同引擎去渲染同一段工程会有什么不同。</p>
<p>默认使用的声库为Utau中华组的<a href="https://www.bilibili.com/video/BV12W411L7gA" target="_blank" rel="noopener noreferrer">氷 クカミ Tender<ExternalLinkIcon/></a>。</p>
<p><s>支持冰狼谢谢喵，冰狼宝贝可爱的喵</s></p>
<p>示例工程为<a href="https://www.bilibili.com/video/BV1t8411j7we" target="_blank" rel="noopener noreferrer">部屋に照らされた光<ExternalLinkIcon/></a>，原作にほしか，UST来自星乃スイ。</p>
<p>Pit如下：</p>
<figure><img src="https://img.kyoku.top/20231212175422.png" alt="在OpenUtau中进行了粗略的响度控制" tabindex="0" loading="lazy"><figcaption>在OpenUtau中进行了粗略的响度控制</figcaption></figure>
</div>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>Utau本身长期作为音声合成技术更新迭代的承载平台，不同引擎之间的原理相差天差地别。</p>
<p>基于其大致的合成方法，我们可以将引擎简略的分为 <strong>拼接式</strong> 和 <strong>建模式</strong> 两个大类。</p>
<p>拼接式即以fresamp为代表的一大类引擎，这类引擎运行时直接对原采样按照生成好的周波表进行处理变调和拉伸等处理。（也称非参量引擎）</p>
<p>建模式（或称参量引擎）则是以Moresampler为代表，建模式引擎会在运行时对采样进行分析并对其进行建模，完成建模后直接从其生成的模型渲染音频，这样可以实现更多变的声音处理。</p>
<p>而基于不同的合成过程，我们还可以将引擎分为 <strong>延长式</strong> 和 <strong>循环式</strong>。</p>
<p>这一区别主要在于随着音符时长增大超过了声库oto中设置的元音长度之后引擎如何继续处理。</p>
<p>对于延长式引擎，会对oto的元音部分进行分析后对其中的重复部分复制并不断拼接在一起实现延长，一般来讲，延长可以实现更自然的效果，对声库录制的要求更小，但是音质可能偏差。</p>
<p>循环式引擎会将oto的元音部分进行循环拼贴，对音质的影响很小，但是对声库录制时元音部分的稳定度要求极高，可能会产生一些很莫名其妙的问题。</p>
</div>
<h3 id="fresamp14" tabindex="-1"><a class="header-anchor" href="#fresamp14" aria-hidden="true">#</a> Fresamp14</h3>
<figure><img src="https://img.kyoku.top/fresamp14.webp" alt=" " width="80%" tabindex="0" loading="lazy"><figcaption> </figcaption></figure>
<audio controls="controls">
    <source src="https://img.kyoku.top/Fresamp14Preview_Track3.ogg" type="audio/ogg">
</audio>
<p>你可以理解为这个才是Utau一直以来事实上的官方引擎。</p>
<p>由Utau的开发者饴屋p开发的引擎，从Utau发布开始一直迭代到2013年，但是并不随Utau安装一并附带。</p>
<p><s>（附带的是效果超差的Resampler.exe）</s></p>
<p>比较老牌的引擎，中高频表现尚可，声噪偏大。</p>
<p><a href="http://utau2008.xrea.jp/downloads/fresamp014.zip" target="_blank" rel="noopener noreferrer">Fresamp14-饴屋p官网配布<ExternalLinkIcon/></a></p>
<p>需要配合wavtool使用，建议使用饴屋的Wavtool系列。</p>
<p><a href="http://utau2008.xrea.jp/2020/engine/wavtool64.zip" target="_blank" rel="noopener noreferrer">Wavtool64-饴屋p官网配布<ExternalLinkIcon/></a></p>
<h3 id="doppelter" tabindex="-1"><a class="header-anchor" href="#doppelter" aria-hidden="true">#</a> Doppelter</h3>
<figure><img src="https://img.kyoku.top/doppelter.webp" alt=" " width="80%" tabindex="0" loading="lazy"><figcaption> </figcaption></figure>
<audio controls="controls">
    <source src="https://img.kyoku.top/DoppelterPreview_Track3_Track3.ogg" type="audio/ogg">
</audio>
<p>同样由饴屋p开发，作为Utau的新默认引擎来开发。</p>
<p>（结果Utau编辑器本身的迭代停在了2013年，20年才发布的Doppelter至今没有等到它开箱附赠的那天，不愧是你啊Ameya。）</p>
<p>作为纯拼接式引擎，表现非常优秀，可以说是超级万金油，听感比较自然。</p>
<p><a href="http://utau2008.xrea.jp/2020/engine/doppeltler009.zip" target="_blank" rel="noopener noreferrer">Doppelter009-饴屋p官网配布<ExternalLinkIcon/></a></p>
<h3 id="moresampler" tabindex="-1"><a class="header-anchor" href="#moresampler" aria-hidden="true">#</a> Moresampler</h3>
<figure><img src="https://img.kyoku.top/moresampler.webp" alt=" " width="80%" tabindex="0" loading="lazy"><figcaption> </figcaption></figure>
<audio controls="controls">
    <source src="https://img.kyoku.top/MoresamplerPreview_Track3_Track3_Track3_Track3.ogg" type="audio/ogg">
</audio>
<p>由 Kanru Hua 开发的建模式引擎。</p>
<p>Moresampler以及其代表性的LLSM技术可以说宣告了这一代歌声合成技术探索的华丽结尾，Mores是一个近乎六边形的合成引擎，有着根本摸不到边的上限。</p>
</div></template>


