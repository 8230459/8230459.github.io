export default host => ({
  a: {b: 1111},
  
  applianceGeminiTemplate: {
    page: host + '/common/forward/forward#appliance-gemini-template-page',
    add: host + '/common/forward/forward#appliance-gemini-template-add',
    remove: host + '/common/forward/forward#appliance-gemini-template-delete#/v1/appliance/gemini/ui/template/',
    category: host + '/mini/landing/config/categorylist'
  },
  applianceAuthorizeVoice: {
    page: host + '/common/forward/forward#appliance-authorize-voice-page',
    add: host + '/common/forward/forward#appliance-authorize-voice-add',
    remove: host + '/common/forward/forward#appliance-authorize-voice-delete#/v1/appliance/authorize/voice/',
    category: host + '/mini/landing/config/categorylist'
  },
  _applianceRenderingTemplate: {
    page: host + '/common/forward/forward#appliance-rendering-template-page',
    add: host + '/common/forward/forward#appliance-rendering-template-add',
    remove: host + '/common/forward/forward#appliance-rendering-template-delete',
    update: host + '/common/forward/forward#appliance-rendering-template-update',
    category: host + '/common/forward/forward#appliance-metadata-category'
  },
  appliancePlatform: {
    list: host + '/common/forward/forward#appliance-platform-list',
    page: host + '/common/forward/forward#appliance-platform-page',
    add: host + '/common/forward/forward#appliance-platform-add',
    remove: host + '/common/forward/forward#appliance-platform-delete',
    update: host + '/common/forward/forward#appliance-platform-update'
  },
  _applianceFlowList: {
    page: host + '/approval/page'
  },
  applianceFlow: {
    init: host + '/approval/init',
    create: host + '/approval/submit',
    detail: host + '/approval/getApprovalDetail',
    approve: host + '/approval/approve'
  },
  applianceTemplateWhiteUser: {
    page: host + '/common/forward/forward#appliance-template-white-user-page',
    add: host + '/common/forward/forward#appliance-template-white-user-add',
    remove: host + '/common/forward/forward#appliance-template-white-user-delete',
    update: host + '/common/forward/forward#appliance-template-white-user-update'
  }
})
