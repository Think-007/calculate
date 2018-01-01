

App.controller('loginCtrl',function($scope,locals){
	var number=locals.getObject("newtableList");
		console.log(number);
		if(number!=""){
			number=[];
		}
	locals.setObject("newtableList",number);
	document.onkeydown=function(event){
	  var e = event || window.event || arguments.callee.caller.arguments[0];
      if(e.keyCode == 13) {// -> ����go���� �Զ��ύ
    	 var x = document.activeElement.id;
    	 focusNextInput(x);
	  } 
	};
   
	
});
