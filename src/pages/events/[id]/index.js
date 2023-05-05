import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Attendees from "@/components/event/Attendees";
import EventDescription from "@/components/event/EventDescription";
import EventDetails from "@/components/event/EventDetails";
import EventImage from "@/components/event/EventImage";
import JoinButton from "@/components/event/JoinButton";

import { useAuthContext } from "@/context/AuthContext";
import useFirestore from "@/firebase/firestore";

const Event = () => {
    const router = useRouter();
    const { id } = router.query;

    const eventsHook = useFirestore("events");
    const event = eventsHook.getDocumentById(id);
    console.log("event", event);
    // const eventData = {
    //     title: "Meeting Brainstorm Energy CIeccan lzmir",
    //     location: "Izmir, Turkey",
    //     date: "ahhallsei 26 Augest Kapisi",
    //     organizer: "Sufyan",
    //     attendees: ["Sufyan", "Adeeb", "Abdullah", "Azzam", "Hamad"],
    //     description:
    //         "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",
    // };
    const { user } = useAuthContext();
    return (
        <div className='lg:px-28 px-12 '>
            <div className=' lg:text-3xl text-2xl font-sans font-semibold text-black-100 tracking-wide'>
                <h2>{event?.title}</h2>
            </div>

            <div className='flex lg:flex-row flex-col'>
                <EventImage imageUrl={event?.image} />
                <div className='order-2 flex flex-col justify-start lg:items-start lg:px-16 lg:py-16 py-8'>
                    <EventDetails eventData={event} />
                    <JoinButton eventId={event?.id} />
                </div>
            </div>
            <div className='flex lg:flex-row flex-col lg:py-16 '>
                <EventDescription eventData={event} />
                <Attendees eventData={event} />
            </div>
        </div>
    );
};
export async function getStaticPaths() {
    return { paths: [], fallback: true };
}

export default Event;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "event"])),
            // Will be passed to the page component as props
        },
    };
}
