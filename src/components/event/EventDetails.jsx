import { useTranslation } from "react-i18next";
import { AiFillClockCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

import SingleDetail from "./SingleDetail.jsx";
import EventAttendees from "../events/EventCard/EventAttendees.jsx";
import EventDate from "../events/EventCard/EventDate.jsx";

const EventDetails = (props) => {
    const { t } = useTranslation();

    const eventData = props?.eventData;
    return (
        <div className=' xs:px-12 flex xs:flex-col sm:flex-col '>
            <SingleDetail
                text={`${eventData?.address}, ${eventData?.location}`}
                icon={<MdLocationPin size={30} />}
            />
            <EventDate
                eventDate={eventData?.date}
                icon={
                    <AiFillClockCircle size={30} className='text-black-100' />
                }
            />
            <div className='flex -space-x-3 overflow-hidden mt-4 py-2'>
                <EventAttendees attendees={eventData?.attendees} t={t} />
            </div>
            <SingleDetail
                text={`Organized by ${eventData?.organizer}`}
                icon={
                    <div className='py-2'>
                        <span className='py-2 inline-block flex items-center justify-center !no-underline !text-white h-8 w-8 rounded-full ring-2 ring-white bg-black-100'>
                            {eventData?.organizer?.charAt(0)}
                        </span>
                    </div>
                }
            />
        </div>
    );
};

export default EventDetails;
