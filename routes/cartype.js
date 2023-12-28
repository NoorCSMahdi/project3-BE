const express = require('express');
const methodOverride = require('method-override');

const router = express.Router();
// router.use(express.urlencoded({extended: true}));
router.use(express.json());
router.use(methodOverride('_method'));

const cartypeCntrl = require("../controllers/cartype")
const isLoggedIn = require("../helper/isLoggedIn")

// Routes
router.get("/add", cartypeCntrl.cartype_create_get);
router.post("/add", isLoggedIn, cartypeCntrl.cartype_create_post);
router.get("/index", cartypeCntrl.cartype_index_get);
router.get("/detail", cartypeCntrl.cartype_show_get);
router.get("/delete", isLoggedIn, cartypeCntrl.cartype_delete_get);
router.get("/edit", cartypeCntrl.cartype_edit_get);
router.put("/update", isLoggedIn, cartypeCntrl.cartype_update_put);

module.exports = router;