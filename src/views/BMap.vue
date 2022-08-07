<template>
  <v-chart :options="options"></v-chart>
</template>

<script>
import 'echarts/extension/bmap/bmap'

export default {
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    this.options = {
      bmap: {
        key: 'dGQGpLSVro3KDObkPGmkLz0t0qScK9c6',
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: false
      }
    }
  }
}
</script>

<style>

</style>
