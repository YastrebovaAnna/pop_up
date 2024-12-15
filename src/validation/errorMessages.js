const errorMessages = {
    required: "Це поле є обов'язковим",
    invalidChars: "Тільки літери, пробіли та деякі символи ('  -) дозволені",
    minLength: (min) => `Має бути не менше ${min} символів`,
    maxLength: (max) => `Має бути не більше ${max} символів`,
    phoneFormat: "Невірний формат: введіть у форматі +380XXXXXXXXX",
};

export default errorMessages;
