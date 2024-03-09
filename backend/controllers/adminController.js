const Admin = require('../models/adminModel');
const ErrorHandler = require('../utills/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const sendAdminToken = require('../utills/adminToken')


exports.registerAdmin = catchAsyncError(async (req,res,next)=>{
    const admin = await Admin.create(req.body)
    sendAdminToken(admin,201, res);
})

exports.loginAdmin = catchAsyncError(async (req,res,next)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return next(new ErrorHandler('Please Enter Email and Password', 401))
    }
    const admin = await  Admin.findOne({email}).select('+password');
    if(!admin){
        return next(new ErrorHandler('Invalid Email or Password',401))
    }
    const compare = await admin.isValidPassword(password);
    if(!compare){
        return next(new ErrorHandler('Invalid Email or Password',401))
    }
    sendAdminToken(admin,200,res);
})

exports.logoutAdmin = catchAsyncError(async (req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    }).status(200).json({
        success:true,
        message:'Success You Logged Out'
    })
})

exports.getProfile = catchAsyncError(async(req,res,next)=>{
    const admin = await Admin.findById(req.admin.id);
    if(!admin){
        return next(new ErrorHandler('Invalid Id', 401));
    }
    res.status(200).json({
        success:true,
        admin
    })
    
})

exports.changePassword = catchAsyncError(async(req,res,next)=>{
    const admin = await Admin.findById(req.admin.id).select('+password');
    if(!admin){
        return next(new ErrorHandler('Invalid Id',401));
    }
    if(! await admin.isValidPassword(req.body.oldPassword)){
        return next(new ErrorHandler('Old Password is Incorrect' ,401))
    }
    admin.password= req.body.password;
    await admin.save();
    res.status(200).json({
        success:true,
        message:'Password Updated Successfully'
    })
})


exports.updateAdmin = catchAsyncError(async(req,res,next)=>{
    let newAdminData ={
        name:req.body.name,
        email: req.body.email
    }
    const admin = await Admin.findByIdAndUpdate(req.admin.id,newAdminData,{
        new:true,
        runValidators:true
    })
    res.status(200).json({
        success:true,
        message:'Profile Updated Successfully'
    })
})