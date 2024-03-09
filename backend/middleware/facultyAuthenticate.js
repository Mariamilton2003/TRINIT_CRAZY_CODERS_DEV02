const catchAsyncError= require('../middleware/catchAsyncError');
const ErrorHandler = require('../utills/errorHandler');
const jwt = require('jsonwebtoken');
const  Faculty = require('../models/FacultyModel');

exports.isAuthenticatedFaculty = catchAsyncError(async (req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return (new ErrorHandler('Login First to Handle this resource',401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.faculty = await Faculty.findById(decoded.id);
    next();
})
exports.authorizeFacultyRoles = (...roles)=>{
    return  (req,res,next) =>{
         if(!roles.includes(req.faculty.role) )
         {
             return next(new ErrorHandler(`Role ${req.faculty.role} is not allowed`,401));
 
         }
         next();
     }
 }