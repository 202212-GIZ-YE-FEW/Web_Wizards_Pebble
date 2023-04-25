import { useState } from "react";
import { Button } from "react-flatifycss";
const SingleInterest = ({ text, onInterestClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        onInterestClick(text);
    };

    return (
        <div className='w-[33%] flex justify-center lg:py-3 lg:px-3 md:py-2 md:px-2 py-1 px-1 '>
            <Button
                className={` w-full lg:h-18 h-16 px-1 transition ${
                    isClicked ? "!bg-primary-100" : "bg-white"
                } !border-2 !rounded-lg !shadow-[2px_2px_#1A1A1A]`}
                onClick={handleClick}
            >
                <div className='relative flex items-center justify-center '>
                    <p className='block w-max font-semibold text-gray-900 text-xs py-1 '>
                        {text}
                    </p>
                </div>
            </Button>
        </div>
    );
};

export default SingleInterest;
