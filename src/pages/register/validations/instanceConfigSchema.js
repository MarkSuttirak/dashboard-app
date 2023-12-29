import * as yup from "yup";

export const siteDomainSchema = yup.object().shape({
    domain: yup.string().required('Domain is required'),
    subdomain: yup.string().required(localStorage.lang === "th" ? 'จำเป็นต้องกรอก Url ของเว็บไซต์' : 'Site is required')
    .matches(/^[A-Za-z0-9 -]*$/, localStorage.lang === "th" ? 'ต้องไม่มีสัญลักษณ์พิเศษอยู่ใน Url' : 'Must not include special characters'),
});