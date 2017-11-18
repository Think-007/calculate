App.controller('reportExportCtrl',['$scope','$ocLazyLoad', function($scope, $ocLazyLoad){
	$scope.loadBootstrap = function(){
		var myFileList=[];
		myFileList=loadFileList(myFileList);
		console.log("要加载的文件:"+myFileList);
        $ocLazyLoad.load(myFileList);
    }
    
    $scope.loadBootstrap();
  
    /*操作步骤初始化变量*/
    $scope.stepParam={
    	currteStep:0,
    	previous:false,
    	next:true,
    	submit:false
    }

    $scope.chooseTypeStep=function(step)
    {
    	$scope.stepParam.currteStep=step;
    	$("#stepLi li").eq(step).addClass("current").siblings("li").removeClass("current");
    	$("#stepTemplate .export").each(function(){
    		var _this=$(this);
    		var index=_this.index();
    		if(index==step)
    		{
    			_this.addClass("show").removeClass("hide");
    		}else{
    			_this.addClass("hide").removeClass("show");
    		
    		}
    	})
    	if(step==0){
    		$scope.stepParam.previous=false;
    	}else{
    		$scope.stepParam.previous=true;
    	}
    	if(step==4){
    		$scope.stepParam.next=false;
    		$scope.stepParam.submit=true;
    	}else{
    		$scope.stepParam.next=true;
    		$scope.stepParam.submit=false;
    	}
    
    }
    
    $scope.chooseStepType=function(type)
    {
    	if(type==0)
    	{
    		 $scope.chooseTypeStep($scope.stepParam.currteStep+1);
    	}else if(type==1){
    		 $scope.chooseTypeStep($scope.stepParam.currteStep-1);
    	}else if(type==2){
    		 swal({
			    	title: "提交成功",
			    	confirmButtonText: "确定"
			    });
    	}
    	
    }
    
    
    //选择模板
    $scope.chooseTemplateVerify=function (){
    	var addTempScope=getAngularScope("addTempCtrl");
    	addTempScope.verifyData();
    }
    
    //选择时间
    $scope.chooseTimeVerify=function (){
    	var addTempScope=getAngularScope("timeChooseCtrl");
    	addTempScope.verifyData();
    }
    
    //选择设备
    $scope.chooseDeviceVerify=function (){
    	var addTempScope=getAngularScope("chooseDeviceCtrl");
    	addTempScope.verifyData();
    	
    }
    
    //选择指标
    $scope.chooseIndexVerify=function (){
    	var addTempScope=getAngularScope("chooseIndexCtrl");
    	addTempScope.verifyData();
    	var addTempScope=getAngularScope("chooseDeviceCtrl");
    	addTempScope.verifyDataStep5();
    }
    
}]);
