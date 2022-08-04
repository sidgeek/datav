<template>
  <comm-card
    title="累计销售额"
    value="$ 320,099,8"
  >
    <template>
      <div class="compare">
      </div>
    </template>
    <template v-slot:footer>
      <div>
        <span>昨日销售额</span>
        <span class="money">￥ 30000</span>
      </div>
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

<style lang="scss" scoped>
  .compare {
    height: 100%;
    background: yellow;
  }
  span {
    font-size: 12px;
  }
  .money {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
</style>
