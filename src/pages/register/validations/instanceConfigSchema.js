import * as yup from "yup";

export const siteDomainSchema = yup.object().shape({
    domain: yup.string().required('Domain is required'),
    subdomain: yup.string().required('Site is required').matches(/^[A-Za-z0-9 -]*$/, "Must not include special characters"),
});