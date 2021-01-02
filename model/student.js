var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var studentSchema = new Schema({
    name:String,
    age:Number,
    civility:String,
    photo:String
});

var studentmodel = mongoose.model("student",studentSchema);
module.exports =  studentmodel;