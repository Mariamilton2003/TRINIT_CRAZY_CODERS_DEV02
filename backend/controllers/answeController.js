const Question = require('../models/QAModel');
const Answer = require('../models/answerModel');
const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utills/errorHandler');

exports.submitQuestion = catchAsyncError(async (req,res,next)=>{
    const {studentId, answer} = req.body;
    const questionId = req.params.id;
    const question = await Question.findById(questionId);

    if(!question){
        return next(new ErrorHandler('Question was not found',404))
    }

    let isCorrect= false;
    const correctOption = question.options.find(option => option.isCorrect===true);
    if(correctOption && answer){
        isCorrect=true
    }

    await Answer.save({
        question:questionId,
        student:studentId,
        answer,
        isCorrect
    })
    res.status(201).json({
        success:true,
        message:'Answer generated Successfully'
    })
})

exports.getResult = catchAsyncError(async (req,res,next)=>{
    const questionId = req.params.id;
    const {studentId} = req.body.id;

    const result = await Answer.findOne({
        question:questionId,
        student:studentId
    })

    if(!result){
        return next(new ErrorHandler('Answer not found',404))
    };
    res.status(200).json({
        success:true,
        result
    })
})

exports.getAllResult = catchAsyncError(async (req,res,next)=>{
    const answers = await Answer.find();
    if(!answers){
        return next(new ErrorHandler('Answers Not Found',404))
    }

    res.status(200).json({
        success:true,
        answers
    })
})