import FormFooter from "../FormFooter";
import InputForm from "../InputForm";
import SignButton from "../SignButton";
import SignOptions from "../SignOptions";
import SignTitle from "../SignTitle";

const SignUpForm = ({ t }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
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
                                name='Name'
                                type='text'
                                hasFloatingLabel
                            />
                            <InputForm
                                placeholder={t("surname")}
                                label={t("surname")}
                                name='Surname'
                                type='text'
                                hasFloatingLabel
                            />
                        </div>
                        <InputForm
                            placeholder={t("email")}
                            label={t("email")}
                            name='email'
                            type='email'
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
