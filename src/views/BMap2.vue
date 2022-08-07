<template>
  <ve-bmap
    :settings="chartSettings"
    :title="title"
    :tooltip="tooltip"
    :series="chartSeries"
    height="100%"
  ></ve-bmap>
</template>

<script>

const testPoint = [{
  name: '海门',
  value: [121.15, 31.89, 80]
}, {
  name: '南京',
  value: [118.78, 32.04, 100]
}]

export default {
  data () {
    return {
      title: {
        text: '外卖销售额',
        subtext: '销售趋势统计',
        sublink: 'https://www.baidu.com',
        left: 'center'
      },
      chartSettings: {
        key: 'dGQGpLSVro3KDObkPGmkLz0t0qScK9c6',
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
          mapStyle: {}
        },
        tooltip: {}
      },
      chartSeries: [{
        name: 'sales',
        type: 'scatter',
        coordinateSystem: 'bmap',
        data: testPoint,
        encode: {
          value: 2 // 指定销售额数据为data的index为2
        },
        itemStyle: {
          color: 'purple' // 点的颜色
        },
        symbolSize: function (val) { // 控制点的大小
          return val[2] / 10
        },
        label: { // 添加label
          show: false,
          position: 'right',
          formatter: function (v) {
            return `${v.data.name} - ${v.data.value[2]}`
          }
        },
        emphasis: {
          label: {
            show: true
          }
        }
      }]
    }
  },
  mounted () {
  }
}
</script>

<style>

</style>
