"use strict";(self["webpackChunkpracticalcomp"]=self["webpackChunkpracticalcomp"]||[]).push([[979],{40979:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"lineBarChart",attrs:{id:"LineBarChart"}})},a=[],s=i(35225),n=i(72661),o={data(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted(){this.$_resizeHandler=(0,n.sg)((()=>{this.chart&&this.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler(e){"width"===e.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}},l={name:"LineBarChart",props:{chartData:{type:Object,required:!0}},mixins:[o],data(){return{chart:null}},watch:{chartData:{handler(e){this.setOptions(e)}}},methods:{initChart(){this.chart=s.init(this.$el),this.setOptions(this.chartData)},setOptions({lineData:e,barData:t,monthDates:i}){let r=[];for(var a=0;a<33;a++){var n=t[a]/e[a];r[a]=n.toFixed(2)}let o={title:{show:!1,text:"访客量统计",x:"center",y:0,textStyle:{color:"#B4B4B4",fontSize:16,fontWeight:"normal"}},backgroundColor:"#ffffff",tooltip:{trigger:"axis",backgroundColor:"rgba(255,255,255,0.1)",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#7B7DDC"}}},legend:{data:["已访问","预计访问","访问率"],textStyle:{color:"#B4B4B4"},top:"5%"},grid:{top:"10%",bottom:"5%",left:"3%",right:"3%",containLabel:!0},xAxis:{data:i,axisLine:{lineStyle:{color:"#B4B4B4"}},axisTick:{show:!1}},yAxis:[{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value} "}},{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value} "}}],series:[{name:"访问率",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:8,yAxisIndex:1,itemStyle:{normal:{color:"#F02FC2"}},data:r},{name:"已访问",type:"bar",barWidth:"50%",itemStyle:{normal:{barBorderRadius:5,color:new s.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#956FD4"},{offset:1,color:"#3EACE5"}])}},data:t},{name:"预计访问",type:"bar",barGap:"-100%",barWidth:"50%",itemStyle:{normal:{barBorderRadius:5,color:new s.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(156,107,211,0.5)"},{offset:.2,color:"rgba(156,107,211,0.3)"},{offset:1,color:"rgba(156,107,211,0)"}])}},z:-12,data:e}]};this.chart.setOption(o)}},beforeDestroy(){this.chart&&(this.chart.dispose(),this.chart=null)}},d=l,h=i(81656),c=(0,h.A)(d,r,a,!1,null,null,null),b=c.exports}}]);
//# sourceMappingURL=979.f583e148.js.map