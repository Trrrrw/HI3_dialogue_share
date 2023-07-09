<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>{{Name}}</span>
                <el-button class="button" text @click="goToNewPage">前往查看</el-button>
            </div>
        </template>
        <el-tag v-for="tag in tags" :key="tag">{{tag}}</el-tag>
    </el-card>
</template>

<script>
import 'element-plus/es/components/avatar/style/css'
import 'element-plus/es/components/card/style/css'
import 'element-plus/es/components/row/style/css'
import 'element-plus/es/components/col/style/css'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/tag/style/css'
import { ElAvatar, ElCard, ElRow, ElCol, ElButton,ElTag } from 'element-plus'
export default {
    components: { ElAvatar, ElCard, ElRow, ElCol, ElButton ,ElTag},
    props: {
        name: {
            type: String,
        },
        url: {
            type: String
        },
        tags: {
            type: Array,
        }
    },
    data() {
        return {
            Name: this.name,
            Url:this.url,
            Tags: this.tags
        }
    },
    methods: {
        goToNewPage() {
         window.open(this.Url);
       }
    }
}
</script>


<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 380px;
}
</style>