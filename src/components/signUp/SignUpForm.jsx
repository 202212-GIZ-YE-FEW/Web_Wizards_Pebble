import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import FormFooter from "@/components/shared/FormFooter";
import InputForm from "@/components/shared/InputForm";
import SignButton from "@/components/shared/SignButton";
import SignOptions from "@/components/shared/SignOptions";
import SignTitle from "@/components/shared/SignTitle";

import { useAuthContext } from "@/context/AuthContext";
// TODO: use dynamic path once testing doesnt conflicts paths.
import { signUp } from "@/firebase/auth";

import AuthErrorBox from "../shared/AuthErrorBox";

const SignUpForm = ({ t }) => {
    const router = useRouter();
    const { user } = useAuthContext();

    const [errors, setErrors] = useState([]);
    useEffect(() => {
        if (user && user.emailVerified) router.push("/");
    }, [user, router]);
    const [loading, setLoading] = useState(false);
    /**
     *
     * @param {import('react').SyntheticEvent} e
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user && user.emailVerified) return;
        const formData = new FormData(e.target);
        const firstName = formData.get("name");
        const lastName = formData.get("surname");
        const email = formData.get("email");
        const password = formData.get("password");
        try {
            setLoading(true);
            await signUp(email, password, {
                displayName: `${firstName} ${lastName}`,
            });
        } catch (error) {
            setLoading(false);
            setErrors(error.code || "auth/unknown");
            return;
        }
        setLoading(false);
        router.push("/");
    };
    return (
        <>
            <div className='w-full lg:w-3/5 flex-grow-1 relative px-4 lg:px-8 order-1'>
                <div className='mx-auto lg:max-w-lg md:max-w-3xl py-4 lg:py-8 flex flex-col'>
                    <SignTitle text={t("signUp")} />
                    <SignOptions t={t} />
                    {errors.length > 0 && (
                        <AuthErrorBox t={t} errors={errors} />
                    )}
                    <form className='-mx-3 order-3' onSubmit={handleSubmit}>
                        <div className='sm:flex flex-row hidden'>
                            <InputForm
                                autoFocus
                                placeholder={t("name")}
                                label={t("name")}
                                name='name'
                                type='text'
                                hasFloatingLabel
                                isRequired
                                id='name'
                            />
                            <InputForm
                                placeholder={t("surname")}
                                label={t("surname")}
                                name='surname'
                                type='text'
                                hasFloatingLabel
                                isRequired
                                id='surname'
                            />
                        </div>
                        <InputForm
                            placeholder={t("email")}
                            label={t("email")}
                            name='email'
                            type='email'
                            hasFloatingLabel
                            isRequired
                            id='email'
                        />
                        <InputForm
                            placeholder={t("password")}
                            label={t("password")}
                            name='password'
                            type='password'
                            hasFloatingLabel
                            togglePasswordLabel='Show/Hide password'
                            togglePassword='true'
                            isRequired
                            id='password'
                            passwordCriteria={t("passwordCriteria")}
                        />
                        <FormFooter
                            message={t("haveAccount")}
                            linkHref='/signin'
                            linkText={t("signIn")}
                            t={t}
                        />
                        <SignButton text={t("signUp")} loading={loading} />
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUpForm;
