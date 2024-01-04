const express = require('express');
const router = express.Router();
router.use(express.json());

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

//Import Auth Controller 
const authCtrl = require("../controllers/auth");
const upload = require('../config/cloudinary');

// Routes
router.post("/signup", upload.single('user_image'), authCtrl.auth_signup_post);
router.post("/signin", authCtrl.auth_signin_post);

// Export 
module.exports = router;