// routes/otpRoutes.js
const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');

router.post('/generate-otp', otpController.generateOTP);
router.post('/verify-otp', otpController.verifyOTP);

module.exports = router;