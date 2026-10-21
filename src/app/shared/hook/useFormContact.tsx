import { useForm, type UseFormReturn, type FieldValues } from "react-hook-form";
import { useState } from "react";

export interface FormContactData {
    name: string;
    email: string;
    message: string;
    preferredContact: "email" | "whatsapp";
}

export interface UseFormContactReturn {
    register: UseFormReturn<FormContactData>["register"];
    handleSubmit: (onSubmit: (data: FormContactData) => Promise<void>) => (e: React.FormEvent) => Promise<void>;
    formState: UseFormReturn<FormContactData>["formState"];
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

                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 5000);
            } catch (error: unknown) {
                const message = error instanceof Error ? error.message : "Ocurrió un error al enviar el mensaje";
                setSubmitError(message);

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
