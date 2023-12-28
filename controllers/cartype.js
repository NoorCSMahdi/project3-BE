// API's/ Functions

const {Car} = require("../models/Car")
const {Cartype} = require("../models/Cartype")

// CRUD Operations
// HTTP POST - Create - Post the data
// HTTP GET - Read - Retrives the data
// HTTP PUT/POST - Update - Updates the data
// HTTP DELETE/GET/POST - Delete - Deletes the data

// Create Operation
exports.cartype_create_get = (req, res) => {
  res.render("cartype/add");
}

//Restful API converting to json in line 29
exports.cartype_create_post = (req, res) => {
  console.log(req.body);
  let cartype = new Cartype(req.body);

  // Save Cartype
  cartype.save()
  .then(() => {
    res.json({cartype});
  })
  .catch((err) => {
    console.log(err);
    res.send("Please try again later!!")
  })
}

//Restful API because of the JSON format line 41
exports.cartype_index_get = (req, res) => {
  Cartype.find()
  .then((cartypes) => {
    // res.render("cartype/index", {cartypes, dayjs});
    res.json({cartypes});
  })
  .catch((err) => {
    console.log(err);
  })

}

exports.cartype_show_get = (req, res) => {
  console.log(req.query.id);
  Cartype.findById(req.query.id)
  .then((cartype) => {
    res.render("cartype/detail", {cartype, dayjs})
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.cartype_delete_get = (req, res) => {
  console.log(req.query.id);
  Cartype.findByIdAndDelete(req.query.id)
  .then((cartype) => {
    // res.redirect("/cartype/index");
    res.json({cartype})
  })
  .catch((err) => {
    console.log(err);
  })
}

//Restful API
exports.cartype_edit_get = (req, res) => {
  Cartype.findById(req.query.id)
  .then((cartype) => {
    // res.render("cartype/edit", {cartype});
    res.json({cartype})
  })
  .catch(err => {
    console.log(err);
  })
}

exports.cartype_update_put = (req, res) => {
  console.log(req.body._id);
  Cartype.findByIdAndUpdate(req.body._id, req.body, {new: true})
  .then((cartype) => {
    // res.redirect("/cartype/index");
    res.json({cartype})
  })
  .catch(err => {
    console.log(err);
  })
}