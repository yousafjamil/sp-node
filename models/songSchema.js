const  mongoose=require('mongoose');
const Joi=require('joi');
const  songSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    }
});

const  validate=(song)=>{
    const schema=Joi.object({
        name:Joi.string().required(),
        artist:Joi.string().required(),
        duration:Joi.string().required()
    })
    return schema.validate(song);
}


const  songModel=mongoose.model('song',songSchema);

module.exports={songModel,validate};