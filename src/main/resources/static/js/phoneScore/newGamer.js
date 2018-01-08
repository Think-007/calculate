App.controller('newGamerCtrl', function($scope, $ocLazyLoad,locals, translateTip, $http){
	
	
	
	$scope.clickNum = function(){
	
	window.location.href = "result.html?gamer="+i;//关闭窗口
	}
	var namelist=locals.getObject("secondpos");//字符串
	 $scope.items=[{
		  gamer:'new'
	 }];
	if(namelist!=""){
		 $scope.items=namelist;
	}else{
		 $scope.items=[{
			  gamer:'new'
		 }];
	}
	
	
	 
	 //增加
	 $scope.addNew=function(){
	
	  $scope.items.push({
	  gamer:''
	  });
	 }
	 //汇总全部
	 $scope.addAll=function(){
	
		  var arr=$scope.items;
		   var result=[];
		   for(var i=0;i<arr.length;i++){
		      
		       result.push(arr[i].gamer);
		   }
		   console.log(result);
	    //$scope.gamerlist=result;
		//进入缓存
		   
		   locals.setObject("secondpos", result);//字符串
		   console.log(locals.getObject("secondpos"));
			window.location.href = "result.html";
		   
		
	 }
	 //刪除；
	$scope.deleteGamer=function(item){
	  var index=$scope.items.indexOf(item);
	  $scope.items.splice(index,1);
	 };
	//刪除全部；
		$scope.deleteAll=function(){
			 /*swal({  title:"删除全部",
				 text: "確認全部刪除？",
			        type: "warning",
			        showCancelButton: true,
			        confirmButtonColor: "#DD6B55",
			        confirmButtonText: "确认",
			        cancelButtonText:"取消",
			        closeOnConfirm: true
			    }, function () {
			    	$scope.items=[];
			    	
			    });*/
			 $scope.items=[{
				  gamer:'new'
			  }];  
         }
	 //上移；
	 $scope.moveUp=function(item){
	  var index=$scope.items.indexOf(item);
	  var tmp=angular.copy($scope.items[index-1]);
	  if(index==0){
	  alert('已經是第一個了，不能再向上移動了！');
	  return ;
	  }
	  $scope.items[index-1]=$scope.items[index];
	  $scope.items[index]=tmp;
	 
	 };
	 //下移；
	 $scope.moveDown=function(item){
	  var index=$scope.items.indexOf(item);
	 
	  if(index==$scope.items.length-1){
	  alert('已經是最後一個了，不能再向下移動了！');
	  return ;
	  }
	  var tmp=angular.copy($scope.items[index+1]);
	  $scope.items[index+1]=$scope.items[index];
	  $scope.items[index]=tmp;
	 }
	 
});