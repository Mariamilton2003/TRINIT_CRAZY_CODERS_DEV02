const catchAsyncError= require('../middleware/catchAsyncError');
const ErrorHandler = require('../utills/errorHandler');
const jwt = require('jsonwebtoken');
const  Admin = require('../models/adminModel');

exports.isAuthenticatedAdmin = catchAsyncError(async (req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return (new ErrorHandler('Login First to Handle this resource',401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decoded.id);
    next();
})

