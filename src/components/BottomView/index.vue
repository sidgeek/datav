<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">搜索关键词</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">93,634</div>
                <v-chart :options="searchUserOption"></v-chart>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">93,634</div>
                <v-chart :options="searchNumberOption"></v-chart>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" />
                <el-table-column prop="keyword" label="关键词" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
                <el-table-column prop="range" label="搜索占比" />
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="100"
                :page-size="4"
                background
                 @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOptions"></v-chart>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    data() {
      return {
        searchUserOption: {
          xAxis: {
            type: 'category',
            boundaryGap: false
          },
          yAxis: {
            show: false
          },
          series: [{
              type: 'line',
              data: [100, 150, 200, 250, 150, 50, 229],
              areaStyle: {
                color: 'rgba(95, 187, 255, .5)'
              },
              lineStyle: {
                color: 'rgba(95, 187, 255)'
              },
              itemStyle: {
                opacity: 0
              },
              smooth: true
            }
          ],
          grid: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }
        },
        searchNumberOption: {},
        tableData: [
          {id: 1, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%'},
          {id: 2, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%'},
          {id: 3, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%'},
          {id: 4, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%'}
        ],
        radioSelect: '品类',
        categoryOptions: {}
      }
    },
    mounted() {
      this.renderPieChart()
    },
    methods: {
      onPageChange (page) {
      },
      renderPieChart () {
        const mockData = [
          { legendname: '粉面店', value: 67, percent: '15%' },
          { legendname: '粉面店1', value: 97, percent: '22%' },
          { legendname: '粉面店2', value: 92, percent: '21%' },
        ]
        this.categoryOptions = {
          title: [{
            text: '品类分布',
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          }],
          series: [{
            type: 'pie',
            data: mockData,
            label: {
              show: true,
              position: 'outter', // inner
              formatter: function (params) {
                return `${params.data.legendname} | ${params.data.percent}`
              }
            },
            center: ['35%', '50%'], // 圆心点位置,也可以是具体的坐标
            radius: ['45%', '60%']  // 分别对应内半径和外半径 默认值["0%", "75%"]
          }]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-view {
    display: flex;
    margin-top: 20px;

    .view {
      flex: 1;
      width: 50%;
      box-sizing: border-box;

      &:first-child {
        padding: 0 10px 0 0;
      }

      &:last-child {
        padding: 0 0 0 10px;
      }

      .title-wrapper {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding: 0 0 0 20px;

        .radio-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
        }
      }

      .chart-wrapper {
        display: flex;
        flex-direction: column;
        height: 452px;

        .chart-inner {
          display: flex;
          padding: 0 10px;
          margin-top: 20px;

          .chart {
            flex: 1;
            padding: 0 10px;

            .chart-title {
              color: #999;
              font-size: 14px;
            }

            .chart-data {
              font-size: 22px;
              color: #333;
              font-weight: 500;
              letter-spacing: 2px;
            }

            .echarts {
              height: 50px;
            }
          }
        }

        .table-wrapper {
          flex: 1;
          margin-top: 20px;
          padding: 0 20px 20px;

          .el-pagination {
            display: flex;
            justify-content: flex-end;
            margin-top: 15px;
          }
        }
      }
    }
  }
</style>