"use strict";(self["webpackChunkpracticalcomp"]=self["webpackChunkpracticalcomp"]||[]).push([[552,286,986,269,904],{44986:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container r4"},[e("el-card",{staticClass:"box-card"},[e("el-tag",[t._v("默认顺序：")]),t._v(" "+t._s(t.oldList)+" "),e("el-tag",[t._v("拖动后的顺序 :")]),t._v(" "+t._s(t.newList)+" ")],1),e("el-table",{ref:"dragTable",staticStyle:{width:"100%"},attrs:{data:t.list,"row-key":"id",border:"",fit:"","highlight-current-row":""}},[e("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("span",[t._v(t._s(a.id))])]}}])}),e("el-table-column",{attrs:{width:"180px",align:"center",label:"Date"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("span",[t._v(t._s(a.timestamp))])]}}])}),e("el-table-column",{attrs:{"min-width":"300px",label:"Title"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("span",[t._v(t._s(a.title))])]}}])}),e("el-table-column",{attrs:{width:"110px",align:"center",label:"Author"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("span",[t._v(t._s(a.author))])]}}])}),e("el-table-column",{attrs:{align:"center",label:"Readings",width:"95"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("span",[t._v(t._s(a.pageviews))])]}}])}),e("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"110"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("el-tag",{attrs:{type:t._f("statusFilter")(a.status)}},[t._v(" "+t._s(a.status)+" ")])]}}])}),e("el-table-column",{attrs:{align:"center",label:"Drag",width:"80"},scopedSlots:t._u([{key:"default",fn:function({}){return[e("svg-icon",{staticClass:"drag-handler",attrs:{"icon-class":"drag"}})]}}])})],1)],1)},n=[],l=a(32155),i={name:"DragTable",filters:{statusFilter(t){const e={published:"success",draft:"info",deleted:"danger"};return e[t]}},data(){return{list:[{id:1,timestamp:971778462676,author:"Brenda",reviewer:"Karen",title:"Iepxpx Crpkwuogg Ksbzhdc Mpopdt Cnixu Aldfficw Ymhohcldvk Dlsgq Rbgrfgre",content_short:"mock data",content:'<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',forecast:18.85,importance:2,type:"JP",status:"published",display_time:"2001-02-24 20:34:30",comment_disabled:!0,pageviews:3885,image_uri:"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",platforms:["a-platform"]},{id:2,timestamp:828375724355,author:"Robert",reviewer:"Donna",title:"Osdanwxnw Rbqvlqfvx Euzcvc Mnldtvocmt Cgbkgdyfyh Eoon Ufnrk Ejdclb",content_short:"mock data",content:'<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',forecast:82.34,importance:1,type:"JP",status:"draft",display_time:"1995-06-11 16:36:17",comment_disabled:!0,pageviews:4117,image_uri:"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",platforms:["a-platform"]},{id:3,timestamp:328235475456,author:"Edward",reviewer:"Steven",title:"Hdvtcvfr Mwkjbglhon Hqqtpltf Fdxpfbbe Drqh Ewnkmukt",content_short:"mock data",content:'<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',forecast:89.23,importance:1,type:"CN",status:"draft",display_time:"2006-01-30 03:34:20",comment_disabled:!0,pageviews:2283,image_uri:"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",platforms:["a-platform"]},{id:4,timestamp:568951353484,author:"Daniel",reviewer:"Angela",title:"Jcyn Ggxdlkmt Mtwgvlqs Siirwkl Tyincxorf Hrhk",content_short:"mock data",content:'<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',forecast:45.28,importance:1,type:"JP",status:"published",display_time:"1988-06-11 08:56:34",comment_disabled:!0,pageviews:3352,image_uri:"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",platforms:["a-platform"]},{id:5,timestamp:288505631483,author:"Donald",reviewer:"Barbara",title:"Jwf Ciehdf Hqgnfr Dhnhx Yuzgzvtwj Ioqfxwgq Tvvnxce",content_short:"mock data",content:'<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',forecast:5.63,importance:2,type:"CN",status:"draft",display_time:"2014-12-06 03:56:13",comment_disabled:!0,pageviews:2615,image_uri:"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",platforms:["a-platform"]},{id:6,timestamp:200164586544,author:"Barbara",reviewer:"Helen",title:"Imbdbhx Oqk Upcgl Uvsbhf Qshgxcnhod Kcedhnwny Xrefmgx Hhhpfd",content_short:"mock data",content:'<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',forecast:94.82,importance:2,type:"US",status:"draft",display_time:"2001-02-11 04:28:48",comment_disabled:!0,pageviews:1087,image_uri:"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",platforms:["a-platform"]},{id:7,timestamp:788728380621,author:"Linda",reviewer:"Patricia",title:"Aemtxhqy Avyh Tlwbqln Qsuv Ygc Cxkqo Zbtvfqfpk Ctzcxrc Ddlvnel",content_short:"mock data",content:'<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',forecast:54.13,importance:2,type:"JP",status:"published",display_time:"2019-07-21 01:51:37",comment_disabled:!0,pageviews:2694,image_uri:"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",platforms:["a-platform"]}],listQuery:{page:1,limit:10},sortable:null,oldList:[],newList:[]}},created(){this.getList()},methods:{async getList(){this.oldList=this.list.map((t=>t.id)),this.newList=this.oldList.slice(),this.$nextTick((()=>{this.setSort()}))},setSort(){const t=this.$refs.dragTable.$el.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];this.sortable=l.Ay.create(t,{ghostClass:"sortable-ghost",setData:function(t){t.setData("Text","")},onEnd:t=>{const e=this.list.splice(t.oldIndex,1)[0];this.list.splice(t.newIndex,0,e);const a=this.newList.splice(t.oldIndex,1)[0];this.newList.splice(t.newIndex,0,a)}})}}},r=i,c=a(81656),o=(0,c.A)(r,s,n,!1,null,"6928803f",null),d=o.exports},80269:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dynamic_table r4"},[e("el-table",{key:t.key,staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","highlight-current-row":""}},[e("el-table-column",{attrs:{prop:"name",label:"name"}}),t._l(t.formThead,(function(a){return e("el-table-column",{key:a,attrs:{label:a},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row[a])+" ")]}}],null,!0)})}))],2)],1)},n=[],l={data(){return{key:1,tableData:[{name:"Sofia Rodriguez",age:"24",sex:"男",hobby:"Rap"},{name:"Schmidt",age:"25",sex:"女",hobby:"Rapping and dancing"},{name:"Alexander",age:"24",sex:"女",hobby:"dancing"}],formThead:[]}},watch:{formThead(t){this.key=this.key+1}},methods:{init(t){this.formThead=t}}},i=l,r=a(81656),c=(0,r.A)(i,s,n,!1,null,null,null),o=c.exports},36904:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var s=function(){var t=this,e=t._self._c;return e("el-form-item",{attrs:{label:"自定义字段"}},[e("el-select",{staticStyle:{width:"300px"},attrs:{multiple:"",placeholder:"动态表格字段控制"},on:{change:t.handleSelect},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},t._l(t.options,(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)},n=[],l={data(){return{current:[],options:["age","sex","hobby"]}},mounted(){this.$emit("handleSelect",this.current)},methods:{handleSelect(){this.$emit("handleSelect",this.current)}}},i=l,r=a(81656),c=(0,r.A)(i,s,n,!1,null,null,null),o=c.exports},78552:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table_wrap"},[e("PageHeaderForm",[e("FormItem",{on:{handleSelect:t.handleSelect}})],1),e("JvDivider",[t._v("动态表格")]),e("DynamicTable",{ref:"dynamicTable"}),e("JvDivider",[t._v("表格拖动排序")]),e("DragTable")],1)},n=[],l=a(28286),i={components:{...l},data(){return{formThead:[]}},methods:{handleSelect(t){this.$refs.dynamicTable.init(t),this.formThead=t}}},r=i,c=a(81656),o=(0,c.A)(r,s,n,!1,null,null,null),d=o.exports},28286:function(t,e,a){a.r(e),a.d(e,{DragTable:function(){return l["default"]},DynamicTable:function(){return s["default"]},FormItem:function(){return n["default"]}});var s=a(80269),n=a(36904),l=a(44986)}}]);
//# sourceMappingURL=552.bee3ad62.js.map