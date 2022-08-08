<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings" />
</template>

<script>

export default {
  data () {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [{
          name: '测试',
          value: 100
        }, {
          name: '行为',
          value: 70
        }]
      },
      chartSettings: {
        color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)']
      }
    }
  }
}
</script>

<style>
</style>
