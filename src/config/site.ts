export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; children: NavLink[] };

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  /** Hero 区顶部小徽章文字（如 "WIKI GUIDE"），空串则不显示 */
  eyebrow?: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;

  // 官方链接
  platformUrl?: string;
  discordUrl?: string;
  youtubeChannelUrl?: string;

  // 顶部导航（Header 用的平铺链接；不填则取 nav 第一组前 4 项）
  topNav?: NavLink[];

  // 侧边栏目录树（按实际内容增减，不做死链接）
  nav: NavGroup[];

  // 首页 YouTube 视频（Workflow 建站时填入：官方频道代表作 > 播放量最高热门视频）
  heroVideo?: {
    youtubeId: string;
    title?: string;
    description?: string;
  };

  // 首页「Trending Now」：精选文章（不填则整块隐藏）
  trending?: { label: string; href: string; description?: string }[];

  // 首页「What is <Game>?」介绍区（不填则整块隐藏）
  gameIntro?: {
    title?: string;
    paragraphs: string[];
    facts?: { label: string; value: string }[];
  };

  // 底部 CTA 大横幅（光晕容器，不填则整块隐藏）
  ctaBanner?: {
    title: string;
    description?: string;
    buttonLabel: string;
    buttonHref: string;
  };

  // 广告位（骨架预制）：填入广告代码（HTML/JS）即生效；留空则完全不渲染不保留位置
  ads?: {
    /** 侧边栏底部广告位（菜单栏下方） */
    sidebar?: string;
    /** 页面底部 banner 广告位（页脚上方，每页都有） */
    footerBanner?: string;
  };

  // 可选：FAQ
  faq?: { question: string; answer: string }[];

  // SEO 关键词（整站级）
  keywords?: string[];
};

