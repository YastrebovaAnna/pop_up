import {useFormLogic} from "../../hooks/useFormLogic.js";
import {InputField} from "./InputField.jsx";
import {Popup} from "../common/Popup.jsx";
import {useNavigationGuard} from "../../hooks/useNavigationGuard";
import "../../style/RegisterForm.css";

const RegisterForm = () => {
    const {register, handleSubmit, errors, isSubmitting, isDirty, reset} = useFormLogic();
    const {showPopup, setShowPopup, handleNavigation, confirmNavigation} = useNavigationGuard(isDirty, reset);

    return (
        <>
            <Popup
                isOpen={showPopup}
                message="У вас є незбережені зміни. Ви впевнені, що хочете покинути сторінку?"
                onConfirm={confirmNavigation}
                onCancel={() => setShowPopup(false)}
            />
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
            <button onClick={handleNavigation}>Leave Form</button>
        </>
    );
};

export {RegisterForm};