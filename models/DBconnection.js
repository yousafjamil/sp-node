const  mongoose=require('mongoose');


const connection=mongoose.connect(db-url-here).then( ()=>{
    console.log('DB Successfully Connected')
}).catch( (err)=>{
    console.log('there is error with  DB connection')
})


module.exports=connection;