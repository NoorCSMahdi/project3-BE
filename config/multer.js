// multer.js
const multer = require('multer');
// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads'); // Define the path where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        let avatar = Date.now() + '-' + file.originalname;
        req.body.avatar = '/uploads/' + avatar;
        cb(null, avatar); // Unique file name
    },
});
const upload = multer({ storage: storage });
module.exports = upload;