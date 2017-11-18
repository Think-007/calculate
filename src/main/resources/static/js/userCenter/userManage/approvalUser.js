App.controller('approvalUser', function($scope,$ocLazyLoad){
	$scope.loadBootstrap = function(){
		var myFileList=[];
		myFileList=loadFileList(myFileList);
		var fileList=addFormRule(myFileList);
        $ocLazyLoad.load(fileList);
        //输入框语言国际化
        inputLanguage();
    };
    $scope.loadBootstrap();
	//获取编辑用户的id
	$scope.userId = getQueryString("userId");
	
	$scope.companyInfoDetails=false;
	
	//输入框语言国际化
    function inputLanguage(){
    	var lang=window.localStorage.lang||'zh-CN';
    	if(lang=="zh-CN"){
    		 $scope.userInfoList={"idCard":"身份证","passport":"护照","male":"男","female":"女","inUse":"使用中","invalid":"已失效"} 
    	}else{
    		 $scope.userInfoList={"idCard":"ID Card","passport":"Passport","male":"male","female":"female","inUse":"In Use","invalid":"Invalid"}
    	}
    }
	
	
	getUserInfo();

	function getUserInfo(){
		var obj={
				"request.userId":$scope.userId
		}
		getRigisterUserInfo(obj,function(data){
			console.log(data);
			$scope.userInfo=data.responseInfo.user;
			$scope.companyInfo=data.responseInfo.company;
			if($scope.companyInfo == undefined){
				$scope.companyInfoDetails=false;
			}else{
				$scope.companyInfoDetails=true;
				$scope.companyId=$scope.companyInfo.companyId;
			}
			
		},function(e){
			console.log(e);
		})
	}
	
	$scope.approvalUserPass=function(companyId){
		approvalUserByServer($scope.userId,companyId,"pass");
	}
	
	$scope.approvalUserNo=function(companyId){
		approvalUserByServer($scope.userId,companyId,"reject");
	}
	
	function approvalUserByServer(userId,companyId,status){
		var obj={
				"request.userId":userId,
				"request.companyId":companyId, 
				"request.approvalResult":status
				};
		approvalUser(obj,function(data){
			console.log(data);
			if(data.result == 0){
				swal(i18n.USERCENTER_TIPS.SAVE_SUCCESS, "", "success");
				//window.history.go(-1);
			}else{
				swal(getErrMsg(data.result));
			}	
		},function(e){});
	}

	function getQueryString(name)
	{
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if(r!=null)return  unescape(r[2]); return null;
	}
});

