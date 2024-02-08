import * as yup from "yup";

export const teamFormSchema = yup.object().shape({
    invite_code: yup.string().required(localStorage.lang === "th" ? 'จำเป็นต้องกรอกรหัสเชิญ' : 'Invite code is required'),
});

export const confirmJoinSchema = yup.object().shape({
    accepted_user_terms: yup.boolean().oneOf([true], localStorage.lang === "th" ? 'จำเป็นต้องยอมรับข้อตกลงและเงื่อนไข' : 'You must accept the terms and conditions')
});
