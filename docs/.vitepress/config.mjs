import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "liveSubs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/en' },
      { text: 'Guide', link: '/en/guide' },
      { text: 'Features', link: '/en/features' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    en: {
      label: 'English',
      dir: 'en',

      nav: [
        { text: 'Home', link: '/en/' },
        { text: 'Guide', link: '/en/guide' },
        { text: 'Features', link: '/en/features' },
      ],
    },
    ja: {
      label: '日本語',
      dir: 'ja',

      nav: [
        { text: 'ホーム', link: '/ja/' },
        { text: 'ガイド', link: '/ja/guide' },
        { text: '機能', link: '/ja/features' },
      ],
    },
    ko: {
      label: '한국어',
      dir: 'ko',

      nav: [
        { text: '홈', link: '/ko/' },
        { text: '가이드', link: '/ko/guide' },
        { text: '특징', link: '/ko/features' },
      ],
    },
    "zh-CN": {
      label: '中文',
      dir: 'zh-CN',

      nav: [
        { text: '首页', link: '/zh-CN/' },
        { text: '指南', link: '/zh-CN/guide' },
        { text: '功能', link: '/zh-CN/features' },
      ],
    }
  }
});
