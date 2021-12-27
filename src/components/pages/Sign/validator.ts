import * as yup from "yup";

export const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().required(),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Senhas não são Iguais"),
    })
    .required();
