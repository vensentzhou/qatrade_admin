(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-538e7f2c"],{a7e0:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("d2-container",{attrs:{type:"card"}},[i("d2-crud",t._b({staticStyle:{margin:"-15px 0"},on:{edit:function(e){e.index;var i=e.row;return t.goToEditPage("demo-business-issues-142-edit",i.id)},"edit-cache-db":function(e){e.index;var i=e.row;return t.goToEditPage("demo-business-issues-142-edit-cache-db",i.id)}}},"d2-crud",t.crud,!1)),i("d2-link-btn",{attrs:{slot:"footer",title:"issue #142",link:"https://github.com/d2-projects/d2-admin/issues/142"},slot:"footer"})],1)},s=[],o=i("cfab"),u={data:function(){return{crud:{columns:[{title:"姓名",key:"name",width:100},{title:"地址",key:"address"}],data:[],options:{border:!0,size:"mini"},rowHandle:{align:"center",width:240,custom:[{text:"无缓存编辑",size:"mini",emit:"edit"},{text:"带缓存编辑 DB",size:"mini",emit:"edit-cache-db"}]}}}},created:function(){this.getTableData()},methods:{getTableData:function(){var t=this;Object(o["b"])().then((function(e){t.crud.data=e.list})).catch((function(t){return console.log(t)}))},goToEditPage:function(t,e){this.$router.push({name:t,params:{id:e}})}}},r=u,c=i("2877"),d=function(t){t.options.__source="src/views/demo/business/issues/142/index.vue"},a=d,l=Object(c["a"])(r,n,s,!1,null,null,null);"function"===typeof a&&a(l);e["default"]=l.exports},cfab:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return o}));var n=i("9bd2");function s(){return Object(n["a"])({url:"/demo/business/issues/142/fetch",method:"get"})}function o(t){return Object(n["a"])({url:"/demo/business/issues/142/detail",method:"get",params:{id:t}})}}}]);