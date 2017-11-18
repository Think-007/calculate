$(function(){
	/*单击行，添加选中样式*/
	$("table tbody").delegate("tr","click",function(event){
		var target = event.target||event.srcElement;
		$(this).siblings().find("input").prop("checked", false);
		var _input = $(this).find('input');
		var _nodeName = target.nodeName.toLowerCase();
		if(_nodeName=='input'){
			_input.checked = !_input.checked;  
		}else if(_nodeName!='label'){
			_input.click();
		}
	});
});
var nodeInfo={};
App.filter("jsonDate", function($filter) {
    return function(input, format) {

        //从字符串 /Date(1448864369815)/ 得到时间戳 1448864369815
        var date = new Date(input);

        //转成指定格式
        return $filter("date")(date, format);
   };
});
/*定义module*/
App.controller('app', ['$scope','$ocLazyLoad', function($scope, $ocLazyLoad){
	var pageNum=1;//页码
	$scope.loadBootstrap = function(){
		var myFileList=[];
		myFileList=loadFileList(myFileList);
		//console.log("要加载的文件:"+myFileList);
        $ocLazyLoad.load(myFileList);
    }
    
    $scope.loadBootstrap();

	//定义变量ID
	$scope.currentId = "";
	$scope.titleList = [
		"设备类型",
		"分组名称",
		"操作"
	];
	/**后台获取用户列表**/
	$scope.list= [];
	/**分页信息*/
	$scope.page = {};
	/* 当前页面最后一条记录的登录名，分页查询时作为查询条件使用，默认查询第一页时传0*/
	$scope.currentPageLast = 0;
     /*分页*/
	pageNav.fn = function(p,pn){
		pageNum=p;
		$scope.getUserList(p);
    };
    /*查询条件*/
    $scope.searchForm = {
    		"btsType":"",
    		"btsName":""
    };
	/***
	 * 查询用户数据
	 * @param {Object} page下一页页码????分页查询条件有问题
	 */
    var count = 0;//第一查询时候，
    $scope.getUserList = function(page){
    	var len = $scope.list.length;
		if (len>0 && $scope.list[len-1].loginname!=""){
			$scope.currentPageLast = $scope.list[len-1].loginname;
		}
    	var keywords = $scope.currentPageLast;
    	var page = page;
    	var pageSize = 10;//默认一页显示十条
    	var obj = {
    		"request.btsType":$scope.searchForm.btsType,
    		"request.btsName":$scope.searchForm.btsName,
			"page.pageNum":page,
			"page.pageSize":pageSize
		}
    	BtsManage.queryBtsList(obj,function(data){//查询成功赋值
    		$scope.list = data.responseInfo.lists;
    		$scope.page =  data.responseInfo.page;
    		$scope.$applyAsync($scope.list);
	        //去掉checkbox全选样式
	        $("#che_0").prop("checked", false);
			$("#che_1").prop("checked", false);
			if(count==0){
				pageNav.go(1,$scope.page.pages);
				count++;
			}
    	});
    };
   
  
   
	
	
	
	/*全选样式变换*/
	$scope.checkAll=function (){
		var checkbox=$("#box input[type='checkbox'][data-admin='false']");
		if(checkbox.length>0){
			if(checkbox.prop("checked") == true){
		    	checkbox.prop("checked", false);
		    }else{
		    	checkbox.prop("checked", true);
		    }
		}
		var checkAll = event.target.id=="che_0"?"che_1":"che_0";
		$("#"+checkAll).prop("checked", !$("#"+checkAll).prop("checked"));
	};
	/*查询按钮触发*/
	$scope.$on('searchForm',function(e,data){
		 $scope.searchForm = data;
		 $scope.getUserList(0);
	});
	/*监听ng-repeat渲染完成*/
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
    	  /*设置按钮权限*/
          var leftMenuScope =  getAngularScope("leftMenu");
          leftMenuScope.setButtonPermission();
          leftMenuScope.$apply();
    });

}]);
/*查询窗口*/
App.controller("btsSearch",['$scope',function($scope){
	/*查询条件*/
    $scope.searchForm = {
    		"btsType":"",
    		"btsName":""
    };
	/*获取所有角色列表*/
	$scope.getRoleList = function(){
		getAllRoles({},function(data){
			
			if(data.result==0){
				var roleList = data.responseInfo.roles;
				$scope.generateRoleOptions(roleList);//生成角色列表
			}
		});
	};
	/*动态生成角色列表select标签的option标签*/
	$scope.generateRoleOptions = function(roleList){
	  
		$("#rolelist").html('');
		var emptyOption =  "<option value=''> </option>";
		$("#rolelist").append(emptyOption);
		$.each(roleList,function (index,item){
			var optstr = "<option value='"+item.id+"'>"+item.name+"</option>";
			$("#rolelist").append(optstr);
		});
		$("#rolelist").selectpicker('refresh');
		$('#rolelist').selectpicker('show');
	};
	 /*查询按钮*/
    $scope.searchUsers = function(){
    	$scope.$emit("searchForm",$scope.searchForm);
    	
    };
    /*查询条件重置*/
    $scope.searchReset = function(){
    	$scope.searchForm.username = "";
    	$scope.searchForm.roleId = "";
    	$('#rolelist').selectpicker("val","");
    	$scope.$emit("searchForm",$scope.searchForm);
    	
    };
}]);


