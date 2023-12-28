const mongoose = require('mongoose')
const User = require("./User")
const Exhibition = require("./Exihibtion")

const reviewSchema = mongoose.Schema({
    review_title: String,
    review_content: String,
    User: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
    Exhibition: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Exhibition"
            }
},{timestamps: true
});
const Review = mongoose.model("Review", reviewSchema)

module.exports = {Review}