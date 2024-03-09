const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

const answerSchema = new mongoose.Schema({
    question:{
        type:objectId,
        ref:'question',
        required:true
    },
    student:{
        type:objectId,
        ref:'student',
        required:true
    },
    isCorrect:{
        type:Boolean,
        required:true,
        default:false
    },
    answer:{
        type:String,
        required:true,
        trim:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

let schema = mongoose.model('answer',answerSchema);
module.exports = schema;