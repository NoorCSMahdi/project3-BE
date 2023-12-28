// API's/ Functions

const {BookingTestDrive} = require("../models/BookingTestDrive")
const {User} = require("../models/User")

const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

// CRUD Operations
// HTTP POST - Create - Post the data
// HTTP GET - Read - Retrives the data
// HTTP PUT/POST - Update - Updates the data
// HTTP DELETE/GET/POST - Delete - Deletes the data

// Create Operation
exports.bookingTestDrive_create_get = (req, res) => {
  User.find()
  .then((users) => {
    res.render("bookingTestDrive/add", {users});
  })
  .catch(err => {
    console.log(err);
  })
  
}


exports.bookingTestDrive_create_post = (req, res) => {
  console.log(req.body);
  let bookingTestDrive = new BookingTestDrive(req.body);

  // Embedded Schema
  // User.findById(req.body.user)
  // .then((user) => {
  //   user.bookingTestDrive.push(bookingTestDrive);
  //   user.save();
  //   res.redirect("/user/index");
  // })
  // .catch((err) =>{
  //   console.log(err);
  // })


  // Save BookingTestDrive
  bookingTestDrive.save()
  .then(() => {
    req.body.user.forEach(user => {
      User.findById(user)
      .then((user) => {
        user.bookingTestDrive.push(bookingTestDrive);
        user.save();
      })
      .catch(err => {
        console.log(err)
      })
    })
    res.redirect("/bookingTestDrive/index");
  })
  .catch((err) => {
    console.log(err);
    res.send("Please try again later!!")
  })
}

exports.bookingTestDrive_index_get = (req, res) => {
  BookingTestDrive.find().populate('user')
  .then((bookingTestDrives) => {
    res.render("bookingTestDrive/index", {bookingTestDrives, dayjs});
  })
  .catch((err) => {
    console.log(err);
  })

}

exports.bookingTestDrive_show_get = (req, res) => {
  console.log(req.query.id);
  BookingTestDrive.findById(req.query.id).populate('user')
  .then((bookingTestDrive) => {
    res.render("bookingTestDrive/detail", {bookingTestDrive, dayjs})
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.bookingTestDrive_delete_get = (req, res) => {
  console.log(req.query.id);
  BookingTestDrive.findByIdAndDelete(req.query.id)
  .then(() => {
    res.redirect("/bookingTestDrive/index");
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.bookingTestDrive_edit_get = (req, res) => {
  BookingTestDrive.findById(req.query.id)
  .then((bookingTestDrive) => {
    res.render("bookingTestDrive/edit", {bookingTestDrive});
  })
  .catch(err => {
    console.log(err);
  })
}

exports.bookingTestDrive_update_put = (req, res) => {
  console.log(req.body.id);
  BookingTestDrive.findByIdAndUpdate(req.body.id, req.body)
  .then(() => {
    res.redirect("/bookingTestDrive/index");
  })
  .catch(err => {
    console.log(err);
  })
}