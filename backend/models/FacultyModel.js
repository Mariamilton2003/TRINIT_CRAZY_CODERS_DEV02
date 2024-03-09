const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const facultySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please Enter Faculty Name']
    },
    gender:{
        type:String,
        required:[true, 'Please Enter Faculty Gender']
    },
    email:{
        type:String,
        required:[true,'Please Enter Faculty Email'],
        unique:true,
        validate:[validator.isEmail, 'Please Enter Valid Email']
    },
    phoneNo:{
        type:Number,
        required:[true, 'Please Enter Faculty Phone Number'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Please Enter Your Password'],
        maxlength:[6,'Password cannot Exceed Six Characters'],
        select:false
    },
    qualification:{
        type:String,
        required:[true,'Please Enter Faculty Qualification']
    },
    department:{
        type :String,
        required:[true, 'Please Enter Faculty Department'],
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
    timeSlots:{
        type:String,
        required:[true, 'Please enter proper Time slots'],
        enum:{
            values:[
                '9-Am',
                '11-Am',
                '1-Pm',
                '3-Pm',
                '5-Pm',
                '7-Pm'
            ]
        }
    },
    experience:{
        type:String,
        required:[true, 'Please Enter Faculty Experience'],
        default:'Fresher'
    },
    specialization:{
        type:String,
        required:[true, 'Please Enter Faculty Specialization']
    },
    languages:{
        type:String,
        required:[true, 'Please Enter the Language'],
        enum:{
            values:[
                'TAMIL',
                'ENGLISH'
            ]
        }
    },
    pricing:{
        type:Number,
        default :0.0,
        required:[true,'Please enter the Faculty Pricing']
    },
    joinedAt:{
        type:Date,
        default:Date.now()
    },
    role:{
        type:String,
        default:'faculty'
    }
})


facultySchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password,12);
})
facultySchema.methods.getJwtToken = function(){
    return jwt.sign({id:this.id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}
facultySchema.methods.isValidPassword = async function (password){
    return await bcrypt.compare(password,this.password)
}

let schema = mongoose.model('faculty',facultySchema);
module.exports = schema;


