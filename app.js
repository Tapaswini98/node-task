const express = require("express");
const bp = require("body-parser");
const path = require('path');
const mongoose = require('mongoose');
const routes = require("./routes/offer")

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/scanner', 
    {
     useNewUrlParser: true  
    }).then(()=>{
        console.log("DATABASE CONNECTED")
    })

app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use("/",routes);
app.use(express.static(path.join(__dirname,'public')));

app.listen(port, () => console.log("Server at 5000"));