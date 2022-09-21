const  mongoose=require('mongoose');
const  Joi=require('joi');
const  playlistSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    songs:{
        type:Array,
        default:[]
    },
    desc:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
});

const 


const playlistModel=mongoose.model('playlist',playlistSchema);

module.exports=playlistModel;