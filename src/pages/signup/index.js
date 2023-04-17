import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import SignUpForm from "@/components/signUp/SignUpForm";
import SittingImg from "@/components/SittingImg";

const SingUp = () => {
    const { t } = useTranslation("signup");

    return (
        <div className='flex flex-col lg:flex-row'>
            <SittingImg />
            <SignUpForm t={t} />
        </div>
    );
};

export default SingUp;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "signup"])),
            // Will be passed to the page component as props
        },
    };
}
