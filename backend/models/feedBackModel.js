const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

const feedBackSchema = mongoose.Schema({
    student:{
        type:objectId,
        ref:'student',
        required:true
    },
    question:{
        type:objectId,
        ref:'question',
        required:true
    },
    feedback:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

let schema = mongoose.model('feedback',feedBackSchema);
module.exports = schema;