import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "向导",
      icon: "laptop-code",
      prefix: "in/",
      link: "/in",
      children: "structure",
    },
    {
      text: "UTAU经验分享",
      icon: "book",
      prefix: "utau/",
      link: "/utau/index",
      children: "structure",
    },
    {
      text: "一些杂谈",
      collapsible: true,
      icon: "code",
      prefix: "docs/",
      children: "structure",
    },
    {
      text: "BreakBot使用文档",
      collapsible: "true",
      icon: "file",
      prefix: "breakbot/",
      children: "structure",
    },
    {
      text: "Solidity学习笔记",
      collapsible: "true",
      icon: "computer",
      prefix: "solidity/",
      children: "structure",
    }
  ],
});
