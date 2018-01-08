

App.controller('tableContrl', function($scope, $ocLazyLoad,locals, translateTip){
	
	var number=locals.getObject("newtableList");
	console.log(JSON.stringify(number));
	function init() {
		var template = "";
		template += "<tr><th>球道</th><th>标准杆</th>";
		for(var j in number[0].gameVal){	
				var name=number[0].gameVal[j].name;
				template += "<td>"+name+"</td>";

		}

		template += "</tr>";
		$("#name").append(template);
		
		var tablerecord="";
		for(var i in number){	
			var lane=number[i].lane;
			tablerecord += "<tr><td>"+lane+"</td><td>3</td>";
			for(var j in number[0].gameVal){	
				var score=number[i].gameVal[j].score;
				tablerecord += "<td>"+score+"</td>";

		}
			tablerecord += "</tr>";
	    }
		$("#score").append(tablerecord);
		
		};
		init();
	$scope.save=function(){
		number=[];
		var number=locals.setObject("newtableList",number);
		 locals.setObject("count","");//字符串
		 locals.setObject("lane",[]);
		 locals.setObject("secondpos","");//字符串
		alert("保存成功,测试版本请点击返回");
	}
});