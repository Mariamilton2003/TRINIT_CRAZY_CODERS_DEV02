const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

const courseSchema = new mongoose.Schema({
    courseCode:{
        type:String,
        required:[true,'Please Enter CourseCode'],
        unique:true
    },
    title:{
        type:String,
        required:[true,'Please Enter Course Title']
    },
    Program:{
        type :String,
        required:[true, 'Please Enter Course Program'],
        enum:{
            values:[
                'ECE',
                'CSE',
                'EEE',
                'MECH',
                'CIVIL'
            ], message:['Please Enter Correct Department']
        }
    },
    faculty:{
        type:objectId,
        ref:'faculty'
    },
    description:{
        type:String,
        required:[true,'Please Enter Course Description']
    },
    duration:{
        type:String,
        required:[true,'Please Enter the Course Duration']
    },
    preRequisties:{
        type:String,
        required:[true,'Please Enter the Course Pre Requisties']
    },
    courseOutcome:{
        type:String,
        required:[true,'Please Enter Course Outcome']
    },
    examPattern:{
        type:String,
        required:[true,'Please Enter Course Exam Pattern']
    },
    reviews :[
        {
            student : {
                type:objectId,
                ref:'student'
            },
            rating :{
                type :Number,
                default :0.0
            },
            comment:{
                type :String,
                required: true
            }
            
        }

    ],
    numberOfReviews:{
        type :Number,
        default :0
    },
    ratings :{
        type :Number ,
        default :0
    }
})


let schema = mongoose.model('coures', courseSchema);
module.exports = schema;