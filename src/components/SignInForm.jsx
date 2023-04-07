import FormFooter from "./FormFooter";
import InputForm from "./InputForm";
import SignButton from "./SignButton";
import SignOptions from "./SignOptions";
import SignTitle from "./SignTitle";

const SignInForm = ({ t }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className='w-full lg:w-3/5 flex-grow-1 relative px-4 lg:px-8 max order-1 '>
                <div className='mx-auto lg:max-w-lg md:max-w-3xl py-4 lg:py-8 flex flex-col'>
                    <SignTitle text={t("signIn")} />
                    <SignOptions t={t} />
                    <form className='-mx-3 order-3' onSubmit={handleSubmit}>
                        <InputForm
                            placeholder={t("email")}
                            label={t("email")}
                            name='Email'
                            type='Email'
                            hasFloatingLabel
                        />
                        <InputForm
                            placeholder={t("password")}
                            label={t("password")}
                            name='Password'
                            type='password'
                            hasFloatingLabel
                            togglePasswordLabel='Show/Hide password'
                            togglePassword='true'
                        />
                        <FormFooter
                            message={t("haveAccount")}
                            linkHref='/signup'
                            linkText={t("signUp")}
                        />
                        <SignButton text={t("signIn")} />
                    </form>
                </div>
            </div>
        </>
    );
};
export default SignInForm;
