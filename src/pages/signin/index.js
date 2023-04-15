import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import SignInForm from "@/components/signIn/SignInForm";
import SittingImg from "@/components/SittingImg";

const SignIn = () => {
    const { t } = useTranslation("signin");

    return (
        <div className='flex flex-col lg:flex-row'>
            <SittingImg />
            <SignInForm t={t} />
        </div>
    );
};
export default SignIn;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "signin"])),
            // Will be passed to the page component as props
        },
    };
}
