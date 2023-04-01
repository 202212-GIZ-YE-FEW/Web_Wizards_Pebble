import Image from "next/image";

import logo from "~/logo.svg";

export default function Logo() {
    return (
        <Image
            src={logo}
            alt='PebbleWork Logo'
            priority
            className='h-[32.32px] w-p[100.75px] md:h-[69.13px] md:w-[215.44px] mr-1 flex-1 md:flex-none'
        />
    );
}
