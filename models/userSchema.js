const  mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const  Joi=require("joi");

const  userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    likedSong:{
        type:String,
       
    },
isAdmin:{
    type:Boolean
}
});

userSchema.methods.generateAuthToken=function(){
const token=jwt.sign({
    _id:this.name,
    email:this.email
},'some secret here');
return token;

}

const  Validate=(user)=>{
    const  schema=Joi.object({
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().required().min(5),
        likedSong:Joi.string(),
        isAdmin:Joi.string()
    })
return schema.validate(user)
}



const  userModel=mongoose.model('user',userSchema);

module.exports={userModel,Validate};