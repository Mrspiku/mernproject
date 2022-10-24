const express= require("express");
const jwt=require("jsonwebtoken");
const router= express.Router();
const bcrpyt = require("bcryptjs");
const authenticate = require ("../middleware/authenticate");
const ObjectID = require("mongodb").ObjectId;

require("../db/conn");
const User= require("../models/userschema");




router.get('/',(req,res) =>{
    res.send("hellow router");
});


router.get('/service',authenticate, (req,res)=>{
    res.send(req.rootUser);
})






//Logout

 

router.get("/logout",authenticate, async(req,res)=>{
    try{
        
        //deleting from only one device
        req.user.tokens= req.user.tokens.filter((elem)=>{
         return elem.token !=req.token
        })
        res.clearCookie("jwt");
        //console.log("logout success");
        await req.user.save();
        res.render("index");
    }catch(error){
        res.status(500).send(error);
    }
    
   
})









//registration
//using async and await



router.post("/signup", async(req,res)=>{
    
    const { name, email,phone, city, password,cpassword}=req.body;
    if(!name || !email || !phone || !city || !password || !cpassword){
        return res.status(422).json({error: "Fill the details"});
    }
    try{
   

       const userExist = await User.findOne({email:email});
      
  

        if(userExist){
            return res.status(422).json({error : "Email already Exist"});
        }
        else if(password != cpassword){
            return res.status(422).json({error: "password are not matching"});
        }
        else{


        const user = new User({name:name, email: email,phone: phone, city: city, password: password,cpassword: cpassword});
        const token = await user.generateAuthToken();
        res.cookie("jwtoen",token, {
            expires : new Date(Date.now()+ 500000),
            httpOnly: true
        });
        const userRegister=await  user.save();
        
        if(userRegister){
             res.status(201).json({error : "User registered successfully"});
        } else{
            res.status(500).json({error : "fail to register"});
        }
    }

    } catch(err){
        console.log(err);


    }
});


// //login
router.post("/login", async (req,res)=>{
   
    try{
       let token;
        
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error :"please fill the data"});
        }

        const usersignin= await User.findOne({email: email});
        if(usersignin){
        const isMatch = await bcrpyt.compare(password, usersignin.password);
        
         //using jsonwebtoken
         token = await  usersignin.generateAuthToken();
         res.cookie("jwtoken", token,{
            expires : new Date(Date.now() + 258920000), //30 days in milli second
            httpOnly: true
         });

        if(!isMatch){
                res.status(400).json({error: "Invalid details" });

        } else{
            res.json({message: "user signin success" });
        }
    } else{
        res.status(400).json({error :"Inalid details"});
    }

    }catch(err){


    }
})



router.get('/profile',authenticate,(req,res)=>{
    console.log("hellow");
    res.send(req.rootUser);
    
});




router.get("/logout",authenticate, async(req,res)=>{
    
        
        //deleting from only one device
        req.user.tokens= req.user.tokens.filter((elem)=>{
         return elem.token !=req.token
        })
        res.clearCookie("jwtoken", {path: '/'});
        //console.log("logout success");
        // await req.user.save();
        // res.render("index");
    // }catch(error){
         res.status(200).send("user logout");
    // }
    
   
})


router.post('/smessage',authenticate, async(req,res)=>{
     try{
    const {email, phone, message} = req.body;
    if(!email || !email || !message){
        return res.json({error:"please fill the message form"});
    }
    const userMessage = await User.findOne({_id:req.userID});
    if(userMessage){
        const userMessagedetail= await userMessage.addMessage(email,phone,message);
        await userMessage.save();
        res.status(201).json({message:"Message sent successfully" })
    }

     }catch(error){
        console.log(error);

     }
});










module.exports = router;