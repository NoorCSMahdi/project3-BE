// API's/ Functions

// const {User} = require("../models/User")
const {Exhibition} = require("../models/Exihibtion")

// const dayjs = require('dayjs')
// var relativeTime = require('dayjs/plugin/relativeTime')
// dayjs.extend(relativeTime)

// CRUD Operations
// HTTP POST - Create - Post the data
// HTTP GET - Read - Retrives the data
// HTTP PUT/POST - Update - Updates the data
// HTTP DELETE/GET/POST - Delete - Deletes the data

// Create Operation
exports.exihibtion_create_get = (req, res) => {
  res.render("exihibtion/add");
}

exports.exihibtion_create_post = (req, res) => {
  console.log(req.body);
  let exihibtion = new Exhibition(req.body);

  // Save Exhibition
  exihibtion.save()
  .then(() => {
    // res.redirect("/exihibtion/index");
    res.json({ exihibtion })
  })
  .catch((err) => {
    console.log(err);
    res.send("Please try again later!!")
  })
}
//Restful API
exports.exihibtion_index_get = (req, res) => {
  Exhibition.find()
  .then((exihibtions) => {
    // res.render("exihibtion/index", {exihibtions, dayjs});
    res.json({ exihibtions })
  })
  .catch((err) => {
    console.log(err);
  })

}

exports.exihibtion_show_get = (req, res) => {
  console.log(req.query.id);
  Exhibition.findById(req.query.id).populate('user')
  .then((exihibtion) => {
    res.render("exihibtion/detail", {exihibtion})
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.exihibtion_delete_get = (req, res) => {
  console.log(req.query.id);
  Exhibition.findByIdAndDelete(req.query.id)
  .then((exihibtion) => {
    // res.redirect("/exihibtion/index");
    res.json({exihibtion})
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.exihibtion_edit_get = (req, res) => {
  Exhibition.findById(req.query.id)
  .then((exihibtion) => {
    // res.render("exihibtion/edit", {exihibtion});
    res.json({exihibtion})
  })
  .catch(err => {
    console.log(err);
  })
}

exports.exihibtion_update_put = (req, res) => {
  console.log(req.body._id);
  Exhibition.findByIdAndUpdate(req.body._id, req.body, {new:true})
  .then((exihibtion) => {
    // res.redirect("/exihibtion/index");
    res.json({exihibtion})
  })
  .catch(err => {
    console.log(err);
  })
}