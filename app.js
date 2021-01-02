const express = require("express");
const app = new express();

const routes = require("./routes/routes.js");
//const db = require("./model/db.js");
//db.getConnection();

const fs = require("fs");
const certFileBuf = fs.readFileSync("./docs/ec2-mongodb.pem");
// Set up mongoose connection
var mongoose = require("mongoose");
var dev_db_url = require("./config/config.js").url_mongodb;
var mongoDB = process.env.MONGODB_URI || dev_db_url;
var options = {
	sslCA: certFileBuf,
	useNewUrlParser: true,
	useUnifiedTopology:true
};

mongoose.connect(mongoDB,options)
.then(()=>console.log("connection"))
.catch((err)=>{console.log(err)});



var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api',routes);

//const port = process.env.PORT || 8000;
app.listen(8000); 