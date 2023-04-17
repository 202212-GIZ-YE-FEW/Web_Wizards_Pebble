import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LocationSelectors from "../../components/LocationSelector/LocationSelector";
import EventCreation from "../../components/LocationSelector/EventCreation";

const LocationSelectorPage = () => {
    const locationT = useTranslation("locationSelector").t;

    return (
        <div>
            <LocationSelectors t={locationT} />
            <EventCreation t={locationT} />
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
                "EventCreation",
            ])),
            // Will be passed to the page component as props
        },
    };
}
