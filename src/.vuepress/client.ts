import { defineClientConfig  } from '@vuepress/client'
// 全量引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import chatLeft from './components/chatLeft.vue'

export default defineClientConfig({
  enhance({ app }) {
    // 注册element-plus
    app.use(ElementPlus)
    app.component('chatLeft', chatLeft)
  },
})