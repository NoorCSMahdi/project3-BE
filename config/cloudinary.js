require('dotenv').config()
const multer = require("multer");
const { CloudinaryStorage } = require('multer-storage-cloudinary');
// Require the cloudinary library
const cloudinary = require('cloudinary').v2;
// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET,
  secure: true
});
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
      folder: 'CloudinaryDemo',
      allowedFormats: ['jpeg', 'png', 'jpg'],
  }
});
const upload = multer({ storage });
module.exports = upload