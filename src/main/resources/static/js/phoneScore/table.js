

App.controller('tableContrl', function($scope, $ocLazyLoad,locals, translateTip){
	
	var number=locals.getObject("newtableList");
	console.log(number);
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
		console.log(tablerecord);
		$("#score").append(tablerecord);
		
		};
		init();
	
});