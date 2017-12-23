

App.controller('finishContrl', function($scope, $ocLazyLoad,locals, translateTip){
	 console.log(locals.getObject("newtableList"));
	 var newtableList=locals.getObject("newtableList");
	$scope.fieldname="asdksjlsf";
	$scope.list="";
	$scope.dataShow = function(){

		$scope.list=locals.getObject("newtableList");
		 console.log($scope.list);
	for(var i in $scope.list){
		$scope.namelist=$scope.list[i].gameVal.name;
	}
	}
	
});