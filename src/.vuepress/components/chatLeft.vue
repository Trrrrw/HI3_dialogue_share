<template>
  <n-space>
    <n-avatar round object-fit="cover" :size="62.5" :src=Url />
    <n-space vertical>
      <slot></slot>
    </n-space>
  </n-space>
</template>


<script>
export default {
  props: ['character', 'armor'],
  data() {
    return {
      Url: "/HI3_dialogue_share/assets/image/证件照/" + this.character + "/" + this.armor + ".png",
    }
  }
}
</script>


<style scoped>
</style>