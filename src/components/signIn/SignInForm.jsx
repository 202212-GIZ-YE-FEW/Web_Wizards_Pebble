import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import FormFooter from "@/components/shared/FormFooter";
import InputForm from "@/components/shared/InputForm";
import SignButton from "@/components/shared/SignButton";
import SignOptions from "@/components/shared/SignOptions";
import SignTitle from "@/components/shared/SignTitle";

import { useAlertContext } from "@/context/AlertContext";
import { useAuthContext } from "@/context/AuthContext";
import { sendPasswordResetEmail, signIn } from "@/firebase/auth";

import AuthErrorBox from "../shared/AuthErrorBox";

const SignInForm = ({ t }) => {
    const router = useRouter();

    const { user } = useAuthContext();
    useEffect(() => {
        if (user && user.emailVerified) router.push("/");
    }, [user, router]);
    const { setShow, setTheme, setMessage } = useAlertContext();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user && user.emailVerified) return;
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        if (!password) {
            const emailSent = await sendPasswordResetEmail(email);
            if (!emailSent) {
                setTheme("warning");
                setMessage("Email not sent. Please try again.");
            } else {
                setTheme("success");
                setMessage(
                    "Password reset email sent. Please check your email."
                );
            }
            return;
        }
        setLoading(true);
        try {
            await signIn(email, password);
        } catch (error) {
            setLoading(false);
            setTheme("warning");
            setMessage("Invalid email or password. Please try again.");
            return;
        }
        setLoading(false);
        router.push("/");
    };

    return (
        <>
            <div className='w-full lg:w-3/5 flex-grow-1 relative px-4 lg:px-8 max order-1 '>
                <div className='mx-auto lg:max-w-lg md:max-w-3xl py-4 lg:py-8 flex flex-col'>
                    <SignTitle text={t("signIn")} />
                    <SignOptions t={t} />
                    {errors.length > 0 && (
                        <AuthErrorBox t={t} errors={errors} />
                    )}
                    <form className='-mx-3 order-3' onSubmit={handleSubmit}>
                        <InputForm
                            autoFocus
                            placeholder={t("email")}
                            label={t("email")}
                            name='email'
                            type='email'
                            isRequired
                            hasFloatingLabel
                        />
                        <InputForm
                            placeholder={t("password")}
                            label={t("password")}
                            name='password'
                            id='password'
                            type='password'
                            hasFloatingLabel
                            togglePasswordLabel='Show/Hide password'
                            togglePassword='true'
                        />
                        <FormFooter
                            t={t}
                            message={t("haveAccount")}
                            linkHref='/signup'
                            linkText={t("signUp")}
                        />
                        <SignButton text={t("signIn")} loading={loading} />
                    </form>
                </div>
            </div>
        </>
    );
};
export default SignInForm;
