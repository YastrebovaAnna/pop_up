import * as yup from 'yup';

const errorMessages = {
    required: "Це поле є обов'язковим",
    invalidChars: "Тільки літери, пробіли та деякі символи (' ` -) дозволені",
    minLength: (min) => `Має бути не менше ${min} символів`,
    maxLength: (max) => `Має бути не більше ${max} символів`,
    phoneFormat: "Невірний формат: введіть у форматі +380XXXXXXXXX",
};

const nameValidation = yup
    .string()
    .trim()
    .required(errorMessages.required)
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'`\s-]{2,50}$/, errorMessages.invalidChars)
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

export {validationSchema};
