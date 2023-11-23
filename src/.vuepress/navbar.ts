import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文档",
    icon: "fa-solid fa-folder",
    link: "/in"

  },
  {
    icon: "fa-solid fa-address-card",
    text: "关于",
    link: "/intro"
  },
  {
    text: "bilibili首页",
    icon: "fa-brands fa-bilibili",
    link: "https://space.bilibili.com/1220441567",
  },
]);
