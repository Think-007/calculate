/*数据交互*/
/**
*@param obj,callBack
* obj={
*   request.username:"",
*   request.password:""
* }
* @Description  登录
* **/
function login(obj,callback,errorback) {
    var options ={
        "url": "/login/tologin",
        "data": obj,
         callBack: function(data) {
        	 callback(data);
         },
         errCallBack:function(e)
         {
        	 errorback(e);
         }
    };
    
    //ajax调用函数
    requestAjax(options);
}

/***
 * 国际化语言语言设置
 */
function setLocale(obj,callback,errorCallback){
	var options ={
        "url": "/login/locale",
        "data": obj,
        callBack: function(data) {
        	callback(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**   ------------------------------------------------用户模块 ---start----------------------------------- **/
/***
 * 修改用户密码
 */
function updatePwd(obj,callback,errorCallback){
	var options ={
        "url": "/management/user/updatePassword",
        "data": obj,
        callBack: function(data) {
        	callback(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/***
 * 密码重置
 */
function resetPwd(obj,callback,errorCallback){
	var options ={
        "url": "/management/user/resetPassword",
        "data": obj,
        callBack: function(data) {
        	callback(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/***
 * 获取用户信息
 * @param obj
 * @param callback
 * @param errorCallback
 */
function getUser(obj,callback,errorCallback){
	var options ={
	        "url": "/management/user/getUser",
	        "data": obj,
	        callBack: function(data) {
	        	callback(data);
	        },
	        errCallBack:function(e)
	        {
	        	errorCallback(e);
	        }
	    };
		
	    //ajax调用函数
	    requestAjax(options);
}

/**
*@param obj,callBack
* obj={
*   request.keywords:"",
*   page.pageNum:1,
*   page.pageSize:10
* }
* @Description 查询用户列表
* **/
function getUserList(obj,callback,errorCallback) {
    var options ={
        "url": "/management/user/list",
        "data": obj,
        callBack: function(data) {
            callback(data);
        },
        errCallBack:function(e)
        {
            errorCallback(e);
        }
    };
    //ajax调用函数
    //callback(userlistResponse);
    requestAjax(options);
}




/**
 *  @Description 新增用户
 *@param obj,callBack
 * obj={
*   request.username:"",
*   request.realname:1,
*   request.phone:10，
*   request.email:"459489@qq.com",
*   request.password:"123456"
* }
 *
 * **/
function createUser(obj,callBack,errorCallback) {
    var options ={
        "url": "/management/user/create",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/****
 * 基础用户修改个人信息
 * @param obj
 * @param callback
 * @param errorCallback
 */
function updateSelf(obj, callback,errorCallback){
	var options ={
	        "url": "/management/user/updateSelf",
	        "data": obj,
	        callBack: function(data) {
	        	callback(data);
	        },
	        errCallBack:function(e)
	        {
	        	errorCallback(e);
	        }
	    };
	    //ajax调用函数
	    requestAjax(options);
	}
/**
 * 修改用户页面 保存按钮
 * 参数：obj ,callBack
 * obj={
 * 		"request.username":"登录名称",
		"request.realname":"真实名称",
		"request.phone":"13512378944",
		"request.email":"459489@qq.com",
		"request.status":"enabled "
	}
	return callBack(data);
 * **/
function updateUser(obj, callback,errorCallback){
	var options ={
        "url": "/management/user/update",
        "data": obj,
        callBack: function(data) {
        	callback(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/***
 * 更改用户使用状态
 * @param obj
 * @param callback
 * @param errorCallback
 */
function updateUserStatus(obj,callback,errorCallback){
	var options ={
	        "url": "/management/user/updateDisabled",
	        "data": obj,
	        callBack: function(data) {
	        	callback(data);
	        },
	        errCallBack:function(e)
	        {
	        	errorCallback(e);
	        }
	    };
	    //ajax调用函数
	    requestAjax(options);
}
/**
 * 获取用户角色
 * 参数：obj ,callBack
 * obj={
 * 		"request.id":1 
	}
	return callBack(data);
 * **/
function getRole(obj, callBack){
	var options ={
        "url": "management/userNew/edit/getRoles",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}



/**
 * 分配用户角色 保存按钮
 * 参数：obj ,callBack
 * obj={
 * 		"request.id":2,
		"request.roleIds":[3,4]
	}
	return callBack(data);
 * **/
function assignRole(obj, callBack){
	var options ={
        "url": "management/userNew/create/userRole",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}




/**
 * 删除用户
 * 参数：obj ,callBack
 * obj={
 * 		"request.id":2 
	}
	return callBack(data);
 * **/
function deleteRole(obj, callBack){
	var options ={
        "url": "management/userNew/delete",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/***
 * obj= {
 * 	request.roleId:1001//角色ID
 * }
 * @param {Object} obj
 * @param {Object} callBack
 * data = {
 * 	result:0,
 *  userList:[
 *    {"btsId":"85122852",
	   "btsName":"李role_01_01",
	   "btsType":"单板音"
	  }
 *   ]
 * }
 */
function getRoleUserList(obj, callBack){
	var options ={
        "url": "management/userNew/roleUserList",
        "data": obj,
        "async":false,//同步获取
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
};
/***
 * obj= {
 * 	request.roleId : 0,
 *  request.user.id :'heeh',
 *  request.user.name :'heeh',
 *  request.user.password :'123456',
 * }
 * @param {Object} obj
 * @param {Object} callBack
 */
function createOrUpdateUserByRole(obj,callBack){
	var options ={
        "url": "management/userNew/createUserByRole",
        "data": obj,
        "async":false,//同步获取
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/***
 * 删除用户
 * @param obj
 * @param callback
 * @param errorCallback
 */
function deleteUser(obj,callback,errorCallback){
	var options ={
        "url": "/management/user/delete",
        "data": obj,
        "async":false,//同步获取
        callBack: function(data) {
            callback(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}


/**   ------------------------------------------------用户模块 ---end----------------------------------- **/

/**   ------------------------------------------------组织模块 ---start----------------------------------- **/

/***
 * 获取组织机构列表
 * @param {Object} obj
 * @param {Object} callback
 * @param {Object} errorCallback
 */
function getOrgList(obj,callback,errorCallback){
	var options ={
        "url": "/management/department/getOrgs",
        "data": obj,
        //"async":false,//同步获取
        callBack: function(data) {
            callback(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/***
 * 删除组织机构
 * @param {Object} obj
 * @param {Object} callback
 * @param {Object} errorCallback
 */
function deleteOrg(obj,callback,errorCallback){
	var options ={
        "url": "/management/department/delete",
        "data": obj,
        //"async":false,//同步获取
        callBack: function(data) {
            callback(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/***
 * 创建组织
 * @param {Object} obj
 * @param {Object} callback
 * @param {Object} errorCallback
 */
function createOrg(obj,callback,errorCallback){
	var options ={
        "url": "/management/department/create",
        "data": obj,
        //"async":false,//同步获取
        callBack: function(data) {
            callback(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/***
 * 更新组织
 * @param {Object} obj
 * @param {Object} callback
 * @param {Object} errorCallback
 */
function updateOrg(obj,callback,errorCallback){
	var options ={
        "url": "/management/department/update",
        "data": obj,
        //"async":false,//同步获取
        callBack: function(data) {
            callback(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/**
 * 获取部门列表
 */
function getDepartmentTree(obj,callback,errorCallback){
	var options ={
	        "url": "/management/department/getDepartmentByLevelCode",
	        "data": obj,
	        //"async":false,//同步获取
	        callBack: function(data) {
	            callback(data);
	        },
	        errCallBack:function(e)
	        {
	        	errorCallback(e);
	        }
	    };
	    //ajax调用函数
	    requestAjax(options);
}
/**   ------------------------------------------------组织模块 ---end----------------------------------- **/









/**   ------------------------------------------------角色模块 ---start----------------------------------- **/

/**
 * 查询所有角色列表
 * 参数：obj ,callBack
 * obj={

	}
	return callBack(data);
 * **/
function getAllRoles(obj, callback,errorCallback){
	var options ={
        "url": "/management/role/getAll",
        "data": obj,
        "aysnc":false,
        callBack: function(data) {
        	callback(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
	
    //ajax调用函数
    requestAjax(options);
}

    /**
     * 新增角色基本信息
     * 参数：obj ,callBack
     * obj={
            "request.name":"",
            "request.description":""
        }
     return callBack(data);
     * **/
    function createRole(obj, callback,errorCallback){
        var options ={
            "url": "/management/role/create",
            "data": obj,
            callBack: function(data) {
                callback(data);
            },
            errCallBack:function(e)
            {
                errorCallback(e);
            }
        };

        //ajax调用函数
        requestAjax(options);
    }


    /**
     * 角色下的用户列表
     * 参数：obj ,callBack
     * obj={
                "request.role_id":"",
                "request. containRoleId":0,
                "page.pageNum":"",
                "page.pageSize":""
            }
     return callBack(data);
     * **/
    function getRoleUsers(obj, callback,errorCallback){
        var options ={
            "url": "/management/user/getRoleUsers/list",
            "data": obj,
            callBack: function(data) {
                callback(data);
            },
            errCallBack:function(e)
            {
                errorCallback(e);
            }
        };

        //ajax调用函数
        requestAjax(options);
    }
    
    /**
     * 角色下的用户列表
     * 参数：obj ,callBack
     * obj={
                "request.role_id":"",
                "page.pageNum":"",
                "page.pageSize":""
            }
     return callBack(data);
     * **/
    function getModules(obj, callback,errorCallback){
        var options ={
            "url": "/management/role/getModules",
            "data": obj,
            "async":false,//同步获取菜单
            callBack: function(data) {
                callback(data);
            },
            errCallBack:function(e)
            {
                errorCallback(e);
            }
        };

        //ajax调用函数
        requestAjax(options);
    }

    /**
     * 获取所有的菜单按钮信息
     * 参数：obj ,callBack
     * obj={
                }
     return callBack(data);
     * **/
    function getAllModules(obj, callback,errorCallback){
        var options ={
            "url": "/management/role/getAllModules",
            "data": obj,
            callBack: function(data) {
                callback(data);
            },
            errCallBack:function(e)
            {
                errorCallback(e);
            }
        };

        //ajax调用函数
        requestAjax(options);
    }

    /**
     * 获取所有的菜单按钮信息（树形，对有权限的进行选中）
     * 参数：obj ,callBack
     * obj={
     *     "request.roleId":1
     *     }
     *	return callBack(data);
     * **/
    function getMenuFunctionsChecked(obj, callback,errorCallback){
        var options ={
            "url": "/management/role/getMenuFunctionsChecked",
            "data": obj,
            callBack: function(data) {
                callback(data);
            },
            errCallBack:function(e)
            {
                errorCallback(e);
            }
        };

        //ajax调用函数
        requestAjax(options);
    }
    
    /**
     * 修改角色页面 保存按钮
     * 参数：obj ,callBack
     * obj={
    		"request.id":2,
			"request.name":"",
			"request.description":"",
    	}
    	return callBack(data);
     * **/
    function updateRole(obj, callBack){
    	var options ={
            "url": "/management/role/update",
            "data": obj,
            callBack: function(data) {
                callBack(data);
            },
            errCallBack:function(e)
            {
                console.log("服务器异常");
            }
        };
        //ajax调用函数
        requestAjax(options);
    }
    
    /**
     * 删除用户
     * 参数：obj ,callBack
     * obj={
     * 		"request.id":2 
    	}
    	return callBack(data);
     * **/
    function deleteRole(obj, callBack){
    	var options ={
            "url": "/management/role/delete",
            "data": obj,
            callBack: function(data) {
                callBack(data);
            },
            errCallBack:function(e)
            {
                console.log("服务器异常");
            }
        };
        //ajax调用函数
        requestAjax(options);
    }
 
    /**
     * 添加用户
     * 参数：obj ,callBack
     * obj={
     * 		"request.id":2，
     *      "request.userIds":[1,2] 
     *	}
     *	return callBack(data);
     * **/
    function addRoleUsers(obj, callBack){
    	var options ={
            "url": "/management/role/addUser",
            "data": obj,
            callBack: function(data) {
                callBack(data);
            },
            errCallBack:function(e)
            {
                console.log("服务器异常");
            }
        };
        //ajax调用函数
        requestAjax(options);
    }
    
    /**
     * 删除用户
     * 参数：obj ,callBack
     * obj={
     * 		"request.id":2，
     *      "request.userIds":[1,2] 
     *	}
     *	return callBack(data);
     * **/
    function deleteRoleUsers(obj, callBack){
    	var options ={
            "url": "/management/role/removeUser",
            "data": obj,
            callBack: function(data) {
                callBack(data);
            },
            errCallBack:function(e)
            {
                console.log("服务器异常");
            }
        };
        //ajax调用函数
        requestAjax(options);
    }


    /**
     * 获取单个角色下的菜单按钮信息
     * 参数：obj ,callBack
     * obj={
     * 		"request.roleId":1 
     *	}
     *	return callBack(data);
     * **/
    function getMenuFunctionIds(obj, callBack){
    	var options ={
                "url": "/management/role/getMenuFunctionIds",
                "async":false,
                "data": obj,
                callBack: function(data) {
                    callBack(data);
                },
                errCallBack:function(e)
                {
                    console.log("服务器异常");
                }
            };
            //ajax调用函数
            requestAjax(options);
        }

    /**
     * 获取单个角色下的菜单按钮信息
     * 参数：obj ,callBack
     * obj={
     * 		"request.id":2,
	 *		"request.menus":[1,2],
	 *		"request.functions":[1,2]
     *	}
     *	return callBack(data);
     * **/
    function updateInfo(obj, callBack){
    	var options ={
                "url": "/management/role/updateInfo",
                "data": obj,
                callBack: function(data) {
                    callBack(data);
                },
                errCallBack:function(e)
                {
                    console.log("服务器异常");
                }
            };
            //ajax调用函数
            requestAjax(options);
        }


/**
 * 获取角色权限信息
 * 参数：obj ,callBack
 * obj={
		"request.id":1 
	}
	return callBack(data);
 * **/
function getRolePermissions(obj, callBack){
	var options ={
        "url": "management/roleNew/edit/getRolePermissions",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/***
 * 查询角色对应权限
 * obj={
 * 	request.id:roleId
 * }
 * @param {Object} obj
 * @param {Object} callBack
 */
function showRolePermission(obj,callBack){
	var options ={
        "url": "management/roleNew/showRolePermission",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/**
 * obj={
 * 	request.roleId:1,
 *  request.permissionList:[001,002,003]
 * }
 * @param {Object} obj
 * @param {Object} callBack
 */
function saveRolePermission(obj,callBack){
	var options ={
        "url": "management/roleNew/saveRolePermission",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/***
 * 获取权限树模型
 * obj={}
 * @param {Object} obj
 * @param {Object} callBack
 */
function getPermissionTree(obj,callBack){
	var options ={
        "url": "management/roleNew/getPermissionTree",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
	
}
/***
 * 获取若干角色对应的权限列表，列表按树形结构展示
 * @param {Object} obj 角色列表
 * @param {Object} callback
 * @param {Object} errorCallback
 */
function getRolePermissionTree(obj,callback,errorCallback){
	var options ={
        "url": "/management/role/getMenuFunctions",
        "data": obj,
        callBack: function(data) {
        	callback(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
   
    //ajax调用函数
    requestAjax(options);
}

/**   ------------------------------------------------角色模块 ---end----------------------------------- **/







/**   ------------------------------------------------BTS分组模块 ---start----------------------------------- **/
/**
 * 获取bts分组信息
 * 参数：obj ,callBack
 * obj={

	}
	return callBack(data);
 * **/
function getNodeList(obj, callBack){
	var options ={
        "url": "managementNew/bts/getOrgs",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 新增分组页面 保存按钮
 * 参数：obj ,callBack
 * obj={
		"request.id":1121,
		"request.pId":112,
		"request.name":"节点名称"
	}
	return callBack(data);
 * **/
function createBtsOrg(obj, callBack){
	var options ={
        "url": "managementNew/btsorg/create",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}


/**
 * 新增分组页面 保存按钮
 * 参数：obj ,callBack
 * obj={
		"request.id":1121,
		"request.pId":112,
		"request.name":"节点名称"
	}
 return callBack(data);
 * **/
function createBtsOrg(obj, callBack){
    var options ={
        "url": "managementNew/btsorg/create",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

























/**
 * 编辑分组页面 保存按钮
 * 参数：obj ,callBack
 * obj={
		"request.id":1121,
		"request.name":"节点名称"
	}
	return callBack(data);
 * **/
function updateBtsOrg(obj, callBack){
	var options ={
        "url": "managementNew/btsorg/update",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}




/**
 * 删除分组
 * 参数：obj ,callBack
 * obj={
		"request.id":1121
	}
	return callBack(data);
 * **/
function deleteBtsOrg(obj, callBack){
	var options ={
        "url": "managementNew/btsorg/delete",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}




/**
 * 查询已经分组的基站列表 
 * 参数：obj ,callBack
 * obj={
		"request.keywords":"admin",
		"request.orgId":"分组id",
		"page.pageNum":1,
		"page.pageSize":10
	}
	return callBack(data);
 * **/
function getStatListForNode(obj, callBack){
	var options ={
        "url": "managementNew/bts/list_assigned",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}




/**
 * 查询未分组的基站列表 
 * 参数：obj ,callBack
 * obj={
		"request.keywords":"admin",
		"request.orgId":"分组id",
		"page.pageNum":1,
		"page.pageSize":10
	}
	return callBack(data);
 * **/
function getBtsListNotAssigned(obj, callBack){
	var options ={
        "url": "managementNew/bts/list_notassigned",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}





/**
 * 添加基站页面 添加按钮
 * 参数：obj ,callBack
 * obj={
		"request.orgId":分组id,
		"request.btsIds": [8230006]
	}
	return callBack(data);
 * **/
function saveBts(obj, callBack){
	var options ={
        "url": "managementNew/bts/save",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}




/**
 * 删除基站
 * 参数：obj ,callBack
 * obj={
		"request.id":5，
		"request.orgId":5
	}
	return callBack(data);
 * **/
function deleteBts(obj, callBack){
	var options ={
        "url": "managementNew/bts/delete",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}


/**   ------------------------------------------------网元分组管理 ---Start----------------------------------- **/

/**
 * @Description 新增分组
 *@param obj,callBack
 * obj={
*  "request.groupType":"网元类型",
* "request.name":"分组名称"，
* "request.file":"文件内容"

* }
 *
 * **/
function createGroup(obj,callBack,errorCallback) {
    var options ={
        "url": "/net/group/create",
        "data": obj,
        callBack:function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 获取单个分组
 * 参数：obj ,callBack
 * obj={
		"request.groupId":分组ID
	}
	return callBack(data);
 * **/
function getGroupOne(obj, callBack){
	var options ={
        "url": "/net/group/get",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**6.8.1.5   下载模板
 * @Description 新增分组
 *@param obj,callBack
*  requestInfo=
{
"request.groupType":"网元类型"
}
 *
 * **/
function downloadTemplate(obj,callBack,errorCallback) {
    var options ={
        "url": "/net/group/downloadTemplate",
        "data": obj,
        callBack:function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
        	errorCallback(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * @Description 网元下载
 *@param obj,callBack
 * obj={
*  "request.groupType":"网元类型",
* "request.name":"分组名称"，
* "request.file":"文件内容"

* }
 *
 * **/
function downloadGroup(obj, callBack){
	var options ={
        "url": "/net/group/download",
        "data": obj,
        callBack: function(data) {
            callBack(data);
           
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
    
    
}

/**
 * @Description 网元导出
 *@param obj,callBack
 * obj={
*  "request.groupType":"网元类型",
* "request.name":"分组名称"，
* "request.file":"文件内容"

* }
 *
 * **/
function exportGroup(obj, callBack){
	var options ={
        "url": "/net/group/export",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 删除网元
 * 参数：obj ,callBack
 * obj={
		"request.id":5，
		"request.orgId":5
	}
	return callBack(data);
 * **/
function deleteSag(obj, callBack){
	var options ={
        "url": "/net/group/delete",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/**
 * 删除网元
 * 参数：obj ,callBack
 * obj={
        "request.id":5，
        "request.orgId":5
    }
    return callBack(data);
 * **/
function deleteGroup(obj, callBack){
    var options ={
        "url": "/net/group/delete",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/**   ------------------------------------------------网元分组管理 ---end----------------------------------- **/

/**   ------------------------------------------------公用接口 ---Start----------------------------------- **/



/**
 * 6.7.1.3   查询指标列表
 * 参数：obj ,callBack
 * requestInfo=
{
"request.groupType":"网元类型SAG|BTS|UT|CAG|STG|HLR|BTSALARM"
}
 * **/
function getKpiList(obj, callBack){
    var options ={
        "url": "/net/kpi/listKpi",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}


/**   ------------------------------------------------公用接口---end----------------------------------- **/
/**   ------------------------------------------------分组详情 ---Start----------------------------------- **/
/**
 * 6.9.1.1   单个、多个 设置UT终端的开关
 * 参数：obj ,callBack
 * obj={
	"request.uIds":["uId"],
"request.status":开关状态,
	}
	return callBack(data);
 * **/
function createUT(obj, callBack){
	var options ={
        "url": "/net/ut/updateStatusByUIds",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.9.1.2   批量开启UT终端
 * 参数：obj ,callBack
 * obj={
	"request.groupId":"分组id",
"request.keywords ":"筛选的查询条件"

	}
	return callBack(data);
 * **/
function openUT(obj, callBack){
	var options ={
        "url": "/net/ut/updateStatusByConditions",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.9.1.3   批量关闭UT终端
 * 参数：obj ,callBack
 * obj={
	"request.groupId":"分组id",
"request.keywords ":"筛选的查询条件"


	}
	return callBack(data);
 * **/
function closeUT(obj, callBack){
	var options ={
        "url": "/net/ut/updateStatusByConditions",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.9.1.4   查询某一网元类型下的设备列表
 * 参数：obj ,callBack
 * obj={
"request.groupType":"网元类型SAG|BTS|UT",
"request.groupId":"分组id"
"request.keywords ":"筛选的查询条件"
"page.pageNum":1,
"page.pageSize":10
	}
	return callBack(data);
 * **/
function getGroupList(obj, callBack){
	var options ={
        "url": "/net/group/querygroup",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

function getGroupsList(obj, callBack){
	var options ={
        "url": "/net/group/list",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.9.1.4   查询某一网元类型下的设备列表
 * 参数：obj ,callBack
 * obj={
	"request.groupType":"网元类型SAG|BTS|UT",
"request.groupId":"分组id"
"request.keywords ":"筛选的查询条件"
"page.pageNum":1,
"page.pageSize":10
	}
	return callBack(data);
 * **/
function getTeamList(obj, callBack){
	var options ={
        "url": "/net/group/detail",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.12.1.1   报表导出按钮
 * 参数：obj ,callBack
 * obj={
	"request.reportTitle":" 报表名",
"request.reportType":" 网元类型其中之一",	
"request.kpiIds": [ "BTS000017"," BTS000018"],
"request.neIds": [ 90017,90018],
"request.dateType": "HOUR\DAY其中之一",	
"request.dateRanges": ["2017-12-11 10:00:00|2017-12-11 11:00:00",
"2017-12-11 13:00:00|2017-12-11 14:00:00"]	
	}
	return callBack(data);
 * **/
function submitTemplateInfo(obj, callBack){
	var options ={
	        "url": "/net/report/export",
	        "data": obj,
	        callBack: function(data) {
	            callBack(data);
	        },
	        errCallBack:function(e)
	        {
	            console.log("服务器异常");
	        }
	    };
	    //ajax调用函数
	    requestAjax(options);
}
/**
 * 6.11.1.6   获取单个模板 详细信息
 * 参数：obj ,callBack
 * obj={
	"request.templateId":" 模板id"
	}
	return callBack(data);
 * **/
function getTemplateInfo(obj, callBack){
	var options ={
	        "url": "/net/template/get",
	        "data": obj,
	        callBack: function(data) {
	            callBack(data);
	        },
	        errCallBack:function(e)
	        {
	            console.log("服务器异常");
	        }
	    };
	    //ajax调用函数
	    requestAjax(options);
}

/**
 * 6.10.1.1   查询某一网元类型下的设备列表
 * 参数：obj ,callBack
 * obj={
	"request.neType":"网元类型CAG|STG|HLR|BTSALARM",
	"request.keywords ":"筛选的查询条件"
	"page.pageNum":1,
	"page.pageSize":10
	}
	return callBack(data);
 * **/


function getDeviceList(obj,callBack){
	var options ={
	        "url": "/net/report/nes/list",
	        "data": obj,
	        callBack: function(data) {
	            callBack(data);
	        },
	        errCallBack:function(e)
	        {
	            console.log("服务器异常");
	        }
	    };
	    //ajax调用函数
	    requestAjax(options);
}

/**
 *6.7.1.2   查询指标分组列表（树）
 * 参数：obj ,callBack
 * obj={
	"request.groupType":"网元类型SAG|BTS|UT|CAG|STG|HLR|BTSALARM"
	}
	return callBack(data);
 * **/
function getKpiGroup(obj,callBack){
	var options ={
	        "url": "/net/kpi/listKpiGroup",
	        "data": obj,
	        callBack: function(data) {
	            callBack(data);
	        },
	        errCallBack:function(e)
	        {
	            console.log("服务器异常");
	        }
	    };
	    //ajax调用函数
	    requestAjax(options);
}

/**
 *6.7.1.3   查询指标列表
 * 参数：obj ,callBack
 * obj={
	"request.kpiGroupName":"kpi分组名"
	}
	return callBack(data);
 * **/

function getListKpi(obj,callBack){
	var options ={
	        "url": "/net/kpi/listKpi",
	        "data": obj,
	        callBack: function(data) {
	            callBack(data);
	        },
	        errCallBack:function(e)
	        {
	            console.log("服务器异常");
	        }
	    };
	    //ajax调用函数
	    requestAjax(options);
}

/**   ------------------------------------------------Kpi分组管理 ---start----------------------------------- **/
/**
 * 6.10.1.1   获取kpi分组信息
 * 参数：obj ,callBack
 * obj={
	"request.kpiType":"SAG\BTS其中之一"
	}
	return callBack(data);
 * **/
function getKpiList(obj, callBack){
	var options ={
        "url": "/net/kpiorg/getOrgs",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.10.1.2   新增分组 保存按钮
 * 参数：obj ,callBack
 * obj={
	"request.kpiType":" SAG\BTS其中之一",
"request.pId":"父级id",
	"request.name":"组织名"

	}
	return callBack(data);
 * **/
function createKpi(obj, callBack){
	var options ={
        "url": "/net/kpiorg/create",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.10.1.3   修改组织 保存按钮
 * 参数：obj ,callBack
 * obj={
	"request.id":"010103",
	"request.name":"组织名"
	}
	return callBack(data);
 * **/
function editKpi(obj, callBack){
	var options ={
        "url": "/net/kpiorg/update",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.10.1.3   6.10.1.4   删除组织 保存按钮
 * 参数：obj ,callBack
 * obj={
	"request.id":"0101"
	}
	return callBack(data);
 * **/
function deleteKpi(obj, callBack){
	var options ={
        "url": "/net/kpiorg/delete",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.10.1.5   kpi组中 添加选中的kpi
 * 参数：obj ,callBack
 * obj={
	"request.orgId":"0101",
"request.kpiIds":[8230002, 8230003]
	}
	return callBack(data);
 * **/
function saveKpi(obj, callBack){
	var options ={
        "url": "/net/kpi/save",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.10.1.6   kpi组中 删除选中的kpi
 * 参数：obj ,callBack
 * obj={
	"request.orgId":"0101",
"request.kpiIds":[8230002, 8230003]
	}
	return callBack(data);
 * **/
function deleteKpi(obj, callBack){
	var options ={
        "url": "/net/kpi/delete",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 *6.10.1.7   kpi组中 删除某组下、某特定条件下 所有的kpi
 * 参数：obj ,callBack
 * obj={
	"request.orgId":"0101",
"request.keywords":"筛选的查询条件"
	}
	return callBack(data);
 * **/
function deleteKpiAll(obj, callBack){
	var options ={
        "url": "/net/kpi/deleteCondition",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 *6.10.1.8   查询某组（包含当前级、子级）下已分配的 kpi列表
 * 参数：obj ,callBack
 * obj={
"request.orgId":"0101",
"request.keywords":"筛选的查询条件"
"page.pageNum":1,
"page.pageSize":10
	}
	return callBack(data);
 * **/
function getKpiListAssigned(obj, callBack){
	var options ={
        "url": "/net/kpi/list_assigned",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 *6.10.1.9   查询某组（包含当前级、子级）下未分配的 bts列表
 * 参数：obj ,callBack
 * obj={
"request.orgId":"0101",
"request.keywords":"筛选的查询条件"
"page.pageNum":1,
"page.pageSize":10
	}
	return callBack(data);
 * **/
function getKpiListnotAssigned(obj, callBack){
	var options ={
        "url": "/net/kpi/list_notassigned",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/**   ------------------------------------------------Kpi分组管理 ---end----------------------------------- **/
/**   ------------------------------------------------报表模板 ---start----------------------------------- **/
/**
 * 6.11.1.1   获取模板列表（分页）
 * 参数：obj ,callBack
 * obj={
	"request.templateType":"网元类型"
	}
	return callBack(data);
 * **/
function getTemplateList(obj, callBack){
	var options ={
        "url": "/net/template/list",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.11.1.1   获取模板列表（不分页）
 * 参数：obj ,callBack
 * obj={
	"request.templateType":"网元类型"
	}
	return callBack(data);
 * **/
function getTemplatePageList(obj, callBack){
	var options ={
        "url": "/net/template/getTemplates",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.11.1.6   获取单个模板 详细信息
 * 参数：obj ,callBack
 * obj={
	"request.templateType":"网元类型"
	}
	return callBack(data);
 * **/
function getTemplateOne(obj, callBack){
	var options ={
        "url": "/net/template/get",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.11.1.2   删除模板 保存按钮
 * 参数：obj ,callBack
 * obj={
	"request.id":"3"
	}
	return callBack(data);
 * **/
function deleteTemplate(obj, callBack){
	var options ={
        "url": "/net/template/delete",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.11.1.3   创建模板 保存按钮
 * 参数：obj ,callBack
 * obj={
	"request.templateType":" SAG\BTS其中之一",	"request.name":"模板名",
"request.kpiIds":[ "BTS000017"," BTS000018"],
"request.deviceIds":[ 90017,90018]
	}
	return callBack(data);
 * **/
function createTemplate(obj, callBack){
	var options ={
        "url": "/net/template/save",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.11.1.4   修改模板 保存按钮
 * 参数：obj ,callBack
 * obj={
	"request.templateType":" SAG\BTS其中之一",	"request.name":"模板名",
"request.kpiIds":[ "BTS000017"," BTS000018"],
"request.deviceIds":[ 90017,90018]
	}
	return callBack(data);
 * **/
function updateTemplate(obj, callBack){
	var options ={
        "url": "/net/template/update",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 复制模板
 * 参数：obj ,callBack
 * obj={
	"request.name":" SAG\BTS其中之一",	
"request.templateId":90017
	}
	return callBack(data);
 * **/
function copyTemplate(obj, callBack){
	var options ={
        "url": "/net/template/copy",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.11.1.5   获取单个模板 详细信息
 * 参数：obj ,callBack
 * obj={
"request.id":" 模板id"
	}
	return callBack(data);
 * **/
function getTemplate(obj, callBack){
	var options ={
        "url": "/stat/template/getTemplate",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}


/**   ------------------------------------------------报表模板 ---end----------------------------------- **/
/**   ------------------------------------------------报表导出和下载 ---start----------------------------------- **/
/**
 * 6.12.1.1   报表导出按钮
 * 参数：obj ,callBack
 * obj={
"request.reportType":" SAG\BTS其中之一",	
"request.name":"报表名称",
"request.kpiIds": [ "BTS000017"," BTS000018"],
"request.deviceIds": [ 90017,90018],
"request.dateType": "HOUR\DAY其中之一",	
"request.dateRanges": ["2017-12-11 10:00:00|2017-12-11 11:00:00",
"2017-12-11 13:00:00|2017-12-11 14:00:00"]	
	}
	return callBack(data);
 * **/
function exportTemplate(obj, callBack){
	var options ={
        "url": "/net/report/export",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.13.1.1   查询报表列表
 * 参数：obj ,callBack
 * obj={
"request.keywords":"筛选的查询条件"
"page.pageNum":1,
"page.pageSize":10
	}
	return callBack(data);
 * **/
function getReportList(obj, callBack){
	var options ={
        "url": "/net/report/list",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.13.1.2   下载报表按钮
 * 参数：obj ,callBack
 * obj={
"request.reportId":"报表id"
	}
	return callBack(data);
 * **/
function downloadReport(obj, callBack){
	var options ={
        "url": "/net/template/download",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 6.13.1.3   删除报表按钮
 * 参数：obj ,callBack
 * obj={
"request.id":"报表id"
	}
	return callBack(data);
 * **/
function deleteReport(obj, callBack){
	var options ={
        "url": "/net/template/delete",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/**
 * 6.7.1.1   查询某一网元类型下的分组下拉列表
 * 参数：obj ,callBack
 * obj={
"request.groupType":"网元类型"
	}
	return callBack(data);
 * **/
function getBtsList (obj, callBack){
	var options ={
        "url": "/net/group/list",
        "data": obj,
        callBack: function(data) {
            callBack(data);
        },
        errCallBack:function(e)
        {
            console.log("服务器异常");
        }
    };
    //ajax调用函数
    requestAjax(options);
}
/**   ------------------------------------------------报表导出和下载 ---end----------------------------------- **/


/**
 * 报表管理--报表默认数据列表   2017-04-27  yxg
 */
function getReoprtListByServer(obj,callBack,errCallBack){ 
	var options ={
	        "url": "/net/report/list",
	        "data": obj,
	        callBack: function(data) {
	            callBack(data);
	        },
	        errCallBack:function(e)
	        {
	        	errCallBack(e);
	        }
	    };
	 requestAjax(options);
}


/**
 * 报表管理--下载   2017-04-27  yxg
 */
function downloadReportByServer(obj,callback,errCallBack){
	var options ={
        "url": "/net/report/download",
        "data": obj,
        callBack: function(data) {
            callback(data);
        },
        errCallBack:function(e)
        {
        	errCallBack(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}

/**
 * 报表管理--删除   2017-04-27  yxg
 */
function deleteReportByServer(obj,callback,errCallBack){
	var options ={
        "url": "/net/report/delete",
        "data": obj,
        callBack: function(data) {
            callback(data);
        },
        errCallBack:function(e)
        {
        	errCallBack(e);
        }
    };
    //ajax调用函数
    requestAjax(options);
}
















