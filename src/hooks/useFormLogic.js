import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {validationSchema} from '../validation/validationSchema';

const useFormLogic = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });

    const onSubmit = async (data) => {
        console.log("Form Submitted Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        reset();
    };

    return {register, handleSubmit: handleSubmit(onSubmit), errors, isSubmitting};
};

export {useFormLogic};