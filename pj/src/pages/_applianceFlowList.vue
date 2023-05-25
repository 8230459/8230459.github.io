<template>
  <AuiTable ref="table" :config="config"/>
</template>
<script>
  import {formatTableDateTime} from '@/formatter/dateTime'
  import optionsValueToLabel from '@/formatter/optionsValueToLabel'
  
  const approvalStatusData = [
    {label: '废弃', value: 0},
    {label: '审批中', value: 1},
    {label: '审批完成', value: 2},
    {label: '驳回', value: 3}
  ]
  export default {
    name: '_applianceFlowList',
    data() {
      return {
        uid: window.localStorage.getItem('uid'),
        config: {
          name: this.$options.name,
          title: '流程记录',
          icon: 'el-icon-notebook-2',
          params: {pageName: this.$route.query.pageName},
          columns: [
            {name: 'fdId', label: '流程实例id', minWidth: 220, sortable: true},
            {name: 'approvalName', label: '流程名称', minWidth: 220, sortable: true},
            {name: 'approvalStatus', label: '审批状态', minWidth: 150, sortable: true, align: 'center', formatter: (...args) => optionsValueToLabel(approvalStatusData, args[2])},
            {name: 'cuid', label: '流程提交人', minWidth: 220, sortable: true, align: 'center'},
            {name: 'cdate', label: '流程提交时间', minWidth: 170, sortable: true, align: 'center', formatter: formatTableDateTime}
          ],
          columnButtons: [
            {
              name: 'detail',
              label: '详情',
              width: 90,
              visibled: ({row}) => row.approvalStatus !== 3 || row.cuid !== this.uid,
              handler({row}) {
                this.$router.push({name: '_applianceFlowDetail', query: {fdId: row.fdId, pageName: this.$route.query.pageName}})
              }
            },
            {
              name: 'update',
              label: '重新编辑',
              width: 90,
              visibled: ({row}) => row.approvalStatus === 3 && row.cuid === this.uid,
              handler({row}) {
                this.$router.push({name: '_applianceFlowDetail', query: {fdId: row.fdId, pageName: this.$route.query.pageName}})
              }
            }
          ],
          rightFixedWidth: 110
        }
      }
    }
  }
</script>
