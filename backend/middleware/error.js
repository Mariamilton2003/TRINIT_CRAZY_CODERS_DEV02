const ErrorHandler = require('../utills/errorHandler');

module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode ||500;

    if(process.env.NODE_ENV =='development'){
        res.status(err.statusCode).json({
            success:false,
            message:err.message,
            stack:err.stack,
            error:err
        })
    }


    if(process.env.NODE_ENV == 'production'){
        let message = err.message;
        let error = new Error(message)

        if(err.name =='ValidationError'){
            message = Object.values(err.errors).map(value => value.message);
            error =  new Error(message ,400);
        }
        if(err.name == 'CastError'){
            message =`Resource not found :  ${err.path} `;
            error =  new Error(message ,400);

        }
        if(err.code ==1100){
            let message = `Duplicate Key ${Object.keys(err.keyValue)} error`
            error =  new Error(message ,400);

        }
        if(err.name == 'JSONWebTokenError'){
            let message = `JSONWebToken Is Invalid Try Again `;
            error =  new Error(message ,400);
            
        }
        res.status(statusCode).json({
            success:false,
            message:err.message ||'Internal Server Error'
        })
    }
}