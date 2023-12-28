//Mongoose Dependency
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DATABASEURL)
.then(() =>{
    console.log('MongoDB Connected!!');
})
.catch((err) =>{
    console.log("MongoDB not connected !!" + err);
})