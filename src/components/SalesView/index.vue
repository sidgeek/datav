<template>
  <div>
    <v-chart
      :options="data"
    />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: {
          xAxis: {
            type: 'category'
          },
          yAxis: {
          },
          series: [{
            type: 'line',
            data: [200, 250, 300]
          }]
        }
      }
    }
  }
</script>

<style>
</style>
