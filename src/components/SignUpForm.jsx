import { useRouter } from "next/navigation";

import { useAuthContext } from "@/context/AuthContext";

import FormFooter from "./FormFooter";
import InputForm from "./InputForm";
import SignButton from "./SignButton";
import SignOptions from "./SignOptions";
import SignTitle from "./SignTitle";
// TODO: use dynamic path once testing doesnt conflicts paths.
import { signUp } from "../../lib/useAuth";

const SignUpForm = ({ t }) => {
    const router = useRouter();
    const { user } = useAuthContext();
    /**
     *
     * @param {import('react').SyntheticEvent} e
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) return;
        const formData = new FormData(e.target);
        const firstName = formData.get("name");
        const lastName = formData.get("surname");
        const email = formData.get("email");
        const password = formData.get("password");
        try {
            await signUp(email, password, { firstName, lastName });
            router.push("/");
        } catch (error) {
            alert(error);
        }
    };
    return (
        <>
            <div className='w-full lg:w-3/5 flex-grow-1 relative px-4 lg:px-8 order-1'>
                <div className='mx-auto lg:max-w-lg md:max-w-3xl py-4 lg:py-8 flex flex-col'>
                    <SignTitle text={t("signUp")} />
                    <SignOptions t={t} />
                    <form className='-mx-3 order-3' onSubmit={handleSubmit}>
                        <div className='sm:flex flex-row hidden'>
                            <InputForm
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
                        />
                        <SignButton text={t("signUp")} />
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUpForm;
