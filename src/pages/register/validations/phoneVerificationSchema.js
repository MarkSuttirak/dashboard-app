import * as yup from "yup";

export const phoneSchema = yup.object().shape({
    countryCode: yup.string().required('Country code is required'),
    phoneNumber: yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(9, 'Invalid phone number')
        .max(10, 'Invalid phone number')
});

export const otpSchema = yup.object().shape({
    otp: yup.string()
        .required('OTP is required')
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(6, 'Invalid OTP')
        .max(6, 'Invalid OTP')
});