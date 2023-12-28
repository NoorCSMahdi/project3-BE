// API's/ Functions

const {Exihibtion} = require("../models/Exihibtion")
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
exports.exihibtion_create_get = (req, res) => {
  User.find()
  .then((users) => {
    res.render("exihibtion/add", {users});
  })
  .catch(err => {
    console.log(err);
  })
  
}




exports.exihibtion_create_post = (req, res) => {
  console.log(req.body);
  let exihibtion = new Exihibtion(req.body);

  // Embedded Schema
  // User.findById(req.body.user)
  // .then((user) => {
  //   user.exihibtion.push(exihibtion);
  //   user.save();
  //   res.redirect("/user/index");
  // })
  // .catch((err) =>{
  //   console.log(err);
  // })


  // Save Exihibtion
  exihibtion.save()
  .then(() => {
    req.body.user.forEach(user => {
      User.findById(user)
      .then((user) => {
        user.exihibtion.push(exihibtion);
        user.save();
      })
      .catch(err => {
        console.log(err)
      })
    })
    res.redirect("/exihibtion/index");
  })
  .catch((err) => {
    console.log(err);
    res.send("Please try again later!!")
  })
}

exports.exihibtion_index_get = (req, res) => {
  Exihibtion.find().populate('user')
  .then((exihibtions) => {
    res.render("exihibtion/index", {exihibtions, dayjs});
  })
  .catch((err) => {
    console.log(err);
  })

}

exports.exihibtion_show_get = (req, res) => {
  console.log(req.query.id);
  Exihibtion.findById(req.query.id).populate('user')
  .then((exihibtion) => {
    res.render("exihibtion/detail", {exihibtion, dayjs})
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.exihibtion_delete_get = (req, res) => {
  console.log(req.query.id);
  Exihibtion.findByIdAndDelete(req.query.id)
  .then(() => {
    res.redirect("/exihibtion/index");
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.exihibtion_edit_get = (req, res) => {
  Exihibtion.findById(req.query.id)
  .then((exihibtion) => {
    res.render("exihibtion/edit", {exihibtion});
  })
  .catch(err => {
    console.log(err);
  })
}

exports.exihibtion_update_put = (req, res) => {
  console.log(req.body.id);
  Exihibtion.findByIdAndUpdate(req.body.id, req.body)
  .then(() => {
    res.redirect("/exihibtion/index");
  })
  .catch(err => {
    console.log(err);
  })
}