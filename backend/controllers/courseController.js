const ErrorHandler = require('../utills/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const Course = require('../models/courseModel');

exports.newCourse = catchAsyncError(async (req,res,next)=>{
    const {...courseData} =req.body;
    const course = await Course.create({
        ...courseData,
        faculty:req.faculty.id
    });
    res.status(200).json({
        success:true,
        message:"Course Added Successfully"
    })
})

exports.getAllCourse = catchAsyncError(async (req,res,next)=>{
    const course = await Course.find();
    res.status(200).json({
        success:true,
        course
    })
})

exports.getSingleCourse = catchAsyncError(async (req,res,next)=>{
    const course = await Course.findById(req.params.id);
    if(!course){
        return next(new ErrorHandler('the course is not found',401))
    }
    res.status(200).json({
        success:true,
        course
    })
})

exports.updateCourse = catchAsyncError(async (req,res,next)=>{
    const course = await Course.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    })

    res.status(200).json({
        success:true,
        course
    })
})

exports.deleteCourse = catchAsyncError(async (req,res,next)=>{
    const course = await Course.findByIdAndDelete(req.params.id);
    if(!course){
        return next(new ErrorHandler('course was not found with this id',401))
    }
    res.status(200).json({
        success:true,
        message:'Course Deleted Successfully'
    })
})

// course review handling function

exports.createReview = catchAsyncError(async (req,res,next)=>{
    const {id,rating,comment} = req.body;
    const review = {
        student :req.student.id,
        rating,
        comment
    };
    const course = await Course.findById(id);
    const isReviewd = course.reviews.find(review =>{
       return review.student.toString() == req.student.id.toString()
    })
    // updating review if already reviewd
    if(isReviewd){
        course.reviews.forEach(review => {
            if(review.student.toString() == req.student.id.toString()){
                review.comment = comment
                review.rating = rating
            }
        })
    }else{
        // creating new review
        course.reviews.push(review);
        course.numberOfReviews = course.reviews.length;
    }
//  finding avearge
    course.ratings = course.reviews.reduce((acc,review)=>{
        return review.rating +acc;

    },0)/course.reviews.length;

    course.ratings = isNaN(course.ratings)? 0: course.ratings

    await course.save({validateBeforeSave:false});
    res.status(200).json({
        success:true,
        message:'Review Created Successfully'
    })
})

// admin based routes
// api/v1/admin/all/reviws?id
exports.getReviews = catchAsyncError(async (req, res, next) => {
    const course = await Course.findById(req.query.id);

    res.status(200).json({
        success: true,
        reviews: course.reviews
    })
})

// Delete review  = api/v1/review
exports.deleteReview = catchAsyncError(async (req, res, next) => {
    const course = await Course.findById(req.query.courseId);
    // filtering the reviews which does not match the delete review id
    const reviews = course.reviews.filter((review) => {
        return review._id.toString() !== req.query.id.toString()
    });
    //updating the number of reviews
    const numberOfReviews = reviews.length;
    // finding the  average with the filterd reviews 

    let ratings = reviews.reduce((acc, review) => { // reduce method is used the whole values of array is changed into single value
        return review.rating + acc;

    }, 0) / reviews.length;
    ratings = isNaN(ratings) ? 0 : ratings;
    // save the product

     await Course.findByIdAndUpdate(req.query.courseId, {
        reviews,
        numberOfReviews,
        ratings
    });
    res.status(200).json({
        success: true,
        
    })
})