import Image from "next/image";
import { Button } from "react-flatifycss";

import "flatifycss/dist/css/flatify-min.css";
import styles from "./ButtonAuth.module.css";

const ButtonAuth = (props) => {
    const { icon, alt, width, height } = props
    return (
        <>
            <Button
                className={`w-full h-14 px-6 transition ${styles.ButtonAuth}`}
            >
                <div className='relative flex items-center space-x-4 justify-center'>
                    <Image
                        src={icon}
                        alt={alt}
                        width={width}
                        height={height}
                    />
                    <span className='block w-max font-medium tracking-wide text-gray-900 sm:text-base'>
                        {props.text}
                    </span>
                </div>
            </Button>
        </>
    );
};

export default ButtonAuth;
