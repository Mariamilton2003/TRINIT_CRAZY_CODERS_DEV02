const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

const flashCardSchema = new mongoose.Schema({
    course:{
        type:objectId,
        ref:'course',
        required:true
    },
    student:{
        type:objectId,
        ref:'student',
        required:true
    },
    term:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    languages:{
        type:String,
        required:true,
        enum:{
            values:[
                'TAMIL',
                "ENGLISh"
            ],message:['Please Enter Correct Language']
        }
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

let schema = mongoose.model('flashCard',flashCardSchema);
module.exports = schema;