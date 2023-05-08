import Image from "next/image";

import Wave from "~/event/Wave.png";

const EventsImages = ({ eventImg, title }) => {
    return (
        <div className='border-2 rounded-lg overflow-hidden h-28 w-48 lg:h-40 lg:w-64 sm:h-36 sm:w-58'>
            <Image
                className='object-fill h-28 w-48 lg:h-40 lg:w-64 sm:h-36 sm:w-58'
                src={eventImg ? eventImg : Wave}
                alt={title}
                width={720}
                height={572}
            />
        </div>
    );
};

export default EventsImages;
