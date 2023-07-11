import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/src/.vuepress/dist/",

  lang: "zh-CN",
  title: "崩坏3 剧情文本",
  description: "崩坏3 剧情文本",

  theme,

});
