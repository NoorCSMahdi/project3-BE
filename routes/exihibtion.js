const express = require('express');
// const methodOverride = require('method-override');

const router = express.Router();
// router.use(express.urlencoded({extended: true}));
// router.use(methodOverride('_method'));

const exihibtionCntrl = require("../controllers/exihibtion")

// Routes
router.get("/add", exihibtionCntrl.exihibtion_create_get);
router.post("/add", exihibtionCntrl.exihibtion_create_post);
router.get("/index", exihibtionCntrl.exihibtion_index_get);
router.get("/detail", exihibtionCntrl.exihibtion_show_get);
router.get("/delete", exihibtionCntrl.exihibtion_delete_get);
router.get("/edit", exihibtionCntrl.exihibtion_edit_get);
router.put("/update", exihibtionCntrl.exihibtion_update_put);

module.exports = router;