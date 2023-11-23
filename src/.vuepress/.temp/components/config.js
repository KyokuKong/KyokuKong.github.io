import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "C:/Users/BotKong/Documents/Developing/kyokublog/node_modules/.pnpm/vuepress-shared@2.0.0-rc.0_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";

import { useScriptTag } from "C:/Users/BotKong/Documents/Developing/kyokublog/node_modules/.pnpm/@vueuse+core@10.6.1_vue@3.3.8/node_modules/@vueuse/core/index.mjs";
import BiliBili from "C:/Users/BotKong/Documents/Developing/kyokublog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.0_hls.js@1.4.12_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import FontIcon from "C:/Users/BotKong/Documents/Developing/kyokublog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.0_hls.js@1.4.12_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "C:/Users/BotKong/Documents/Developing/kyokublog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.0_hls.js@1.4.12_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
