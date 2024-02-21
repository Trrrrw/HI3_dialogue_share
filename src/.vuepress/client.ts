import {defineClientConfig} from '@vuepress/client'

import {
    // create naive ui
    create,
    // component
    NButton, NAvatar, NCard, NSpace, NDivider

} from 'naive-ui'

// @ts-ignore
import chatLeft from "./components/chatLeft.vue"

const naive = create({
    components: [NButton, NAvatar, NCard, NSpace, NDivider]
})

export default defineClientConfig({
    enhance({app}) {
        app.use(naive)
        app.component('chatLeft', chatLeft)
    },
})