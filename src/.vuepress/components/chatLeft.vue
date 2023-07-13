<template>
    <div class="chat-box">
        <div class="avatar-box">
            <el-avatar fit="none" :size="62.5" :src= Url />
        </div>
        <el-card shadow="hover"> {{ Msg }} </el-card>
    </div>
</template>

<script>
export default {
    props: ['character', 'armor', 'message'],
    data() {
        return {
            Url:"/HI3_dialogue_share/assets/image/证件照/"+this.character+"/"+this.armor+".png",
            Msg: this.message
        }
    }
}
</script>


<style scoped>
.chat-box {
    display: table;
    margin: 10px;
}

.avatar-box {
    float: left;
    margin-right: 20px;
}

.el-card {
    max-width: fit-content;
    float: right;
}
</style>