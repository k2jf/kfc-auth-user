import { Tooltip, Icon } from 'iview'
import D from 'dayjs'
import { baseDictionary } from '@/config'

export default [
  {
    title: '任务名称',
    key: 'taskName'
  },
  {
    title: '项目名称',
    key: 'projectName'
  },
  {
    title: '状态',
    width: 112,
    render: (h, params) => {
      const { status } = params.row
      switch (status) {
      case 0:
        return h('div',
          {
            'class': 'pl-2'
          },
          ['已创建'])
      case 1:
        return h('div',
          {
            'class': 'text-blue pl-2'
          },
          ['运行中'])
      case 2:
        return h('div',
          {
            'class': 'text-green pl-2'
          },
          ['运行成功'])
      case 3:
        return h('div', { 'class': 'text-red pl-2' }, [
          h(Tooltip, {
            props: {
              placement: 'top',
              content: params.row.message
            }
          }, [
            h('span', ['运行失败']),
            ' ',
            h(Icon, {
              props: {
                type: 'ios-alert-outline'
              },
              class: 'text-sm',
              style: {
                verticalAlign: 'text-top'
              }
            })])
        ])
      }
    }
  },
  {
    title: '校核类型',
    render: (h, params) => {
      const constraints = params.row.constraints || []
      const display = constraints.filter(c => c.checked).map(c => baseDictionary[c.name]).join('，')
      return h('div', [display])
    }
  },
  {
    title: '基础形式',
    render: (h, params) => {
      return h('div', [params.row.foundationForm === 1 ? '单桩' : '高桩'])
    }
  },
  {
    title: '设计者',
    key: 'creator',
    width: 100
  },
  {
    title: '创建时间',
    key: 'createTime',
    render: (h, params) => {
      return h('div', [D(new Date(params.row.createTime)).format('YYYY-MM-DD HH:mm:ss')])
    },
    width: 160
  },
  {
    title: '操作',
    slot: 'operation',
    width: 246
  }
]