export const siteConfig: SiteConfig = {
  name: "No More Room in Hell 2 Wiki",
  shortName: "NMRIH2 Wiki",
  description:
    "No More Room in Hell 2 wiki: weapons tier list, best loadouts, co-op guides, roadmap and platform info for Torn Banner's 8-player zombie survival shooter.",
  heroTitle: "No More Room in Hell 2 Wiki",
  heroSubtitle: "Weapons, Loadouts, Crossplay & Roadmap",
  eyebrow: "Wiki Guide",
  primaryCtaLabel: "Read the Weapons Tier List",
  primaryCtaHref: "/guide/no-more-room-in-hell-2-weapons-tier-list",

  platformUrl: "https://store.steampowered.com/app/292000/",
  discordUrl: "",
  youtubeChannelUrl: "https://www.youtube.com/channel/UCygSSHjXjhLdPeDf1SDXqHw",

  topNav: [
    { label: "Weapons", href: "/guide/no-more-room-in-hell-2-weapons-tier-list" },
    { label: "Gameplay", href: "/guide/no-more-room-in-hell-2-gameplay" },
    { label: "Crossplay", href: "/crossplay/no-more-room-in-hell-2-crossplay" },
    { label: "Roadmap", href: "/release/no-more-room-in-hell-2-roadmap" },
  ],

  // ⚠️ 导航按实际内容增减，不做死链接
  nav: [
    {
      title: "Guide",
      children: [
        { label: "Gameplay Overview", href: "/guide/no-more-room-in-hell-2-gameplay" },
        { label: "Weapons Tier List", href: "/guide/no-more-room-in-hell-2-weapons-tier-list" },
        { label: "Best Loadout", href: "/guide/no-more-room-in-hell-2-best-loadout" },
        { label: "Best Skills", href: "/guide/no-more-room-in-hell-2-best-skills" },
        { label: "Maps", href: "/guide/no-more-room-in-hell-2-maps" },
        { label: "Cheats Context", href: "/guide/no-more-room-in-hell-2-cheats" },
        { label: "Mods", href: "/guide/no-more-room-in-hell-2-mods" },
      ],
    },
    {
      title: "Co-op & Crossplay",
      children: [
        { label: "Crossplay Status", href: "/crossplay/no-more-room-in-hell-2-crossplay" },
        { label: "Cross-Platform", href: "/crossplay/no-more-room-in-hell-2-cross-platform" },
        { label: "Player Count", href: "/crossplay/no-more-room-in-hell-2-player-count" },
        { label: "Solo Mode", href: "/crossplay/no-more-room-in-hell-2-solo" },
      ],
    },
    {
      title: "Release",
      children: [
        { label: "Release Date", href: "/release/no-more-room-in-hell-2-release-date" },
        { label: "Roadmap", href: "/release/no-more-room-in-hell-2-roadmap" },
        { label: "PS5 Version", href: "/release/no-more-room-in-hell-2-ps5" },
        { label: "Xbox Version", href: "/release/no-more-room-in-hell-2-xbox" },
        { label: "Steam Version", href: "/release/no-more-room-in-hell-2-steam" },
      ],
    },
    {
      title: "Reviews",
      children: [
        { label: "Review Roundup", href: "/review/no-more-room-in-hell-2-review" },
        { label: "Metacritic", href: "/review/no-more-room-in-hell-2-metacritic" },
        { label: "Price", href: "/review/no-more-room-in-hell-2-price" },
        { label: "Steam Key", href: "/review/no-more-room-in-hell-2-steam-key" },
      ],
    },
    {
      title: "Stats",
      children: [
        { label: "SteamDB Tracker", href: "/community/no-more-room-in-hell-2-steamdb" },
      ],
    },
  ],

  // 官方游戏频道播放量最高的 NMRiH2 专属视频（Teaser, 35万播放）
  heroVideo: {
    youtubeId: "VvLJQZ2vOUU",
    title: "No More Room in Hell 2 — Teaser",
    description:
      "The official teaser from the No More Room in Hell channel. 8-player co-op survival horror from Torn Banner Studios.",
  },

  trending: [
    {
      label: "Every Gun Ranked",
      href: "/guide/no-more-room-in-hell-2-weapons-tier-list",
      description: "M7A1, X12 Super, M14 and more — stats and verdicts.",
    },
    {
      label: "Crossplay Status",
      href: "/crossplay/no-more-room-in-hell-2-crossplay",
      description: "PC, PS5 and Xbox — how the platforms connect.",
    },
    {
      label: "Post-Launch Roadmap",
      href: "/release/no-more-room-in-hell-2-roadmap",
      description: "Hell Mode, Responder Retirement and the 2026 updates.",
    },
    {
      label: "Player Count",
      href: "/crossplay/no-more-room-in-hell-2-player-count",
      description: "16,330 all-time peak and where to check live numbers.",
    },
  ],

  gameIntro: {
    title: "What is No More Room in Hell 2?",
    paragraphs: [
      "No More Room in Hell 2 is an 8-player co-op zombie survival shooter from Torn Banner Studios. Its 1.0 \"Armageddon\" release landed in August 2026 after a long Early Access, bringing PS5 and Xbox into the same ecosystem as PC.",
      "You and your team of Responders drop into massive dark maps, scavenge for weapons and supplies, and fight through escalating hordes toward extraction — with permadeath, an infection system, and characters whose skills make every loss hurt.",
      "This wiki aggregates real, sourced material: full guides and reviews from established creators, official store listings and developer blogs — every answer traces back to something real.",
    ],
    facts: [
      { label: "Developer", value: "Torn Banner Studios" },
      { label: "Release (1.0)", value: "August 2026" },
      { label: "Platforms", value: "Steam, PS5, Xbox" },
      { label: "Genre", value: "8-Player Co-op Survival Horror" },
      { label: "Steam App ID", value: "292000" },
      { label: "Players", value: "1,000,000+ since Early Access" },
    ],
  },

  ctaBanner: {
    title: "Pick the right gun for the job",
    description:
      "All the top firearms ranked — M7A1, X12 Super, M14 and more — with the stats and verdicts behind each pick.",
    buttonLabel: "Read the Weapons Tier List",
    buttonHref: "/guide/no-more-room-in-hell-2-weapons-tier-list",
  },

  ads: {
    sidebar: `<script async="async" data-cfasync="false" src="https://pl31113120.profitableratecpmnetwork.com/20aee027b976905f9912a08597596498/invoke.js"></script>
<div id="container-20aee027b976905f9912a08597596498"></div>`,
    footerBanner: `<script>
 atOptions = {
 'key' : '30b5eba343f05fb5abb995602379aad1',
 'format' : 'iframe',
 'height' : 90,
 'width' : 728,
 'params' : {}
 };
</script>
<script src="https://www.highrevenueformat.com/30b5eba343f05fb5abb995602379aad1/invoke.js"></script>`,
  },

  faq: [
    {
      question: "Is No More Room in Hell 2 crossplay?",
      answer:
        "The game spans PC (Steam), PS5 and Xbox, and crossplay is part of the design — community threads documented launch-period issues, and the September update targets a more consistent experience across platforms. See our crossplay page for the details.",
    },
    {
      question: "How many players can play together?",
      answer:
        "Up to 8 players in co-op lobbies, across maps like Lewiston, Pottsville and Raven Rock. There's also a Survival horde-defense mode and a Solo Training Mode.",
    },
    {
      question: "Does it have permadeath?",
      answer:
        "Yes — losing a character can wipe their level, skills, gear and currency, especially on higher difficulties. The 1.0 update added rescue beacons as a safety net, and Solo Training Mode plays without those stakes.",
    },
    {
      question: "Can you play solo?",
      answer:
        "Yes, with caveats: the 1.0 Solo Training Mode runs full maps solo but without progression or permadeath. High-level solo runs on Nightmare are possible (and documented), but the game is designed around co-op. Solo Mode expansion is on the developer's investigation list.",
    },
    {
      question: "How much does it cost?",
      answer:
        "It launched at $19.49 USD with a 35% launch discount at our August 2026 scan, across Steam, PS5 and Xbox. Prices change — check the official store pages for current pricing.",
    },
  ],

  keywords: [
    "no more room in hell 2",
    "nmrih 2",
    "no more room in hell 2 wiki",
    "no more room in hell 2 weapons",
    "no more room in hell 2 crossplay",
    "no more room in hell 2 gameplay",
  ],
};
