import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "../validation/validationSchema";
import {useEffect, useState} from "react";

const useFormLogic = () => {
    const [isDirty, setIsDirty] = useState(false);

    const {
        register,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        watch,
        formState: {errors, isSubmitting, dirtyFields},
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });

    const onSubmit = async (data) => {
        console.log("Form Submitted Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        reset();
        setIsDirty(false);
    };

    useEffect(() => {
        setIsDirty(Object.keys(dirtyFields).length > 0);
    }, [dirtyFields]);

    return {register, handleSubmit: handleSubmit(onSubmit), errors, isSubmitting, isDirty, reset};
};

export {useFormLogic};