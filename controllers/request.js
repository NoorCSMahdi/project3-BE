// API's/ Functions

const {User} = require("../models/User")
const {Request} = require("../models/Request")

const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

// CRUD Operations
// HTTP POST - Create - Post the data
// HTTP GET - Read - Retrives the data
// HTTP PUT/POST - Update - Updates the data
// HTTP DELETE/GET/POST - Delete - Deletes the data

// Create Operation
exports.request_create_get = (req, res) => {
  res.render("request/add");
}

//Restful API converting to json in line 29
exports.request_create_post = (req, res) => {
  console.log(req.body);
  let request = new Request(req.body);


  // Save Request
  request.save()
  .then(() => {
    res.json({request});
  })
  .catch((err) => {
    console.log(err);
    res.send("Please try again later!!")
  })
}

//Restful API because of the JSON format line 41
exports.request_index_get = (req, res) => {
  Request.find().populate('User')
  .then((requests) => {
    // res.render("request/index", {requests, dayjs});
    res.json({requests});
  })
  .catch((err) => {
    console.log(err);
  })

}

exports.request_show_get = (req, res) => {
  console.log(req.query.id);
  Request.findById(req.query.id).populate('User')
  .then((request) => {
    res.render("request/detail", {request, dayjs})
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.request_delete_get = (req, res) => {
  console.log(req.query.id);
  Request.findByIdAndDelete(req.query.id)
  .then((request) => {
    // res.redirect("/request/index");
    res.json({request})
  })
  .catch((err) => {
    console.log(err);
  })
}

//Restful API
exports.request_edit_get = (req, res) => {
  Request.findById(req.query.id)
  .then((request) => {
    // res.render("request/edit", {request});
    res.json({request})
  })
  .catch(err => {
    console.log(err);
  })
}

exports.request_update_put = (req, res) => {
  console.log(req.body._id);
  Request.findByIdAndUpdate(req.body._id, req.body, {new: true})
  .then((request) => {
    // res.redirect("/request/index");
    res.json({request})
  })
  .catch(err => {
    console.log(err);
  })
}