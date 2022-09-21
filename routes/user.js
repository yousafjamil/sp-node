
const  router=require('express').Router();
const {User,Validate}=require('../models/userSchema');
const  bcrypt=require('bcryptjs');
const  mongoose=require('mongoose')



router.post('/signup',async(req,res)=>{
    const  {error}=Validate(req.body);
    if(error){ 
        return res.status(400).json({message:error.details[0].message})
    }

    const  user=await User.findOne({email:req.body.email});
    if(user){ 
        return res.json({message:'user Already  Exist'})
    }
    const  hashpassword=await bcrypt.hashSync(req.body.password,10)
    const newUser=new User({
        ...req.body,
        password:hashpassword
    }).save();

    res.json({data:newUser,message:"user Account Successfully Created"})
})


/////////login

router.post('/login',async(req,res)=>{
    const user=await User.findOne({email:req.body.email});
    if(!user) {
        return res.json({message:"User Does Not exist"})
    }

    const validpassword=await bcrypt.compare(req.body.password,user.password);
    if(!validpassword) {
        return res.json({message:"invalid  email  or  password"})
    }

    const  token=user.generateAuthToken();
res.json({data:token,message:"Successfully SingIn......"})


})


// router.post('/signup',async(req,res)=>{
//     const  ExistEmail=await User.findOne({email:req.body.email});
//     if(ExistEmail) res.status(400).send('user alreaday  Exist With this email')

//         const  heshpassword=await bcrypt.hashSync(req.body.password,10);
//         const newUser=new  User({
//             ...req.body,
//             password:heshpassword
//         }).save();

//         res.status(200).send('User Successfully Registered')
        
// });



router.get('/',(req,res)=>{
    res.render('navbar')
})

module.exports=router;