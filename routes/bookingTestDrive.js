const express = require('express');
const methodOverride = require('method-override');

const router = express.Router();
// router.use(express.urlencoded({extended: true}));
router.use(methodOverride('_method'));

const bookingTestDriveCntrl = require("../controllers/bookingTestDrive")

// Routes
router.get("/add", bookingTestDriveCntrl.bookingTestDrive_create_get);
router.post("/add", bookingTestDriveCntrl.bookingTestDrive_create_post);
router.get("/index", bookingTestDriveCntrl.bookingTestDrive_index_get);
router.get("/detail", bookingTestDriveCntrl.bookingTestDrive_show_get);
router.get("/delete", bookingTestDriveCntrl.bookingTestDrive_delete_get);
router.get("/edit", bookingTestDriveCntrl.bookingTestDrive_edit_get);
router.put("/update", bookingTestDriveCntrl.bookingTestDrive_update_put);

module.exports = router;