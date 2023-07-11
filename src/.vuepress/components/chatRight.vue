<template>
    <div class="chat-box-right">
        <el-card class="elcard-right" shadow="hover"> {{ Msg }} </el-card>
        <div class="avatar-box-right">
            <el-avatar :src=Url />
        </div>
        <el-divider />
    </div>
</template>

<script>
import 'element-plus/es/components/avatar/style/css'
import 'element-plus/es/components/card/style/css'
import 'element-plus/es/components/divider/style/css'
import { ElAvatar, ElCard, ElDivider } from 'element-plus'
export default {
    components: { ElAvatar, ElCard, ElDivider },
    props: ['character', 'armor', 'message'],
    data() {
        return {
            Url: "/assets/image/证件照/" + this.character + "/" + this.armor + ".png",
            Msg: this.message
        }
    }
}
</script>


<style scoped>
.chat-box-right {
    display: table;
    margin: 10px;
    width: max-content;
    float: right;
}

.avatar-box-right {
    float: right;
    margin: 10px;
}

.elcard-right {
    max-width: fit-content;
    float: left;
}
</style>