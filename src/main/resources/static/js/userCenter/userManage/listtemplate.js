var nodeInfo={};
/*定义module*/
	App.controller('app', ['$scope','$http', '$filter',function($scope,$http,$filter){

		$http.get("../../../js/manage/test/formdata.json")
	            .success(function(data){
	                $scope.templates = data;
	            })
	            .error(function(){
	                alert("出错")
	            });		
			//数据源
 

	//定义变量ID
	$scope.currentId = "";
	$scope.titleList = [
		"模板名称",
		"模板类型",
		"操作人",
		"操作"
	];
	/**后台获取用户列表**/
	$scope.templates= [];
    $scope.displayCollection = [].concat($scope.templates);
    
    $scope.pageSize = 1;
	var len = $scope.templates.length;
	$scope.pages = Math.ceil(len / $scope.pageSize); //分页数
	$scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
	$scope.pageList = [];
	$scope.selPage = 1;
	//设置表格数据源(分页)
	$scope.setData = function () {
	$scope.items = $scope.templates.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
	}
	$scope.items = $scope.templates.slice(0, $scope.pageSize);
	//分页要repeat的数组
	for (var i = 0; i < $scope.newPages; i++) {
	$scope.pageList.push(i + 1);
	}
	//打印当前选中页索引
	$scope.selectPage = function (page) {
	//不能小于1大于最大
	if (page < 1 || page > $scope.pages) return;
	//最多显示分页数5
	if (page > 2) {
	//因为只显示5个页数，大于2页开始分页转换
	var newpageList = [];
	for (var i = (page - 3) ; i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)) ; i++) {
	newpageList.push(i + 1);
	}
	$scope.pageList = newpageList;
	}
	$scope.selPage = page;
	$scope.setData();
	$scope.isActivePage(page);
	console.log("选择的页：" + page);
	};
	//设置当前选中页样式
	$scope.isActivePage = function (page) {
	return $scope.selPage == page;
	};
	//上一页
	$scope.Previous = function () {
	$scope.selectPage($scope.selPage - 1);
	}
	//下一页
	$scope.Next = function () {
	$scope.selectPage($scope.selPage + 1);
	};
    $scope.itemsByPage=2;
}]);   

App.filter('myStrictFilter', function($filter){
		  return function(input){
		    return $filter('filter')(input, true);
		  }
		});
App.filter('unique', function () {
		  return function (collection, keyname) {
		    var output = [],
		      keys = [];
		    angular.forEach(collection, function (item) {
		      var key = item[keyname];
		      if (keys.indexOf(key) === -1) {
		        keys.push(key);
		        output.push(item);
		      }
		    });
		    return output;
		  };
		});	
	
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
	

	