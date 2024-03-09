const ErrorHandler = require('../utills/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const Student = require('../models/studentModel');
const FeedBack = require('../models/feedBackModel');

exports.createFeedBack = catchAsyncError(async (req,res,next)=>{
    const feedback = await FeedBack.create(req.body);

    res.status(201).json({
        success: true,
        message:'Feed Back Created Successfully'
    })
});

exports.sendFeedBack = catchAsyncError(async (req,res,next)=>{
    const {studentId, feedback} = req.body;
    const student = await Student.findById(studentId);
    if(!student){
        return next(new ErrorHandler('Student was not found',404))
    }
    student.feedback = feedback;
    await student.save({validateBeforeSave:true})
    res.status(200).json({
        success:true,
        message:'FeedBack Sended to Student'
    })
})

exports.getFeedBack = catchAsyncError(async (req,res,next)=>{
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    if(!student){
        return next(new ErrorHandler('Student was Not Found',400))
    }
    const feedback = student.feedback;
    res.status(200).json({
        success:true,
        feedback
    })
})