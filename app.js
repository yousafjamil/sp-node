const express=require('express');
const  app=express();
const  session=require('express-session');
//DB connection
require('./models/DBconnection')

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine','ejs');
app.set('views','views')

app.use('/',require('./routes/user'));







app.listen(3000,()=>{
    console.log('app  started')
})