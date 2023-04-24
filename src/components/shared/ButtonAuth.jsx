import Image from "next/image";
import { Button } from "react-flatifycss";

const ButtonAuth = ({ icon, alt, width, height, text, onClick }) => {
    const styles = {
        backgroundColor: "white",
        border: "2px solid black",
        borderRadius: "0.5rem",
        boxShadow: "2px 2px #1a1a1a",
    };
    return (
        <>
            <Button
                onClick={onClick}
                style={styles}
                className='w-full h-14 px-6 transition'
            >
                <div className='relative flex h-full items-center space-x-4 justify-center'>
                    <Image src={icon} alt={alt} width={width} height={height} />
                    <span className='block w-max font-medium tracking-wide text-gray-900 sm:text-base'>
                        {text}
                    </span>
                </div>
            </Button>
        </>
    );
};

export default ButtonAuth;
