const jwt = require("jsonwebtoken")

exports.getToken = function(req,res,next){
	let user = {
		id:1,
		email:"abc@gmail.com"
	};

	jwt.sign(user,"secretkey",(err,token)=>{
		res.setHeader('Content-Type', 'application/json');
		res.send({
			"status":1,
			"datas":token
		});
	});
}

exports.decodeToken = function(req,res,next){
	let token = req.params.token;

	jwt.verify(token,"secretkey",(err,decoded)=>{
		res.setHeader('Content-Type', 'application/json');
		res.send({
			"status":1,
			"action":"decode",
			"token":token,
			"datas":decoded
		});
	});
}