import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LocationSelectors from "../../components/LocationSelector/LocationSelector";
const LocationSelectorPage = () => {
    const { t } = useTranslation("locationSelector");

    return (
        <div>
            <LocationSelectors t={t} />
        </div>
    );
};

export default LocationSelectorPage;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "landing",
                "locationSelector",
            ])),
            // Will be passed to the page component as props
        },
    };
}
