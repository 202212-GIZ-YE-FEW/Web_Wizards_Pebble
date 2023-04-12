import Image from "next/image";

import Wave from "~/event/Wave.png";

const EventImage = () => {
    return (
        <div className='order-1 w-full lg:w-1/2 flex-shrink-0'>
            <Image
                id='sitting-img'
                src={Wave}
                width={720}
                height={572}
                alt='Sitting or a rock'
                className=' mx-auto  mt-16'
            />
        </div>
    );
};

export default EventImage;
