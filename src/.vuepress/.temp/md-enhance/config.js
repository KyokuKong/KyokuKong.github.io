import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.0_@types+js-yaml@4.0.9_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/node_modules/.pnpm/vuepress-shared@2.0.0-rc.0_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.0_@types+js-yaml@4.0.9_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import { useContainer } from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.0_@types+js-yaml@4.0.9_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/container.js";
import "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.0_@types+js-yaml@4.0.9_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.0_@types+js-yaml@4.0.9_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.0_@types+js-yaml@4.0.9_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.0_@types+js-yaml@4.0.9_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import Playground from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.0_@types+js-yaml@4.0.9_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "C:/Users/BotKong/Documents/GitHub/kyokukong.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.0_@types+js-yaml@4.0.9_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useContainer();
  }
});
