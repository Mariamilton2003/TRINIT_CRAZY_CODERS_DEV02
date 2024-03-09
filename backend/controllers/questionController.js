const Question = require('../models/QAModel');
const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utills/errorHandler');

exports.createQuestion = catchAsyncError(async (req,res,next)=>{
    const {...questionData} = req.body;
    const question = await Question.create({
        ...questionData,
        createdBy:req.faculty.id
    });
    res.status(201).json({
        success:true,
        message:'Question was created successfully'
    })
});

exports.getAllQuestions = catchAsyncError(async (req,res,next)=>{
    const questions = await Question.find();
    if(!questions){
        return next(new ErrorHandler('Questions was not found',404))
    }
    res.status(200).json({
        success:true,
        questions
    })
});

exports.getSingleQuestion = catchAsyncError(async (req,res,next)=>{
    const question = await Question.findById(req.params.id);
    if(!question){
        return next(new ErrorHandler('Question was not found',404))
    }
});

exports.updateQuestion = catchAsyncError(async (req,res,next)=>{
    const question = await Question.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })

    res.status(200).json({
        success:true,
        question
    })
});

exports.deleteQuestion = catchAsyncError(async (req,res,next)=>{
    const question = await Question.findByIdAndDelete(req.params.id);
    if(!question){
        return next(new ErrorHandler('Question was not found',404))
    }
    res.status(200).json({
        success:true,
        message:'Question Deleted Successfully'
    })
})