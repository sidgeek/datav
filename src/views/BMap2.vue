<template>
  <ve-map :data="chartData" height="800px"></ve-map>
</template>

<script>

export default {
  data () {
    return {
      /* eslint-disable */
      chartData: {
        columns: ['位置', '税收'],
        rows: [{
          '位置': '上海',
          '税收': 123
        },{
          '位置': '北京',
          '税收': 456
        }]
      }
    }
  },
  mounted () {
  }
}
</script>

<style>

</style>
