
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmail = async (email, otp) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Zerodha OTP Verification",
        html: `
            <h2>Your OTP is</h2>
            <h1>${otp}</h1>
            <p>This OTP will expire in 5 minutes.</p>
        `,
    });
};

module.exports = sendEmail;