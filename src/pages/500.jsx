import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ServerErrorPage() {
    return <p className='text-center my-80 text-6xl'>500</p>;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props.
        },
    };
}
