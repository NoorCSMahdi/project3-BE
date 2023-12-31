const express = require('express');
const methodOverride = require('method-override');

const router = express.Router();
// router.use(express.urlencoded({extended: true}));
router.use(express.json());
router.use(methodOverride('_method'));

const requestCntrl = require("../controllers/request")
const isLoggedIn = require("../helper/isLoggedIn")

// Routes
router.get("/add", requestCntrl.request_create_get);
router.post("/add", requestCntrl.request_create_post);
router.get("/index", requestCntrl.request_index_get);
router.get("/detail", requestCntrl.request_show_get);
router.get("/delete", requestCntrl.request_delete_get);
router.get("/edit", requestCntrl.request_edit_get);
router.put("/update", requestCntrl.request_update_put);

module.exports = router;