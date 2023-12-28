import * as yup from "yup";

export const userInfoSchema = yup.object().shape({
    first_name: yup.string().required(localStorage.lang === "th" ? 'จำเป็นต้องกรอกชื่อ' : 'First name is required'),
    last_name: yup.string(),
    birth_date: yup.date().required(localStorage.lang === "th" ? 'จำเป็นต้องกรอกวัน/เดือน/ปีเกิด' : 'Birth date is required'),
    email: yup.string().email('Invalid email').required(localStorage.lang === "th" ? 'จำเป็นต้องกรอกอีเมล' : 'Email is required'),
});


export const businessInfoSchema = yup.object().shape({
    // company: yup.string().required('Company name is required'),
    company: yup.string(),
    industry: yup.string().required('Industry is required'),
    goal: yup.array().of(yup.string()).min(1, 'Goal is required'),
});

export const teamInfoSchema = yup.object().shape({
    no_of_employees: yup.string().required('Number of employees is required'),
});
