(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-027d9023"],{"7fcb":function(e,t,n){"use strict";n("99af");var o=n("b775"),a="center",i="solution";t["a"]={getList:function(){return Object(o["a"])({url:"/".concat(a,"/").concat(i),method:"get"})},search:function(e,t,n){return Object(o["a"])({url:"/".concat(a,"/").concat(i,"/search/").concat(e,"/").concat(t),method:"post",data:n})},save:function(e){return Object(o["a"])({url:"/".concat(a,"/").concat(i),method:"post",data:e})},findById:function(e){return Object(o["a"])({url:"/".concat(a,"/").concat(i,"/").concat(e),method:"get"})},update:function(e,t){return null===e||""===e?this.save(t):Object(o["a"])({url:"/".concat(a,"/").concat(i,"/").concat(e),method:"put",data:t})},deleteById:function(e){return Object(o["a"])({url:"/".concat(a,"/").concat(i,"/").concat(e),method:"delete"})},findAllByVulnId:function(e){return Object(o["a"])({url:"/".concat(a,"/").concat(i,"/vuln/").concat(e),method:"get"})},deleteAllByIds:function(e){return Object(o["a"])({url:"/".concat(a,"/").concat(i,"/deleteids"),method:"post",data:e})}}},b121:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("br"),n("el-form",{ref:"searchform",attrs:{inline:"",size:"small",model:e.searchMap}},[n("el-form-item",{attrs:{prop:"vulnid",label:"漏洞"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"",clearable:"",placeholder:"请输入关键词","remote-method":e.getVulnList,loading:e.searchLoading},model:{value:e.searchMap.vulnid,callback:function(t){e.$set(e.searchMap,"vulnid",t)},expression:"searchMap.vulnid"}},e._l(e.vulnList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),n("el-form-item",{attrs:{prop:"solution",label:"修复方案"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":e.getSolutionList,loading:e.searchLoading},model:{value:e.searchMap.solution,callback:function(t){e.$set(e.searchMap,"solution",t)},expression:"searchMap.solution"}},e._l(e.solutionList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.solution,value:e.solution}})})),1)],1),n("el-form-item",{attrs:{prop:"codedemo",label:"修复代码示例"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":e.getCodedemoList,loading:e.searchLoading},model:{value:e.searchMap.codedemo,callback:function(t){e.$set(e.searchMap,"codedemo",t)},expression:"searchMap.codedemo"}},e._l(e.codedemoList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.codedemo,value:e.codedemo}})})),1)],1),n("el-form-item",{attrs:{prop:"configdemo",label:"修复配置示例"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":e.getConfigdemoList,loading:e.searchLoading},model:{value:e.searchMap.configdemo,callback:function(t){e.$set(e.searchMap,"configdemo",t)},expression:"searchMap.configdemo"}},e._l(e.configdemoList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.configdemo,value:e.configdemo}})})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.fetchData()}}},[e._v("查询")]),n("el-button",{attrs:{type:"info"},on:{click:function(t){return e.resetForm("searchform")}}},[e._v("重置")])],1),n("el-form-item",[n("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"默认名字：报告",clearable:"","prefix-icon":"el-icon-document"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),n("el-button",{attrs:{loading:e.downloadLoading,type:"success",icon:"el-icon-document"},on:{click:e.handleDownload}},[e._v("导出")])],1),n("el-form-item",[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.handleDeleteAll}},[e._v("删除")])],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleEdit("")}}},[e._v("新增")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",align:"center"}}),n("el-table-column",{attrs:{label:"序号",type:"index",index:1,align:"center",width:"50"}}),n("el-table-column",{attrs:{sortable:"",prop:"vulnid",label:"漏洞"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.getVulnById(t.row.vulnid))+" ")]}}])}),n("el-table-column",{attrs:{sortable:"",prop:"solution",label:"修复方案"}}),n("el-table-column",{attrs:{sortable:"",prop:"codedemo",label:"修复代码示例"}}),n("el-table-column",{attrs:{sortable:"",prop:"configdemo",label:"修复配置示例"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(n){return e.handleEdit(t.row.id)}}}),n("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(n){return e.handleDelete(t.row.id)}}})]}}])})],1),n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,200,500,1e3],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange,"current-change":e.fetchData}}),n("el-dialog",{attrs:{title:"编辑",visible:e.dialogFormVisible,width:"50%",center:"","before-close":e.cleanCache},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{"label-width":"100px"}},[null==e.pojo.id?n("span",[n("el-form-item",{attrs:{required:"",label:"漏洞"}},[n("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",remote:"",clearable:"",placeholder:"请输入关键词","remote-method":e.getVulnList,loading:e.searchLoading},model:{value:e.pojo.vulnid,callback:function(t){e.$set(e.pojo,"vulnid",t)},expression:"pojo.vulnid"}},e._l(e.vulnList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1):n("span",[n("el-form-item",{attrs:{required:"",label:"漏洞"}},[n("span",[e._v(e._s(e.getVulnById(e.pojo.vulnid)))])])],1),n("el-form-item",{attrs:{label:"修复方案"}},[n("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:e.pojo.solution,callback:function(t){e.$set(e.pojo,"solution",t)},expression:"pojo.solution"}})],1),n("el-form-item",{attrs:{label:"修复代码示例"}},[n("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:e.pojo.codedemo,callback:function(t){e.$set(e.pojo,"codedemo",t)},expression:"pojo.codedemo"}})],1),n("el-form-item",{attrs:{label:"修复配置示例"}},[n("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:e.pojo.configdemo,callback:function(t){e.$set(e.pojo,"configdemo",t)},expression:"pojo.configdemo"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSave()}}},[e._v("保存")]),n("el-button",{on:{click:function(t){return e.closeDialogForm()}}},[e._v("关闭")])],1)],1)],1)},a=[],i=(n("4de4"),n("c975"),n("d81d"),n("b0c0"),n("4ec9"),n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("1276"),n("ddb0"),n("7fcb")),l=n("dce3"),c={data:function(){return{list:[],total:0,currentPage:1,pageSize:10,searchMap:{},dialogFormVisible:!1,pojo:{},id:"",filename:"",listLoading:!0,multipleSelection:[],downloadLoading:!1,vulnMap:new Map,vulnids:[],vulnIdAndVulnNameList:[],searchLoading:!1,vulnList:[],solutionList:[],codedemoList:[],configdemoList:[]}},created:function(){this.fetchData()},methods:{cleanCache:function(){this.closeDialogForm()},getConfigdemoList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,i["a"].search(1,10,{configdemo:e}).then((function(n){t.configdemoList=n.data.rows.filter((function(t){return t.configdemo.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.configdemoList=[]},getCodedemoList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,i["a"].search(1,10,{codedemo:e}).then((function(n){t.codedemoList=n.data.rows.filter((function(t){return t.codedemo.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.codedemoList=[]},getSolutionList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,i["a"].search(1,10,{solution:e}).then((function(n){t.solutionList=n.data.rows.filter((function(t){return t.solution.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.solutionList=[]},getVulnList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,l["a"].search(1,10,{name:e}).then((function(n){t.vulnList=n.data.rows.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.vulnList=[]},getVuln:function(){var e=this;this.vulnids=[];for(var t=0;t<this.list.length;t++)this.vulnids.push(this.list[t].vulnid);l["a"].findByIds(this.vulnids).then((function(t){e.vulnIdAndVulnNameList=t.data;for(var n=0;n<e.vulnIdAndVulnNameList.length;n++)e.vulnMap.set(e.vulnIdAndVulnNameList[n].split("-")[0],e.vulnIdAndVulnNameList[n].split("-")[1])}))},getVulnById:function(e){return this.vulnMap.get(e)},closeDialogForm:function(){this.dialogFormVisible=!1,this.vulnList=[]},handleDeleteAll:function(){var e=this;this.multipleSelection&&this.multipleSelection.length?this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){for(var t=[],n=0;n<e.multipleSelection.length;n++)t.push(e.multipleSelection[n].id);i["a"].deleteAllByIds(t).then((function(t){e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.fetchData()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})})):this.$message({message:"^_^至少选择一条记录哦~",type:"info"})},handleSelectionChange:function(e){this.multipleSelection=e},handleDownload:function(){var e=this;this.multipleSelection&&this.multipleSelection.length?(this.downloadLoading=!0,Promise.all([n.e("chunk-3c2d6792"),n.e("chunk-ee77943a")]).then(n.bind(null,"4bf8")).then((function(t){for(var n=["漏洞","修复方案","修复代码示例","修复配置示例"],o=["vulnid","solution","codedemo","configdemo"],a=e.multipleSelection,i=0;i<a.length;i++)a[i].vulnid=e.getVulnById(a[i].vulnid);var l=e.formatJson(o,a);t.export_json_to_excel({header:n,data:l,filename:e.filename}),e.$refs.multipleTable.clearSelection(),e.downloadLoading=!1})),this.fetchData()):this.$message({message:"^_^至少选择一条记录哦~",type:"info"})},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},resetForm:function(e){this.$refs[e].resetFields(),this.searchMap={},this.vulnList=[],this.solutionList=[],this.codedemoList=[],this.configdemoList=[],this.$message({message:"已清空搜索条件",type:"info"})},handleSizeChange:function(e){this.pageSize=e,this.fetchData()},formatBoolean:function(e){return e?"是":""},fetchData:function(){var e=this;this.listLoading=!0,i["a"].search(this.currentPage,this.pageSize,this.searchMap).then((function(t){e.list=t.data.rows,e.total=t.data.total,e.listLoading=!1})).then((function(){e.getVuln()}))},handleSave:function(){var e=this;i["a"].update(this.id,this.pojo).then((function(t){e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.fetchData()})),this.closeDialogForm()},handleEdit:function(e){var t=this;this.id=e,this.dialogFormVisible=!0,""!==e?i["a"].findById(e).then((function(e){e.flag&&(t.pojo=e.data)})):this.pojo={}},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){i["a"].deleteById(e).then((function(e){t.$message({message:e.message,type:e.flag?"success":"error"}),e.flag&&t.fetchData()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}},s=c,r=n("2877"),u=Object(r["a"])(s,o,a,!1,null,null,null);t["default"]=u.exports},dce3:function(e,t,n){"use strict";n("99af");var o=n("b775"),a="center",i="vuln";t["a"]={getList:function(){return Object(o["a"])({url:"/".concat(a,"/").concat(i),method:"get"})},search:function(e,t,n){return Object(o["a"])({url:"/".concat(a,"/").concat(i,"/search/").concat(e,"/").concat(t),method:"post",data:n})},save:function(e){return Object(o["a"])({url:"/".concat(a,"/").concat(i),method:"post",data:e})},findById:function(e){return Object(o["a"])({url:"/".concat(a,"/").concat(i,"/").concat(e),method:"get"})},update:function(e,t){return null===e||""===e?this.save(t):Object(o["a"])({url:"/".concat(a,"/").concat(i,"/").concat(e),method:"put",data:t})},deleteById:function(e){return Object(o["a"])({url:"/".concat(a,"/").concat(i,"/").concat(e),method:"delete"})},findByIds:function(e){return Object(o["a"])({url:"/".concat(a,"/").concat(i,"/ids"),method:"post",data:e})},deleteAllByIds:function(e){return Object(o["a"])({url:"/".concat(a,"/").concat(i,"/deleteids"),method:"post",data:e})}}}}]);