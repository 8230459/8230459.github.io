<template>
  <div>
    <AuiTable ref="table" :config="config" @dataLoaded="listDataLoaded">
      <div slot="headerButtons" style="margin-right: 10px;display: flex;" v-if="hasFlow">
        <el-button type="primary" size="medium" plain @click="createHandler" :loading="flowInitting">创建流程</el-button>
        <el-button type="primary" size="medium" plain @click="flowHanlder">流程记录</el-button>
      </div>
    </AuiTable>
    <ApplianceFlowCreate v-model="dialogFormVisible" :selectionData.sync="selectionData" :flowInitting.sync="flowInitting"/>
  </div>
</template>
<script>
  import {formatTableDateTime} from '@/formatter/dateTime'
  import ApplianceFlowCreate from './_applianceFlowCreate'
  import optionsValueToLabel from '@/formatter/optionsValueToLabel'
  
  const iflowStatusData = [
    {label: '未提交', value: '0'},
    {label: '流程审核中', value: '1'},
    {label: '审核通过', value: '2'}
  ]
  const cardSizeOptionData = [
    {label: '1x', value: '1x'},
    {label: '2x', value: '2x'},
    {label: '4x', value: '4x'}
  ]
  export default {
    name: '_applianceRenderingTemplate',
    components: {ApplianceFlowCreate},
    data() {
      return {
        config: {
          name: this.$options.name,
          title: '动态渲染模板',
          icon: 'el-icon-notebook-2',
          headerButtons: ['add'],
          params: {platform: this.$route.query.platform},
          search: {
            formItems: [
              {name: 'category', label: '品类', component: {vm: 'AuiSelect', bind: {getOptionData: this.getCategoryOptionData, filterable: true, maxLength: 32, style: {width: '200px'}}}},
              {name: 'manufacturer', label: '品牌', component: {vm: 'AuiInput', bind: {maxLength: 32, style: {width: '220px'}}}},
              {name: 'templateName', label: '模板名称', component: {vm: 'AuiInput', bind: {maxLength: 32, style: {width: '220px'}}}},
              {name: 'iflowStatus', label: '审批状态', component: {vm: 'AuiSelect', bind: {optionData: iflowStatusData, defaultValue: null, style: {width: '120px'}}}}
            ]
          },
          columns: [
            {name: 'id', label: 'ID', sortable: true, width: 120},
            {
              name: 'iflowStatus', label: '审批状态', sortable: true, width: 120, align: 'center',
              component: ({row}) => ({
                vm: 'el-alert', bind: {
                  title: optionsValueToLabel(iflowStatusData, row['iflowStatus']), style: {background: 'none'},
                  type: row['iflowStatus'] === '2' ? 'success' : 'info', 'show-icon': true, center: true, closable: false
                }
              })
            },
            {name: 'category', label: '品类', sortable: true, width: 200, align: 'center'},
            {name: 'manufacturer', label: '品牌', sortable: true, width: 220, align: 'center'},
            {name: 'minVersion', label: '最小版本号', sortable: true, width: 130, align: 'center'},
            {name: 'cardSize', label: '卡片尺寸', sortable: true, width: 130, align: 'center'},
            {name: 'isDefault', label: '是否默认模板', sortable: true, width: 130, align: 'center', formatter: (...args) => args[2] === 1 ? '是' : '否'},
            {name: 'templateName', label: '模板名称', sortable: true, width: 180},
            {name: 'enable', label: '是否启用', sortable: true, width: 130, align: 'center', formatter: (...args) => args[2] === 1 ? '是' : '否'},
            {name: 'notify', label: '通知或轮询', sortable: true, width: 130, align: 'center', formatter: (...args) => args[2] === 1 ? '通知' : 'app轮询'},
            {
              name: 'smartProductIds', label: 'spid数量', sortable: true, width: 130, align: 'center', formatter: (...args) => {
                let count = ''
                try {
                  count = JSON.parse(args[2]).length
                } catch (e) {
                }
                return count
              }
            },
            {name: 'createTime', label: '创建时间', sortable: true, width: 170, align: 'center', formatter: formatTableDateTime},
            {name: 'updateTime', label: '更新时间', sortable: true, width: 170, align: 'center', formatter: formatTableDateTime},
            {name: 'updateUser', label: '最新操作人', sortable: true, width: 170, align: 'center'}
          ],
          columnButtons: [{name: 'update', disabled: ({row}) => row['iflowStatus'] !== '0'}, 'remove'],
          //编辑表单校验规则
          edit: {
            formRules: {
              category: [{required: true, message: '请选择品类'}],
              manufacturer: [{required: true, message: '请输入品牌'}],
              minVersion: [{required: true, message: '请输入最小版本号'}],
              smartProductIds: [{required: true, message: '请输入smartProductIds'}, {
                validator: (rule, value, callback) => {
                  if (value[0] !== '[' || value[value.length - 1] !== ']') return callback(new Error('格式：[xxx,xxx,...]'))
                  callback()
                }, trigger: 'blur'
              }],
              cardSize: [{required: true, message: '请选择卡片尺寸'}],
              isDefault: [{required: true, message: '请选择是否为默认模板'}],
              templateName: [{required: true, message: '请输入模板名称'}]
            },
            formItems: [
              {
                name: 'category', label: '品类', labelWidth: '150px',
                component: {vm: 'AuiSelect', bind: {getOptionData: this.getCategoryOptionData, filterable: true, placeholder: '取自标准库中的category字段', style: {width: '360px'}}}
              },
              {
                name: 'manufacturer', label: '品牌', labelWidth: '150px',
                component: {vm: 'AuiInput', bind: {showWordLimit: true, maxLength: 32, placeholder: '如Midea、COLMO、第三方等', style: {width: '360px'}}}
              },
              {
                name: 'minVersion', label: '最小版本号', labelWidth: '150px',
                component: {vm: 'AuiInput', bind: {showWordLimit: true, maxLength: 32, style: {width: '360px'}}}
              },
              {
                name: 'templateName', label: '模板名称', labelWidth: '150px',
                component: {vm: 'AuiInput', bind: {showWordLimit: true, maxLength: 32, style: {width: '360px'}}}
              },
              {
                name: 'isDefault', label: '是否默认模板', labelWidth: '150px',
                component: {vm: 'AuiSwitch', bind: {activeText: '是', inactiveText: '否', activeValue: 1, inactiveValue: 0}}
              },
              {
                name: 'cardSize', label: '卡片尺寸', labelWidth: '150px',
                component: {vm: 'AuiSelect', bind: {optionData: cardSizeOptionData, style: {width: '360px'}}}
              },
              {
                name: 'smartProductIds', label: 'smartProductIds', labelWidth: '150px',
                component: {
                  vm: 'AuiInput', bind: {
                    showWordLimit: true, maxLength: 2048, type: 'textarea', rows: 3, placeholder: '格式：[xxx,xxx,...]，用英文逗号隔开', style: {width: '360px'}
                  }
                },
                extraTip: {
                  html: (val, col) => {
                    let count = 0
                    try {
                      count = JSON.parse(val).length
                    } catch (e) {
                    }
                    return '<div style="margin:-10px 0 20px 85px">总数量：<span style="margin-left: 10px">' + count + '</span></div>'
                  }
                }
              },
              {
                name: 'enable', label: '是否启用', labelWidth: '150px',
                component: {vm: 'AuiSwitch', bind: {activeText: '是', inactiveText: '否', activeValue: 1, inactiveValue: 0}}
              },
              {
                name: 'notify', label: '通知或轮询', labelWidth: '150px',
                component: {
                  vm: 'AuiRadios',
                  bind: {style: {width: '360px'}, options: [{label: 1, name: '通知'}, {label: 0, name: 'app轮询'}]}
                }
              },
              {
                name: 'uiTemplate', label: 'UI模板', labelWidth: '150px',
                //component: {vm: 'AuiInput', bind: {showWordLimit: true, maxLength: 20000, type: 'textarea', rows: 3, style: {width: '360px'}}}
                component: ({row}) => ({
                  vm: 'AuiUpload', bind: {
                    mode: 'file',
                    action: this.api.oss.uploadMd5,
                    compTip: '上传文件必须为json文件，大小不能超过2M',
                    style: {width: '360px'},
                    fileType: 'application/json',
                    fileTypeErrorMsg: '上传文件必须为json文件',
                    sizeLimit: 2,
                    sizeLimitErrorMsg: '上传文件大小不能超过2M',
                    getResUrl(res) {
                      return res.data ? res.data.url : null
                    }
                  }
                })
              },
              {
                name: 'dataTemplate', label: '数据模板', labelWidth: '150px',
                //component: {vm: 'AuiInput', bind: {showWordLimit: true, maxLength: 20000, type: 'textarea', rows: 3, style: {width: '360px'}}}
                component: ({row}) => ({
                  vm: 'AuiUpload', bind: {
                    mode: 'file',
                    action: this.api.oss.uploadMd5,
                    compTip: '上传文件必须为json文件，大小不能超过2M',
                    style: {width: '360px'},
                    fileType: 'application/json',
                    fileTypeErrorMsg: '上传文件必须为json文件',
                    sizeLimit: 2,
                    sizeLimitErrorMsg: '上传文件大小不能超过2M',
                    getResUrl(res) {
                      return res.data ? res.data.url : null
                    }
                  }
                })
              },
              {
                name: 'moduleTypeTemplate', label: 'moduleType模板', labelWidth: '150px',
                //component: {vm: 'AuiInput', bind: {showWordLimit: true, maxLength: 20000, type: 'textarea', rows: 3, style: {width: '360px'}}}
                component: ({row}) => ({
                  vm: 'AuiUpload', bind: {
                    mode: 'file',
                    action: this.api.oss.uploadMd5,
                    compTip: '上传文件必须为json文件，大小不能超过2M',
                    style: {width: '360px'},
                    fileType: 'application/json',
                    fileTypeErrorMsg: '上传文件必须为json文件',
                    sizeLimit: 2,
                    sizeLimitErrorMsg: '上传文件大小不能超过2M',
                    getResUrl(res) {
                      return res.data ? res.data.url : null
                    }
                  }
                })
              },
              {
                name: 'urlTemplate', label: 'url文件', labelWidth: '150px',
                component: ({row}) => ({
                  vm: 'AuiUpload', bind: {
                    mode: 'file',
                    action: this.api.oss.uploadMd5,
                    compTip: '上传文件必须为zip文件，大小不能超过2M',
                    style: {width: '360px'},
                    fileType: 'application/x-zip-compressed',
                    fileTypeErrorMsg: '上传文件必须为zip文件',
                    sizeLimit: 2,
                    sizeLimitErrorMsg: '上传文件大小不能超过2M',
                    getResUrl(res) {
                      return res.data ? res.data.url : null
                    }
                  },
                  on: {
                    success(res, fileList) {
                      row.zipMd5 = res.data.md5
                    },
                    remove() {
                      row.zipMd5 = ''
                    }
                  }
                })
              }
            ],
            defaultValue: {enable: 0, notify: 1, isDefault: 1}
          },
          addParams: {reqId: AUI.utils.randomString(), stamp: new Date().getTime(), platform: this.$route.query.platform},
          updateParams: {reqId: AUI.utils.randomString(), stamp: new Date().getTime()},
          removeParams: row => ({id: row.id, reqId: AUI.utils.randomString(), stamp: new Date().getTime()}),
          removeMsg: '确定删除此动态渲染模板？',
          checkboxEnable: (row, rowIndex) => row.iflowStatus === '0',
          listDataFilter: listData => listData.sort((a, b) => a.iflowStatus - b.iflowStatus)
        },
        dialogFormVisible: false,
        selectionData: [],
        flowInitting: false,
        activePermission: window.AUI.components.app.activePermission
      }
    },
    computed: {
      hasFlow() {
        return this.activePermission.includes('others')//window.location.host === 'localhost'//'mj-manage.smartmidea.net'
      }
    },
    created() {
      this.config.multiCheck = this.hasFlow
    },
    mounted() {
      this.$refs.table.config.title = this.$route.query.platform + ' 平台的动态渲染模板'
    },
    methods: {
      async getCategoryOptionData(row) {
        const res = await this.axios({url: this.api[this.$options.name].category, params: {reqId: AUI.utils.randomString(), stamp: new Date().getTime()}})
        return res.code === '0' ? res.data.categoryList.map(v => ({label: v, value: v})) : []
      },
      async flowHanlder() {
        this.$router.push({name: '_applianceFlowList', query: {pageName: '_applianceRenderingTemplate'}})
      },
      async createHandler() {
        const selectionData = this.$refs.table.selectionData
        if (!selectionData.length) {
          this.$message({message: '请选择模板配置', type: 'warning'})
          return
        }
        this.selectionData = selectionData
        this.flowInitting = true
        this.dialogFormVisible = true
      }
    }
  }
</script>
