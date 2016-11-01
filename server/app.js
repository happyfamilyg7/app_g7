<<<<<<< HEAD
var express = require("express")
=======
﻿var express = require("express")
>>>>>>> fcb309ff57f40b8657426dd67ddd2ac177ebcc94
var app = new express()
var path = require("path")
var staticpath = path.join(__dirname,"../static");
app.use(express.static(staticpath))
<<<<<<< HEAD
<<<<<<< HEAD
app.listen(80,function(){
	console.log("open http://127.0.0.1:80")
})
=======
app.listen(3000,function(){
	console.log("open http://127.0.0.1:3000")
=======
app.listen(80,function(){
	console.log("open http://127.0.0.1:80")
>>>>>>> b0fa05664a02c1db4773dd41f3cd1f5dc334f605
})
>>>>>>> fcb309ff57f40b8657426dd67ddd2ac177ebcc94
