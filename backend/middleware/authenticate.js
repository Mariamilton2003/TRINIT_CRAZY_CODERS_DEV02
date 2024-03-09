const catchAsyncError= require('../middleware/catchAsyncError');
const ErrorHandler = require('../utills/errorHandler');
const jwt = require('jsonwebtoken');
const  student = require('../models/studentModel');

exports.isAuthenticated = catchAsyncError(async (req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return (new ErrorHandler('Login First to Handle this resource',401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.student = await student.findById(decoded.id);
    next();
})

