
    var initurl="";
	function GetRequest(value) {  
	    
	    var url = decodeURI(location.search); //?id="123456"&Name="bicycle";
	    initurl=url;
	    console.log("initurl"+initurl);
	    var object = {};
	    if(url.indexOf("?") != -1)//url中存在问号，也就说有参数。  
	    {   
	      var str = url.substr(1);  //得到?后面的字符串
	      var strs = str.split("&");  //将得到的参数分隔成数组[id="123456",Name="bicycle"];
	      for(var i = 0; i < strs.length; i ++)  
	        {   
	　　　　　　  object[strs[i].split("=")[0]]=strs[i].split("=")[1];
	          
	　　　　　　}
	　　}
	    //return object[value];  
	  
	}  

App.controller('laneCtrl', function($scope, $ocLazyLoad, translateTip, $http){
	GetRequest();
	
	$scope.lane= [];
<<<<<<< HEAD
	var arr={};
=======
	
>>>>>>> df808107c43d42d40005fba1c0f760fa279b08fa
	$scope.clickLane = function(i){
	
	window.location.href = "result.html?lane="+i;//关闭窗口
	}
	
	$scope.ListController=function(){
<<<<<<< HEAD
		$scope.lane= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
	}
	
=======
		  $http.get("../../js/fakedata/lane.json")
		   .success(function(data){
			   var arr=data.lane;
			   var result=[];
			   for(var i=0;i<arr.length;i++){
			      
			       result.push(arr[i].id);
			   }
			   console.log(result);
		    $scope.lane=result;

		   })
		   .error(function(){
			   console.log("error");
		   });
		 };
>>>>>>> df808107c43d42d40005fba1c0f760fa279b08fa
	
});