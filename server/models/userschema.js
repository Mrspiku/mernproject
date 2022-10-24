
const mongoose = require("mongoose");
const bcrpyt = require("bcryptjs");
const jwt=require("jsonwebtoken");

const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
       
    },
    phone: {
        type: Number,
        required: true,
        
    },
    city: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
       
    },

    cpassword: {
        type: String,
        required: true
    },
    date: {
        type:Date,
        default:Date.now
    },
    messages:[
        {
            email: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            message: {
                type: String,
                required: true
            }

        }
    ],

    
    tokens : [
        {
            token:{
                    type: String,
                    required: true
        }
    }
]

    
})


//generating token
userSchema.methods.generateAuthToken = async function(){
    try{
        let token =jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token})
        await this.save();
        return token;
    }catch(err){
        res.send(err);
        console.log(err);

    }
}


// userSchema.statics.isThisEmailInUSe= async function(email)
// {
//     try{
//     const user = await this.findOne({email})
//     if(user) return false
//     return true;
// }
// catch(error){
//     res.status(500).send(error);
// }

// }

//store the message

userSchema.methods.addMessage= async function (email,phone,message) {
    try{
        this.messages=this.messages.concat({email,phone,message});
        await this.save();
        return this.messages;



    }catch(error){
        console.log(error)

    }
}

userSchema.pre("save", async function(next){
   
    if(this.isModified("password")){
        this.password = await bcrpyt.hash(this.password, 10);
        this.cpassword = await bcrpyt.hash(this.cpassword, 10);
    }

    next();

});











const User =mongoose.model("USER", userSchema);

module.exports= User;