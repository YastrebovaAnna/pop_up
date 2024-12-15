import * as yup from "yup";
import errorMessages from "./errorMessages";

const nameValidation = yup
    .string()
    .trim()
    .required(errorMessages.required)
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'\s-]+$/, errorMessages.invalidChars)
    .min(2, errorMessages.minLength(2))
    .max(50, errorMessages.maxLength(50));

const validationSchema = yup.object().shape({
    first_name: nameValidation,
    last_name: nameValidation,
    phone: yup
        .string()
        .required(errorMessages.required)
        .matches(/^\+380\d{9}$/, errorMessages.phoneFormat),
});

export { validationSchema };
