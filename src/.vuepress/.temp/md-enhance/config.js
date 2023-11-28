import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "C:/Users/Kyoku_Kong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-bbae6ee5a2/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.0-9aa3b101de-10c0.zip/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/Users/Kyoku_Kong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-shared-virtual-3d6a233067/4/AppData/Local/Yarn/Berry/cache/vuepress-shared-npm-2.0.0-rc.0-d5a514a283-10c0.zip/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/Users/Kyoku_Kong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-bbae6ee5a2/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.0-9aa3b101de-10c0.zip/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import { useContainer } from "C:/Users/Kyoku_Kong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-bbae6ee5a2/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.0-9aa3b101de-10c0.zip/node_modules/vuepress-plugin-md-enhance/lib/client/composables/container.js";
import "C:/Users/Kyoku_Kong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-bbae6ee5a2/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.0-9aa3b101de-10c0.zip/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "C:/Users/Kyoku_Kong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-bbae6ee5a2/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.0-9aa3b101de-10c0.zip/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/Kyoku_Kong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-bbae6ee5a2/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.0-9aa3b101de-10c0.zip/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "C:/Users/Kyoku_Kong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-bbae6ee5a2/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.0-9aa3b101de-10c0.zip/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import Playground from "C:/Users/Kyoku_Kong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-bbae6ee5a2/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.0-9aa3b101de-10c0.zip/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "C:/Users/Kyoku_Kong/Documents/GitHub/kyokukong.github.io/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-bbae6ee5a2/4/AppData/Local/Yarn/Berry/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.0-9aa3b101de-10c0.zip/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

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
