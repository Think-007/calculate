
	//url例子：www.bicycle.com?id="123456"&Name="bicycle"；  
	var newTimeGamer={};
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
	            newTimeGamer=object;
	　　　　　　}
	　　}
	    //return object[value];  
	  
	}  
	var newlane="1";
App.controller('resultCtrl', function($scope,$location,locals, $ocLazyLoad, translateTip){
	$scope.laneList=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
	$scope.gamerList={};
	$scope.gamerinfo=[];
	$scope.game=[];

	$scope.fieldname="asdksjlsf";
	$scope.count={};
	GetRequest();
	var namelist=locals.getObject("secondpos");//字符串

	$scope.lane=newTimeGamer.lane||1;1
	$scope.chengjiScore="";
	//计分回传
	


var newArr=[];
var gamearr=[];



     for (var i=0; i<namelist.length;i++){ 	
    	var newObj={"name":"","score":""};
    	newObj.name=namelist[i];
    	newObj.score=0;	
        newArr.push(newObj);   	 	
     }
      
     for(var j=0;j<$scope.laneList.length;j++){
    		var gameobk={};
    		gameobk.lane=$scope.laneList[j];
    		gameobk.gameVal=newArr;
    		
    		gamearr.push(gameobk);
    		
    	}
     

	$scope.list=[];

	$scope.datalist={};
	var countBack=locals.getObject("count");
	var laneBack=locals.getObject("lane");
	$scope.getDataList=function(){
		$scope.dataTable=gamearr;
	
				if($scope.dataTable!=countBack){
					$scope.dataTable=countBack;
					for(var i in $scope.dataTable){
						if($scope.dataTable[i].lane==$scope.lane){
							$scope.list=$scope.dataTable[i].gameVal;
						}
						
					}
					
					locals.setObject("newtableList", $scope.dataTable);//字符串
				}
		
    
   
    
	console.log(locals.getObject("newtableList"));
	
	console.log($scope.dataTable);
	}
	
	$scope.pre=function(lane){
		
		if(lane>1){
			lane-=1;
		}else{
			lane=18;
		}
	
		window.location.href = "result.html?lane="+lane;
	
	}
	
	$scope.next=function(lane){
		console.log(lane);
		if(lane<18){
		lane++;
		}else if(lane=18){
			lane=1;
		}
		window.location.href = "result.html?lane="+lane;
    
	}
$scope.lanebtn=function(){
		
		window.location.href = "lane.html";
	
	}
	
	$scope.chengji=function(gamer,lane)
	{
		console.log($scope.chengjiScore);

			window.location.href = "count.html?lane="+lane+"&gamer="+gamer;//关闭窗口
		
	}
});