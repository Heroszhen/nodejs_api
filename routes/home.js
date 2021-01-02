const express = require("express");
const router = express.Router();

//controllers
var StudentController = require("../controller/studentcontroller.js");
var HomeController = require("../controller/homecontroller.js");

router.get("/login",function(req,res,next){
	res.send("login");
});

router.get("/token",HomeController.getToken);
router.get("/decodetoken/:token",HomeController.decodeToken);

router.get("/students",StudentController.getAllStudents);
router.get("/student/:id",StudentController.getStudentById);
router.post("/student",StudentController.addOneStudent);
router.put("/student/:id",StudentController.updateOneStudent);
router.delete("/student/:id",StudentController.deleteOneStudent);

module.exports = router;