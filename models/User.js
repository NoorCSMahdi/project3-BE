const mongoose = require('mongoose')
const UserType = require("./UserType")

const userSchema = mongoose.Schema({
  user_fullName: {
    type: String,
    required: true
  },
  user_phoneNumber: {
    type: String,
    required: true
  },
  user_emailAddress: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  user_password: {
    type: String,
    required: true,
    minlength: [6, "Your password is too weak!"]
  },
  user_image: {
    type: String,
    required: true
  },
    userType: {
        type: String,
        enum: ["Admin", "SubAdmin", "User"],
        default: "User"
      }
},{timestamps: true
});
const User = mongoose.model("User", userSchema)

module.exports = User;