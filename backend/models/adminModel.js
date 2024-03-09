const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Enter the Name']
    },
    email:{
        type:String,
        required:[true,'Please enter your Email'],
        unique:true,
        validate:[validator.isEmail,'Please Enter Valid Email']
    },
    password:{
        type:String,
        required:[true,'Please enter Your Password'],
        maxlength:[8,'Password cannot Exceed Eight Characters'],
        select:false
    },
    role:{
        type:String,
        default:'admin'
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})
adminSchema.pre('save',async function(){
    this.password = await bcrypt.hash(this.password,12);

})

adminSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this.id}, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    })
}

adminSchema.methods.isValidPassword = async function (password){
    return bcrypt.compare(password,this.password)
}
let schema = mongoose.model('admin',adminSchema);
module.exports = schema;