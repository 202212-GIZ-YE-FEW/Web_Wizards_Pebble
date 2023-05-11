import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

import ChangePasswordForm from "@/components/editProfile/ChangePasswordForm";
import CircleImg from "@/components/editProfile/CircleImg";
import EditprofileButton from "@/components/editProfile/EditProfileButton";
import EditProfileForm from "@/components/editProfile/EditProfileForm";
import Interests from "@/components/editProfile/Interests";
import PetIcons from "@/components/editProfile/PetIcons";
import SaveButton from "@/components/editProfile/SaveButton";
import { RoundedImage } from "@/components/mini";

import { useAlertContext } from "@/context/AlertContext";
import { useAuthContext } from "@/context/AuthContext";
import app from "@/firebase/firebase.config";
import useFirestore from "@/firebase/firestore";

/**
 * @param {import('react').SyntheticEvent} e
 */
async function handleEditProfileSubmit(data, user, firebase, setAlert) {
    const { e, clickedInterests: selectedInterests } = data;
    const { locations, interests } = firebase;
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const location = formData.get("location");
    if (name) {
        await user.updateUser({
            displayName: name,
        });
    }
    if (location) {
        locations.setLocation(user.uid, { location });
    }
    interests.setInterests(user.uid, { selectedInterests });
    setAlert({
        theme: "success",
        message: "Changes saved.",
    });
}

async function handleUploadImage(
    { target: { files } },
    { uid, updateUser },
    setAlert
) {
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
    setAlert({
        theme: "success",
        message: "Profile picture updated.",
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
    const router = useRouter();
    const { user, loading, updateUser } = useAuthContext();
    const [clickedInterests, setClickedInterests] = useState([]);

    useEffect(() => {
        if (!loading && !user) {
            router.push("/");
        }
        if (user?.uid)
            getInterests(user.uid).then((document) => {
                if (document.exists()) {
                    const { selectedInterests } = document.data();
                    setClickedInterests(selectedInterests);
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.uid]);

    const { t } = useTranslation("editprofile");
    const { setTheme, setMessage } = useAlertContext();
    const [imgLoading, setimgLoading] = useState(false);
    const [formLoading, setformLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const { setDocument: setLocation, getDocumentById: getLocation } =
        useFirestore("locations");
    const { setDocument: setInterests, getDocumentByIdNoCache: getInterests } =
        useFirestore("interests");
    const location = getLocation(user?.uid);

    const setAlert = ({ theme, message }) => {
        setTheme(theme);
        setMessage(message);
    };

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
                        await handleUploadImage(
                            e,
                            {
                                uid: user.uid,
                                updateUser,
                            },
                            setAlert
                        );
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
            <form
                id='editProfileForm'
                onSubmit={async (e) => {
                    setformLoading(true);
                    await handleEditProfileSubmit(
                        { e, clickedInterests },
                        {
                            updateUser,
                            uid: user.uid,
                        },
                        {
                            locations: {
                                setLocation,
                            },
                            interests: {
                                setInterests,
                            },
                        },
                        setAlert
                    );
                    setTimeout(() => {
                        setformLoading(false);
                    }, 1000);
                }}
            >
                <EditProfileForm
                    t={t}
                    name={user?.displayName}
                    location={location?.location}
                />
                <Interests
                    clickedInterests={clickedInterests}
                    setClickedInterests={setClickedInterests}
                />
                <div className='flex flex-row justify-end py-8'>
                    <input
                        id='submitFormData'
                        type='submit'
                        name='submit'
                        hidden
                    />
                    <SaveButton
                        text={t("saveChanges")}
                        htmlFor='submitFormData'
                        loading={formLoading}
                    />
                </div>
            </form>
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
