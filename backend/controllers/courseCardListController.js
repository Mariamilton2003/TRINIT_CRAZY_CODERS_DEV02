const ErrorHandler = require('../utills/errorHandler');
const cardList = require('../models/courseCardListModel');
const catchAsyncError = require('../middleware/catchAsyncError');

exports.createCard = catchAsyncError(async (req,res,next)=>{
    const card = await cardList.create(req.body);
    res.status(201).json({
        success:true,
        message:'CourseCard Created Successfully'
    })

})

exports.getAllcards = catchAsyncError(async (req,res,next)=>{
    const card = await cardList.find();
    if(!card){
        return next(new ErrorHandler('course card not found',404))
    }
    res.status(200).json({
        success:true,
        card
    })
})

exports.getSingleCard = catchAsyncError(async (req,res,next)=>{
    const card = await cardList.findById(req.params.id);
    if(!card){
        return next(new ErrorHandler('Course Card was not found',404))
    }
    res.status(200).json({
        success:true,
        card
    })
})


exports.updateCard = catchAsyncError(async (req,res,next)=>{
    const card = await cardList.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });
    if(!card){
        return next(new ErrorHandler('Course Card was not found',404))
    }
    res.status(200).json({
        success:true,
        card
    })
})

exports.deleteCard = catchAsyncError (async (req,res,next)=>{
    const card = await cardList.findByIdAndDelete(req.params.id);
    if(!card){
        return next(new ErrorHandler('Course Card was not found',404))
    }
    res.status(200).json({
        success:true,
        message:'Course Card deleted Successfully'
    })
})