import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import EventDetails from "@/components/event/EventDetails";
import EventImage from "@/components/event/EventImage";
import JoinButton from "@/components/event/JoinButton";

const Event = () => {
    const eventData = {
        title: "Meeting Brainstorm Energy CIeccan lzmir",
        location: "Izmir, Turkey",
        date: "ahhallsei 26 Augest Kapisi",
        organizer: "Sufyan",
        attendees: ["Sufyan", "Adeeb", "Abdullah", "Azzam", "Hamad"],
    };
    return (
        <div className='lg:px-28 px-12'>
            <div className=' lg:text-3xl text-2xl font-semibold tracking-wide'>
                <h2>{eventData.title}</h2>
            </div>

            <div className='flex lg:flex-row flex-col'>
                <EventImage />
                <div className='order-2 flex flex-col justify-start lg:items-start lg:px-16 lg:py-16 py-8'>
                    <EventDetails eventData={eventData} />
                    <JoinButton />
                </div>
            </div>
        </div>
    );
};

export default Event;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "event"])),
            // Will be passed to the page component as props
        },
    };
}
