// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('./catchAsyncErrors');

// Middleware to check if user is authenticated
const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const token = req.cookies.token;
    console.log("Token from cookies:", token);

    if (!token) {
        return next(new ErrorHandler("Please login to access this resource", 401));
    }

    try {
        // Verify token using secret
        const decodedData = jwt.verify(token, "randomtoken1234567890");
        console.log("Decoded data:", decodedData);

        // Attach user details to req object
        req.user = await User.findById(decodedData.id);
        if (!req.user) {
            return next(new ErrorHandler("User not found", 404));
        }

        next();
    } catch (err) {
        console.error("JWT verification error:", err.name, err.message);
        return next(new ErrorHandler("Invalid or expired token", 401));
    }
});

module.exports = { isAuthenticatedUser };
