// API's/ Functions
const {Review} = require("../models/Review")
const {Exihibtion} = require("../models/Exihibtion")

// Create Operation
exports.review_create_get = (req, res) => {
  res.render("review/add");
}
//RESTFUL API
exports.review_create_post = (req, res) => {
  console.log(req.body);
  let review = new Review(req.body);

  // Save Review
  review.save()
  .then((review) => {
    // res.redirect("/review/index");
    res.json({review})
  })
  .catch((err) => {
    console.log(err);
    res.send("Please try again later!!")
  })
}
//RESTFUL API
exports.review_index_get = (req, res) => {
  Review.find()
  .then((reviews) => {
    // res.render("review/index", {reviews});
    res.json({reviews})
  })
  .catch((err) => {
    console.log(err);
  })

}

exports.review_show_get = (req, res) => {
  console.log(req.query.id);
  Review.findById(req.query.id).populate('')
  .then((review) => {
    res.render("review/detail", {review})
  })
  .catch((err) => {
    console.log(err);
  })
}
//RESTFUL API
exports.review_delete_get = (req, res) => {
  console.log(req.query.id);
  Review.findByIdAndDelete(req.query.id)
  .then((review) => {
    // res.redirect("/review/index");
    res.json({review});
  })
  .catch((err) => {
    console.log(err);
  })
}
//RESTFUL API
exports.review_edit_get = (req, res) => {
  Review.findById(req.query.id)
  .then((review) => {
    // res.render("review/edit", {review});
    res.json({review})
  })
  .catch(err => {
    console.log(err);
  })
}
//RESTFUL API
exports.review_update_put = (req, res) => {
  console.log(req.body._id);
  Review.findByIdAndUpdate(req.body._id, req.body, {new: true})
  .then((review) => {
    // res.redirect("/review/index");
    res.json({review})
  })
  .catch(err => {
    console.log(err);
  })
}