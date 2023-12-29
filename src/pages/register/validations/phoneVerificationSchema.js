import * as yup from "yup";

export const phoneSchema = yup.object().shape({
    countryCode: yup.string().required('Country code is required'),
    phoneNumber: yup.string()
        .required(localStorage.lang === "th" ? 'จำเป็นต้องกรอกเบอร์มือถือ' : 'Phone number is required')
        .matches(/^[0-9]+$/, localStorage.lang === "th" ? 'ใส่ได้เฉพาะตัวเลขเท่านั้น' : 'Must be only digits')
        .min(9, localStorage.lang === "th" ? 'เบอร์มือถือไม่ถูกต้อง' : 'Invalid phone number')
        .max(10, localStorage.lang === "th" ? 'เบอร์มือถือไม่ถูกต้อง' : 'Invalid phone number')
});

export const otpSchema = yup.object().shape({
    otp: yup.string()
        .required(localStorage.lang === "th" ? 'จำเป็นต้องกรอก OTP' : 'OTP is required')
        .matches(/^[0-9]+$/, localStorage.lang === "th" ? 'ใส่ได้เฉพาะตัวเลขเท่านั้น' : 'Must be only digits')
        .min(6, localStorage.lang === "th" ? 'OTP ไม่ถูกต้อง' : 'Invalid OTP')
        .max(6, localStorage.lang === "th" ? 'OTP ไม่ถูกต้อง' : 'Invalid OTP')
});