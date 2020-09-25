(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64744614"],{"81f6":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("el-form",{ref:"searchform",attrs:{inline:"",size:"small",model:t.searchMap}},[a("el-form-item",{attrs:{prop:"taskipid",label:"任务ip"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":t.getIpaddressv4List,loading:t.searchLoading},model:{value:t.searchMap.taskipid,callback:function(e){t.$set(t.searchMap,"taskipid",e)},expression:"searchMap.taskipid"}},t._l(t.ipaddressv4List,(function(t){return a("el-option",{key:t.id,attrs:{label:t.ipaddressv4,value:t.id}})})),1)],1),a("el-form-item",{attrs:{prop:"port",label:"端口"}},[a("el-select",{staticStyle:{width:"130px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":t.getPortList,loading:t.searchLoading},model:{value:t.searchMap.port,callback:function(e){t.$set(t.searchMap,"port",e)},expression:"searchMap.port"}},t._l(t.portList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.port,value:t.port}})})),1)],1),a("el-form-item",{attrs:{prop:"protocol",label:"协议"}},[a("el-select",{staticStyle:{width:"130px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":t.getProtocolList,loading:t.searchLoading},model:{value:t.searchMap.protocol,callback:function(e){t.$set(t.searchMap,"protocol",e)},expression:"searchMap.protocol"}},t._l(t.protocolList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.protocol,value:t.protocol}})})),1)],1),a("el-form-item",{attrs:{prop:"state",label:"端口状态"}},[a("el-select",{staticStyle:{width:"130px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":t.getStateList,loading:t.searchLoading},model:{value:t.searchMap.state,callback:function(e){t.$set(t.searchMap,"state",e)},expression:"searchMap.state"}},t._l(t.stateList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.state,value:t.state}})})),1)],1),a("el-form-item",{attrs:{prop:"service",label:"服务"}},[a("el-select",{attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":t.getServiceList,loading:t.searchLoading},model:{value:t.searchMap.service,callback:function(e){t.$set(t.searchMap,"service",e)},expression:"searchMap.service"}},t._l(t.serviceList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.service,value:t.service}})})),1)],1),a("el-form-item",{attrs:{prop:"version",label:"版本"}},[a("el-select",{attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":t.getVersionList,loading:t.searchLoading},model:{value:t.searchMap.version,callback:function(e){t.$set(t.searchMap,"version",e)},expression:"searchMap.version"}},t._l(t.versionList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.version,value:t.version}})})),1)],1),a("el-form-item",{attrs:{prop:"checkwhitelist",label:"安全检测白名单"}},[a("el-switch",{model:{value:t.searchMap.checkwhitelist,callback:function(e){t.$set(t.searchMap,"checkwhitelist",e)},expression:"searchMap.checkwhitelist"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.fetchData()}}},[t._v("查询")]),a("el-button",{attrs:{type:"info"},on:{click:function(e){return t.resetForm("searchform")}}},[t._v("重置")])],1),a("el-form-item",[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"默认名字：报告",clearable:"","prefix-icon":"el-icon-document"},model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}}),a("el-button",{attrs:{loading:t.downloadLoading,type:"success",icon:"el-icon-document"},on:{click:t.handleDownload}},[t._v("导出")])],1),a("el-form-item",[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:t.handleDeleteAll}},[t._v("删除")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleEdit("")}}},[t._v("新增")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",align:"center"}}),a("el-table-column",{attrs:{label:"序号",type:"index",index:1,align:"center",width:"50"}}),a("el-table-column",{attrs:{sortable:"",prop:"taskipid",label:"任务ip"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.getTaskipById(e.row.taskipid))+" ")]}}])}),a("el-table-column",{attrs:{sortable:"",prop:"port",label:"端口"}}),a("el-table-column",{attrs:{sortable:"",prop:"protocol",label:"协议"}}),a("el-table-column",{attrs:{sortable:"",prop:"state",label:"开放状态"}}),a("el-table-column",{attrs:{sortable:"",prop:"service",label:"服务"}}),a("el-table-column",{attrs:{sortable:"",prop:"version",label:"版本"}}),a("el-table-column",{attrs:{align:"center",sortable:"",label:"安全检测白名单"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.formatBoolean(e.row.checkwhitelist)))])]}}])},[a("template",{slot:"header"},[a("span",[t._v("安全检测白名单")]),a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("如果端口在白名单"),a("br"),t._v("则该端口不会进行安全检测")]),a("i",{staticClass:"el-icon-info"})])],1)],2),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(a){return t.handleEdit(e.row.id)}}}),a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(a){return t.handleDelete(e.row.id)}}})]}}])})],1),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,200,500,1e3],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"size-change":t.handleSizeChange,"current-change":t.fetchData}}),a("el-dialog",{attrs:{title:"编辑",visible:t.dialogFormVisible,width:"50%",center:"","before-close":t.cleanCache},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{"label-width":"100px"}},[null==t.getTaskipById(t.pojo.taskipid)?a("span",[a("el-form-item",{attrs:{required:"",label:"ipv4地址"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",remote:"",clearable:"",placeholder:"请输入关键词","remote-method":t.getIpaddressv4List,loading:t.searchLoading},model:{value:t.pojo.taskipid,callback:function(e){t.$set(t.pojo,"taskipid",e)},expression:"pojo.taskipid"}},t._l(t.ipaddressv4List,(function(t){return a("el-option",{key:t.id,attrs:{label:t.ipaddressv4,value:t.id}})})),1)],1)],1):a("span",[a("el-form-item",{attrs:{required:"",label:"ipv4地址"}},[a("span",[t._v(t._s(t.getTaskipById(t.pojo.taskipid)))])])],1),a("el-form-item",{attrs:{label:"端口"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:t.pojo.port,callback:function(e){t.$set(t.pojo,"port",e)},expression:"pojo.port"}})],1),a("el-form-item",{attrs:{label:"协议"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:t.pojo.protocol,callback:function(e){t.$set(t.pojo,"protocol",e)},expression:"pojo.protocol"}})],1),a("el-form-item",{attrs:{label:"开放状态"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:t.pojo.state,callback:function(e){t.$set(t.pojo,"state",e)},expression:"pojo.state"}})],1),a("el-form-item",{attrs:{label:"服务"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:t.pojo.service,callback:function(e){t.$set(t.pojo,"service",e)},expression:"pojo.service"}})],1),a("el-form-item",{attrs:{label:"版本"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:t.pojo.version,callback:function(e){t.$set(t.pojo,"version",e)},expression:"pojo.version"}})],1),a("el-form-item",{attrs:{label:"白名单"}},[a("el-switch",{attrs:{"active-text":"安全检测"},model:{value:t.pojo.checkwhitelist,callback:function(e){t.$set(t.pojo,"checkwhitelist",e)},expression:"pojo.checkwhitelist"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSave()}}},[t._v("保存")]),a("el-button",{on:{click:function(e){return t.closeDialogForm()}}},[t._v("关闭")])],1)],1)],1)},i=[],s=(a("4de4"),a("c975"),a("d81d"),a("4ec9"),a("d3b7"),a("ac1f"),a("3ca3"),a("841c"),a("1276"),a("ddb0"),a("99af"),a("b775")),n="center",l="taskport",r={getList:function(){return Object(s["a"])({url:"/".concat(n,"/").concat(l),method:"get"})},search:function(t,e,a){return Object(s["a"])({url:"/".concat(n,"/").concat(l,"/search/").concat(t,"/").concat(e),method:"post",data:a})},save:function(t){return Object(s["a"])({url:"/".concat(n,"/").concat(l),method:"post",data:t})},findById:function(t){return Object(s["a"])({url:"/".concat(n,"/").concat(l,"/").concat(t),method:"get"})},update:function(t,e){return null===t||""===t?this.save(e):Object(s["a"])({url:"/".concat(n,"/").concat(l,"/").concat(t),method:"put",data:e})},deleteById:function(t){return Object(s["a"])({url:"/".concat(n,"/").concat(l,"/").concat(t),method:"delete"})},deleteAllByIds:function(t){return Object(s["a"])({url:"/".concat(n,"/").concat(l,"/deleteids"),method:"post",data:t})}},c=a("c6ef"),d={data:function(){return{list:[],total:0,currentPage:1,pageSize:10,searchMap:{},dialogFormVisible:!1,pojo:{},id:"",searchLoading:!1,filename:"",listLoading:!0,multipleSelection:[],downloadLoading:!1,protocolList:[],stateList:[],serviceList:[],versionList:[],portList:[],taskIpIdAndIpList:[],taskipids:[],taskIpMap:new Map,ipaddressv4List:[]}},created:function(){this.fetchData()},methods:{cleanCache:function(){this.closeDialogForm()},getIpaddressv4List:function(t){var e=this;""!==t&&t?(this.searchLoading=!0,setTimeout((function(){e.searchLoading=!1,c["a"].search(1,10,{ipaddressv4:t}).then((function(a){e.ipaddressv4List=a.data.rows.filter((function(e){return e.ipaddressv4.toLowerCase().indexOf(t.toLowerCase())>-1}))}))}),200)):this.ipaddressv4List=[]},getPortList:function(t){var e=this;""!==t&&t?(this.searchLoading=!0,setTimeout((function(){e.searchLoading=!1,r.search(1,10,{port:t}).then((function(a){e.portList=a.data.rows.filter((function(e){return e.port.toLowerCase().indexOf(t.toLowerCase())>-1}))}))}),200)):this.portList=[]},getServiceList:function(t){var e=this;""!==t&&t?(this.searchLoading=!0,setTimeout((function(){e.searchLoading=!1,r.search(1,10,{service:t}).then((function(a){e.serviceList=a.data.rows.filter((function(e){return e.service.toLowerCase().indexOf(t.toLowerCase())>-1}))}))}),200)):this.serviceList=[]},getVersionList:function(t){var e=this;""!==t&&t?(this.searchLoading=!0,setTimeout((function(){e.searchLoading=!1,r.search(1,10,{version:t}).then((function(a){e.versionList=a.data.rows.filter((function(e){return e.version.toLowerCase().indexOf(t.toLowerCase())>-1}))}))}),200)):this.versionList=[]},getProtocolList:function(t){var e=this;""!==t&&t?(this.searchLoading=!0,setTimeout((function(){e.searchLoading=!1,r.search(1,10,{protocol:t}).then((function(a){e.protocolList=a.data.rows.filter((function(e){return e.protocol.toLowerCase().indexOf(t.toLowerCase())>-1}))}))}),200)):this.protocolList=[]},getStateList:function(t){var e=this;""!==t&&t?(this.searchLoading=!0,setTimeout((function(){e.searchLoading=!1,r.search(1,10,{state:t}).then((function(a){e.stateList=a.data.rows.filter((function(e){return e.state.toLowerCase().indexOf(t.toLowerCase())>-1}))}))}),200)):this.stateList=[]},getTaskIp:function(){for(var t=this,e=0;e<this.list.length;e++)this.taskipids.push(this.list[e].taskipid);c["a"].findByIds(this.taskipids).then((function(e){t.taskIpIdAndIpList=e.data;for(var a=0;a<t.taskIpIdAndIpList.length;a++)t.taskIpMap.set(t.taskIpIdAndIpList[a].split("-")[0],t.taskIpIdAndIpList[a].split("-")[1])}))},getTaskipById:function(t){return this.taskIpMap.get(t)},closeDialogForm:function(){this.dialogFormVisible=!1,this.ipaddressv4List=[]},handleDeleteAll:function(){var t=this;this.multipleSelection&&this.multipleSelection.length?this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){for(var e=[],a=0;a<t.multipleSelection.length;a++)e.push(t.multipleSelection[a].id);r.deleteAllByIds(e).then((function(e){t.$message({message:e.message,type:e.flag?"success":"error"}),e.flag&&t.fetchData()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})})):this.$message({message:"^_^至少选择一条记录哦~",type:"info"})},handleSelectionChange:function(t){this.multipleSelection=t},handleDownload:function(){var t=this;this.multipleSelection&&this.multipleSelection.length?(this.downloadLoading=!0,Promise.all([a.e("chunk-3c2d6792"),a.e("chunk-ee77943a")]).then(a.bind(null,"4bf8")).then((function(e){for(var a=["任务ip","端口","协议","开放状态","服务","版本","安全检测白名单"],o=["taskipid","port","protocol","state","service","version","checkwhitelist"],i=t.multipleSelection,s=0;s<i.length;s++)i[s].taskipid=t.getTaskipById(i[s].taskipid),i[s].checkwhitelist=i[s].checkwhitelist?"是":"";var n=t.formatJson(o,i);e.export_json_to_excel({header:a,data:n,filename:t.filename}),t.$refs.multipleTable.clearSelection(),t.downloadLoading=!1})),this.fetchData()):this.$message({message:"^_^至少选择一条记录哦~",type:"info"})},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},resetForm:function(t){this.$refs[t].resetFields(),this.searchMap={},this.ipaddressv4List=[],this.protocolList=[],this.stateList=[],this.serviceList=[],this.versionList=[],this.portList=[],this.$message({message:"已清空搜索条件",type:"info"})},handleSizeChange:function(t){this.pageSize=t,this.fetchData()},formatBoolean:function(t){return t?"是":""},fetchData:function(){var t=this;this.listLoading=!0,r.search(this.currentPage,this.pageSize,this.searchMap).then((function(e){t.list=e.data.rows,t.total=e.data.total,t.listLoading=!1})).then((function(){t.getTaskIp()}))},handleSave:function(){var t=this;r.update(this.id,this.pojo).then((function(e){t.$message({message:e.message,type:e.flag?"success":"error"}),e.flag&&t.fetchData()})),this.closeDialogForm()},handleEdit:function(t){var e=this;this.id=t,this.dialogFormVisible=!0,""!==t?r.findById(t).then((function(t){t.flag&&(e.pojo=t.data)})):this.pojo={}},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){r.deleteById(t).then((function(t){e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.fetchData()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},p=d,u=a("2877"),h=Object(u["a"])(p,o,i,!1,null,null,null);e["default"]=h.exports},c6ef:function(t,e,a){"use strict";a("99af");var o=a("b775"),i="center",s="taskip";e["a"]={getList:function(){return Object(o["a"])({url:"/".concat(i,"/").concat(s),method:"get"})},search:function(t,e,a){return Object(o["a"])({url:"/".concat(i,"/").concat(s,"/search/").concat(t,"/").concat(e),method:"post",data:a})},save:function(t){return Object(o["a"])({url:"/".concat(i,"/").concat(s),method:"post",data:t})},findById:function(t){return Object(o["a"])({url:"/".concat(i,"/").concat(s,"/").concat(t),method:"get"})},update:function(t,e){return null===t||""===t?this.save(e):Object(o["a"])({url:"/".concat(i,"/").concat(s,"/").concat(t),method:"put",data:e})},deleteById:function(t){return Object(o["a"])({url:"/".concat(i,"/").concat(s,"/").concat(t),method:"delete"})},findByIds:function(t){return Object(o["a"])({url:"/".concat(i,"/").concat(s,"/ids"),method:"post",data:t})},deleteAllByIds:function(t){return Object(o["a"])({url:"/".concat(i,"/").concat(s,"/deleteids"),method:"post",data:t})}}}}]);