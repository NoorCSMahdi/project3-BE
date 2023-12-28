//load express module
const express = require('express');
//initialize router functionality from express framework
const router = express.Router();
//require index controller
const indexCntrl = require("../controllers/index");
//Routes
//if you're at the root "/" go to the controller and execute index_get API
router.get("/", indexCntrl.index_get);
//Exports
module.exports = router;
