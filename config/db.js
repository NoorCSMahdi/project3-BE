//Mongoose Dependency
const mongoose = require('mongoose');
require('dotenv').config();
//Connection to MongoDB cloud database
//method of mongoose in order to connect to the database
//first param is connection string, taken from website
//process is built in functionality, makes whatever written in .env accessible
mongoose.connect(process.env.DATABASEURL)
.then(() =>{
    console.log('MongoDB Connected!!');
})
.catch((err) =>{
    console.log("MongoDB not connected !!" + err);
})