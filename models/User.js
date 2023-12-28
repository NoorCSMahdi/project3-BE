const mongoose = require('mongoose')
const UserType = require("./UserType")

const userSchema = mongoose.Schema({
    user_fullName: String,
    user_phoneNumber: String,
    user_emailAddress: String,
    user_password: String,
    user_image: String,
    userType: {
        type: String,
        enum: ["Admin", "SubAdmin", "User"],
        default: "User"
      }
},{timestamps: true
});
const User = mongoose.model("User", userSchema)

module.exports = {User}