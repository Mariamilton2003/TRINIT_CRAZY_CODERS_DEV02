const sendAdminToken = (admin, statusCode, res) => {
    const token = admin.getJwtToken();

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
        admin
    });
};

module.exports = sendAdminToken;
