import Image from "next/image";

import Sitting from "~/Sitting.png";

const SittingImg = () => {
    return (
        <div className='  mx-auto w-1/2 max-w-xl pl-16 lg:py-32 order-1'>
            <Image
                src={Sitting}
                alt='Sitting or a rock'
                className=' mx-auto  mt-16'
            />
        </div>
    );
};

export default SittingImg;
