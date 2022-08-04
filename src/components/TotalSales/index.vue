<template>
  <comm-card
    title="累计销售额"
    value="$ 320,099,8"
  >
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">7.33%</span>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">￥ 30000</span>
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
  .compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .compare {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-top: 3px;
      color: #666;
    }
  }
</style>
