import Image from "next/image";

import logo from "~/logo.svg";

export default function Logo() {
    return (
        <Image
            src={logo}
            alt='PebbleWork Logo'
            priority
            height={69.13}
            width={215.44}
            className='max-h-[32.32px] max-w-[100.75px] md:max-h-full md:max-w-full'
        />
    );
}
