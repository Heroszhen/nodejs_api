const mongoose = require("mongoose");
var url = 'mongodb://localhost:27017/dadi';
//var url = "mongodb://testdocumentdb:testdocumentdb@docdb-2020-12-27-16-02-20.cluster-cfo18mts2t3o.eu-west-3.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false";

exports.getConnection = function(){
	mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology:true});
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  console.log("Connected");
	});
};


