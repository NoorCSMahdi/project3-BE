const express = require('express');
// const methodOverride = require('method-override');

const router = express.Router();
router.use(express.json());

// router.use(express.urlencoded({extended: true}));
// router.use(methodOverride('_method'));

const exhibitionCntrl = require("../controllers/exhibition")

// Routes
router.get("/add", exhibitionCntrl.exhibition_create_get);
router.post("/add", exhibitionCntrl.exhibition_create_post);
router.get("/index", exhibitionCntrl.exhibition_index_get);
router.get("/detail", exhibitionCntrl.exhibition_show_get);
router.delete("/delete", exhibitionCntrl.exhibition_delete_get);
router.get("/edit", exhibitionCntrl.exhibition_edit_get);
router.put("/update", exhibitionCntrl.exhibition_update_put);

module.exports = router;