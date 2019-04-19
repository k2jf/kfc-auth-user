import Vue from 'vue'
import Echarts from 'vue-echarts'
// import Echarts from '@/components/Echarts'
import 'echarts-liquidfill'

import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/lines'

import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/toolbox'

Vue.component('Chart', Echarts)
