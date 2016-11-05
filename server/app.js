var express = require("express")
//post请求处理模块
var bodyparser = require("body-parser");
var app = new express();
//处理post请求，将post请求的数据分装为json
app.use(bodyparser.urlencoded({
	extended: true
}));

var express = require("express");
//post 请求处理模块
var bodyparser = require("body-parser");

var app = new express();
//处理 post 请求，将 post 请求的数据封装为 json 
app.use(bodyparser.urlencoded({
	extended: true
}));


var path = require("path");

require("./token.js")(app);
require("./jssdk.js")(app);

var saticpath = path.join(__dirname , "../static");
app.use(express.static(saticpath));

app.listen(8000,function(){
	console.log("open http://127.0.0.1:8000");
});

