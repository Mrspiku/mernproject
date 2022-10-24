const dotenv = require("dotenv");
const express= require("express");
const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");

const app=express();

require('dotenv').config();


//dotenv.config({path: "./config.env"});

//connect to database
require("./db/conn");
app.use(express.json());
const User= require("./models/userschema");


//linking to router
app.use(require("./router/auth"));



const PORT = process.env.PORT ||5000;




if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join("client/build")));
    app.get("*", (req,res)=> {
        res.sendFile(
        path.resolve(__dirname, 'client','build', 'index.html'))
        });
    }




app.listen(PORT, ()=>{
 console.log("chal na");
})


//mongodb+srv://Piku:<password>@cluster0.nwwckjn.mongodb.net/?retryWrites=true&w=majority
