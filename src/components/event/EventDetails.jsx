import { AiFillClockCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

import SingleDetail from "./SingleDetail.jsx";

const EventDetails = (props) => {
    const eventData = props?.eventData;
    return (
        <div className='px-0 xs:px-12 flex xs:flex-col sm:flex-col lg:flex-wrap md:flex-wrap'>
            <SingleDetail
                text={eventData?.location + " ,Yemen"}
                icon={<MdLocationPin size={30} />}
            />
            <SingleDetail
                text={eventData?.address}
                icon={<MdLocationPin size={30} />}
            />

            <SingleDetail
                text={eventData?.date}
                icon={<AiFillClockCircle size={30} />}
            />
            <div className='flex -space-x-3 overflow-hidden'>
                {eventData?.attendees?.slice(0, 3).map((attende, index) => (
                    <div
                        key={index}
                        className=' h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs'
                    >
                        <span>{attende?.charAt(0)}</span>
                    </div>
                ))}
                <div className='px-2'>
                    <SingleDetail text='+12 Attendees' />
                </div>
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
