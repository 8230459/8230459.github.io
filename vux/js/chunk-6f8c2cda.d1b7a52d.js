(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f8c2cda"],{"02ef":function(t,e,n){var i=n("3fa3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("54a784e7",i,!0,{})},"3fa3":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.text-scroll {\n  height: 30px;\n  line-height: 30px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n",""])},"49c9":function(t,e,n){"use strict";n.r(e);var i=n("1e53"),r=n("f4b8"),s=n("1afd"),o=n("5f99"),a=(i["a"],r["a"],s["a"],o["a"],{components:{Box:i["a"],Swiper:r["a"],SwiperItem:s["a"],XTable:o["a"]},data:function(){return{currentIndex:0,list:[{url:"",img:"https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",title:"送你一朵fua"},{url:"",img:"https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",title:"送你一辆车"}],list2:["义务爱了 完成传奇世界H5-王者归来任务 获得20金币","义务爱了 完成传奇世界H5-王者归来任务 获得20金币","义务爱了 完成传奇世界H5-王者归来任务 获得20金币"]}},mounted:function(){$("pre,td:first-child").click(this.copy)}}),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("box",{attrs:{gap:"0 10px"}},[n("swiper",{attrs:{list:t.list},on:{"on-index-change":function(e){t.log("change")}},model:{value:t.currentIndex,callback:function(e){t.currentIndex=e},expression:"currentIndex"}}),n("pre",[t._v("currentIndex: 0,\nlist: [{\n  url: '',\n  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',\n  title: '送你一朵fua'\n}, {\n  url: '',\n  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',\n  title: '送你一辆车'\n}]")]),n("pre",[t._v('swiper(:list="list" v-model="currentIndex" @on-index-change="log(\'change\')")\n')]),n("swiper",{staticClass:"text-scroll",attrs:{auto:"auto",height:"30px",direction:"vertical",interval:2e3,"show-dots":!1}},t._l(t.list2,function(e,i){return n("swiper-item",{key:i},[t._v(t._s(t.list2))])})),n("pre",[t._v('swiper(auto height="30px" direction="vertical", :interval=2000, :show-dots="false" class="text-scroll")\n  swiper-item(v-for="item,index in list2", :key="index")\n')]),n("x-table",[n("tr",[n("td",[t._v("Swiper, SwiperItem,")])]),n("tr",[n("td",[t._v('v-model="index"')])]),n("tr",[n("td",[t._v(':list="[]"')])]),n("tr",[n("td",[t._v('direction="horizontal/vertical"')])]),n("tr",[n("td",[t._v(':show-dots="false"')])]),n("tr",[n("td",[t._v(':show-desc-mask="false"')])]),n("tr",[n("td",[t._v('dots-position="right/left"')])]),n("tr",[n("td",[t._v('dots-class="提示点样式名"')])]),n("tr",[n("td",[t._v("auto")])]),n("tr",[n("td",[t._v("loop")])]),n("tr",[n("td",[t._v(':interval="3000" /*轮播停留时长*/')])]),n("tr",[n("td",[t._v(':threshold="滑动超过这个距离时才滑动50"')])]),n("tr",[n("td",[t._v(':duration="切换动画时间300"')])]),n("tr",[n("td",[t._v('height="180px"')])]),n("tr",[n("td",[t._v(':aspect-ratio="宽高比"')])]),n("tr",[n("td",[t._v(':min-moving-distance="超过这个距离时才滑动"')])]),n("tr",[n("td",[t._v('@on-index-change="(currentIndex){}"')])]),n("tr",[n("td",[t._v('@on-get-height="(height){}" /*高度获取后触发*/')])])])],1)},d=[],c=n("2455");function p(t){n("02ef")}var v=!1,g=p,u=null,h=null,f=Object(c["a"])(a,l,d,v,g,u,h);e["default"]=f.exports}}]);