export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; children: NavLink[] };

/** 首页轮播页（固定 3 篇；少于 3 篇时轮播按实际条数渲染） */
export type CarouselSlide = {
  /** 轮播配图（放 public/images/，宽高比按 790:292 裁切） */
  image: string;
  title: string;
  href: string;
};

/** 右侧游戏信息卡的字段行（原站字段：制作公司/发行公司/发售日期/游戏平台/游戏类型） */
export type GameInfoField = { label: string; value: string };

/** 左视频列的 YouTube 条目（官方频道代表作优先；2–4 个） */
export type VideoItem = { youtubeId: string; title: string };

/**
 * 主题色 token 名（供组件以 var() 引用）。
 * ⚠️ 色值唯一来源 = src/app/globals.css 的 @theme 块，本文件不重复定义色值。
 * 每站正式配色由 g-art-design 从游戏官方素材提取后覆盖 globals.css 的三个主槽位。
 */
export const themeTokens = {
  primary: "--color-primary",
  accent: "--color-accent",
  auxiliary: "--color-auxiliary",
} as const;

export type SiteConfig = {
  /** 游戏名（全站唯一来源） */
  name: string;
  shortName: string;

  /** SEO 三件套 */
  seo: {
    title: string;
    description: string;
    keywords: string;
  };

  /** Hero 大图区（无顶栏，Hero 直顶） */
  hero: {
    /** keyart 大图路径；同时用作内容页右栏 banner */
    image: string;
    eyebrow?: string;
    title: string;
    subtitle?: string;
  };

  /** 首页横向轮播：3 篇，5s 自动换页 */
  carousel: {
    autoPlayMs: number;
    slides: CarouselSlide[];
  };

  /** 右侧游戏信息卡 */
  gameInfo: {
    title: string;
    /** 封面图路径（125×166 比例） */
    cover: string;
    fields: GameInfoField[];
    /** Steam 入口按钮（文案统一 View on Steam ↗） */
    ctaLabel: string;
    ctaHref: string;
  };

  /** 左视频列 YouTube id 列表（2–4 个，数量由右攻略区高度反推） */
  videos: VideoItem[];

  /** 官方链接（页脚展示；建议至少 1 条，其余留空则不渲染） */
  officialLinks: NavLink[];

  /** 全站攻略导航分组（首页攻略区 / 内容页右栏导航树共用；每站按真实内容增减） */
  nav: NavGroup[];

  /** 栏目简介（栏目页 L2 顶部一段话，key=section 目录名；缺省回退到「N guides…」） */
  sectionIntros?: Record<string, string>;

  /** 栏目兑底图池：内容页缺图时按栏目取图，避免与右栏 keyart 同图同屏（扬哥 2026-09-16） */
  sectionFallbackImages?: Record<string, string>;

  /** 页脚 */
  footer: {
    copyright: string;
    contactLabel: string;
    /** 联系方式（邮箱/表单链接文本）；不填则页脚不显示联系位 */
    contact?: string;
  };

  /** 广告位（骨架预制）：填入广告代码（HTML/JS）即生效；留空则完全不渲染不占位 */
  ads?: {
    /** 首页攻略区顶部 banner（内容区宽度） */
    contentBanner?: string;
    /** 页面底部 banner 广告位（页脚上方，每页都有） */
    footerBanner?: string;
    /** 正文中横幅广告位（728×90）：位置在第一屏之后，长文自动多插一个位（同一份代码可多处复用） */
    articleInline?: string;
    /** 正文第二坑位代码（扬哥 2026-09-16：长文双广告位时用不同代码/创意，避免同屏重复）；缺省回退 articleInline */
    articleInline2?: string;
    /** 左右浮动竖幅 160×600 旧写法：只填此字段=左右共用同一单元（同屏创意相同） */
    sideRail?: string;
    /** 左侧竖幅广告单元（独立 key=独立竞价/创意/统计；优先于 sideRail） */
    sideRailLeft?: string;
    /** 右侧竖幅广告单元（独立 key=独立竞价/创意/统计；优先于 sideRail） */
    sideRailRight?: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "No More Room in Hell 2",
  shortName: "NMRH2",

  seo: {
    title: "No More Room in Hell 2 Wiki — Guides, Fixes & News",
    description:
      "Fan-made No More Room in Hell 2 wiki: release date, price, system requirements, co-op setup, crash fixes and the road from early access to 1.0.",
    keywords:
      "no more room in hell 2, nmrh2 wiki, no more room in hell 2 guide, no more room in hell 2 release date, no more room in hell 2 fixes",
  },

  hero: {
    image: "/images/hero-keyart.webp",
    eyebrow: "Wiki & Guide",
    title: "No More Room in Hell 2",
    subtitle: "8-Player Zombie Survival Co-op · Guides, Fixes & Game Info",
  },

  carousel: {
    autoPlayMs: 5000,
    slides: [
      {
        image: "/images/slide-release-date.webp",
        title: "Release Date: From Early Access to 1.0",
        href: "/guide/no-more-room-in-hell-2-release-date",
      },
      {
        image: "/images/slide-coop-guide.webp",
        title: "How to Play Co-op With Friends",
        href: "/guide/no-more-room-in-hell-2-coop-guide",
      },
      {
        image: "/images/slide-roadmap.webp",
        title: "The Roadmap: Every Update Explained",
        href: "/news/no-more-room-in-hell-2-roadmap",
      },
    ],
  },

  gameInfo: {
    title: "No More Room in Hell 2",
    cover: "/images/game-cover.webp",
    fields: [
      { label: "Developer", value: "Torn Banner Studios" },
      { label: "Publisher", value: "Torn Banner Studios" },
      { label: "Release Date", value: "August 11, 2026 (1.0)" },
      { label: "Platforms", value: "PC, PS5, Xbox Series X|S" },
      { label: "Genre", value: "Co-op Survival Horror FPS" },
    ],
    ctaLabel: "View on Steam ↗",
    ctaHref: "https://store.steampowered.com/app/292000/",
  },

  videos: [
    { youtubeId: "NVdmkQXurtA", title: "1.0 Launch Trailer" },
    { youtubeId: "VvCy0XATln0", title: "Armageddon (1.0) Update Overview" },
    { youtubeId: "VvLJQZ2vOUU", title: "Official Teaser" },
  ],

  officialLinks: [
    { label: "Official Site", href: "https://www.nomoreroominhell2.com" },
    { label: "Steam", href: "https://store.steampowered.com/app/292000/" },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCygSSHjXjhLdPeDf1SDXqHw",
    },
  ],

  nav: [
    {
      title: "Game Info",
      children: [
        { label: "Release Date & Timeline", href: "/guide/no-more-room-in-hell-2-release-date" },
        { label: "Price & Editions", href: "/guide/no-more-room-in-hell-2-price" },
        { label: "Is It Free?", href: "/guide/is-no-more-room-in-hell-2-free" },
        { label: "Game Engine", href: "/guide/no-more-room-in-hell-2-engine" },
        { label: "System Requirements", href: "/guide/no-more-room-in-hell-2-system-requirements" },
      ],
    },
    {
      title: "Guides & Fixes",
      children: [
        { label: "Skip the Intro", href: "/guide/no-more-room-in-hell-2-skip-intro" },
        { label: "Crash Fixes", href: "/guide/no-more-room-in-hell-2-crash-fix" },
        { label: "Loading Screen Fixes", href: "/guide/no-more-room-in-hell-2-stuck-on-loading" },
        { label: "Microphone Fix", href: "/guide/no-more-room-in-hell-2-mic-not-working" },
      ],
    },
    {
      title: "Multiplayer",
      children: [
        { label: "Co-op Guide", href: "/guide/no-more-room-in-hell-2-coop-guide" },
        { label: "High Ping Fixes", href: "/guide/no-more-room-in-hell-2-high-ping" },
        { label: "Server Assignment Failed", href: "/guide/no-more-room-in-hell-2-server-assignment-failed" },
      ],
    },
    {
      title: "News",
      children: [
        { label: "Early Access Launch", href: "/news/no-more-room-in-hell-2-early-access-launch" },
        { label: "Launch Reception", href: "/news/no-more-room-in-hell-2-launch-reception" },
        { label: "Developer Response", href: "/news/no-more-room-in-hell-2-dev-response" },
        { label: "Torn Banner Layoffs", href: "/news/torn-banner-studios-layoffs" },
        { label: "Update Roadmap", href: "/news/no-more-room-in-hell-2-roadmap" },
        { label: "1.0 Delay", href: "/news/no-more-room-in-hell-2-1-0-delay" },
      ],
    },
  ],

  sectionIntros: {
    guide:
      "Practical No More Room in Hell 2 guides: release info, pricing, system requirements, co-op setup and fixes for the most common PC problems.",
    news:
      "The story of No More Room in Hell 2's road from a rocky early access launch to the 1.0 release — reception, layoffs, roadmaps and delays.",
  },

  sectionFallbackImages: {
    guide: "/images/fallback-guide.webp",
    news: "/images/fallback-news.webp",
  },

  footer: {
    copyright:
      "Fan-made wiki. Not affiliated with Torn Banner Studios.",
    contactLabel: "Contact",
  },

  ads: {
    sideRailLeft: "<script>\n  atOptions = {\n    'key' : 'b6308a5b96f2f9ab090020218f878622',\n    'format' : 'iframe',\n    'height' : 300,\n    'width' : 160,\n    'params' : {}\n  };\n</script>\n<script src=\"https://www.highrevenueformat.com/b6308a5b96f2f9ab090020218f878622/invoke.js\"></script>",
    sideRailRight: "<script>\n  atOptions = {\n    'key' : '809c2a5afda33214213c108393b8e700',\n    'format' : 'iframe',\n    'height' : 600,\n    'width' : 160,\n    'params' : {}\n  };\n</script>\n<script src=\"https://www.highrevenueformat.com/809c2a5afda33214213c108393b8e700/invoke.js\"></script>",
    footerBanner: "<script>\n  atOptions = {\n    'key' : '30b5eba343f05fb5abb995602379aad1',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://www.highrevenueformat.com/30b5eba343f05fb5abb995602379aad1/invoke.js\"></script>",
    articleInline: "<script async=\"async\" data-cfasync=\"false\" src=\"https://pl31113120.profitableratecpmnetwork.com/20aee027b976905f9912a08597596498/invoke.js\"></script>\n<div id=\"container-20aee027b976905f9912a08597596498\"></div>",
  },
};
