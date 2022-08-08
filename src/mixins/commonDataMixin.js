export default {
  computed: {
    reportData () {
      return this.getReportData()
    },
    wordCloud () {
      return this.getWordCloud()
    },
    mapData () {
      return this.getMapData()
    }
  },
  inject: ['getReportData', 'getWordCloud', 'getMapData']
}
