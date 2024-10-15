const otpGenerator = require('otp-generator');
const OTP = require('../models/OTP');
const emailSender = require('../utils/emailSender');

exports.generateOTP = async (req, res) => {
    const { email } = req.body;
    const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
    
    try {
        await OTP.create({ email, otp });
        await emailSender(email, "OTP Verification", `Your OTP for verification is: ${otp}`);
        res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending OTP' });
    }
};

exports.verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    
    try {
        const otpRecord = await OTP.findOne({ email, otp });
        if (otpRecord) {
            await OTP.deleteOne({ _id: otpRecord._id });
            res.status(200).json({ message: 'OTP verified successfully' });
        } else {
            res.status(400).json({ message: 'Invalid OTP' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error verifying OTP' });
    }
};
