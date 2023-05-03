import EditprofileButton from "@/components/editProfile/EditProfileButton";
import SaveButton from "@/components/editProfile/SaveButton";
import SecondaryTitle from "@/components/editProfile/SecondaryTitle";
import InputForm from "@/components/shared/InputForm";
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

            <div className='flex flex-row justify-end'>
                <SaveButton text={t("submit")} />
                <EditprofileButton
                    text={t("cancel")}
                    className='!w-36 !m-0 !ml-2'
                />
            </div>
        </div>
    );
};

export default ChangePasswordForm;
