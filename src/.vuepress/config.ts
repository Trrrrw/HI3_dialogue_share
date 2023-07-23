import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/HI3_dialogue_share/",

  lang: "zh-CN",
  title: "崩坏3 剧情文本",
  description: "崩坏3 剧情文本",

  theme,
  shouldPrefetch: false,
  head:[
    ['meta', { name: 'screen-orientation', content: 'landscape' }],
    ['meta', { name: 'x5-orientation', content: 'landscape' }]
  ]
});
