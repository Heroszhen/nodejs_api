const express = require("express");
const router = express.Router();

const admin = require("./admin.js");
const home = require("./home.js");

router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    };
    next(); // make sure we go to the next routes and don't stop here
});

// /api/amdin
router.use("/admin",admin);
// /api
router.use("/",home);

module.exports = router;