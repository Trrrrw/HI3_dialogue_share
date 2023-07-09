import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "崩坏3 剧情文本",
  description: "崩坏3 剧情文本",

  theme,

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
});
