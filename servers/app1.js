//web 项目框架
var express = require ('express');
//导入 request 模块 http 请求模块插件
var request = require('request');
//实例化express模块
var app =new express();
//路由（后端）
/*app.route('/').get(function(req, res){
	res.send({
		"data":[1,2,32]
	});
});*/
app.route('/').get(function(req, res){
	request.post({
	    url:"http://op.juhe.cn/onebox/weather/query",
		formData:{
			cityname:"北京",
			key:"48f0c60d463f680e427d47cee43b8bc7"
		}
		//error判断结果是否错误  response 请求的文件信息 data:返回的数据
	},function(error,response,data){
		res.send(data);
	});
});
//// express 开启静态服务器，把指定的目录做跟目录app.use(express.static("./dest"));
app.use(express.static(""));
//创建http服务	
var server  = require('http').createServer(app);
//监听端口和IP地址
server.listen(9010, "0.0.0.0", function() {
	console.log('http://127.0.0.1:9010');
});
