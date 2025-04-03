---
title: "关于"
h1: "关于我"
desc: "Hi there, I’m Ke Miao 👋"
layout: "@/layouts/PageLayout/PageLayout.astro"
type: "about"
---

<style>
.timeline {
  position: relative;
  padding: 20px 0;
}
.timeline-item {
  position: relative;
  padding-left: 30px;
  margin-bottom: 30px;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 0;
  width: 2px;
  height: 100%;
  background: #eee;
}
.timeline-marker {
  position: absolute;
  left: 0;
  top: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #4a90e2;
  border: 2px solid #fff;
}
.payment-container {
  display: flex;
  flex-direction: column; /* 改为垂直排列 */
  gap: 20px;
  margin: 20px 0;
  align-items: center; /* 居中排列 */
}
.payment-box {
  width: 50%; /* 控制容器宽度为父级一半 */
  text-align: center;
}
.payment-box img {
  max-width: 150px; /* 图片宽度改为原来一半 */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.tag-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.tag {
  background: #f0f2f5;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.9em;
}
.contact-list a {
  color: #4a90e2;
  text-decoration: none;
}
.contact-list a:hover {
  text-decoration: underline;
}
</style>

## 我？

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <strong>2023年年初</strong><br>
    接触小绿书，从此一发不可收拾
  </div>
  
  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <strong>2023年末</strong><br>
    接触TG，认识资源分享博主：
    <a href="https://t.me/txwl666">资源分享</a>、<a href="https://t.me/haoruanfenxiang">好软分享</a>
  </div>

  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <strong>2024年末</strong><br>
    接触博客，首个博客：
    <a href="https://github.com/ccbikai/BroadcastChannel">TG博客</a> →
    <a href="https://hexo.io/zh-cn/">Hexo</a> →
    <a href="https://butterfly.js.org/">Butterfly主题</a> →
    <a href="https://vercel.com/">Vercel</a>托管
  </div>

  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <strong>2025年四月</strong><br>
    接触vhastro主题，搭建当前博客<br>
    单机游戏爱好者：<em>饥荒，启动！杰出SM！</em>
  </div>
</div>

## Tags

<div class="tag-list">
  <span class="tag">大学牲</span>
  <span class="tag">伪二次元</span> 
  <span class="tag">游戏党</span>
  <span class="tag">瞎折腾</span>
  <span class="tag">搞事情</span>
  <span class="tag">日常生产bug</span>
</div>

## 找我？

<div class="contact-list">
  <p>📱 QQ: 3149261770<br>
  📧 邮箱优先级：<br>
  &nbsp;&nbsp;• <kbd>kemiao@kmblog.icu</kbd> > <kbd>kemiaofx@163.com</kbd><br>
  ✈️ Telegram：<br>
  &nbsp;&nbsp;• <a href="https://t.me/kemiaofx_me">频道</a> | 
  <a href="https://t.me/kemiao_me">群组</a> | 
  <a href="https://t.me/Kemiaojun">克喵爱吃卤面</a><br>
  &nbsp;&nbsp;• 建议使用<a href="https://t.me/KemeowBot">机器人</a>联系</p>
</div>

## 投食
<div class="payment-container">
  <div class="payment-box">
    <img src="https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/202502232137037.jpg" alt="微信支付">
    <p>微信</p>
  </div>
  <div class="payment-box">
    <img src="https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/202502232137332.jpg" alt="支付宝">
    <p>支付宝</p>
  </div>
</div>

## 版权？

分享的资源大部分为开源，使用Android、网站、项目等，如果作者不允许传播，可以联系我删除。

所有文章如无特别声明均可视为采用 [知识共享署名-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-sa/4.0/) 进行许可，这意味着你无需询问我是否可以转载。

但是作为附加条件，你必须要在转载前在我这里留言告诉我你转载到了何处，并且附上转载的地址链接，同时禁止转载到非法以及黄色网站。

于此同时，你也必须在我要求你删除转载的文章时删除你转载的文章，并且在取得我的同意前不得再次转载至此网站。

所有尚未标注采用 [知识共享署名-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-sa/4.0/) 进行许可字样的内容被默认视为禁止一切行为的转载，但是允许在取得我的同意之后进行引用（需要说明引用至何处作何作用）。

如果有特殊声明的页面或文章，请按照此文章的特殊声明来判断是否允许转载，如果无法确定你也可以来询问我是否可以转载。

关于代码方面，请按照相应的仓库许可证来判断是否可以转载和引用。

如果没有添加许可证或者有疑问的，请留言询问我是否可以转载和引用。

但不论是何种行为的引用或者转载，在尚未取得我的同意之前都禁止用于一切的商业行为上的用途。

## 小站点

|     主&emsp;页      |       <https://www.4ce.cn>        |
| :-----------------: | :-------------------------------: |
|   **博&emsp;客**    |    **<https://www.vvhan.com>**    |
|  **Web&emsp;API**   |    **<https://api.vvhan.com>**    |
|  **Han Analytics**  | **<https://analytics.vvhan.com>** |
| **Cloudflare 优选** |    **<https://cf.vvhan.com>**     |

## 联系我

```js
const Han = class {
	constructor() {
		const Hello = [123, 34, 110, 97, 109, 101, 34, 58, 34, 72, 97, 110, 34, 44, 34, 101, 109, 97, 105, 108, 34, 58, 34, 49, 54];
		const EveryOne = [53, 53, 52, 54, 54, 51, 56, 55, 64, 113, 113, 46, 99, 111, 109, 34, 44, 34, 81, 81, 34, 58, 49, 54, 53, 53];
		const WelcomeTo = [52, 54, 54, 51, 56, 55, 44, 34, 119, 101, 99, 104, 97, 116, 34, 58, 49, 54, 53, 53, 52, 54, 54, 51, 56, 55];
		const MineBlog = [44, 34, 98, 105, 114, 116, 104, 34, 58, 49, 57, 57, 56, 44, 34, 115, 101, 120, 34, 58, 34, 30007, 34, 125];
		const AboutMe = JSON.parse(String.fromCharCode.apply(null, [...Hello, ...EveryOne, ...WelcomeTo, ...MineBlog]));
		AboutMe.age = new Date().getFullYear() - AboutMe.birth;
		console.log(AboutMe);
	}
};
new Han();
```

<style>.enfj-dom{margin:1rem 0;position:relative;box-sizing:border-box;padding:1rem 2rem;display:flex;justify-content:space-between;width:100%;height:16rem;background:#fff;border:1px solid #e3e8f7;border-radius:12px;box-shadow:0 8px 16px -4px #2c2d300c;overflow:hidden;background:url("/assets/images/enfj.webp") no-repeat;background-size:8.8rem auto;background-position:right 2rem;transition:all .36s}.enfj-dom:hover{background-position:right 1.6rem}.enfj-dom>.text{display:flex;flex-direction:column;width:100%}.enfj-dom>.text>em,.enfj-dom>.text>span{padding:0;margin:0;font-size:2rem;cursor:default;line-height:2.6rem;font-style:normal}.enfj-dom>.text>span{font-weight:bold;color:#33a474}.enfj-dom>.text>a.more-enfj{margin-top:auto;color:#999 !important;font-size:.88rem !important;text-decoration:none !important}</style>
