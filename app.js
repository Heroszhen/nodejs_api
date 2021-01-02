const express = require("express");
const app = new express();

const routes = require("./routes/routes.js");
const db = require("./model/db.js");
//db.getConnection();

const fs = require(‘fs’);
const certFileBuf = fs.readFileSync("./docs/ec2-mongodb.pem");

// Set up mongoose connection
var mongoose = require(‘mongoose’);
var dev_db_url = "mongodb://userdemo:userdemo@docdb-2021-01-01-16-23-03.cluster-cfo18mts2t3o.eu-west-3.docdb.amazonaws.com:27017/dadi?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
var options = {
	sslCA: certFileBuf
};

mongoose.connect(mongoDB,options);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api',routes);

const port = process.env.PORT || '0.0.0.0';
app.listen(port); 