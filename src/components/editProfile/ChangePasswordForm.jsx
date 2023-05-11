import { useState } from "react";

import EditprofileButton from "@/components/editProfile/EditProfileButton";
import SaveButton from "@/components/editProfile/SaveButton";
import SecondaryTitle from "@/components/editProfile/SecondaryTitle";
import InputForm from "@/components/shared/InputForm";

import { useAlertContext } from "@/context/AlertContext";
import { changePassword, confirmCurrentPassword } from "@/firebase/auth";

async function handlePasswordChange(
    e,
    { setMessage, setTheme },
    { success, fail }
) {
    const form = e.target;
    const formData = new FormData(form);
    const currentPassword = formData.get("currentPassword");
    const newPassword = formData.get("newPassword");
    const currentPasswordConfirmed = await confirmCurrentPassword(
        currentPassword
    );

    if (!currentPasswordConfirmed) {
        setTheme("warning");
        setMessage(fail);
    } else {
        setTheme("success-light");
        setMessage(success);
        changePassword(newPassword);
    }
}

const ChangePasswordForm = ({ t }) => {
    const { setMessage, setTheme } = useAlertContext();
    const [passwordLoading, setPasswordLoading] = useState(false);
    return (
        <div className='w-11/12 mx-auto rounded-3xl flex flex-col justify-center bg-[#d4f3fa] md:px-10 px-2 py-10'>
            <SecondaryTitle text={t("changePassword")} />
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    setPasswordLoading(true);
                    await handlePasswordChange(
                        e,
                        {
                            setTheme,
                            setMessage,
                        },
                        {
                            sucess: t("successChanges"),
                            fail: t("incorrectPassword"),
                        }
                    );
                    setTimeout(() => {
                        setPasswordLoading(false);
                    }, 1000);
                    e.target.reset();
                }}
            >
                <div className='flex flex-row py-6'>
                    <InputForm
                        placeholder={t("currentPassword")}
                        label={t("currentPassword")}
                        name='currentPassword'
                        type='password'
                        hasFloatingLabel
                        togglePasswordLabel='Show/Hide password'
                        togglePassword='true'
                    />
                    <InputForm
                        placeholder={t("newPassword")}
                        label={t("newPassword")}
                        name='newPassword'
                        type='password'
                        hasFloatingLabel
                        togglePasswordLabel='Show/Hide password'
                        togglePassword='true'
                    />
                </div>
                <div className='flex flex-row justify-end'>
                    <input type='submit' id='changePasswordSubmit' hidden />
                    <SaveButton
                        text={t("submit")}
                        htmlFor='changePasswordSubmit'
                        loading={passwordLoading}
                    />
                    <EditprofileButton
                        text={t("cancel")}
                        className='!w-36 !m-0 !ml-2'
                    />
                </div>
            </form>
        </div>
    );
};

export default ChangePasswordForm;
