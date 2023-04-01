import Image from "next/image";

import logo from "~/logo.svg";

export default function Logo(props) {
    const { className } = props;
    return (
        <Image
            src={logo}
            alt='PebbleWork Logo'
            priority
            className={`h-[32.32px] w-p[100.75px] md:h-[69.13px] md:w-[215.44px] ${className}`}
        />
    );
}
