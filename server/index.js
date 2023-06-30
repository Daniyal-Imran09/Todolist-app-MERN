const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv").config()
const dbconnect = require('./dbconnection')
const cors = require('cors')
const todoitemsroute = require("./routes/todoitems") 
const app = express();
app.use(express.json())
//port
const PORT = 5500;
//db connection
dbconnect()
app.use(cors())
//
app.use('/',todoitemsroute)
//listten to port
app.listen(PORT,()=>
    console.log("its working")
)