const ErrorHandler = require('../utills/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const Faculty = require('../models/FacultyModel');
const sendFacultyToken = require('../utills/facultyToken');
const APIFeatures = require('../utills/apiFeature')

exports.registerFaculty = catchAsyncError(async (req, res, next) => {
    const faculty = await Faculty.create(req.body)
    sendFacultyToken(faculty, 201, res);
})

exports.loginFaculty = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler('Please Enter Email and Password', 401))
    }
    const faculty = await Faculty.findOne({ email }).select('+password');
    if (!faculty) {
        return next(new ErrorHandler('Invalid Email or Password', 401))
    }
    const compare = await faculty.isValidPassword(password);
    if (!compare) {
        return next(new ErrorHandler('Invalid Email or Password', 401))
    }
    sendFacultyToken(faculty, 200, res);
})

exports.logoutFaculty = catchAsyncError(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    }).status(200).json({
        success: true,
        message: 'Success You Logged Out'
    })
})
exports.getAllFaculty = catchAsyncError(async (req,res,next)=>{
    const resPerPage = 4;
    const apiFeatures = new APIFeatures(Faculty.find(),req.query).search().filter().paginate(resPerPage);
    const faculty = await apiFeatures.query;
    res.status(200).json({
        success:true,
        faculty
    })
})

exports.getFacultyProfile = catchAsyncError(async (req, res, next) => {
    const faculty = await Faculty.findById(req.faculty.id);
    if (!faculty) {
        return next(new ErrorHandler('Faculty not found', 401));
    }
    res.status(200).json({
        success: true,
        faculty
    })
})


exports.updateFaculty = catchAsyncError(async (req, res, next) => {
    const faculty = await Faculty.findByIdAndUpdate(req.faculty.id, req.body, {
        new: true,
        runValidators: true
    })
    if (!faculty) {
        return next(new ErrorHandler('Faculty was not found', 401))
    }
    res.status(200).json({
        success: true,
        faculty
    })
})

exports.changePasswordFaculty = catchAsyncError(async (req, res, next) => {
    const faculty = await Faculty.findById(req.faculty.id).select('+password');
    if (!faculty) {
        return next(new ErrorHandler('Invalid Id', 401));
    }
    if (! await faculty.isValidPassword(req.body.oldPassword)) {
        return next(new ErrorHandler('Old Password is Incorrect', 401))
    }
    faculty.password = req.body.password;
    await faculty.save();
    res.status(200).json({
        success: true,
        message: 'Password Updated Successfully'
    })
})

exports.deleteFaculty = catchAsyncError(async (req, res, next) => {
    const faculty = await Faculty.findByIdAndDelete(req.student.id);
    if (!faculty) {
        return next(new ErrorHandler('Faculty was not found', 401));
    }
    res.status(200).json({
        success: true,
        message: 'Faculty Deleted Successfully'
    })
})