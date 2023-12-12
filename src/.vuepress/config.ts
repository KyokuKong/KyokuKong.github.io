import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { componentsPlugin } from "vuepress-plugin-components";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Kyoku.",
  description: "暂时是kyoku的blog",

  theme,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
    componentsPlugin({
      components: [
        "BiliBili",
        "FontIcon",
        "AudioPlayer",
        "VidStack",
      ],
      componentOptions: {
        fontIcon: {
          assets: "fontawesome-with-brands"
        }
      }
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
