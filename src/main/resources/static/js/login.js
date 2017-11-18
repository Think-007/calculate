$(function(){
	$("#user_code").on("focus",function(){
		 
		 $("#myTest").html('');
		 $("#user_error").html('');
	});
	$("#user_password").on("focus",function(){
		 $("#myTest").html('');
		 $("#pass_error").html('');
	});
	
});

App.controller('loginCtrl',["$scope",function($scope){
	document.onkeydown=function(event){
	  var e = event || window.event || arguments.callee.caller.arguments[0];
      if(e.keyCode == 13) {// -> ����go���� �Զ��ύ
    	 var x = document.activeElement.id;
    	 focusNextInput(x);
	  } 
	};
    /*��������ַ*/
 	$scope.server_url = getBasePath();
    /*��֤�û���*/
    function validate_user() {
    	var user_err=document.getElementById("user_error");
        if($("#user_code").val().length != 0){
        	user_err.innerHTML="";
            return true;
        }else {
            var errInfo=getErrMsg("user");           
            user_err.innerHTML=errInfo;
            return false;
        }
    }

    /*��֤����*/
    function validate_password() {
    	var pass_err=document.getElementById("pass_error");
        if($("#user_password").val().length != 0){
        	pass_err.innerHTML="";
            return true;
        }else {
            var errInfo=getErrMsg("pass");
            pass_err.innerHTML=errInfo;
            return false;
        }
    }
    function focusNextInput(thisInput){
        var inputs = document.getElementsByTagName("input");
        var len = inputs.length;
        if (thisInput == inputs[len-1].id){
        	$("input").blur();//ȡ������򽹵�
        	$scope.loginIn();
        } 
    } 
    $scope.validate_user = function () {
        validate_user();
    };

    $scope.validate_password = function () {
        validate_password();
    };
    //����Ƿ��¼��״̬�����Ϊtrue����ʾ��¼�У�Ϊfalse��ʾδ��¼
    $scope.logining = false;
    /*��¼*/
    $scope.loginIn = function(){
    	if(!$scope.logining){
    		$scope.toggleLoginIcon("show");
            var userName=$("#user_code").val();
            var password=$("#user_password").val();
            if(validate_user() && validate_password()){
            	//��¼ǰ�Ӱ�ť���֣���
                /*�˴�������ú�̨�ӿ���֤���û���������Ƿ�ƥ��*/
                $scope.request = {
					"request.username":userName,
					"request.password":password
				};
				var obj=$scope.request;
				login(obj,function(data){
					
					var result=data.result;
					if(result==0){  
						var user = data.responseInfo.entity;
						
						//��ȡ�û���
						var fullName =user.firstname;
						
						//�û���Ϣ���󣬱��浽cookie��
						var userInfo = {
								fullName:fullName,
								uid:user.id
						}
						localStorage.setItem("userInfo",JSON.stringify(userInfo));
						var url = $scope.server_url+"/views/manager/form/formExport.html";
					    //��ת����ҳ
						window.location.href = url;
						$scope.toggleLoginIcon("hide");
					}else{
						//ȥ����ť���֣���ʾ��¼�����룿����
						var errMsg=data.errorMsg;
						var errInfo=getErrMsg(result);
						document.getElementById("myTest").innerHTML=errInfo;
						$scope.toggleLoginIcon("hide");
					}
				},function(e){//error callback
					$scope.toggleLoginIcon("hide");
					//ȥ����ť���֣���ʾ��¼�����룿����
					 console.log(JSON.stringify(e));
				});
            }else{
            	$scope.toggleLoginIcon("hide");
            }
        }
    };//--loginIn-- end
    /*���õ�¼����ʽ*/
    $scope.toggleLoginIcon = function(flag){
    	if(flag=='show'){
    		$("#loginBtnText").text(getErrMsg("loginin"));
        	$("#loginIcon").removeClass("hide");;
        	$scope.logining = true;
    	}else{//���ص�¼��״̬
    		$("#loginBtnText").text(getErrMsg("login"));
        	$("#loginIcon").addClass("hide");;
        	$scope.logining = false;
    	}
    }
}]);
