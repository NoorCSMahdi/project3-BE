// API's/ Functions

// const {User} = require("../models/User")
const { Car } = require("../models/Car");
const { json } = require("express");
const {Exhibition} = require("../models/Exhibition")

// const dayjs = require('dayjs')
// var relativeTime = require('dayjs/plugin/relativeTime')
// dayjs.extend(relativeTime)

// CRUD Operations
// HTTP POST - Create - Post the data
// HTTP GET - Read - Retrieves the data
// HTTP PUT/POST - Update - Updates the data
// HTTP DELETE/GET/POST - Delete - Deletes the data

// Create Operation
exports.exhibition_create_get = (req, res) => {
  res.render("exhibition/add");
}

exports.exhibition_create_post = (req, res) => {
  console.log("req.body", req.body);
  // const data = JSON.parse(req.body);
  // console.log("data", data)
  console.log("req.body", req.body.exhibition_name);
  console.log("req.file", req.file);
  let exhibition = new Exhibition(req.body);
  // Handle file upload using multer
  if (req.file) {
    // Save the file path to the database
    exhibition.exhibition_image = req.file.path;
    console.log("Image path", "/uploads/" + req.file.filename)
}
  // Save Exhibition
  exhibition.save()
  .then((exhibition) => {
    // res.redirect("/exhibition/index");
    res.json({exhibition})
  })
  .catch((err) => {
    console.log(err);
    res.send("Please try again later!!")
  })
}
//Restful API
exports.exhibition_index_get = (req, res) => {
  Exhibition.find().populate('Car')
  .then((exhibitions) => {
    // res.render("exhibition/index", {exhibitions, dayjs});
    res.json({ exhibitions })
  })
  .catch((err) => {
    console.log(err);
  })

}

exports.exhibition_show_get = (req, res) => {
  console.log(req.query.id);
  Exhibition.findById(req.query.id).populate('Car')
  .then((exhibition) => {
    console.log(exhibition);
    res.json({exhibition})
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.exhibition_delete_get = (req, res) => {
  console.log(req.query.id);
  Exhibition.findByIdAndDelete(req.query.id)
  .then((exhibition) => {
    Car.deleteMany({Exhibition: req.query.id})
    .then(()=>
    {
      res.json({exhibition})

    })
    // res.redirect("/exhibition/index");
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.exhibition_edit_get = (req, res) => {
  Exhibition.findById(req.query.id).populate('Car')
  .then((exhibition) => {
    // res.render("exhibition/edit", {exhibition});
    res.json({exhibition})
  })
  .catch(err => {
    console.log(err);
  })
}

exports.exhibition_update_put = (req, res) => {
  console.log(req.body._id);
  Exhibition.findByIdAndUpdate(req.body._id, req.body, {new:true}).populate('Car')
  .then((exhibition) => {
    // res.redirect("/exhibition/index");
    res.json({exhibition})
  })
  .catch(err => {
    console.log(err);
  })
}