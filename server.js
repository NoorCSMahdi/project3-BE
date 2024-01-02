// independence
//load express
const express = require('express');
const expressLayouts = require("express-ejs-layouts");

// const fs = require('fs')
const multer = require('multer')

const upload = multer({ dest: 'images/' })

//require and initialize dotenv
require('dotenv').config();
//initialize express
const app = express()
app.use('/images', express.static('images'))

// app.get('/images/:imageName', (req, res) => {
//     // do a bunch of if statements to make sure the user is 
//     // authorized to view this image, then
  
//     const imageName = req.params.imageName
//     const readStream = fs.createReadStream(`images/${imageName}`)
//     readStream.pipe(res)
//   })
  
  app.post('/api/images', upload.single('image'), (req, res) => {
    const imageName = req.file.filename
    const description = req.body.description
  
    // Save this data to a database probably
  
    console.log(description, imageName)
    res.send({description, imageName})
  })

  
//port configuration
const port = process.env.PORT;

//database configuration
const db = require("./config/db");

app.use(express.static('public'))
// app.use('/uploads', express.static('public/uploads'))

//Import Routes
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const exhibitionRouter = require("./routes/exhibition");
const carRouter = require("./routes/car");
const cartypeRouter = require("./routes/cartype");
const authRouter = require("./routes/auth");
const reviewRouter = require("./routes/review");
const requestRouter = require("./routes/request");


//telling Nodejs to look into the folder called views for all the ejs files
app.set("view engine", "ejs");

//Mount Routes

app.use("/exhibition", exhibitionRouter);
app.use('/', indexRouter);
app.use("/user", userRouter);
app.use("/car", carRouter);
app.use("/cartype", cartypeRouter);
app.use('/auth', authRouter);
app.use("/review", reviewRouter);
app.use("/request", requestRouter);

app.listen(port, () => {
    console.log(`Voiture App is running on port ${port}`);
});