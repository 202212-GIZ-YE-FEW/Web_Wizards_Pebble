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
        <div className='px-0 xs:px-12 flex xs:flex-col sm:flex-col lg:flex-wrap md:flex-wrap'>
            <SingleDetail
                text={eventData?.location + " ,Yemen"}
                icon={<MdLocationPin size={30} />}
            />
            {/* <SingleDetail
                text={eventData?.address}
                icon={<MdLocationPin size={30} />}
            /> */}

            <EventDate
                eventDate={eventData?.date}
                icon={
                    <AiFillClockCircle size={30} className='text-black-100' />
                }
            />
            <div className='flex -space-x-3 overflow-hidden mt-4'>
                <EventAttendees attendees={eventData?.attendees} t={t} />
            </div>
            <SingleDetail
                text={`Organized by ${eventData?.organizer}`}
                icon={
                    <div className='h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs'>
                        <span>{eventData?.organizer?.charAt(0)}</span>
                    </div>
                }
            />
        </div>
    );
};

export default EventDetails;
