(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cb77e"],{"4a94":function(t,i,n){"use strict";n.r(i);var o=n("1e53"),e=n("5f99"),s=n("a6b6"),a=(o["a"],e["a"],s["a"],{components:{Box:o["a"],XTable:e["a"],XButton:s["a"]},methods:{show:function(){var t=this;this.$vux.loading.show({text:"Loading"}),setTimeout(function(){t.$vux.loading.hide()},2e3)}},mounted:function(){$("pre,td:first-child").click(this.copy)}}),u=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("box",{attrs:{gap:"0 10px"}},[n("x-button",{nativeOn:{click:function(i){return t.show(i)}}},[t._v("Load")]),n("pre",[t._v("import loadingPlugin from 'vux'\nVue.use(loadingPlugin)")]),n("pre",[t._v("show() {\n  this.$vux.loading.show({text: 'Loading'})\n  setTimeout(() => {\n    this.$vux.loading.hide()\n  }, 2000)\n}")]),n("pre",[t._v('x-button(@click.native="show") Load\n')]),n("x-table",[n("tr",[n("td",[t._v("this.$vux.loading.show()")])]),n("tr",[n("td",[t._v("this.$vux.loading.hide()")])]),n("tr",[n("td",[t._v("this.$vux.loading.show({text: 'Loading'})")])]),n("tr",[n("td",[t._v("this.$vux.loading.isVisible()")])]),n("tr",[n("td",[t._v("this.$vux.loading.isVisible()")])]),n("tr",[n("td",[t._v('text:"提示文字"')])]),n("tr",[n("td",[t._v("show:true")])]),n("tr",[n("td",[t._v("position:'fixed/absolute'")])]),n("tr",[n("td",[t._v("transition:'vux-mask'")])])])],1)},d=[],l=n("2455"),r=!1,v=null,h=null,c=null,x=Object(l["a"])(a,u,d,r,v,h,c);i["default"]=x.exports}}]);