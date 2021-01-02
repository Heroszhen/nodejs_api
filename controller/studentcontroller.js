var studentM = require("../model/student.js");

exports.getAllStudents = function(req,res,next){
	studentM.find({},(error,docs)=>{
		//res.status(200).json(docs)
		res.setHeader('Content-Type', 'application/json');
		res.send({
			"status":1,
			"datas":docs
		});
	});
}

exports.getStudentById = function(req,res,next){
	let id = req.params.id;
	if(id <= 0)id = 1;
	else id -= 1;
	studentM.find({},(error,docs)=>{
		//res.status(200).json(docs)
		let data = null;
		if(docs[id])data = docs[id];
		res.setHeader('Content-Type', 'application/json');
		res.send({
			"status":1,
			"id":req.params.id,
			"datas":data
		});
	});
}

exports.addOneStudent = function(req,res,next){
	let body = req.body;
	let student = {
		name :body.name,
		age:body.age,
		civility:body.civility,
		photo:body.photo
	};
	studentM.create(student, function (err, doc) {
	    res.setHeader('Content-Type', 'application/json');
		res.send({
			"status":1,
		});
	})
}

exports.updateOneStudent = function(req,res,next){
	let body = req.body;
	let student = {
		name :body.name,
		age:body.age,
		civility:body.civility,
		photo:body.photo
	};
	studentM.create(student, function (err, doc) {
	    res.setHeader('Content-Type', 'application/json');
		res.send({
			"status":1,
		});
	})
}
exports.deleteOneStudent = function(req,res,next){
	let id = req.params.id;
	if(id <= 0)id = 0;
	else id -= 1;
	studentM.find({},(error,docs)=>{
		student = docs[id];
		studentM.findOneAndDelete(student,function (err, doc) {
		    res.setHeader('Content-Type', 'application/json');
			res.send({
				"status":1,
				"order":id
			});
		})
	});
}