import {useFormLogic} from "../../hooks/useFormLogic.js";
import {InputField} from '../fields/InputField';
import '../../style/RegisterForm.css'

const RegisterForm = () => {

    const {register, handleSubmit, errors, isSubmitting,} = useFormLogic();
    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <InputField
                id="first_name"
                label="Прізвище"
                placeholder="Введіть прізвище"
                register={register}
                errors={errors}
            />
            <InputField
                id="last_name"
                label="Ім'я"
                placeholder="Введіть ім'я"
                register={register}
                errors={errors}
            />
            <InputField
                id="phone"
                label="Номер телефону"
                placeholder="Введіть номер телефону"
                register={register}
                errors={errors}
            />
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    )
}

export {RegisterForm}