// API's/ Functions
const User = require("../models/User")

// Create Operation
exports.user_create_get = (req, res) => {
  res.render("user/add");
}
//RESTFUL API
exports.user_create_post = (req, res) => {
  let user = new User(req.body);

  if (req.file) {
    console.log(req.file);
    user.user_image = req.file.path;
    }
  console.log(req.body);

  // Save User
  user.save()
  .then((user) => {
    // res.redirect("/user/index");
    res.json({user})
  })
  .catch((err) => {
    console.log(err);
    res.send("Please try again later!!")
  })
}
//RESTFUL API
exports.user_index_get = (req, res) => {
  User.find()
  .then((users) => {
    // res.render("user/index", {users});
    res.json({users})
  })
  .catch((err) => {
    console.log(err);
  })

}

exports.user_show_get = (req, res) => {
  console.log(req.query.id);
  User.findById(req.query.id).populate('')
  .then((user) => {
    // res.render("user/detail", {user})
    res.json({user});
  })
  .catch((err) => {
    console.log(err);
  })
}
//RESTFUL API
exports.user_delete_get = (req, res) => {
  console.log(req.query.id);
  User.findByIdAndDelete(req.query.id)
  .then((user) => {
    // res.redirect("/user/index");
    res.json({user});
  })
  .catch((err) => {
    console.log(err);
  })
}
//RESTFUL API
exports.user_edit_get = (req, res) => {
  User.findById(req.query.id)
  .then((user) => {
    // res.render("user/edit", {user});
    res.json({user})
  })
  .catch(err => {
    console.log(err);
  })
}
//RESTFUL API
exports.user_update_put = (req, res) => {
  console.log(req.body._id);
  User.findByIdAndUpdate(req.body._id, req.body, {new: true})
  .then((user) => {
    // res.redirect("/user/index");
    res.json({user})
  })
  .catch(err => {
    console.log(err);
  })
}