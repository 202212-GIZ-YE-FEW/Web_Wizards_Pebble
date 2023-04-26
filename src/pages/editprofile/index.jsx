import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ChangePasswordForm from "@/components/editProfile/ChangePasswordForm";
import CircleImg from "@/components/editProfile/CircleImg";
import EditprofileButton from "@/components/editProfile/EditProfileButton";
import EditProfileForm from "@/components/editProfile/EditProfileForm";
import Interests from "@/components/editProfile/Interests";
import SaveButton from "@/components/editProfile/SaveButton";

const EditProfile = () => {
    const { t } = useTranslation("editprofile");

    return (
        <div className='flex flex-col md:px-14 px-4 lg:px-48  flex-wrap mt-8'>
            <div className='flex justify-start lg:py-3'>
                <h3 className='font-semibold mb-8 tracking-tight text-gray-800 text-4xl order-first'>
                    {t("editProfile")}
                </h3>
            </div>
            <div className='flex flex-col gap-y-5 lg:flex-row items-center justify-between flex-wrap'>
                <CircleImg />

                <SaveButton
                    text={t("uploadNew")}
                    className='lg:!ml-16 !tracking-widest'
                />

                <EditprofileButton
                    text={t("chooseFromLibrary")}
                    className='lg:!w-96'
                />
            </div>
            <EditProfileForm t={t} />
            <Interests t={t} />
            <div className='flex flex-row justify-end py-8'>
                <SaveButton text={t("saveChanges")} />
            </div>
            <ChangePasswordForm t={t} />
        </div>
    );
};

export default EditProfile;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "editprofile",
            ])),
            // Will be passed to the page component as props
        },
    };
}
