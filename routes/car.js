const express = require('express');
const methodOverride = require('method-override');

const router = express.Router();
// router.use(express.urlencoded({extended: true}));
router.use(express.json());
router.use(methodOverride('_method'));

const carCntrl = require("../controllers/car")
const isLoggedIn = require("../helper/isLoggedIn")

// Routes
router.get("/add", carCntrl.car_create_get);
router.post("/add", carCntrl.car_create_post);
router.get("/index", carCntrl.car_index_get);
router.get("/detail", carCntrl.car_show_get);
router.get("/delete", isLoggedIn, carCntrl.car_delete_get);
router.get("/edit", carCntrl.car_edit_get);
router.put("/update", isLoggedIn, carCntrl.car_update_put);

module.exports = router;