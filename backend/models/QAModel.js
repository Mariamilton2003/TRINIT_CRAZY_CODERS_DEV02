const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const qusetionSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
        trim:true
    },
    options :{
        type:[{
            text:{
                type:String,
                required:true,
                trim:true
            },
            isCorrect:{
                type:Boolean,
                default:false
            }
        }],
        required:true,
        validate:[arrayMinLength, 'Atleast two options are required']
    },
    explanation:{
        type:String,
        required:true,
        trim:true
    },
    difficulty:{
        type:String,
        enum:{
            values:[
                'Easy',
                'Medium',
                'Difficulty'
            ], message:['Please Enter Correct level']
        }
    },
    subject:{
        type:objectId,
        ref:'course',
        required:true
    },
    createdBy:{
        type:objectId,
        ref:'faculty',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

// custom validation 

function arrayMinLength (val){
    return val.length >=2;
}

let schema = mongoose.model('question',qusetionSchema);
module.exports = schema;