//对象变成url
function http_builder_url(url, data) {
			if(typeof(url) == 'undefined' || url == null || url == '') {
				return '';
			}
			if(typeof(data) == 'undefined' || data == null || typeof(data) != 'object') {
				return '';
			}
			url += (url.indexOf("?") != -1) ? "" : "?";
			for(var k in data) {
				//url += ((url.indexOf("=") != -1) ? "&" : "") + k + "=" + encodeURI(data[k]);
		    url +=encodeURI(data[k])+",";
			
				
			}
			return url;
		}
var gamerlist="";
var lanei="";
var name="";
var init="";
var newCount="";
//url解析  例子：www.bicycle.com?id="123456"&Name="bicycle"；  
	function GetRequest(value) {  
	    
	    var url = decodeURI(location.search); //?id="123456"&Name="bicycle";
	    
	    var object = {};
	    if(url.indexOf("?") != -1)//url中存在问号，也就说有参数。  
	    {   
	      var str = url.substr(1);  //得到?后面的字符串
	      var strs = str.split("&");  //将得到的参数分隔成数组[id="123456",Name="bicycle"];
	      for(var i = 0; i < strs.length; i ++)  
	        {   
	　　　　　　  object[strs[i].split("=")[0]]=strs[i].split("=")[1];
	            lanei=object.lane;
	            name=object.gamer;
	            gamerlist=object.gamerlist;
<<<<<<< HEAD
=======
	            console.log(gamerlist,object);
>>>>>>> df808107c43d42d40005fba1c0f760fa279b08fa
	            newCount=object;
	            init="?gamerlist="+gamerlist;
	　　　　　　}
	　　}
	    
	  
	}  
	
App.controller('countContrl', function($scope, $ocLazyLoad,locals, translateTip){
<<<<<<< HEAD
	 console.log(locals.getObject("newtableList"));
	GetRequest();
	console.log(newCount);
	$scope.fieldname="asdksjlsf";
	 
	 $scope.ListController=function(){
	 
	$scope.score= [1,2,3,4,5,6,7,8];
	 }
	
=======
	  console.log(locals.getObject("newtableList"));
	GetRequest();
	console.log(newCount);
	$scope.fieldname="asdksjlsf";
	$scope.score= [1,2,3,4,5,6,7,8];
>>>>>>> df808107c43d42d40005fba1c0f760fa279b08fa
	$scope.clickNum = function(i){
	newCount["score"]=i;
	newCount["init"]="init";
	delete newCount["gamerlist"];
	
	
	var newtableList=locals.getObject("newtableList");
	
	for(var i in newtableList){
		var newdatascore=newtableList[i].gameVal;
		if(newtableList[i].lane==newCount.lane){
			for(var k in newdatascore){
				if(newdatascore[k].name!=newCount.gamer){
					
					newdatascore[k].score=newdatascore[k].score;
				}else{
					newdatascore[k].score=newCount.score;
				}	
			}
			
		}
		}
		
	
	window.location.href = "result.html?lane="+lanei;//关闭窗口
	  locals.setObject("count", newtableList);//字符串
	  locals.setObject("lane",newCount);
<<<<<<< HEAD
    console.log(newtableList,newCount);
=======
console.log(newtableList,newCount);
>>>>>>> df808107c43d42d40005fba1c0f760fa279b08fa
	}
	
	$scope.lane=lanei;
	$scope.name=name;
});