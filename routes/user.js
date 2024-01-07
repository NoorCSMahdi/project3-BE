const express = require('express');
// const methodOverride = require('method-override');

const router = express.Router();
router.use(express.json());
// router.use(methodOverride('_method'));

// Multer
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })
// let upload = multer({ storage: storage })

const userCntrl = require("../controllers/user")
const upload = require('../config/cloudinary');

// Routes
router.get("/add", userCntrl.user_create_get);
router.post("/add", upload.single('user_image'), userCntrl.user_create_post);
router.get("/index", userCntrl.user_index_get);
router.get("/detail", userCntrl.user_show_get);
router.delete("/delete", userCntrl.user_delete_get);
router.get("/edit", userCntrl.user_edit_get);
router.put("/update", upload.single('user_image'), userCntrl.user_update_put);

module.exports = router;