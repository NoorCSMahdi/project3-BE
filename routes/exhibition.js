const express = require('express');
// const methodOverride = require('method-override');

const router = express.Router();
router.use(express.json());

// router.use(express.urlencoded({extended: true}));
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

const exhibitionCntrl = require("../controllers/exhibition")
const upload = require('../config/cloudinary');

// Routes
router.get("/add", exhibitionCntrl.exhibition_create_get);
router.post("/add", upload.single('exhibition_image'), exhibitionCntrl.exhibition_create_post);
router.get("/index", exhibitionCntrl.exhibition_index_get);
router.get("/detail", exhibitionCntrl.exhibition_show_get);
router.delete("/delete", exhibitionCntrl.exhibition_delete_get);
router.get("/edit", exhibitionCntrl.exhibition_edit_get);
router.put("/update", exhibitionCntrl.exhibition_update_put);

module.exports = router;