(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11159b0c"],{"1cb7":function(n,e,t){"use strict";var o={name:"divider"},r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",{staticClass:"vux-divider"},[n._t("default")],2)},i=[],a=t("2455");function l(n){t("9941")}var d=!1,p=l,s=null,c=null,h=Object(a["a"])(o,r,i,d,p,s,c);e["a"]=h.exports},"1e53":function(n,e,t){"use strict";String,String;var o={name:"box",props:{gap:String,height:String}},r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{style:{margin:n.gap,height:n.height}},[n._t("default")],2)},i=[],a=t("2455"),l=!1,d=null,p=null,s=null,c=Object(a["a"])(o,r,i,l,d,p,s);e["a"]=c.exports},"5cd6":function(n,e,t){"use strict";t.r(e);var o=t("1e53"),r=(t("7f7f"),t("4ae8")),i={name:"form-preview",props:["headerLabel","headerValue","bodyItems","footerButtons","name"],methods:{onButtonClick:function(n,e){n&&n(this.name),e&&Object(r["b"])(e,this.$router)}}},a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"vux-form-preview weui-form-preview"},[t("div",{staticClass:"weui-form-preview__hd"},[t("label",{staticClass:"weui-form-preview__label",domProps:{innerHTML:n._s(n.headerLabel)}}),n._v(" "),t("em",{staticClass:"weui-form-preview__value",domProps:{innerHTML:n._s(n.headerValue||"&nbsp;")}})]),n._v(" "),t("div",{staticClass:"weui-form-preview__bd"},n._l(n.bodyItems,function(e){return t("div",{staticClass:"weui-form-preview__item"},[t("label",{staticClass:"weui-form-preview__label"},[n._v(n._s(e.label))]),n._v(" "),t("span",{staticClass:"weui-form-preview__value"},[n._v(n._s(e.value))])])})),n._v(" "),t("div",{staticClass:"weui-form-preview__ft"},n._l(n.footerButtons,function(e){return t("a",{staticClass:"weui-form-preview__btn",class:{"weui-form-preview__btn_default":"default"===e.style,"weui-form-preview__btn_primary":"primary"===e.style},attrs:{href:"javascript:"},on:{click:function(t){n.onButtonClick(e.onButtonClick,e.link)}}},[n._v(n._s(e.text))])}))])},l=[],d=t("2455");function p(n){t("fc7a")}var s=!1,c=p,h=null,b=null,u=Object(d["a"])(i,a,l,s,c,h,b),f=u.exports,v=t("1cb7"),m=t("5f99"),x=(o["a"],v["a"],m["a"],{components:{Box:o["a"],FormPreview:f,Divider:v["a"],XTable:m["a"]},data:function(){return{list:[{label:"商品",value:"电动打蛋机"},{label:"标题标题",value:"名字名字名字"},{label:"标题标题",value:"很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字"}],buttons1:[{style:"default",text:"辅助操作"},{style:"primary",text:"跳转到首页",link:"/"}],buttons2:[{style:"primary",text:"点击事件",onButtonClick:function(n){alert("clicking ".concat(n))}}]}}}),C=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("box",{attrs:{gap:"0 10px"}},[t("form-preview",{attrs:{"header-label":"付款金额","header-value":"¥2400.00","body-items":n.list,"footer-buttons":n.buttons1}}),t("pre",[n._v("list: [{\n  label: '商品',\n  value: '电动打蛋机'\n}, {\n  label: '标题标题',\n  value: '名字名字名字'\n}, {\n  label: '标题标题',\n  value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'\n}],\nbuttons1: [{\n  style: 'default',\n  text: '辅助操作'\n}, {\n  style: 'primary',\n  text: '跳转到首页',\n  link: '/'\n}]")]),t("pre",[n._v('form-preview(header-label="付款金额" header-value="¥2400.00", :body-items="list", :footer-buttons="buttons1")\n')]),t("form-preview",{attrs:{"header-label":"付款金额","header-value":"¥2400.00","body-items":n.list,"footer-buttons":n.buttons2,name:"demo"}}),t("pre",[n._v("buttons2: [{\n  style: 'primary',\n  text: '点击事件',\n  onButtonClick: (name) => {\n    alert(`clicking ${name}`)\n  }\n}]")]),t("pre",[n._v('form-preview(header-label="付款金额" header-value="¥2400.00", :body-items="list", :footer-buttons="buttons2" name="demo")\n')]),t("form-preview",{attrs:{"header-label":"付款金额","header-value":"¥2400.00","body-items":n.list}}),t("pre",[n._v('form-preview(header-label="付款金额" header-value="¥2400.00", :body-items="list")\n')]),t("x-table",[t("tr",[t("th",[n._v("属性")]),t("th",[n._v("说明")])]),t("tr",[t("td",[n._v("header-label")]),t("td",[n._v("头部标题")])]),t("tr",[t("td",[n._v("header-value")]),t("td",[n._v("头部内容")])]),t("tr",[t("td",[n._v("body-items")]),t("td",[n._v("主体内容列表[]")])]),t("tr",[t("td",[n._v("footer-buttons")]),t("td",[n._v("底部按钮列表[]")])])])],1)},g=[];function w(n){t("5d56")}var y=!1,z=w,N=null,_=null,k=Object(d["a"])(x,C,g,y,z,N,_);e["default"]=k.exports},"5d56":function(n,e,t){var o=t("8391");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=t("499e").default;r("d5287d72",o,!0,{})},"5f99":function(n,e,t){"use strict";Boolean,Boolean,Boolean;var o={name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}},r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",{staticClass:"vux-table",class:{"vux-table-bordered":n.fullBordered,"vux-table-no-cell-bordered":!n.cellBordered,"vux-table-no-content-bordered":!n.contentBordered}},[n._t("default")],2)},i=[],a=t("2455");function l(n){t("af1c")}var d=!1,p=l,s=null,c=null,h=Object(a["a"])(o,r,i,d,p,s,c);e["a"]=h.exports},7685:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,'/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content\'s padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-form-preview {\n  position: relative;\n  background-color: #FFFFFF;\n}\n.weui-form-preview:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.weui-form-preview:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.weui-form-preview__hd {\n  position: relative;\n  padding: 10px 15px;\n  text-align: right;\n  line-height: 2.5em;\n}\n.weui-form-preview__hd:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-form-preview__hd .weui-form-preview__value {\n  font-style: normal;\n  font-size: 1.6em;\n}\n.weui-form-preview__bd {\n  padding: 10px 15px;\n  font-size: .9em;\n  text-align: right;\n  color: #999999;\n  line-height: 2;\n}\n.weui-form-preview__ft {\n  position: relative;\n  line-height: 50px;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n}\n.weui-form-preview__ft:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D5D5D6;\n  color: #D5D5D6;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.weui-form-preview__item {\n  overflow: hidden;\n}\n.weui-form-preview__label {\n  float: left;\n  margin-right: 1em;\n  min-width: 4em;\n  color: #999999;\n  text-align: justify;\n  text-align-last: justify;\n}\n.weui-form-preview__value {\n  display: block;\n  overflow: hidden;\n  word-break: normal;\n  word-wrap: break-word;\n}\n.weui-form-preview__btn {\n  position: relative;\n  display: block;\n  -ms-flex: 1;\n      flex: 1;\n  color: #3CC51F;\n  text-align: center;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbutton.weui-form-preview__btn {\n  background-color: transparent;\n  border: 0;\n  outline: 0;\n  line-height: inherit;\n  font-size: inherit;\n}\n.weui-form-preview__btn:active {\n  background-color: #EEEEEE;\n}\n.weui-form-preview__btn:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #D5D5D6;\n  color: #D5D5D6;\n  transform-origin: 0 0;\n  transform: scaleX(0.5);\n}\n.weui-form-preview__btn:first-child:after {\n  display: none;\n}\n.weui-form-preview__btn_default {\n  color: #999999;\n}\n.weui-form-preview__btn_primary {\n  color: #0BB20C;\n}\n.vux-form-preview {\n  overflow: hidden;\n}\n',""])},"7d27":function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\n.vux-divider {\n  display: table;\n  white-space: nowrap;\n  height: auto;\n  overflow: hidden;\n  line-height: 1;\n  text-align: center;\n  padding: 10px 0;\n  color: #666;\n}\n.vux-divider:after, .vux-divider:before {\n  content: '';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 50%;\n  background-repeat: no-repeat;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC)\n}\n.vux-divider:before {\n  background-position: right 1em top 50%\n}\n.vux-divider:after {\n  background-position: left 1em top 50%\n}\n",""])},8391:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\n.vux-form-preview {\n  margin-bottom: 16px;\n  margin-bottom: 1rem;\n}\n",""])},9121:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,'\n.vux-1px, .vux-1px-t, .vux-1px-b, .vux-1px-tb, .vux-1px-l, .vux-1px-r {\n  position: relative;\n}\n.vux-1px:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  border: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  height: 200%;\n  transform-origin: left top;\n  transform: scale(0.5);\n}\n.vux-1px-t:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.vux-1px-b:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.vux-1px-tb:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.vux-1px-tb:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.vux-1px-l:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleX(0.5);\n}\n.vux-1px-r:after {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 100% 0;\n  transform: scaleX(0.5);\n}\n.vux-table {\n  line-height: 40px;\n  position: relative;\n  width: 100%;\n  border-collapse: collapse;\n}\n.vux-table:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.vux-table th {\n  font-weight: 500;\n}\n.vux-table.vux-table-bordered:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleX(0.5);\n}\n.vux-table td, .vux-table th {\n  border-bottom: 1px solid #e0e0e0;\n  border-right: 1px solid #e0e0e0;\n  text-align: center;\n}\n.vux-table td, .vux-table th {\n  position: relative;\n  border-right: 0;\n  border-bottom: 0;\n}\n.vux-table td:before, .vux-table th:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.vux-table.vux-table-no-content-bordered td:before {\n  border-bottom-width: 0;\n}\n.vux-table.vux-table-no-content-bordered tr:last-child td:before {\n  border-bottom-width: 1px;\n}\n.vux-table td:after, .vux-table th:after {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 100% 0;\n  transform: scaleX(0.5);\n}\n.vux-table.vux-table-no-cell-bordered td:after, .vux-table.vux-table-no-cell-bordered th:after {\n  border-right-width: 0;\n}\n.vux-table tr td:last-child:after, .vux-table tr th:last-child:after {\n  border-right-width: 0;\n}\n.vux-table.vux-table-bordered tr td:last-child:after, .vux-table.vux-table-bordered tr th:last-child:after {\n  border-right-width: 1px;\n}\n',""])},9941:function(n,e,t){var o=t("7d27");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=t("499e").default;r("2652bb65",o,!0,{})},af1c:function(n,e,t){var o=t("9121");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=t("499e").default;r("c121089a",o,!0,{})},fc7a:function(n,e,t){var o=t("7685");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=t("499e").default;r("720b4ddb",o,!0,{})}}]);