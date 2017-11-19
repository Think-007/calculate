/***
 * 权限树模型
 */
var permissionTree = [
   {
   	"name":"Managing Goods",
   	"id":"001",
   	"pId":"root",
   	"children":[
   	    {
   	    	"name":"商品操作权限",
   	    	"id":"00101",
   	    	"pId":"001",
   	    	"children":[
   	    		{
   	    			"name":"编辑商品",
   	    			"id":"0010101",
   	    			"pId":"00101",
   	    			"children":[]
   	    		},
   	    		{
   	    			"name":"上下架(改库存)",
   	    			"id":"001010102",
   	    			"pId":"00101",
   	    			"children":[]
   	    		},
   	    		{
   	    			"name":"删除商品",
   	    			"id":"001010103",
   	    			"pId":"00101",
   	    			"children":[]
   	    		}
   	    	]
   	    },
   	    {
   	    	"name":"发布商品",
   	    	"id":"00102",
   	    	"pId":"001",
   	    	"children":[]
   	    },
   	    {
   	    	"name":"出售中的商品",
   	    	"id":"00103",
   	    	"pId":"001",
   	    	"children":[]
   	    },
   	    {
   	    	"name":"仓库中的商品",
   	    	"id":"00104",
   	    	"pId":"001",
   	    	"children":[]
   	    },
   	    {
   	    	"name":"推荐管理",
   	    	"id":"00105",
   	    	"pId":"001",
   	    	"children":[]
   	    }
   	]
   },
   {
   		"name":"交易管理",
   		"id":"002",
   		"pId":"root",
   		"children":[
   			{
   				"name":"交易操作权限",
   				"id":"00201",
   				"pId":"002",
   				"children":[
   				    {
   				    	"name":"关闭交易",
   				    	"id":"0020101",
   				    	"pId":"00201",
   				    	"children":[]
   				    },
   				    {
   				    	"name":"修改价格",
   				    	"id":"0020102",
   				    	"pId":"00201",
   				    	"children":[]
   				    },
   				    {
   				    	"name":"延长发货",
   				    	"id":"0020103",
   				    	"pId":"00201",
   				    	"children":[]
   				    },
   				    {
   				    	"name":"导出订单",
   				    	"id":"0020103",
   				    	"pId":"00201",
   				    	"children":[]
   				    },
   				    {
   				    	"name":"同意退货/退款",
   				    	"id":"0020104",
   				    	"pId":"00201",
   				    	"children":[]
   				    },
   				    {
   				    	"name":"拒绝申请",
   				    	"id":"0020105",
   				    	"pId":"00201",
   				    	"children":[]
   				    },
   				    {
   				    	"name":"申请客服介入",
   				    	"id":"0020106",
   				    	"pId":"00201",
   				    	"children":[]
   				    }
   				]
   			},
   			{
   				"name":"已卖出商品",
   				"id":"00202",
   				"pId":"002",
   				"children":[
   					{
   						"name":"查看订单详情",
   						"id":"0020201",
   						"pId":"00202",
   						"children":[]
   					}
   				]
   			},
   			{
   				"name":"评价管理",
   				"id":"00203",
   				"pId":"002",
   				"children":[]
   			},
   			{
   				"name":"评价管理",
   				"id":"00203",
   				"pId":"002",
   				"children":[]
   			}
   			
   		]
   },
   {
   	    "name":"物流管理",
   	    "id":"003",
   	    "pId":"root",
   	    "children":[
   	    	{
   	    		"name":"查看发货列表",
   	    		"id":"00301",
   	    		"pId":"003",
   	    		"children":[
   	    			{
   	    				"name":"发货",
   	    				"id":"0030101",
   	    				"pId":"00301",
   	    				"children":[]
   	    			}
   	    		]
   	    	},
   	    	{
   	    		"name":"修改收货地址",
   	    		"id":"00302",
   	    		"pId":"003",
   	    		"children":[]
   	    	},
   	    	{
   	    		"name":"运费模板",
   	    		"id":"00303",
   	    		"pId":"003",
   	    		"children":[]
   	    	}
   	    ]
   }
]