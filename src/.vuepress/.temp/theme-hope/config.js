import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-shared-virtual-3d6a233067/4/AppData/Local/Yarn/Berry/cache/vuepress-shared-npm-2.0.0-rc.0-d5a514a283-10c0.zip/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-theme-hope-virtual-9e97a1e45a/4/AppData/Local/Yarn/Berry/cache/vuepress-theme-hope-npm-2.0.0-rc.0-b7cabb2b40-10c0.zip/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogIconComponent } from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-auto-catalog-virtual-1766cb51bd/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-auto-catalog-npm-2.0.0-rc.0-a3b0b0b189-10c0.zip/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-theme-hope-virtual-9e97a1e45a/4/AppData/Local/Yarn/Berry/cache/vuepress-theme-hope-npm-2.0.0-rc.0-b7cabb2b40-10c0.zip/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-theme-hope-virtual-9e97a1e45a/4/AppData/Local/Yarn/Berry/cache/vuepress-theme-hope-npm-2.0.0-rc.0-b7cabb2b40-10c0.zip/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-theme-hope-virtual-9e97a1e45a/4/AppData/Local/Yarn/Berry/cache/vuepress-theme-hope-npm-2.0.0-rc.0-b7cabb2b40-10c0.zip/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-theme-hope-virtual-9e97a1e45a/4/AppData/Local/Yarn/Berry/cache/vuepress-theme-hope-npm-2.0.0-rc.0-b7cabb2b40-10c0.zip/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-theme-hope-virtual-9e97a1e45a/4/AppData/Local/Yarn/Berry/cache/vuepress-theme-hope-npm-2.0.0-rc.0-b7cabb2b40-10c0.zip/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);

    app.component("BloggerInfo", BloggerInfo);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
});