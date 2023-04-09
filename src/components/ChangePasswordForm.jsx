import EditprofileButton from "./EditProfileButton";
import InputForm from "./InputForm";
import SaveButton from "./SaveButton";
import SecondaryTitle from "./SecondaryTitle";
const ChangePasswordForm = ({ t }) => {
    return (
        <div className='w-11/12 mx-auto rounded-3xl flex flex-col justify-center bg-[#d4f3fa] md:px-10 px-2 py-10'>
            <SecondaryTitle text={t("changePassword")} />
            <div className='flex flex-row py-6'>
                <InputForm
                    placeholder={t("newPassword")}
                    label={t("newPassword")}
                    name='New Password'
                    type='Password'
                    hasFloatingLabel
                    togglePasswordLabel='Show/Hide password'
                    togglePassword='true'
                />
                <InputForm
                    placeholder={t("confirmPassword")}
                    label={t("confirmPassword")}
                    name='Confirm Password'
                    type='Password'
                    hasFloatingLabel
                    togglePasswordLabel='Show/Hide password'
                    togglePassword='true'
                />
            </div>

            <div className='flex flex-row '>
                <EditprofileButton text={t("cancel")} />
                <SaveButton text={t("submit")} />
            </div>
        </div>
    );
};

export default ChangePasswordForm;
