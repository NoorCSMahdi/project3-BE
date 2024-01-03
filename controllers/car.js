// API's/ Functions
const {Car} = require("../models/Car")
const {Cartype} = require("../models/Cartype")
const { Exhibition } = require('../models/Exhibition')
// CRUD Operations
// HTTP POST - Create - Post the data
// HTTP GET - Read - Retrives the data
// HTTP PUT/POST - Update - Updates the data
// HTTP DELETE/GET/POST - Delete - Deletes the data

// Create Operation
exports.car_create_get = (req, res) => {
    res.render("car/add");
  }
  
  //Restful API converting to json in line 29
  exports.car_create_post = (req, res) => {
    console.log(req.body);
    let car = new Car(req.body);

    if (req.file) {
      // Save the file path to the database
      exhibition.exhibition_image = req.file.path;
      console.log("Image path", "/uploads/" + req.file.filename)
  }
  
    // Save Car
    car.save()
    .then((car) => {
      return Exhibition.findByIdAndUpdate(req.body.Exhibition, { $push: { Car: car } }, { new: true });
    })
    .then((updatedExhibition) => {
      console.log(updatedExhibition);
      res.json({ exhibition: updatedExhibition });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later!!")
    })
  }
  
  //Restful API because of the JSON format line 41
  exports.car_index_get = (req, res) => {
    Car.find()
    .then((cars) => {
      // res.render("car/index", {cars, dayjs});
      res.json({cars});
    })
    .catch((err) => {
      console.log(err);
    })
  
  }
  
  exports.car_show_get = (req, res) => {
    console.log(req.query.id);
    Car.findById(req.query.id).populate('cartype')
    .then((car) => {
      res.render("car/detail", {car})
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  exports.car_delete_get = (req, res) => {
    console.log(req.query.id);
    Car.findByIdAndDelete(req.query.id)
    .then((car) => {
      // res.redirect("/car/index");
      res.json({car})
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  //Restful API
  exports.car_edit_get = (req, res) => {
    Car.findById(req.query.id)
    .then((car) => {
      // res.render("car/edit", {car});
      res.json({car})
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  exports.car_update_put = (req, res) => {
    console.log(req.body._id);
    Car.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then((car) => {
      // res.redirect("/car/index");
      res.json({car})
    })
    .catch(err => {
      console.log(err);
    })
  }