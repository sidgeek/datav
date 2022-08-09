<template>
  <comm-card
    title="今日交易用户数"
    :value="orderUser"
  >
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">{{returnRate}}</span>
    </template>
  </comm-card>
</template>

<script>
import CommCardMixinVue from '@/mixins/CommCardMixin.vue'
import commonDataMixin from '@/mixins/commonDataMixin'

export default {
  mixins: [CommCardMixinVue, commonDataMixin],
  methods: {
    getOptions () {
      return {
        color: ['#3398DB'],
        series: [{
          name: '用户实时交易量',
          type: 'bar',
          data: this.orderUserTrend,
          barWidth: '60%'
        }],
        xAxis: {
          type: 'category',
          data: this.orderUserTrendAxis,
          show: false
        },
        yAxis: {
          show: false
        },
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      }
    }
  }
}
</script>

<style></style>
