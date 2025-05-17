export default {
  // 网站标题
  Title: '喵落阁',
  // 网站地址
  Site: 'https://zhan.kemiao.online',
  // 网站副标题
  Subtitle: '克喵的博客',
  // 网站描述
  Description: '愿你看清一切真相后，依旧热爱你的家人和朋友。',
  // 网站作者
  Author: '克喵爱吃卤面',
  // 作者头像
  Avatar: 'https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/kemiaotouxiang.jpg',
  // 网站座右铭
  Motto: '奇迹只能一时，命运总是漫长。',
  // Cover 网站缩略图
  Cover: 'https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/back2.jpg',
  // 网站侧边栏公告 (不填写即不开启)
  Tips: '<p>欢迎光临我的博客 🎉</p><p>这里会分享我的资源分享、生活记录和踩坑教程:) 💖</p>',
  // 首页打字机文案列表
  TypeWriteList: [
    '每一段旅行都有终点~',
    "Every journey has an end ~",
  ],
  // 网站创建时间
  CreateTime: '2025-04-02',
  // 顶部 Banner 配置
  HomeBanner: {
    enable: true,
    // 首页高度
    HomeHeight: '38.88rem',
    // 其他页面高度
    PageHeight: '28.88rem',
    // 背景
    background: "url('/assets/images/home-banner.webp') no-repeat center 60%/cover",
  },
  // 博客主题配置
  Theme: {
    // 颜色请用 16 进制颜色码
    // 主题颜色
    "--vh-main-color": "#01C4B6",
    // 字体颜色
    "--vh-font-color": "#34495e",
    // 侧边栏宽度
    "--vh-aside-width": "318px",
    // 全局圆角
    "--vh-main-radius": "0.88rem",
    // 主体内容宽度
    "--vh-main-max-width": "1458px",
  },
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: '朋友', link: '/links', icon: 'Nav_friends' },
    { text: '圈子', link: '/friends', icon: 'Nav_rss' },
    { text: '动态', link: '/talking', icon: 'Nav_talking' },
    { text: '昔日', link: '/archives', icon: 'Nav_archives' },
    { text: '留言', link: '/message', icon: 'Nav_message' },
    { text: '关于', link: '/about', icon: 'Nav_about' },
    // { text: 'API', link: 'https://api.vvhan.com/', target: true, icon: 'Nav_link' },
  ],
  // 侧边栏个人网站
  WebSites: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: 'Github', link: 'https://github.com/Kemeow815', icon: 'WebSite_github' },
    { text: 'Telegram', link: 'https://t.me/KemiaoJun', icon: 'icon-telegram' },   { text: '网易云歌单', link: 'https://music.163.com/#/playlist?id=13681647281', icon: 'brand-beats' },
    { text: "Email", link: 'mailto:me@kemiaosw.top', icon: 'WebSite_email' },
    { text: "Twitter", link: 'https://twitter.com/kemiaosw', icon: "brand-x" },
    { text: "QQ", link: 'https://qm.qq.com/q/m8FW8Y6TkY', icon: 'QQ' },
    { text: "Bilibili", link: 'https://space.bilibili.com/3546643173477234', icon: 'Bilibili' }
  ],
  // 侧边栏展示
  AsideShow: {
    // 是否展示个人网站
    WebSitesShow: true,
    // 是否展示分类
    CategoriesShow: true,
    // 是否展示标签
    TagsShow: true,
    // 是否展示推荐文章
    recommendArticleShow: true
  },
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://cn.cravatar.com',
    'https://analytics.vvhan.com',
    'https://vh-api.4ce.cn',
    'https://registry.npmmirror.com',
    'https://pagead2.googlesyndication.com',
    'https://cdn.jsdelivr.net',
    'https://cdn.staticfile.org',
    'https://cdn.bootcdn.net'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://vh-api.4ce.cn/blog/meting',
  // 评论组件（只允许同时开启一个）
  Comment: {
    // Twikoo 评论
    Twikoo: {
      enable: false,
      envId: ''
    },
    // Waline 评论
    Waline: {
      enable: true,
      serverURL: 'https://waline-vhastro.314926.xyz/'
    }
  },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: { enable: true, server: 'https://han.kemiaosw.top', siteId: 'miaoluoge' },
  // Google 广告
  GoogleAds: {
    ad_Client: '', //ca-pub-xxxxxx
    // 侧边栏广告(不填不开启)
    // asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    // articleAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`
  },
  // 文章内赞赏码
  Reward: {
    // 支付宝收款码
    AliPay: 'https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/202502232137332.jpg',
    // 微信收款码
    WeChat: 'https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/202505050804813.jpg'
  },
  // 访问网页 自动推送到搜索引擎
  SeoPush: {
    enable: false,
    serverApi: '',
    paramsName: 'url'
  },
  // 页面阻尼滚动速度
  ScrollSpeed: 666
}