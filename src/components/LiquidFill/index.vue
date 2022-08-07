<template>
   <ve-liquidfill :data="chartData" height="100%" :settings="chartSettings" />
</template>

<script>

/* eslint-disable */

function getColor(value) {
  return value > 0 && value <= 0.5 ? 'rgba(97,216,0,.7)'
    : value > 0.5 && value <= 0.8 ? 'rgba(204,178,26,.7)'
      : value > 0.8 ? 'rgba(241,47,28,.7)' : '#c7c7cb'
}

export default {
  data () {
    return {
      chartData: {
        columns: ['city', 'percent'],
        rows: [{
          city: 'ShangHai',
          percent: 0.6
        }]
      },
      chartSettings: {}
    }
  },
  mounted() {
    this.chartSettings = {
      seriesMap: {
        'ShangHai': { // 注意这个属性和上面的对应
            radius: '80%',
            label: {
              formatter (v) {
                return `${Math.floor(v.data.value * 100)}%`
              },
              textStyle: {
                fontSize: 36,
                color: '#999',
                fontWeight: "normal"
              },
              position: ['50%', '50%'], // 位置
              insideColor: '#fff' // 文字和水文重叠时的颜色
            },
            outline: { // 外边框
              itemStyle: {
                borderColor: '#aaa4aa',
                borderWidth: 1,
                color: 'none',
                shadowBlur: 0, // 阴影
                shadowColor: '#fff'
              },
              borderDistance: 0 // 外边框和内边框的间距
            },
            backgroundStyle: {
              color: '#fff'
            },
            itemStyle: { // 默认会有阴影值
              shadowBlur: 0,
              shadowColor: "#fff"
            },
            amptitude: 8, // 波纹的幅度
            color: [getColor(this.chartData.rows[0].percent)]
        }
      }
    }
}
}
</script>

<style>
</style>
