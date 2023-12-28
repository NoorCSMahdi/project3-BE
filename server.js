// independence
//load express
const express = require('express');
//initialize express
const app = express()
//require and initialize dotenv
require('dotenv').config();
//port configuration
const port = process.env.PORT;
// port configuration
// const port = 4000;
//database configuration
const db = require("./config/db");
app.listen(port, () => {
    console.log(`Blog App is running on port ${port}`);
});