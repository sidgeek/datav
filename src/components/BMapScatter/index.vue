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
import commonDataMixin from '../../mixins/commonDataMixin'

const convertData = function (data, geo) {
  const res = []
  data.forEach(item => {
    const { name, value } = item
    const coord = geo[name]
    res.push({
      name,
      value: [...coord, value]
    })
  })
  return res
}

export default {
  mixins: [commonDataMixin],
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
      chartSeries: []
    }
  },
  watch: {
    mapData () {
      const { data, geo } = this.mapData
      this.chartSeries = [
        {
          name: '销售额',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: convertData(data, geo),
          encode: {
            value: 2
          },
          itemStyle: {
            color: 'purple'
          },
          symbolSize: function (val) {
            return val[2] / 10
          },
          label: {
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
        },
        {
          name: 'Top 10',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          data: convertData(data.sort(function (a, b) {
            return b.value - a.value
          }), geo).slice(0, 10),
          symbolSize: function (val) {
            return val[2] / 10
          },
          encode: {
            value: 2
          },
          label: {
            formatter: function (v) {
              return `${v.data.name} - ${v.data.value[2]}`
            },
            position: 'right',
            show: true
          },
          hoverAnimation: true,
          rippleEffect: {
            brushType: 'stroke'
          },
          itemStyle: {
            color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
      ]
    }
  }
}
</script>

<style>

</style>
