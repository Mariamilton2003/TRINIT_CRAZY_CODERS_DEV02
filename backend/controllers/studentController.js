const ErrorHandler = require('../utills/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const Student = require('../models/studentModel');
const sendToken = require('../utills/jwt')


exports.registerStudent = catchAsyncError(async (req, res, next) => {
    const student = await Student.create(req.body)
    sendToken(student, 201, res);
})

exports.loginStudent = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler('Please Enter Email and Password', 401))
    }
    const student = await Student.findOne({ email }).select('+password');
    if (!student) {
        return next(new ErrorHandler('Invalid Email or Password', 401))
    }
    const compare = await student.isValidPassword(password);
    if (!compare) {
        return next(new ErrorHandler('Invalid Email or Password', 401))
    }
    sendToken(student, 200, res);
})

exports.logoutStudent = catchAsyncError(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    }).status(200).json({
        success: true,
        message: 'Success You Logged Out'
    })
})


exports.getStudentProfile = catchAsyncError(async (req, res, next) => {
    const student = await Student.findById(req.student.id);
    if (!student) {
        return next(new ErrorHandler('Student not found', 401));
    }
    res.status(200).json({
        success: true,
        student
    })
})


exports.updateStudent = catchAsyncError(async (req, res, next) => {
    const student = await Student.findByIdAndUpdate(req.student.id, req.body, {
        new: true,
        runValidators: true
    })
    if (!student) {
        return next(new ErrorHandler('Student was not found', 401))
    }
    res.status(200).json({
        success: true,
        student
    })
})

exports.changePassword = catchAsyncError(async (req, res, next) => {
    const student = await Student.findById(req.student.id).select('+password');
    if (!student) {
        return next(new ErrorHandler('Invalid Id', 401));
    }
    if (! await student.isValidPassword(req.body.oldPassword)) {
        return next(new ErrorHandler('Old Password is Incorrect', 401))
    }
    student.password = req.body.password;
    await student.save();
    res.status(200).json({
        success: true,
        message: 'Password Updated Successfully'
    })
})

exports.deleteStudent = catchAsyncError(async (req, res, next) => {
    const student = await Student.findByIdAndDelete(req.student.id);
    if (!student) {
        return next(new ErrorHandler('Student was not found', 401));
    }
    res.status(200).json({
        success: true,
        message: 'Student Deleted Successfully'
    })
})