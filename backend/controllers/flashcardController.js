const ErrorHandler = require('../utills/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const FlashCard = require('../models/flashCardModel');

exports.createFlashCard = catchAsyncError(async (req,res,next)=>{
    const flashCard = await FlashCard.create(req.body);
    res.status(200).json({
        success:true,
        message:'FlashCard Created Successfully'
    })
})

exports.getAllFlashCard = catchAsyncError(async (req,res,next)=>{
    const flashCard = await FlashCard.find();
    if(!flashCard){
        return next(new ErrorHandler('FlashCard was not found',404))
    }
    res.status(200).json({
        success:true,
        flashCard
    })
})

exports.getSingleFlashCard = catchAsyncError(async (req,res,next)=>{
    const flashCard = await FlashCard.findById(req.params.id);
    if(!flashCard){
        return next(new ErrorHandler('Flashcard was not found',404))
    }
    res.status(200).json({
        success:true,
        flashCard
    })
})

exports.updateFlashCard = catchAsyncError(async (req,res,next)=>{
    const flashCard = await FlashCard.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });
    if(!flashCard){
        return next(new ErrorHandler('FlashCard was not found',404))
    }
    res.status(200).json({
        success:'true',
        flashCard
    })
});

exports.deleteFlashCard = catchAsyncError(async (req,res,next)=>{
    const flashCard = await FlashCard.findByIdAndDelete(req.params.id);
    if(!flashCard){
        return next(new ErrorHandler('FlashCard was not Found',404))
    }
});

