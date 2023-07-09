---
title: 🤤 名著
---


<div class="container">
<articleCard v-for="list in Lists" :key="list" :name="list.name" :url="list.url" :tags="list.tag"/>
</div>


<script>
export default {
    data() {
        return {
            Lists:[
            {
                name:"琪亞娜的婚禮",
                tag:["逆NTR","逆レイプ","榨精","崩坏3rd"],
                url:"https://www.pixiv.net/novel/show.php?id=13732189",
            },
            {
                name:"晴空贺礼",
                tag:["崩坏3rd","齐格飞","布洛妮娅","ntr","逆NTR"],
                url:"https://www.pixiv.net/novel/show.php?id=16252367",
            },
            {
                name:"愛與家庭",
                tag:["中文","崩坏3rd","空之律者","琪亚娜","雷电芽衣","足コキ","ヤンデレ","逆レイプ","逆NTR"],
                url:"https://www.pixiv.net/novel/show.php?id=14893362",
            },
            ]
        }
    }
}
</script>

<style>
.container{
    display: flex;
    flex-wrap: wrap;
}
</style>