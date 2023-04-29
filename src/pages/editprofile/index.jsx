import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

import ChangePasswordForm from "@/components/editProfile/ChangePasswordForm";
import CircleImg from "@/components/editProfile/CircleImg";
import EditprofileButton from "@/components/editProfile/EditProfileButton";
import EditProfileForm from "@/components/editProfile/EditProfileForm";
import Interests from "@/components/editProfile/Interests";
import PetIcons from "@/components/editProfile/PetIcons";
import SaveButton from "@/components/editProfile/SaveButton";
import { RoundedImage } from "@/components/mini";

import { useAuthContext } from "@/context/AuthContext";
import app from "@/firebase/firebase.config";

async function handleUploadImage({ target: { files } }, { uid, updateUser }) {
    const image = files[0];
    const storage = getStorage(app);
    const extension = image.name.split(".")[1];

    const userProfilePictureRef = ref(
        storage,
        `users/profiles_pictures/${uid}.${extension}`
    );

    const uploadedImage = await uploadBytes(userProfilePictureRef, image);
    const imageURL = await getDownloadURL(uploadedImage.ref);

    updateUser({
        photoURL: imageURL,
    });
}

function UserImage() {
    const { user } = useAuthContext();
    return !user?.photoURL ? (
        <CircleImg letter={user?.displayName[0]} />
    ) : (
        <RoundedImage
            src={user.photoURL}
            alt='User Profile Picture'
            height={256}
            width={256}
            className='max-w-[8rem] max-h-32 lg:max-w-none lg:max-h-none'
        />
    );
}

const EditProfile = () => {
    const { t } = useTranslation("editprofile");
    const { user, updateUser } = useAuthContext();

    const [imgLoading, setimgLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className='flex flex-col md:px-14 px-4 lg:px-48  flex-wrap mt-8'>
            <div className='flex justify-start lg:py-3'>
                <h3 className='font-semibold !font-sans mb-8 tracking-tight text-gray-800 text-4xl order-first'>
                    {t("editProfile")}
                </h3>
            </div>
            <div className='flex flex-col gap-y-5 lg:flex-row items-center justify-between flex-wrap'>
                <UserImage />
                <input
                    hidden
                    type='file'
                    id='uploadImage'
                    name='image'
                    accept='image/*'
                    onChange={async (e) => {
                        setimgLoading(true);
                        await handleUploadImage(e, {
                            uid: user.uid,
                            updateUser,
                        });
                        setimgLoading(false);
                    }}
                />
                <SaveButton
                    text={t("uploadNew")}
                    className='lg:!ml-16 !tracking-widest'
                    htmlFor='uploadImage'
                    loading={imgLoading}
                />
                <EditprofileButton
                    text={t("chooseFromLibrary")}
                    className='lg:!w-96'
                    onClick={() => setModalOpen(!modalOpen)}
                />
                <PetIcons hidden={!modalOpen} t={t} />
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
                "interests",
            ])),
            // Will be passed to the page component as props
        },
    };
}
