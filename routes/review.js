const express = require('express');
// const methodOverride = require('method-override');

const router = express.Router();
router.use(express.json());
// router.use(methodOverride('_method'));

const reviewCntrl = require("../controllers/review")

// Routes
router.get("/add", reviewCntrl.review_create_get);
router.post("/add", reviewCntrl.review_create_post);
router.get("/index", reviewCntrl.review_index_get);
router.get("/detail", reviewCntrl.review_show_get);
router.delete("/delete", reviewCntrl.review_delete_get);
router.get("/edit", reviewCntrl.review_edit_get);
router.put("/update", reviewCntrl.review_update_put);

module.exports = router;