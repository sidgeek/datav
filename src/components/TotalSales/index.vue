<template>
  <comm-card
    title="累计销售额"
    value="$ 320,099,8"
  >
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span>￥ 30000</span>
    </template>
  </comm-card>
</template>

<script>
import CommCardMixinVue from '@/mixins/CommCardMixin.vue'

export default {
  mixins: [CommCardMixinVue],
  components: {
  }
}
</script>

<style></style>
