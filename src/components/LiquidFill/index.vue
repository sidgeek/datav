<template>
   <ve-liquidfill :data="chartData" height="100%"/>
</template>

<script>

export default {
  data () {
    return {
      chartData: {
        columns: ['city', 'percent'],
        rows: [{
          city: 'ShangHai',
          percent: 0.6
        }]
      }
    }
  }
}
</script>

<style>
</style>
