import { useForm, type FieldValues } from "react-hook-form";
import { useState } from "react";

export interface FormContactData {
    name: string;
    email: string;
    message: string;
    preferredContact: "email" | "whatsapp";
}

export interface UseFormContactReturn {
    register: any;
    handleSubmit: (onSubmit: (data: FormContactData) => Promise<void>) => (e: React.FormEvent) => Promise<void>;
    formState: any;
    reset: () => void;
    isSubmitting: boolean;
    submitSuccess: boolean;
    submitError: string | null;
    setSubmitSuccess: (value: boolean) => void;
    setSubmitError: (value: string | null) => void;
}

export default function useFormContact(): UseFormContactReturn {
    const { register, handleSubmit: rhfHandleSubmit, formState, reset } = useForm<FormContactData>({
        defaultValues: {
            name: "",
            email: "",
            message: "",
            preferredContact: "email"
        },
        mode: "onBlur"
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = (onSubmit: (data: FormContactData) => Promise<void>) => {
        return rhfHandleSubmit(async (data: FieldValues) => {
            setIsSubmitting(true);
            setSubmitError(null);
            setSubmitSuccess(false);

            try {
                await onSubmit(data as FormContactData);
                setSubmitSuccess(true);
                reset();

                // Limpiar mensaje de éxito después de 5 segundos
                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 5000);
            } catch (error: any) {
                setSubmitError(error.message || "Ocurrió un error al enviar el mensaje");

                // Limpiar mensaje de error después de 5 segundos
                setTimeout(() => {
                    setSubmitError(null);
                }, 5000);
            } finally {
                setIsSubmitting(false);
            }
        });
    };

    return {
        register,
        handleSubmit,
        formState,
        reset,
        isSubmitting,
        submitSuccess,
        submitError,
        setSubmitSuccess,
        setSubmitError
    };
}