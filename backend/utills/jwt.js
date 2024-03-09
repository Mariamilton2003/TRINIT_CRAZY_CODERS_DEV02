const sendToken = (student, statusCode, res) => {
    const token = student.getJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.COOKIES_EXPIRES_TIME * 24 * 60 * 60 * 1000),
        httpOnly: true
    };

    // Set the cookie
    res.cookie('token', token, options);

    // Send the JSON response
    res.status(statusCode).json({
        success: true,
        token,
        student
    });
};

module.exports = sendToken;
