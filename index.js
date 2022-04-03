const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//coonect to MongoDB
mongoose.connect(process.env.DB_CONNECT ,
()=> console.log("coonnected to db")
);

//import Routes
const authRoute = require('./routes/auth');


// Route Middlewares
app.use('api/user',authRoute);// url should be start with api/user/..

app.listen(process.env.PORT, () =>console.log('Server Up and running'));
 





