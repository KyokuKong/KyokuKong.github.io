import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-shared-virtual-3d6a233067/4/AppData/Local/Yarn/Berry/cache/vuepress-shared-npm-2.0.0-rc.0-d5a514a283-10c0.zip/node_modules/vuepress-shared/lib/client/index.js";

import { useScriptTag } from "C:/Users/BotKong/AppData/Local/Yarn/Berry/cache/@vueuse-core-npm-10.6.1-cc73c8581b-10c0.zip/node_modules/@vueuse/core/index.mjs";
import BiliBili from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-components-virtual-b2cad59f90/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-components-npm-2.0.0-rc.0-0819dcdd70-10c0.zip/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import FontIcon from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-components-virtual-b2cad59f90/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-components-npm-2.0.0-rc.0-0819dcdd70-10c0.zip/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import AudioPlayer from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-components-virtual-b2cad59f90/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-components-npm-2.0.0-rc.0-0819dcdd70-10c0.zip/node_modules/vuepress-plugin-components/lib/client/components/AudioPlayer.js";
import VidStack from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-components-virtual-b2cad59f90/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-components-npm-2.0.0-rc.0-0819dcdd70-10c0.zip/node_modules/vuepress-plugin-components/lib/client/components/VidStack.js";

import "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-components-virtual-b2cad59f90/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-components-npm-2.0.0-rc.0-0819dcdd70-10c0.zip/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("AudioPlayer")) app.component("AudioPlayer", AudioPlayer);
    if(!hasGlobalComponent("VidStack")) app.component("VidStack", VidStack);
    
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
