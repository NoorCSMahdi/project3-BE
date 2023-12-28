const mongoose = require('mongoose')
const User = require("./User")

const userSchema = mongoose.Schema({
    review_title: String,
    review_content: String,
    user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }     
},{timestamps: true
});
const User = mongoose.model("User", userSchema)

module.exports = {User}