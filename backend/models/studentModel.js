const mongoose = require ('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Enter Your Name']
    },
    gender:{
        type:String,
        required:[true, 'Please Enter the Student Gender']
    },
    email:{
        type:String,
        required:[true, 'Please Enter Your Email Id'],
        validate:[validator.isEmail, 'Please Enter valid Email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please Enter Your Password'],
        maxlength:[6,'Password cannot Exceed Six Characters'],
        select:false
    },
   
    joinedAt:{
        type:Date,
        default: Date.now()
    },
    role:{
        type:String,
        default:'student'
    },
    feedback:{
        type:String,
        required:true,
        default:'Good'
    }
})

studentSchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password,12);
})
studentSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this.id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}
studentSchema.methods.isValidPassword = async function (password){
    return await bcrypt.compare(password,this.password)
}
let schema = mongoose.model('student',studentSchema);
module.exports = schema;