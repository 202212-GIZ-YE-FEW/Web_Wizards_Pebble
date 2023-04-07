import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Sitting from "~/Sitting.png";

const SittingImg = () => {
    const locale = useRouter().locale;

    useEffect(() => {
        if (locale === "en") {
            document
                .querySelector("#sitting-img")
                .classList.add("scale-x-[-1]");
        } else {
            document
                .querySelector("#sitting-img")
                .classList.remove("scale-x-[-1]");
        }
    }, [locale]);
    return (
        <div className='  mx-auto w-1/2 max-w-xl pl-16 py-2 lg:py-14 order-1 lg:order-2'>
            <Image
                id='sitting-img'
                src={Sitting}
                alt='Sitting or a rock'
                className=' mx-auto  mt-16'
            />
        </div>
    );
};

export default SittingImg;
