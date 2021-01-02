const express = require("express");
const app = new express();

const routes = require("./routes/routes.js");
const db = require("./model/db.js");
db.getConnection();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api',routes);

const port = process.env.PORT || 3000;
app.listen(port); 